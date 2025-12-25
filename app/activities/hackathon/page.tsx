import { Code2, Lightbulb, Rocket, Award, ArrowLeft, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBackground } from "@/components/code-background"
import { Header } from "@/components/header"

export default function HackathonPage() {
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
              <span className="text-primary font-mono text-sm">{">"} Activities</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code2 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">ハッカソン</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              短期集中で革新的なプロダクトを開発し、アイデアを形にする
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>ハッカソン活動
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ハッカソンは、短期間でアイデアを形にするイベントです。通常24〜48時間という限られた時間の中で、
                  チームを組んでプロダクトを開発し、プレゼンテーションを行います。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  私たちの同好会では、国内外の様々なハッカソンに積極的に参加しています。
                  企業主催のハッカソンから学生主体のイベントまで、多様な機会に挑戦することで、
                  実践的な開発スキルとチームワーク、プレゼンテーション能力を養います。
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">アイデア創出</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    社会課題の解決やユーザーニーズに応えるアイデアを、チームでブレインストーミング。
                    創造性を最大限に発揮します。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">高速開発</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    限られた時間の中で、MVPを完成させる。 最新の技術スタックを活用し、効率的に開発を進めます。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">プレゼン</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    審査員や参加者の前でプロダクトを発表。 技術力だけでなく、伝える力も磨きます。
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>参加実績
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">企業主催ハッカソン</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Google、Microsoft、LINEなど大手IT企業が主催するハッカソンに参加。
                      企業の最新技術に触れ、実務に近い開発を経験できます。
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">学生向けハッカソン</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      JPHACKSや技育展など、学生が主役のハッカソンに積極的に参加。 他大学の学生との交流も深めています。
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">国際ハッカソン</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      海外で開催されるハッカソンにもオンライン・オフラインで参加。
                      グローバルな視点を養い、英語でのコミュニケーション能力も向上させます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>使用技術
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ハッカソンでは、アイデアを素早く形にするため、最新の開発ツールやフレームワークを活用します。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "React / Next.js",
                    "Python / Flask",
                    "Node.js / Express",
                    "Firebase",
                    "AWS / GCP",
                    "Docker",
                    "OpenAI API",
                    "Stripe",
                    "Figma",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-primary/5 border border-primary/20 rounded text-sm text-foreground font-mono text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>過去の受賞歴
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded">
                    <Trophy className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">JPHACKS 2024 最優秀賞</p>
                      <p className="text-sm">AI活用の新しいコミュニケーションツールを開発</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded">
                    <Trophy className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">技育展 2023 企業賞</p>
                      <p className="text-sm">ブロックチェーン技術を活用したプラットフォーム</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded">
                    <Trophy className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Google Cloud Hackathon 入賞</p>
                      <p className="text-sm">クラウドネイティブなWebアプリケーション</p>
                    </div>
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
