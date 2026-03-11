import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-samurai-blue to-samurai-light text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              サポーター村を作る会
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              サポーターが作るサポーターのための<br className="md:hidden" />サポーターによるツアー
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-samurai-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                サポ村について
              </Link>
              <Link
                href="/register"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-samurai-blue transition-colors"
              >
                会員登録
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              サポ村の特徴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                  安全安心で安い
                </h3>
                <p className="text-gray-600">
                  大手旅行会社と同等内容のツアーを格安で実現。参加者を確定し、条件の良い宿泊先を確保します。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎫</div>
                <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                  チケット取得サポート
                </h3>
                <p className="text-gray-600">
                  参加希望者の日本戦チケット取得にはあらゆる方法を使って協力します。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                  全力で応援
                </h3>
                <p className="text-gray-600">
                  日本代表を全力で応援することを主目的として、北中米W杯での旅程をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-samurai-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              北中米W杯2026を一緒に応援しよう!
            </h2>
            <p className="text-xl mb-8">
              サポーターによる、サポーターのためのツアーで<br className="hidden md:block" />
              最高の思い出を作りませんか?
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-samurai-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              今すぐ会員登録
            </Link>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              最新情報
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-samurai-blue">
                <div className="text-sm text-gray-500 mb-2">2026年1月28日</div>
                <h3 className="text-xl font-bold mb-2">ウェブサイトオープン</h3>
                <p className="text-gray-700">
                  サポーター村を作る会の公式ウェブサイトがオープンしました。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
