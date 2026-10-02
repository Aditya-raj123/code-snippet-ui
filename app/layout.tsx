import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-providers";

export const metadata: Metadata = {
    title: "CodeSnippetUI",
    description: "A collection of beautiful UI components and code snippets",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        <div className="flex-1">
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}