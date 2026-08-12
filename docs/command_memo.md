# PowerShell コマンド・学習メモ

## 1. フォルダとファイルの作成

### フォルダを作る（mkdir）
- `mkdir フォルダ名`
- 意味：Make Directory（ディレクトリ＝フォルダを作成する）
- 例：`mkdir docs, frontend, lambda` で複数のフォルダを一括作成できる。

### ファイルを作る（New-Item）
- `New-Item ファイル名 -ItemType File`
- 意味：指定した名前で「新しい空のファイル」を作成する命令。
- 例：`New-Item README.md -ItemType File`

### ディレクトリを移動する（cd）
- `cd フォルダパス`
- 意味：Change Directory（作業するフォルダを移動する）
- 例：`cd Desktop\作品制作\FinSight`