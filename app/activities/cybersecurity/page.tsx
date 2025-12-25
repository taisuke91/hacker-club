import { Shield, Lock, Eye, Brain, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBackground } from "@/components/code-background"
import { Header } from "@/components/header"

export default function CybersecurityPage() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden">
      <CodeBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/activities">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground font-mono">
              <ArrowLeft className="mr-2 h-4 w-4" />
              活動一覧に戻る
            </Button>
          </Link>
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-lg bg-primary/5">
              <span className="text-primary font-mono text-base">{">"} Activities</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">サイバーセキュリティ</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              サイバーセキュリティ、情報戦、認知戦の最前線で活躍するための知識とスキルを習得
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>活動概要
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  現代の情報化社会において、サイバーセキュリティは国家レベルから個人レベルまで、あらゆる場面で重要性を増しています。
                  私たちの同好会では、技術的なセキュリティ対策から、情報戦・認知戦といった戦略的な側面まで、
                  幅広い知識とスキルを身につけることができます。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  定期的な勉強会では、最新の脅威動向、防御技術、攻撃手法の分析など、実践的なテーマを扱います。
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">サイバーセキュリティ</h3>
                  <ul className="text-muted-foreground text-base space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>脆弱性診断と対策</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>マルウェア解析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>ネットワークセキュリティ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>暗号技術</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">情報戦</h3>
                  <ul className="text-muted-foreground text-base space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>OSINT（公開情報収集）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>脅威インテリジェンス</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>サイバー攻撃の分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>デジタルフォレンジック</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">認知戦</h3>
                  <ul className="text-muted-foreground text-base space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>偽情報の検出と対策</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>ソーシャルエンジニアリング</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>影響力工作の分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-base mt-1">▸</span>
                      <span>メディアリテラシー</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>勉強会の内容
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">定期勉強会</h3>
                    <p>
                      月に2回程度、最新のサイバーセキュリティトピックスについて議論し、
                      実際にハンズオン形式で技術を学びます。初心者から上級者まで、レベルに応じた内容を用意しています。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">外部講師招聘</h3>
                    <p>
                      現役のセキュリティエンジニアや研究者を招き、実務での経験や最新の研究動向について学ぶ機会を設けています。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">自主研究プロジェクト</h3>
                    <p>
                      興味のあるテーマについて、メンバー同士でチームを組んで深く研究することができます。
                      研究成果は学内外で発表する機会もあります。
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
