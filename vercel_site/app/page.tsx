export default function Home() {
  // Prefer the ENV var if you set it in Vercel
  const fromEnv = process.env.NEXT_PUBLIC_EMBED_URL;

  // Known-good embed URL (copyable & works when space is public)
  const fallback = "https://hf.space/embed/robbiesherre/ai-chat-demo/+?__theme=light";

  // If env var is present, use it; otherwise use the known-good embed
  const embedUrl = (fromEnv && fromEnv.trim()) || fallback;

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
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #e5e7eb",
            borderRadius: 12
          }}
          allow="clipboard-read; clipboard-write; microphone; camera"
        />
      </div>

      <div style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>
        Using: {embedUrl}
      </div>
    </main>
  );
}
