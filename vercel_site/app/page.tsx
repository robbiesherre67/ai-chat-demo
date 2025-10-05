function cleanEmbed(url: string | undefined) {
  if (!url) return "";
  return url.replace(/^NEXT_PUBLIC_EMBED_URL\s*=\s*/i, "").trim();
}

export default function Home() {
  // Preferred: set NEXT_PUBLIC_EMBED_URL in Vercel to the exact embed URL from HF.
  const raw = process.env.NEXT_PUBLIC_EMBED_URL;

  // Known-good fallbacks (try A, then B):
  const fallbackA = "https://hf.space/robbiesherre/ai-chat-demo/+?__theme=light";
  const fallbackB = "https://hf.space/robbiesherre/ai-chat-demo/+";

  const cleaned = cleanEmbed(raw);
  const embedUrl = cleaned || fallbackA;

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
          // microphone/camera only needed if you use those inputs
          allow="clipboard-read; clipboard-write; microphone; camera"
        />
      </div>

      {/* If the first fallback 404s, swap to fallbackB and redeploy */}
      <div style={{marginTop: 10, fontSize: 12, opacity: 0.6}}>
        Using: {embedUrl}
      </div>
    </main>
  );
}
