import { Terminal, Shield, Trophy, Code2, MapPin, Wallet, Mail, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBackground } from "@/components/code-background"
import Link from "next/link"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden">
      <CodeBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">ハッカーとして、</span>
            <br />
            <span className="text-primary">未来を創る</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            サイバーセキュリティ、情報戦、CTFに挑戦し、
            <br className="hidden md:block" />
            技術の最前線で活躍するエンジニアを目指す
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                <Terminal className="mr-2 h-5 w-5" />
                サークル情報
              </Button>
            </Link>
            <Link href="/activities">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 font-mono bg-transparent"
              >
                活動内容を見る
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="https://forms.gle/bUrTwYd9zCcD7LESA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-mono text-base"
            >
              <MessageSquare className="h-4 w-4" />
              Discordに参加する(入会する)
            </a>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            <span className="text-primary font-mono">// </span>活動内容
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/activities/cybersecurity">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-card-foreground">サイバーセキュリティ</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    サイバーセキュリティ、情報戦、認知戦についての最新技術を学ぶ定期勉強会を開催
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/ctf">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-card-foreground">CTF大会</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Capture The Flagの勉強会と大会出場を通じて、実践的なハッキングスキルを習得
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/activities/hackathon">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-card-foreground">ハッカソン</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    国内外のハッカソンに積極的に参加し、チームで革新的なプロダクトを開発
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            <span className="text-primary font-mono">// </span>サークル情報
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-card-foreground">活動費</h4>
                    <p className="text-2xl font-mono text-primary">¥0</p>
                    <p className="text-base text-muted-foreground mt-1">完全無料で参加可能</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-card-foreground">活動場所</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-mono text-base">▸</span>
                        学生会館
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-mono text-base">▸</span>
                        ビズリーチキャンパスカフェ
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="border border-primary/30 rounded-lg p-8 md:p-12 bg-card/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-center mb-6 text-foreground">
              <span className="text-primary font-mono">// </span>お問い合わせ
            </h3>
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              活動に興味がある方、質問がある方はお気軽にご連絡ください
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
                  Discordに参加する(入会する)
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-muted-foreground text-base font-mono">
            {"<>"} 東大Hacker研究会 | Tokyo University Hacker Club {"</>"}
          </p>
        </div>
      </footer>
    </div>
  )
}
