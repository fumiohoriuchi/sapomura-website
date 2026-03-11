import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-samurai-blue text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">サポ村.com</h3>
            <p className="text-sm text-gray-200">
              サポーターが作るサポーターのための<br />
              サポーターによるツアー
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  サポ村について
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-gray-300 transition-colors">
                  過去の実績
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-gray-300 transition-colors">
                  現在の日程
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-sm text-gray-200">
              ご質問・ご相談はお問い合わせフォームよりお願いいたします。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} サポーター村を作る会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
