# Vercelへのデプロイ手順

このガイドでは、サポ村ウェブサイトをVercelにデプロイする手順を説明します。

## 前提条件

- GitHubアカウント
- Vercelアカウント(GitHubで認証済み)
- このプロジェクトのコード

## ステップ1: GitHubリポジトリの作成

1. GitHubにログイン
2. 右上の「+」ボタンから「New repository」を選択
3. リポジトリ名を入力(例: `sapomura-website`)
4. 「Public」または「Private」を選択
5. 「Create repository」をクリック

## ステップ2: ローカルのコードをGitHubにプッシュ

プロジェクトのルートディレクトリで以下のコマンドを実行:

```bash
# Gitリポジトリの初期化
git init

# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial commit"

# リモートリポジトリを追加(GitHubのリポジトリURLに置き換えてください)
git remote add origin https://github.com/YOUR_USERNAME/sapomura-website.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

## ステップ3: Vercelでプロジェクトをインポート

1. [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」セクションで先ほど作成したGitHubリポジトリを選択
4. 「Import」をクリック

## ステップ4: プロジェクト設定

1. **Project Name**: そのままでもOK(変更も可能)
2. **Framework Preset**: 自動的に「Next.js」が選択されます
3. **Root Directory**: `./` (デフォルト)
4. **Build Command**: `next build` (デフォルト)
5. **Output Directory**: `.next` (デフォルト)

環境変数は今は設定不要です(後でSanity CMSを設定する際に追加)

6. 「Deploy」ボタンをクリック

## ステップ5: デプロイ完了

- デプロイには2-3分かかります
- 完了すると、ウェブサイトのURLが表示されます
  例: `https://sapomura-website.vercel.app`

## 自動デプロイ

GitHubのmainブランチにプッシュすると、自動的にVercelがデプロイを実行します。

## カスタムドメインの設定(オプション)

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Domains」を選択
3. 独自ドメイン(例: sapomura.com)を入力
4. DNSレコードの設定方法が表示されるので、ドメインレジストラで設定

## 今後の作業: Sanity CMSの設定

Sanity CMSを使ってコンテンツを管理したい場合:

1. [Sanity.io](https://www.sanity.io/)でアカウント作成
2. 新規プロジェクトを作成
3. プロジェクトIDを取得
4. Vercelの環境変数に追加:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

詳細な手順は別途ご説明します。

## トラブルシューティング

### デプロイが失敗する場合

1. ビルドログを確認
2. ローカルで `npm run build` を実行してエラーがないか確認
3. 依存関係が正しくインストールされているか確認

### 画像が表示されない場合

- `public`フォルダに画像ファイルが含まれているか確認
- 画像のパスが正しいか確認

---

質問がある場合は、お気軽にお問い合わせください!
