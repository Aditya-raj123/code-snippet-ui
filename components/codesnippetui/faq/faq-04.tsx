"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    category: string;
}

function CategoryButton({
    name,
    isActive,
    onClick,
}: {
    name: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "relative w-full rounded-lg px-4 py-2 text-left transition-all",
                "text-gray-600 dark:text-gray-400",
                "hover:bg-white dark:hover:bg-black/20",
                isActive && [
                    "bg-zinc-100 font-medium text-primary dark:bg-black/20",
                    "hover:bg-zinc-100 dark:hover:bg-black/20",
                    "before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-r-full before:bg-primary",
                ]
            )}
        >
            {name}
        </button>
    );
}

function Faq04() {
    const [activeCategory, setActiveCategory] =
        useState<string>("General");

    const faqs: FAQItemProps[] = [
        {
            category: "General",
            question: "How do I get started?",
            answer:
                "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
        },
        {
            category: "General",
            question: "What makes your service different?",
            answer:
                "Our platform combines ease of use with powerful features, backed by 24/7 support and regular updates based on user feedback.",
        },
        {
            category: "Billing",
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
        },
        {
            category: "Billing",
            question: "Can I change my plan later?",
            answer:
                "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
        },
        {
            category: "Features",
            question: "Is there a free trial available?",
            answer:
                "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
        },
        {
            category: "Support",
            question: "How can I contact support?",
            answer:
                "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
        },
    ];

    const categories = Array.from(
        new Set(faqs.map((faq) => faq.category))
    );

    const filteredFaqs = faqs.filter(
        (faq) => faq.category === activeCategory
    );

    return (
        <section className="w-full rounded-xl py-8">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        How can we help?
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400">
                        Find answers to frequently asked questions
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
                    <div className="h-fit rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800/60 dark:bg-black/5">
                        <h3 className="mb-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Categories
                        </h3>

                        <div className="space-y-1">
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category}
                                    name={category}
                                    isActive={
                                        category === activeCategory
                                    }
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800/60 dark:bg-black/5">
                        <Accordion className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`${index}`}
                                    className="rounded-lg border border-gray-100 px-4 dark:border-gray-800/60"
                                >
                                    <AccordionTrigger className="hover:no-underline">
                                        <span className="text-left font-medium text-gray-900 hover:text-primary dark:text-gray-200">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>

                                    <AccordionContent className="pt-2 text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq04;
