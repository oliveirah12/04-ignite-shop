import { getCssText } from "@/src/styles/stitches.config";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/layout";
import { globalStyles } from "../styles/global";
import { HomeContainer } from "../styles/pages/home";

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/>
      </head>
      <body>
        
        <Container>
          <Header>
            <Image src={logoImg} alt="Logo" />
          </Header>
            {children}
        </Container>

      </body>
    </html>
  );
}
