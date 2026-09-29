import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | CodeSnippet UI - Open Source Components",
    default: "CodeSnippet UI - Open Source Components",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
        {children}
      </main>

      <Footer />
    </>
  );
}