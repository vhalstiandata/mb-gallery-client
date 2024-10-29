import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { Roboto } from "next/font/google";
import { theme } from "@/utils/styles/theme";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const palatino = localFont({
  src: [
    {
      path: "../utils/fonts/Palatino/pala.ttf",
      weight: "400",
    },
    {
      path: "../utils/fonts/Palatino/palab.ttf",
      weight: "600",
    },
  ],
  variable: "--font-palatino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${palatino.variable} font-sans`}>
        <AppRouterCacheProvider options={{ key: "css", prepend: true }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
