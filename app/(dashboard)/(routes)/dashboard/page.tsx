"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tool = [
  {
    lable: "Coversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },

  {
    lable: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },

  {
    lable: "Videos Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    lable: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },

  {
    lable: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

export default function DashBoard() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Explore Umoren powerful AI
        </h1>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the of umoren AI - Experience the of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tool.map((tools) => {
          return (
            <Card
              onClick={() => router.push(tools.href)}
              key={tools.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-full rounded-md", tools.bgColor)}>
                  <tools.icon className={cn("w-8 h-8", tools.icon)} />
                </div>
                <div className="font-semibold">{tools.lable}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
