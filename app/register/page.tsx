import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '会員登録 - サポ村.com',
  description: 'サポーター村をつくる会の会員登録フォームです。',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-samurai-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">会員登録</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-samurai-blue p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-samurai-blue mb-2">
                会員登録について
              </h2>
              <p className="text-gray-700">
                サポーター村をつくる会の会員になると、イベント等に関するお知らせをお届けします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">

	　　　<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvZZrJYC7T7JHXhQXqyPjSjyLuPi2iu7_mp2o5t8mlwBwJkA/viewform?embedded=true" 
		width="100%" height="2200" frameBorder="0" marginHeight="0" marginWidth="0">読み込んでいます…</iframe>
            </div>

            <div className="mt-8 text-center text-gray-600 text-sm">
              <p>
                ご登録いただいた個人情報は、サポーター村をつくる会の活動目的以外には使用いたしません。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
