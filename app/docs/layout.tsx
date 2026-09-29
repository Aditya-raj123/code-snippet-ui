import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { FumadocsProvider } from "@/components/fumadocs-provider";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template:
            "%s | codesnippetui - Free UI Components to build beautiful websites",
        default:
            "codesnippetui - Free UI Components to build beautiful websites",
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <FumadocsProvider>
            <DocsLayout
                tree={source.pageTree}
                {...baseOptions}
                sidebar={{
                    defaultOpenLevel: 1,
                }}
            >
                {children}
            </DocsLayout>
        </FumadocsProvider>
    );
}