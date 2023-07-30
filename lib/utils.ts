import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { MessageSquare, ImageIcon, VideoIcon, Music, Code, ArrowRight } from "lucide-react"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tools = [
  {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10"
  },
  {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-700",
      bgColor: "bg-pink-700/10"
  },
  {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-700",
      bgColor: "bg-orange-700/10"
  },
  {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
  },
  {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      color: "text-green-700",
      bgColor: "bg-green-700/10"
  }
  ]

  export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
  }