import { Shield, Trophy, Code2, ArrowLeft, Mail, MessageSquare } from "lucide-react"
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

          <Card className="bg-card/30 border-primary/30 backdrop-blur-sm mt-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">
                  <span className="text-primary font-mono">// </span>お問い合わせ
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                活動に興味がある方、質問がある方は、お気軽にご連絡ください。見学も随時受け付けています。
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <a
                    href="https://forms.gle/bUrTwYd9zCcD7LESA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-[calc(50%-0.5rem)] flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-mono"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Slackに参加する
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg font-mono">
                    <Mail className="h-5 w-5" />
                    contact@todai-hacker.club
                  </div>
                  <a
                    href="https://twitter.com/todai_hacker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-mono"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @todai_hacker
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

