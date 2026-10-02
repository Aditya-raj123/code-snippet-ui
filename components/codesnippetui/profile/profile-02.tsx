import { Mail, Link as LinkIcon, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Profile02Props {
    name?: string;
    role?: string;
    avatar?: string;
    location?: string;
    email?: string;
    website?: string;
    bio?: string;
}

const defaultProfile = {
    name: "Alex Thompson",
    role: "Product Designer",
    avatar:
        "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
    location: "San Francisco, CA",
    email: "hello@codesnippetui.com",
    website: "https://ui.codesnipet.dev/",
    bio: "Designing interfaces that bridge the gap between complexity and simplicity.",
} satisfies Required<Profile02Props>;

export default function Profile02({
    name = defaultProfile.name,
    role = defaultProfile.role,
    avatar = defaultProfile.avatar,
    location = defaultProfile.location,
    email = defaultProfile.email,
    website = defaultProfile.website,
    bio = defaultProfile.bio,
}: Partial<Profile02Props> = defaultProfile) {
    return (
        <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-start gap-5">
                    <Image
                        src={avatar}
                        alt={name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
                    />

                    <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                    {name}
                                </h2>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {role}
                                </p>
                            </div>

                            <a
                                href={`mailto:${email}`}
                                aria-label={`Email ${name}`}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-transparent text-sm font-medium shadow-xs transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <MapPin className="h-4 w-4" />
                                {location}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <Mail className="h-4 w-4" />

                                <a
                                    href={`mailto:${email}`}
                                    className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                                >
                                    {email}
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <LinkIcon className="h-4 w-4" />

                                <a
                                    href={
                                        website.startsWith("http")
                                            ? website
                                            : `https://${website}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                                >
                                    {website}

                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
}
