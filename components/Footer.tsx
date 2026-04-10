import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">サポーター村をつくる会（サポ村）</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              私たちは、サッカー日本代表を応援するために発足した、<br />
              サポーターによるサポーターのための団体、<br />
              サポーター村をつくる会、通称「サポ村」です。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-400 uppercase tracking-widest">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white transition-colors">
                  会員登録
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} サポーター村をつくる会（サポ村）. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
