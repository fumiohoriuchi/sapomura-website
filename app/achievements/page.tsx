import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '過去の実績 - サポ村.com',
  description: 'サポーター村を作る会の過去のツアー実績をご紹介します。',
}

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-samurai-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">過去の実績</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              サポーター村を作る会のこれまでの活動実績をご紹介します。
            </p>

            <div className="space-y-8">
              {/* 実績はCMSから管理できるようになります */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-samurai-blue">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    準備中
                  </h2>
                  <span className="text-gray-500 text-sm">2026年</span>
                </div>
                <p className="text-gray-700">
                  現在、北中米W杯2026に向けて準備を進めています。
                  過去の実績については、随時更新してまいります。
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-samurai-blue">
                これからの目標
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">✓</span>
                  <span>北中米W杯2026での成功したツアー運営</span>
                </li>
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">✓</span>
                  <span>参加者全員の安全で楽しい旅の実現</span>
                </li>
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">✓</span>
                  <span>日本代表の全力応援</span>
                </li>
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">✓</span>
                  <span>サポーター同士の絆の強化</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
