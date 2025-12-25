import { Shield, Trophy, Code2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBackground } from "@/components/code-background"
import { Header } from "@/components/header"

export default function ActivitiesPage() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden">
      <CodeBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground font-mono">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-lg bg-primary/5">
              <span className="text-primary font-mono text-sm">{">"} Activities</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">活動内容</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              東大Hacker研究会では、サイバーセキュリティ、CTF、ハッカソンを通じて実践的な技術を学びます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/activities/cybersecurity">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">サイバーセキュリティ</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    サイバーセキュリティ、情報戦、認知戦についての最新技術を学ぶ定期勉強会を開催
                  </p>
                  <div className="text-primary font-mono text-sm">
                    {">"} 詳しく見る
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/ctf">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">CTF大会</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Capture The Flagの勉強会と大会出場を通じて、実践的なハッキングスキルを習得
                  </p>
                  <div className="text-primary font-mono text-sm">
                    {">"} 詳しく見る
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/hackathon">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit">
                    <Code2 className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">ハッカソン</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    国内外のハッカソンに積極的に参加し、チームで革新的なプロダクトを開発
                  </p>
                  <div className="text-primary font-mono text-sm">
                    {">"} 詳しく見る
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

