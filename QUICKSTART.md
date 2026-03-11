# 🚀 サポ村ウェブサイト - クイックスタートガイド

## すぐにデプロイする方法(5分で完了!)

### 📋 必要なもの
- GitHubアカウント ✓(作成済み)
- Vercelアカウント ✓(作成済み)

### 🎯 ステップ1: GitHubにコードをアップロード

1. GitHubにログイン: https://github.com
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名: `sapomura-website` (または任意の名前)
4. 「Public」を選択(無料でホスティング可能)
5. 「Create repository」をクリック

**次のコマンドを実行します:**

```bash
cd sapomura-website
git init
git add .
git commit -m "サポ村ウェブサイト初回コミット"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/sapomura-website.git
git push -u origin main
```

※ `あなたのユーザー名` の部分を実際のGitHubユーザー名に変更してください

### 🎯 ステップ2: Vercelにデプロイ

1. Vercelにログイン: https://vercel.com
2. 「Add New...」→「Project」をクリック
3. GitHubからインポートで「sapomura-website」を選択
4. 「Import」をクリック
5. 設定はそのままで「Deploy」をクリック

**2-3分でデプロイ完了!** 🎉

### 🌐 ウェブサイトのURL

デプロイが完了すると、以下のようなURLが発行されます:
```
https://sapomura-website.vercel.app
```

このURLをブラウザで開くと、サポ村のウェブサイトが表示されます!

---

## 📝 今後の更新方法

コードを変更したら、以下のコマンドでGitHubにプッシュするだけです:

```bash
git add .
git commit -m "更新内容の説明"
git push
```

プッシュすると、**自動的にVercelがデプロイ**してくれます!

---

## 🎨 CMSの設定(オプション - 後で)

コンテンツをブラウザから簡単に編集したい場合:

1. Sanity.io でアカウント作成
2. 新規プロジェクト作成
3. Vercelの環境変数に設定を追加

詳細は `DEPLOY.md` を参照してください。

---

## 💡 ローカルで確認する方法

デプロイ前にローカルで確認したい場合:

```bash
cd sapomura-website
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認できます。

---

## ❓ 困ったときは

- デプロイログを確認: Vercelダッシュボード
- ローカルでビルドテスト: `npm run build`

それでも解決しない場合は、お気軽にお問い合わせください!

---

**🎊 デプロイ成功を祈っています! 頑張ってください!**
