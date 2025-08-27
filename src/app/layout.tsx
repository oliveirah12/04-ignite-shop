import { getCssText } from "@/src/styles/stitches.config";
import { globalStyles } from "../styles/global";

globalStyles()

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wdth,wght@0,75..100,100..900;1,75..100,100..900&display=swap"
          rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
