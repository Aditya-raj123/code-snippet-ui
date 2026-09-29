import Input_10 from "@/components/codesnippetui/input/input-10";
import Alert04 from "@/components/codesnippetui/alert/alert-04";
import Input_08 from "@/components/codesnippetui/input/input-08";
import Btn12 from "@/components/codesnippetui/button/btn-12";
import Btn13 from "@/components/codesnippetui/button/btn-13";

interface ComponentShowcaseCardProps {
    title?: string;
    description?: string;
}

export default function ComponentShowcaseCard({
    title = "Component Showcase",
    description = "Beautiful and reusable components.",
}: ComponentShowcaseCardProps) {
    return (
        <div className="w-full">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 text-sm text-zinc-500">
                    {description}
                </p>
            </div>

            <div className="grid gap-6">
                <Input_10 />
                <Alert04 />
                <Input_08 />

                <div className="flex items-center justify-center gap-4">
                    <Btn12 label="Fancy Button" />
                    <Btn13 />
                </div>
            </div>
        </div>
    );
}