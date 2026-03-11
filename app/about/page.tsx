import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'サポ村について - サポ村.com',
  description: 'サポーター村を作る会の活動内容や理念についてご紹介します。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-samurai-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">サポ村について</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-samurai-blue">
                サポーター村を作る会とは
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                サッカー日本代表サポーターのことを「サポーター」と呼んでいます。
                サポーター村を作る会は、「サポーターが作るサポーターのためのサポーターによるツアー」を実現する組織です。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                サポーターによる「安全安心で安くて楽しい」ツアーを目指して、日本代表を全力で応援することを主目的として、
                北中米W杯2026での旅程をサポートします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-samurai-blue">
                私たちの活動
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                    格安ツアーの実現
                  </h3>
                  <p className="text-gray-700">
                    大手旅行会社と同等内容のツアーを格安で実現します。参加者を早期に確定し、
                    条件の良い宿泊先を確保することで、料金を抑えた状態を作り出します。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                    チケット取得の全面サポート
                  </h3>
                  <p className="text-gray-700">
                    参加希望者の日本戦チケット取得には、あらゆる方法を使って協力します。
                    FIFA公式チケットサイトから、現地でのチケット入手まで、サポートいたします。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                    安全安心な旅程管理
                  </h3>
                  <p className="text-gray-700">
                    確保時に料金を支払うことで安価な状態を維持しながら、
                    安全で安心できる宿泊先と移動手段を確保します。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-samurai-blue">
                    全力応援
                  </h3>
                  <p className="text-gray-700">
                    日本代表を全力で応援することが私たちの最大の目的です。
                    一緒に最高の応援をしましょう!
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-samurai-blue">
                対象大会
              </h2>
              <div className="bg-gradient-to-r from-samurai-blue to-samurai-light text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">
                  FIFAワールドカップ 2026
                </h3>
                <p className="text-lg">
                  開催地: アメリカ・カナダ・メキシコ<br />
                  開催期間: 2026年6月〜7月
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-samurai-blue">
                理念
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-xl text-gray-800 font-medium text-center leading-relaxed">
                  サポーターの、サポーターによる、<br />
                  サポーターのためのツアー
                </p>
                <p className="text-gray-700 mt-6 text-center">
                  私たちは、利益を追求するのではなく、<br />
                  サポーター同士が助け合い、支え合いながら、<br />
                  最高の応援体験を作ることを目指しています。
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
