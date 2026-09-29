"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const AVATARS = [
    {
        src: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
        nickname: "Sarah Chen",
    },
    {
        src: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
        nickname: "Michael Johnson",
    },
    {
        src: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png",
        nickname: "Emma Wilson",
    },
    {
        src: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
        nickname: "David Brown",
    },
];

export default function AIInput_12() {
    const [value, setValue] = useState("");

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 40,
        maxHeight: 200,
    });

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            setValue("");
            adjustHeight(true);
        }
    };

    const handleSend = () => {
        if (!value.trim()) return;

        setValue("");
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">
            <div className="flex flex-col">

                {/* Shared users */}
                <div className="flex items-center justify-between bg-white/50 px-2 backdrop-blur-xs dark:bg-transparent">

                    <div className="text-xs text-black/50 dark:text-white/50">
                        Shared with 4 people
                    </div>

                    <div className="inline-flex items-center justify-center">
                        <TooltipProvider delayDuration={0}>
                            {AVATARS.map((avatar, i) => (
                                <Tooltip key={i}>

                                    <TooltipTrigger
                                        className="relative h-8 w-8 cursor-pointer hover:z-10"
                                        style={{
                                            marginLeft:
                                                i > 0 ? "-8px" : "0",
                                        }}
                                    >
                                        <img
                                            src={avatar.src}
                                            alt={avatar.nickname}
                                            className="h-full w-full rounded-full border-[1.5px] border-white bg-white object-cover ring-2 ring-black/5 dark:border-none dark:bg-transparent dark:ring-0"
                                        />
                                    </TooltipTrigger>

                                    <TooltipContent className="dark:border-white/10 dark:bg-black/80 dark:text-white">
                                        <p>{avatar.nickname}</p>
                                    </TooltipContent>

                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </div>

                {/* Input */}
                <div className="rounded-xl bg-black/5 dark:bg-white/5">
                    <div className="relative px-2 py-2">

                        <Textarea
                            id="ai-input-12"
                            value={value}
                            ref={textareaRef}
                            placeholder="Type your message..."
                            className={cn(
                                "min-h-[40px] w-full resize-none rounded-xl border-none bg-transparent px-4",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "dark:text-white",
                                "placeholder:text-black/70 dark:placeholder:text-white/70"
                            )}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                        />

                        <button
                            type="button"
                            disabled={!value.trim()}
                            onClick={handleSend}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 p-1 dark:bg-white/5"
                        >
                            <ArrowRight
                                className={cn(
                                    "h-4 w-4 dark:text-white",
                                    value.trim()
                                        ? "opacity-100"
                                        : "opacity-30"
                                )}
                            />
                        </button>

                    </div>
                </div>

                {/* Writing indicator */}
                <div className="px-2 py-1 text-xs text-black/50 dark:text-white/50">
                    {AVATARS[0].nickname},{" "}
                    {AVATARS[2].nickname}
                    {value
                        ? ` and ${AVATARS[3].nickname}`
                        : ""}{" "}
                    are writing...
                </div>

            </div>
        </div>
    );
}