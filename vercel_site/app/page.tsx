export default function Home() {
  const embedUrl = "https://robbiesherre-ai-chat-demo.hf.space/";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Robbie Sherre - AI Chat Demo (Gradio UI)</h1>
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