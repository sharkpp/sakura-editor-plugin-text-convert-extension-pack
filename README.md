# テキスト変換拡張パック for サクラエディタv2

## 説明

選択した「XXXに変換」機能を追加するサクラエディタ用のプラグインです。
選択した文字列に様々な変換を行うことができます。

## 動作環境

* サクラエディタ(UNICODE版) r1737以降

## インストール

1. サクラエディタのインストールフォルダ直下に plugins フォルダを作る。
2. その中に text-convert フォルダを作る。
3. plugin.def を含むフォルダ内を全てコピー。
4. 共通設定→プラグイン→プラグインを有効にする。
4. 新規プラグインを追加で text-convert を有効にしてください。

※ 上記の 1 と 4 は他のプラグインがインストール済みの場合
　 すでに実行されているので行う必要はありません。

インストール後は、

```
サクラエディタインストールディレクトリ
 +-- plugin
      +-- text-convert
           +-- plugin.def
           +-- README.md ※このファイル
           +-- js
                +-- *.js
```

と、このような感じのフォルダ構成になります。

個々の機能のインストール方法は機能一覧を参照してください。

## 機能一覧

共通設定→メインメニュー/カスタムメニュー→種別：プラグイン→XXXに変換
を好きなメニューに割り当ててください。

### アッパーキャメルケース(UpperCamelCase)に変換

選択された文字列をアッパーキャメルケースに変換します。

例として `upper camel case` という文字列を選択していた場合 `UpperCamelCase` に変換されます。

### ローワーキャメルケース(lowerCamelCase)に変換

選択された文字列をローワーキャメルケースに変換します。

例として `lower camel case` という文字列を選択していた場合 `lowerCamelCase` に変換されます。

### スネークケース(snake_case)に変換

選択された文字列をスネークケースに変換します。

例として `snake case` という文字列を選択していた場合 `snake_case` と変換されます。

### チェインケース(chain-case)に変換

選択された文字列をチェインケースに変換します。

例として `chain case` という文字列を選択していた場合 `chain-case` と変換されます。

### 単語の頭を大文字に変換

選択された文字列の単語の頭を大文字に変換します。

例として `upper camel words` という文字列を選択していた場合 `Upper Camel Words` と変換されます。

### 頭を大文字に変換

選択された文字列の頭を大文字に変換します。

例として `upper camel first` という文字列を選択していた場合 `Upper camel first` と変換されます。

### 頭を小文字に変換

選択された文字列の頭を小文字に変換します。

例として `Lower Camel First` という文字列を選択していた場合 `lower Camel First` と変換されます。

## ライセンス

Copyright(c) 2015 sharkpp All rights reserved.
このプラグインは、The MIT License が適用されます。