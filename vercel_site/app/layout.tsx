import "./globals.css";

export const metadata = {
    title: "AI Chat Demo",
    description: "Gradio multi-model chat embedded from a Hugging Face Space",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
          {children}
        </body>
      </html>
    );
  }
  