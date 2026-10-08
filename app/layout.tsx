import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Learn from AI",
  description: "This will help you to learn from a AI assistant and get your performance better and get your dream job",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider dynamic>

    <html
      lang="en" suppressHydrationWarning
      className={`${inter.className}`}
    >
      <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           {/* header */}
           < Header/>
           <main className="min-h-screen"> {children}</main>
           {/* footer */}
           <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4  text-center text-gray-200">
              <p> Made with Love by ayush</p>
            </div>
           </footer>
          </ThemeProvider>
        </body>
    </html>
      </ClerkProvider>
  );
}
