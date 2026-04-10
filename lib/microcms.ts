import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

// ── 型定義 ────────────────────────────────────────────

export type News = {
  id: string
  title: string
  body: string
  date: string
  createdAt: string
  updatedAt: string
}

export type Achievement = {
  id: string
  title: string
  description: string
  date: string
  image?: {
    url: string
    height: number
    width: number
  }
  createdAt: string
  updatedAt: string
}

// ── フェッチ関数 ───────────────────────────────────────

/** ニュース一覧を取得 */
export const getNewsList = async (limit = 10) => {
  return client.getList<News>({
    endpoint: 'news',
    queries: { limit, orders: '-date' },
  })
}

/** ニュース1件を取得 */
export const getNewsDetail = async (id: string) => {
  return client.getListDetail<News>({
    endpoint: 'news',
    contentId: id,
  })
}

/** 実績一覧を取得 */
export const getAchievementsList = async (limit = 20) => {
  return client.getList<Achievement>({
    endpoint: 'achievements',
    queries: { limit, orders: '-date' },
  })
}
