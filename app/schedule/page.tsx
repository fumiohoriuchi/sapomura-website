import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '現在の日程 - サポ村.com',
  description: 'サポーター村を作る会の現在のツアー日程をご紹介します。',
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-samurai-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">現在の日程</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-samurai-blue to-samurai-light text-white p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">
                FIFAワールドカップ 2026
              </h2>
              <div className="space-y-2 text-lg">
                <p>📍 開催地: アメリカ・カナダ・メキシコ</p>
                <p>📅 開催期間: 2026年6月〜7月 (詳細日程は後日発表)</p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                予定されているスケジュール
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <span className="bg-samurai-blue text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                      準備中
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      日本代表の試合日程
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    日本代表の具体的な試合日程は、大会組織委員会からの正式発表後に更新いたします。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <span className="bg-samurai-blue text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                      計画中
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      ツアー詳細
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    試合日程確定後、以下の内容を含むツアープランを策定します:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-samurai-blue mr-2">•</span>
                      <span>宿泊先の確保</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-samurai-blue mr-2">•</span>
                      <span>移動手段の手配</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-samurai-blue mr-2">•</span>
                      <span>チケット取得サポート</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-samurai-blue mr-2">•</span>
                      <span>現地集合場所の設定</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                重要なマイルストーン
              </h2>
              
              <div className="relative border-l-4 border-samurai-blue pl-8 space-y-8">
                <div>
                  <div className="absolute -left-3 w-6 h-6 bg-samurai-blue rounded-full"></div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      2026年1月
                    </h3>
                    <p className="text-gray-700">ウェブサイト開設・会員登録開始</p>
                  </div>
                </div>

                <div>
                  <div className="absolute -left-3 w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      2026年春〜
                    </h3>
                    <p className="text-gray-700">日本代表試合日程発表後、ツアー詳細確定</p>
                  </div>
                </div>

                <div>
                  <div className="absolute -left-3 w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      2026年6月〜7月
                    </h3>
                    <p className="text-gray-700">FIFAワールドカップ 2026 開催</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                📢 最新情報をお見逃しなく
              </h3>
              <p className="text-yellow-700">
                日程の詳細や追加情報は、会員の皆様に優先的にお知らせいたします。
                会員登録がまだの方は、ぜひご登録ください。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
