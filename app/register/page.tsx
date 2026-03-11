'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

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
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-samurai-blue p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-samurai-blue mb-2">
                会員登録について
              </h2>
              <p className="text-gray-700">
                サポーター村を作る会の会員になると、ツアー情報や最新ニュースを優先的にお届けします。
                登録は無料です。
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
                <p className="text-green-800 font-bold">
                  ✓ 登録申請を受け付けました。ありがとうございます!
                </p>
                <p className="text-green-700 mt-2">
                  ご入力いただいたメールアドレスに確認メールをお送りします。
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
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  メッセージ・ご要望など
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-samurai-blue"
                  placeholder="ご質問やご要望があればお書きください"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-samurai-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '登録する'}
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600 text-sm">
              <p>
                ご登録いただいた個人情報は、サポーター村を作る会の活動目的以外には使用いたしません。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
