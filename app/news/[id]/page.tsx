import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getNewsDetail, getNewsList } from '@/lib/microcms'
import { notFound } from 'next/navigation'

// 静的パスを事前生成（ISR / SSG 対応）
export async function generateStaticParams() {
  const data = await getNewsList(100).catch(() => ({ contents: [] }))
  return data.contents.map((news) => ({ id: news.id }))
}

type Props = {
  params: { id: string }
}

export default async function NewsDetailPage({ params }: Props) {
  const news = await getNewsDetail(params.id).catch(() => null)

  if (!news) return notFound()

  const formattedDate = new Date(news.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          {/* パンくず */}
          <nav className="text-sm text-gray-400 mb-8 flex gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">トップ</Link>
            <span>/</span>
            <Link href="/#news" className="hover:text-blue-600 transition-colors">最新情報</Link>
            <span>/</span>
            <span className="text-gray-600">{news.title}</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <time className="text-sm text-gray-400 block mb-3">{formattedDate}</time>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
              {news.title}
            </h1>

            {/* microCMS のリッチテキスト本文 */}
            <div
              className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.body }}
            />
          </article>

          {/* 戻るボタン */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              ← トップに戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
