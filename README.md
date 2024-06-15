# Validate Name Generator

https://github.com/yuuki008/variable-name-generator/assets/68183834/3f730a4b-c5c9-4a74-b99f-50a7d68bd787

## 概要

Validate Name Generator は、日本語の説明から適切な英語の変数名を生成する CLI ツールです。このツールは OpenAI の API を使用しており、プログラミングにおける変数名の作成を効率化します。

## 機能
昨日は、日本語で入力された説明を元に英語の変数名を生成して、クリップボードにコピーするといったシンプルなライブラリです。

## 環境設定

プロジェクトのルートディレクトリに `.env` ファイルを作成し、OpenAI の API キーを設定します。

```.env
OPENAI_API_KEY=YOUR_API_KEY
```

## セットアップ

パッケージ化せずに使用してもらうことを想定しています。

1. リポジトリをクローンします。

```bash
git clone https://github.com/yuuki008/validate-name-generator.git
cd validate-name-generator
```

2. 依存関係をインストールします。

```bash
npm install
```

3. ビルドします。

```bash
npm run build
```

4. グローバルでコマンドを使用できるようにリンクします。

```bash
npm link
```

5. コマンド実行
```
var
```



