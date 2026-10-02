"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    id: string;
    question: string;
    answer: string | React.ReactNode;
    category: FAQCategory;
}

type FAQCategory = "getting-started" | "billing" | "features" | "support";

const CATEGORIES: Record<
    FAQCategory,
    { label: string; color: string }
> = {
    "getting-started": {
        label: "Getting Started",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    billing: {
        label: "Billing",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    features: {
        label: "Features",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    support: {
        label: "Support",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
};

const FAQ_ITEMS: FAQItemProps[] = [
    {
        id: "getting-started-1",
        category: "getting-started",
        question: "How do I get started with the platform?",
        answer:
            "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
    },
    {
        id: "billing-1",
        category: "billing",
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
    {
        id: "features-1",
        category: "features",
        question: "What are the key features?",
        answer:
            "Our platform includes real-time analytics, team collaboration tools, automated workflows, and customizable dashboards.",
    },
    {
        id: "support-1",
        category: "support",
        question: "How can I get help?",
        answer:
            "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
    },
];

function CategoryBadge({ category }: { category: FAQCategory }) {
    return (
        <Badge
            variant="secondary"
            className={cn("mr-2 font-normal", CATEGORIES[category].color)}
        >
            {CATEGORIES[category].label}
        </Badge>
    );
}

function FAQItem({
    id,
    question,
    answer,
    category,
}: FAQItemProps) {
    return (
        <AccordionItem
            value={id}
            className="rounded-lg border border-gray-200 bg-white px-4 shadow-xs dark:border-gray-700 dark:bg-gray-800/50"
        >
            <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex flex-col items-start gap-2 text-left">
                    <CategoryBadge category={category} />

                    <span className="text-lg font-medium text-gray-900 transition-colors hover:text-primary dark:text-white">
                        {question}
                    </span>
                </div>
            </AccordionTrigger>

            <AccordionContent className="max-w-none pb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq01() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState<FAQCategory | "all">("all");

    const filteredFAQs = FAQ_ITEMS.filter((faq) => {
        const matchesSearch =
            faq.question
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            String(faq.answer)
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" ||
            faq.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section
            className="w-full bg-gray-50 py-16 dark:bg-black/5"
            aria-labelledby="faq-heading"
        >
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2
                        id="faq-heading"
                        className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        Frequently Asked Questions
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400">
                        Find answers to common questions about our platform
                    </p>
                </div>

                <div className="mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />

                        <Input
                            type="search"
                            placeholder="Search FAQs..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Badge
                            variant="secondary"
                            className={cn(
                                "cursor-pointer",
                                selectedCategory === "all"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-gray-100 text-gray-800"
                            )}
                            onClick={() => setSelectedCategory("all")}
                        >
                            All
                        </Badge>

                        {Object.entries(CATEGORIES).map(
                            ([key, { label, color }]) => (
                                <Badge
                                    key={key}
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer",
                                        selectedCategory === key
                                            ? color
                                            : "bg-gray-100 text-gray-800"
                                    )}
                                    onClick={() =>
                                        setSelectedCategory(
                                            key as FAQCategory
                                        )
                                    }
                                >
                                    {label}
                                </Badge>
                            )
                        )}
                    </div>
                </div>

                <Accordion className="space-y-4">
                    {filteredFAQs.map((faq) => (
                        <FAQItem key={faq.id} {...faq} />
                    ))}
                </Accordion>

                {filteredFAQs.length === 0 && (
                    <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                        No FAQs found matching your search criteria
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq01;
