# 🔮 Multi-Model AI Chat Demo

This repo shows how to build a **Gradio chat UI** with multiple large language models and deploy it publicly.

- **Backend/UI:** Python + Gradio (Hugging Face Spaces)
- **Models:**
  - OpenAI `gpt-4o-mini`
  - Anthropic `claude-3.5-sonnet`
  - Google `gemini-1.5-pro`
- **Frontend Wrapper:** Next.js on Vercel

## 🚀 Quickstart

### 1) Deploy Gradio app to Hugging Face Spaces
- Import this GitHub repo into a new Space and set **Path/Subdirectory** = `gradio_app`.
- Add Space Secrets:
  - `OPENAI_API_KEY`
  - `ANTHROPIC_API_KEY`
  - `GOOGLE_API_KEY`
- Wait for the build and copy your Space URL (e.g. `https://huggingface.co/spaces/YOURNAME/ai-chat-demo`).

### 2) Deploy wrapper to Vercel
- Create a Vercel project from this repo but set **Root Directory** = `vercel_site`.
- Add Vercel env var:
  - `NEXT_PUBLIC_SPACE_URL=https://huggingface.co/spaces/YOURNAME/ai-chat-demo`
- Deploy → your Vercel URL will embed the Space.

## 📝 Customize
- Edit `gradio_app/app.py` to add/remove models or tweak params.
- Edit `vercel_site/app/page.tsx` to style the embed.

