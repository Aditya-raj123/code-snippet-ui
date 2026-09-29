"use client";

import { FrameworkProvider } from "fumadocs-core/framework";

import {
    useRouter,
    usePathname,
    useParams,
} from "next/navigation";

import type { ReactNode } from "react";

export function FumadocsProvider({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <FrameworkProvider
            useRouter={useRouter}
            useParams={useParams}
            usePathname={usePathname}
        >
            {children}
        </FrameworkProvider>
    );
}