'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここでフォーム送信処理を実装
    // 現在はダミーの処理
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

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
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              サポーター村を作る会へのご質問・ご相談は、下記のフォームよりお気軽にお問い合わせください。
            </p>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
                <p className="text-green-800 font-bold">
                  ✓ お問い合わせを受け付けました。ありがとうございます!
                </p>
                <p className="text-green-700 mt-2">
                  2-3営業日以内にご返信いたします。
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                  placeholder="山田 太郎"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                  お問い合わせ種類 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                >
                  <option value="">選択してください</option>
                  <option value="tour">ツアーについて</option>
                  <option value="membership">会員登録について</option>
                  <option value="ticket">チケットについて</option>
                  <option value="payment">料金・支払いについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                  placeholder="お問い合わせ内容をできるだけ詳しくお書きください"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-samurai-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>

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
