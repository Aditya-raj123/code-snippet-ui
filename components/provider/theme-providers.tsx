"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes injects a small inline script to prevent
// theme flickering during the initial page load.
// React 19 + Next.js 16 reports this as a development warning.
// The script itself is expected and works correctly.
if (
    typeof window !== "undefined" &&
    process.env.NODE_ENV === "development"
) {
    const originalConsoleError = console.error;

    console.error = (...args: unknown[]) => {
        if (
            typeof args[0] === "string" &&
            args[0].includes("Encountered a script tag")
        ) {
            return;
        }

        originalConsoleError(...args);
    };
}

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    );
}

