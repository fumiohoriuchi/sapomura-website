import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getNewsList } from '@/lib/microcms'

export default async function Home() {
  // microCMSからニュースを取得
  const newsData = await getNewsList(5).catch(() => ({ contents: [] }))
  const newsList = newsData.contents

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden" style={{ backgroundImage: "url('/hero_collage.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.32)' }} />

          <div className="relative container mx-auto px-6 py-28 md:py-36 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              一人ひとりの応援を<br />
              日本代表に届ける
            </h1>
            <p className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
               style={{ color: 'rgba(255,255,255,0.88)', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
              サポーターが作る、サポーターのための、<br />サポーターによるコミュニティー
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md">
                会員登録 →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Representative Message Section ── */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">Message</p>
                <h2 className="text-3xl font-bold text-gray-900">代表メッセージ</h2>
              </div>
              <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
                <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                  <p>私たちは、サッカー日本代表を応援するために発足した、サポーターによるサポーターのための団体、サポーター村をつくる会、通称「サポ村」です。</p>
                  <p>
                    何度も国際大会やアウェイの地に足を運んだベテランの知恵も、<br />
                    初めての海外に行く方の勇気も、<br />
                    家族で安心して楽しむ最高の笑顔も、<br />
                    みんなの力が、日本を勝利へ導くための力になります。
                  </p>
                  <p>世代も職業も超え、互いの「安心・安全」を支え合い、一人ひとりの「応援」を全力でサポートします。</p>
                  <p>世界のスタジアムで、サッカー日本代表の選手たちの背中を現地で後押しし、みんなで世界一の座を勝ち取りましょう。</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-0.5">サポーター村をつくる会（サポ村）</p>
                  <p className="font-bold text-gray-900">代表　堀内 文雄</p>
                </div>
              </div>
            </div>
          </div>
        {/* メッセージ写真 */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-md">
    <Image
      src="/message_photo1.jpg"
      alt="サポーター集合写真"
      width={800}
      height={600}
      className="w-full h-64 object-cover"
    />
  </div>
  <div className="rounded-2xl overflow-hidden shadow-md">
    <Image
      src="/message_photo2.jpg"
      alt="スタジアムでの応援"
      width={600}
      height={800}
      className="w-full h-64 object-cover"
    />
  </div>
</div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-4">Join Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              サッカー日本代表を、一緒に応援しよう！
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto">
              世界のスタジアムにも、応援を届けよう！
            </p>
            <Link href="/register" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-colors shadow-lg">
              会員登録はこちら
            </Link>
          </div>
        </section>


        {/* ── News Section（microCMSから取得） ── */}
{/*        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">News</p>
              <h2 className="text-3xl font-bold text-gray-900">最新情報</h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {newsList.length > 0 ? (
                newsList.map((news) => (
                  <Link
                    key={news.id}
                    href={`/news/${news.id}`}
                    className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors block"
                  >
                    <div className="text-sm text-gray-400 whitespace-nowrap pt-0.5">
                      {new Date(news.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{news.title}</h3>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100">
                  <div className="text-sm text-gray-400 whitespace-nowrap pt-0.5">2026.04.11</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ウェブサイトオープン</h3>
                    <p className="text-gray-500 text-sm">サポーター村を作る会の公式ウェブサイトがオープンしました。</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
*/}
      </main>

      <Footer />
    </div>
  )
}
