export default function Home() {
  const embedUrl =
    process.env.NEXT_PUBLIC_EMBED_URL ||
    "https://robbiesherre-ai-chat-demo.hf.space"; // replace with your exact .hf.space URL

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>AI Chat Demo (Gradio)</h1>
      <p style={{ opacity: 0.7, marginBottom: 16 }}>
        Select a model from the dropdown and start chatting.
      </p>
      <div style={{ width: "100%", maxWidth: 1000, aspectRatio: "16/10" }}>
        <iframe
          src={embedUrl}
          title="AI Chat Demo"
          style={{ width: "100%", height: "100%", border: "1px solid #e5e7eb", borderRadius: 12 }}
          allow="clipboard-read; clipboard-write; microphone; camera"
        />
      </div>
    </main>
  );
}
