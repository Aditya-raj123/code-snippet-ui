"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { ArrowUpCircle, Paperclip, Globe } from "lucide-react";
import { FaFigma } from "react-icons/fa";

export default function AIInput_17() {
    const [value, setValue] = useState("");

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 80,
        maxHeight: 200,
    });

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            if (value.trim()) {
                setValue("");
                adjustHeight(true);
            }
        }
    };

    const handleSend = () => {
        if (!value.trim()) return;

        setValue("");
        adjustHeight(true);
    };

    return (
        <div className="min-w-full p-4">
            <div className="relative">

                <div className="relative flex flex-col rounded-xl border border-black/10 dark:border-white/10">

                    {/* Textarea */}
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            className={cn(
                                "min-h-[80px] w-full px-4 py-3",
                                "resize-none",
                                "border-none bg-transparent",
                                "focus:outline-hidden",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-black/50 dark:placeholder:text-white/50",
                                "align-top leading-normal"
                            )}
                            style={{
                                overflow: "hidden",
                                outline: "none",
                            }}
                        />
                    </div>

                    {/* Bottom toolbar */}
                    <div className="h-14">
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">

                            {/* Left buttons */}
                            <div className="flex items-center gap-2">

                                {/* Attachment */}
                                <button
                                    type="button"
                                    className="rounded-lg border border-black/10 p-2 text-black/50 transition-colors hover:border-black/20 hover:text-black dark:border-white/10 dark:text-white/50 dark:hover:border-white/20 dark:hover:text-white"
                                >
                                    <Paperclip className="h-4 w-4" />
                                </button>

                                {/* Globe */}
                                <button
                                    type="button"
                                    className="rounded-lg border border-black/10 p-2 text-black/50 transition-colors hover:border-black/20 hover:text-black dark:border-white/10 dark:text-white/50 dark:hover:border-white/20 dark:hover:text-white"
                                >
                                    <Globe className="h-4 w-4 text-blue-500" />
                                </button>

                                {/* Figma */}
                                <button
                                    type="button"
                                    className="rounded-lg border border-black/10 p-2 text-black/50 transition-colors hover:border-black/20 hover:text-black dark:border-white/10 dark:text-white/50 dark:hover:border-white/20 dark:hover:text-white"
                                >
                                    <FaFigma className="h-4 w-4 text-pink-500" />
                                </button>

                            </div>

                            {/* Send button */}
                            <button
                                type="button"
                                disabled={!value.trim()}
                                onClick={handleSend}
                                className={cn(
                                    "p-2 transition-colors",
                                    value.trim()
                                        ? "text-blue-500 hover:text-blue-600"
                                        : "text-black/30 dark:text-white/30"
                                )}
                            >
                                <ArrowUpCircle className="h-6 w-6" />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}