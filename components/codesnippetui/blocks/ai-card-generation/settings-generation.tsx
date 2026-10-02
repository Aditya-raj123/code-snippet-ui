"use client";

import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Palette,
    Image,
    Sun,
    User,
    Monitor,
} from "lucide-react";

interface VideoSettings {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}

interface SettingsProps {
    settings: VideoSettings;
    onSettingsChange: (settings: VideoSettings) => void;
}

export const SettingsGeneration = ({
    settings,
    onSettingsChange,
}: SettingsProps) => {
    return (
        <div className="space-y-4 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
            {/* Style Select */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">Style</span>
                </div>

                <Select
                    value={settings.style}
                    onValueChange={(value) => {
                        if (value === null) return;

                        onSettingsChange({
                            ...settings,
                            style: value,
                        });
                    }}
                >
                    <SelectTrigger className="h-8 w-[140px] border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="professional">
                            Professional
                        </SelectItem>
                        <SelectItem value="artistic">
                            Artistic
                        </SelectItem>
                        <SelectItem value="casual">
                            Casual
                        </SelectItem>
                        <SelectItem value="vintage">
                            Vintage
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Background Select */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Image className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">
                        Background
                    </span>
                </div>

                <Select
                    value={settings.backgroundColor}
                    onValueChange={(value) => {
                        if (value === null) return;

                        onSettingsChange({
                            ...settings,
                            backgroundColor: value,
                        });
                    }}
                >
                    <SelectTrigger className="h-8 w-[140px] border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="studio">
                            Studio
                        </SelectItem>
                        <SelectItem value="gradient">
                            Gradient
                        </SelectItem>
                        <SelectItem value="solid">
                            Solid Color
                        </SelectItem>
                        <SelectItem value="transparent">
                            Transparent
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Lighting Select */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">
                        Lighting
                    </span>
                </div>

                <Select
                    value={settings.lighting}
                    onValueChange={(value) => {
                        if (value === null) return;

                        onSettingsChange({
                            ...settings,
                            lighting: value,
                        });
                    }}
                >
                    <SelectTrigger className="h-8 w-[140px] border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="soft">
                            Soft
                        </SelectItem>
                        <SelectItem value="dramatic">
                            Dramatic
                        </SelectItem>
                        <SelectItem value="natural">
                            Natural
                        </SelectItem>
                        <SelectItem value="studio">
                            Studio
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Pose Select */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">Pose</span>
                </div>

                <Select
                    value={settings.pose}
                    onValueChange={(value) => {
                        if (value === null) return;

                        onSettingsChange({
                            ...settings,
                            pose: value,
                        });
                    }}
                >
                    <SelectTrigger className="h-8 w-[140px] border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="headshot">
                            Headshot
                        </SelectItem>
                        <SelectItem value="half-body">
                            Half Body
                        </SelectItem>
                        <SelectItem value="full-body">
                            Full Body
                        </SelectItem>
                        <SelectItem value="profile">
                            Profile
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Quality */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-500">
                        Quality
                    </span>
                </div>

                <span className="text-sm text-zinc-900 dark:text-zinc-100">
                    720p
                </span>
            </div>
        </div>
    );
};