import { AuthProvider } from "@/context/authContext";
import { ChatbotProvider } from "@/context/chatbotContext";
import customTheme from "@/utils/flowbiteCustomTheme";
import { Flowbite } from "flowbite-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfitFont = localFont({
  src: "../../public/fonts/Outfit.ttf",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "OrderBridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} font-outfit antialiased`}>
        <AuthProvider>
          <ChatbotProvider>
            <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
          </ChatbotProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
