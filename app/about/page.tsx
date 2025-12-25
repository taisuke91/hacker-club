import { MapPin, Wallet, Calendar, Users, Mail, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBackground } from "@/components/code-background"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden">
      <CodeBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground font-mono">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-lg bg-primary/5">
              <span className="text-primary font-mono text-sm">{">"} About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">サークル情報</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              東大Hacker研究会について、詳しくご紹介します
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>東大Hacker研究会とは
                </h2>
                <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-lg font-mono text-sm">
                  <ul className="space-y-1 text-muted-foreground">
                    <li>団体名：東大Hacker研究会</li>
                    <li>設立：2025年12月</li>
                    <li>メールアドレス：contact@todai-hacker.club</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  東大Hacker研究会は、サイバーセキュリティとハッキング技術に興味を持つ東京大学の学生が集まる技術サークルです。
                  「ハッカー」という言葉には、高度な技術力を持ち、創造的に問題を解決する人という本来の意味があります。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  私たちは、サイバーセキュリティ、情報戦、認知戦の研究、CTF大会への参加、ハッカソンでのプロダクト開発を通じて、
                  技術の最前線で活躍できるエンジニアを目指しています。学年や専攻を問わず、技術に情熱を持つ仲間が集まっています。
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Wallet className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">活動費</h3>
                      <p className="text-3xl font-mono text-primary mb-2">¥0</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        入会費・年会費などは一切かかりません。完全無料で参加できます。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">活動場所</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <div>
                            <p className="font-semibold text-foreground">学生会館</p>
                            <p className="text-xs">定期勉強会・ミーティング</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <div>
                            <p className="font-semibold text-foreground">ビズリーチキャンパスカフェ</p>
                            <p className="text-xs">ハッカソン・集中開発</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">活動頻度</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>勉強会：週1〜2回</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>CTF：不定期（大会に応じて）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>ハッカソン：月1〜2回</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">メンバー構成</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>学部生・大学院生 約30名</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>理系・文系問わず</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-mono text-xs mt-1">▸</span>
                          <span>初心者から上級者まで</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  <span className="text-primary font-mono">// </span>活動理念
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">技術力の向上</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      最新の技術トレンドをキャッチアップし、実践的なスキルを習得します。
                      理論だけでなく、手を動かして学ぶことを重視しています。
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">倫理的なハッキング</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      セキュリティ技術は、社会を守るために使うべきものです。
                      私たちは常に倫理を重視し、建設的な目的のために技術を活用します。
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h3 className="font-semibold text-foreground mb-1">コミュニティ形成</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      同じ志を持つ仲間と切磋琢磨し、共に成長する環境を作ります。
                      学年や専攻の垣根を超えた交流を大切にしています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                  <span className="text-primary font-mono">// </span>入会について
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  東大Hacker研究会は、年間を通じて新規メンバーを募集しています。
                  プログラミング経験がなくても、学ぶ意欲があれば大歓迎です。
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">こんな人を歓迎します</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">✓</span>
                      <span>サイバーセキュリティに興味がある</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">✓</span>
                      <span>ハッキング技術を学びたい（倫理的な目的で）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">✓</span>
                      <span>CTFやハッカソンに挑戦したい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">✓</span>
                      <span>技術力を高めて、将来エンジニアとして活躍したい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono text-xs mt-1">✓</span>
                      <span>同じ志を持つ仲間と切磋琢磨したい</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-primary/30 backdrop-blur-sm">
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
    </div>
  )
}
