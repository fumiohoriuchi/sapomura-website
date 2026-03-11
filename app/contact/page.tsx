import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'お問い合わせ - サポ村.com',
  description: 'サポーター村を作る会へのお問い合わせフォームです。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-samurai-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">お問い合わせ</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              サポーター村を作る会へのご質問・ご相談は、下記のフォームよりお気軽にお問い合わせください。
            </p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeUZIfjWiC0d06vuY5-rmbmkm-XCr_lVvNOB1RY8V76oa8Ayg/viewform?embedded=true" 
                width="100%" 
                height="1502" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
              >
                読み込んでいます…
              </iframe>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                よくあるご質問
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">Q.</span>
                  <span>会員登録は無料ですか? → はい、無料です。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">Q.</span>
                  <span>ツアーの料金はいつ決まりますか? → 日本代表の試合日程確定後にお知らせします。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-samurai-blue mr-2">Q.</span>
                  <span>チケットは確実に取れますか? → あらゆる方法でサポートしますが、確約はできません。</span>
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
