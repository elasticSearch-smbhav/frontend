import Header from "@/components/header";
import { CartProvider } from "@/context/cartProvider";
import customTheme from "@/utils/flowbiteCustomTheme";
import ToastContainerWrapper from "@/utils/toastContainerWrapper";
import { Flowbite } from "flowbite-react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Shop"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <CartProvider>
          <Flowbite theme={{ theme: customTheme }}>
            <>
              <Header />
              {children}
            </>
          </Flowbite>
        </CartProvider>
        <ToastContainerWrapper />
      </body>
    </html>
  );
}
