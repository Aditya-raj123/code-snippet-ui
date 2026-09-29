import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Btn12Props
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}

export default function Btn12({
    label = "Fancy Button",
    className,
    ...props
}: Btn12Props) {
    return (
        <Button
            type="button"
            variant="ghost"
            className={cn(
                "group relative h-12 w-1/2 overflow-hidden rounded-lg px-4 transition-all duration-500",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-[#654358] via-[#17092A] to-[#2F0D64] p-[2px]">
                <div className="absolute inset-0 rounded-lg bg-[#170928] opacity-90" />
            </div>

            <div className="absolute inset-[2px] rounded-lg bg-[#170928] opacity-95" />

            <div className="absolute inset-[2px] rounded-lg bg-linear-to-r from-[#170928] via-[#1d0d33] to-[#170928] opacity-90" />

            <div className="absolute inset-[2px] rounded-lg bg-linear-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 opacity-80" />

            <div className="absolute inset-[2px] rounded-lg bg-linear-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50" />

            <div className="absolute inset-[2px] rounded-lg shadow-[inset_0_0_15px_rgba(199,135,246,0.15)]" />

            <div className="relative flex items-center justify-center gap-2">
                <span className="bg-linear-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-lg font-light tracking-tighter text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)]">
                    {label}
                </span>
            </div>

            <div className="absolute inset-[2px] rounded-lg bg-linear-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Button>
    );
}