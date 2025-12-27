import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-sm bg-[oklch(0.18_0_0)]/80">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="東大Hacker同好会" width={32} height={32} className="h-8 w-8" />
            <h1 className="text-2xl font-mono font-bold text-primary">東大Hacker同好会</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/activities"
              className="text-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              活動内容
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-mono text-sm">
              サークル情報
            </Link>
            <a
              href="https://forms.gle/bUrTwYd9zCcD7LESA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-mono text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              Discordに参加
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
