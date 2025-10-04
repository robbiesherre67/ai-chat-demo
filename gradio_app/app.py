import os
import gradio as gr
from openai import OpenAI
import anthropic
import google.generativeai as genai

# ----- Models you expose -----
OPENAI_MODEL = "gpt-4o-mini"
ANTHROPIC_MODEL = "claude-3.5-sonnet"
GOOGLE_MODEL = "gemini-1.5-pro"

# ----- Clients from env vars (set in HF Space) -----
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

MODEL_CHOICES = [
    f"OpenAI {OPENAI_MODEL}",
    f"Anthropic {ANTHROPIC_MODEL}",
    f"Google {GOOGLE_MODEL}",
]

def chat_fn(message, history, model_choice):
    system_prompt = "You are a concise, helpful assistant."

    # For providers that want raw text, build a flat transcript
    convo_plain = ""
    for user_msg, assistant_msg in history:
        convo_plain += f"\nUser: {user_msg}\nAssistant: {assistant_msg}"
    convo_plain += f"\nUser: {message}\nAssistant:"

    try:
        if model_choice.startswith("OpenAI"):
            messages = [{"role": "system", "content": system_prompt}]
            for user_msg, assistant_msg in history:
                messages.append({"role": "user", "content": user_msg})
                messages.append({"role": "assistant", "content": assistant_msg})
            messages.append({"role": "user", "content": message})

            resp = openai_client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=messages,
                temperature=0.2
            )
            return resp.choices[0].message.content

        if model_choice.startswith("Anthropic"):
            resp = anthropic_client.messages.create(
                model=ANTHROPIC_MODEL,
                system=system_prompt,
                max_tokens=600,
                messages=[{"role": "user", "content": convo_plain}]
            )
            return "".join(
                getattr(block, "text", "") for block in resp.content
            ) or "No response."

        if model_choice.startswith("Google"):
            model = genai.GenerativeModel(GOOGLE_MODEL)
            resp = model.generate_content(system_prompt + "\n" + convo_plain)
            return getattr(resp, "text", "") or "No response."

        return "Unknown model."

    except Exception as e:
        return f"⚠️ Error calling {model_choice}: {e}"

with gr.Blocks(theme="soft") as demo:
    gr.Markdown("# 🔮 Multi-Model Chat Demo\nPick a model and ask anything.")
    model_dd = gr.Dropdown(choices=MODEL_CHOICES, value=MODEL_CHOICES[0], label="Model")

    chat = gr.ChatInterface(
        fn=chat_fn,
        additional_inputs=[model_dd],
        examples=[
            "Summarize: what is the difference between state and props in React?",
            "Give me 3 Vue 3 Composition API tips.",
            "Explain Redux Toolkit's createAsyncThunk in 5 lines."
        ],
    )

if __name__ == "__main__":
    demo.launch()
