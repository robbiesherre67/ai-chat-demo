export default function Home() {
    // Replace after you deploy the Space
    const spaceUrl =
      process.env.NEXT_PUBLIC_SPACE_URL ||
      "https://huggingface.co/spaces/YOURNAME/ai-chat-demo";
  
    // Use the embeddable URL
    const iframeSrc = spaceUrl.replace("huggingface.co/spaces", "hf.space/embed");
  
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>AI Chat Demo (Gradio)</h1>
        <p style={{ opacity: 0.7, marginBottom: 16 }}>
          Select a model from the dropdown and start chatting.
        </p>
        <div style={{ width: "100%", maxWidth: 1000, aspectRatio: "16/10" }}>
          <iframe
            src={iframeSrc}
            title="AI Chat Demo"
            style={{ width: "100%", height: "100%", border: "1px solid #e5e7eb", borderRadius: 12 }}
            allow="clipboard-read; clipboard-write; microphone; camera"
          />
        </div>
      </main>
    );
  }
  