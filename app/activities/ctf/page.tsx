import { Trophy, Flag, Target, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBackground } from "@/components/code-background"
import { Header } from "@/components/header"

export default function CTFPage() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden">
      <CodeBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary font-mono">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-lg bg-primary/5">
              <span className="text-primary font-mono text-sm">{">"} Activities</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">CTF大会</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Capture The Flagを通じて、実践的なハッキングスキルと問題解決能力を磨く
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>CTFとは
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CTF（Capture The Flag）は、情報セキュリティの技術を競うコンペティション形式の競技です。
                  暗号解読、Webアプリケーションの脆弱性発見、バイナリ解析、フォレンジックなど、
                  様々な分野の問題を解いてポイントを獲得し、順位を競います。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  私たちの研究会では、CTFの勉強会を定期的に開催し、国内外の大会に積極的に参加しています。
                  初心者向けの基礎的な問題から、上級者向けの高難易度問題まで、段階的にスキルアップできる環境を整えています。
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Flag className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">CTF勉強会</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Web問題（SQL Injection, XSS等）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Pwn（バイナリ解析・エクスプロイト）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Crypto（暗号解読）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Forensics（証拠解析）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Reverse Engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">参加大会</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>SECCON（国内最大級のCTF）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>picoCTF（初心者向け）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>DEF CON CTF（世界最高峰）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>Google CTF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">▸</span>
                      <span>その他国内外のオンラインCTF</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">
                    <span className="text-primary font-mono">// </span>チーム活動
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CTFは個人でも参加できますが、チームで協力することでより高い成果を上げることができます。
                    メンバーそれぞれの得意分野を活かし、協力して問題に取り組むことで、
                    個人では解けなかった難問も解決できることがあります。
                  </p>
                  <div className="border-l-2 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r">
                    <p className="font-semibold text-foreground mb-2">初心者も大歓迎</p>
                    <p>
                      CTFが初めての方でも安心してください。先輩メンバーが丁寧に教えますし、
                      初心者向けの問題から始めて、徐々にステップアップしていけます。
                      まずは簡単な問題を一緒に解いて、CTFの楽しさを体験しましょう。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>勉強会スケジュール
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-1">週1回</span>
                    <p className="leading-relaxed">
                      定期的なCTF勉強会を開催。過去問の解説や新しいテクニックの共有を行います。
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-1">大会前</span>
                    <p className="leading-relaxed">
                      主要な大会の前には集中的な対策会を実施。チームでの連携を高めます。
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-1">大会後</span>
                    <p className="leading-relaxed">
                      大会終了後はWrite-up会を開催。解けなかった問題の解法を学び、次に活かします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
