import Link from "next/link"
import { Terminal } from "lucide-react"

export function Header() {
  return (
    <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Terminal className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-mono font-bold text-primary">東大Hacker研究会</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/activities/cybersecurity"
              className="text-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              サイバーセキュリティ
            </Link>
            <Link
              href="/activities/ctf"
              className="text-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              CTF
            </Link>
            <Link
              href="/activities/hackathon"
              className="text-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              ハッカソン
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-mono text-sm">
              サークル情報
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
