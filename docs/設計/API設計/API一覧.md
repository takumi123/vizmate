# API一覧

1. ユーザー認証API
   - エンドポイント: `/api/auth/google`
   - メソッド: GET
   - 説明: Google OAuth認証を開始

2. フォルダ一覧取得API
   - エンドポイント: `/api/folders`
   - メソッド: GET
   - 説明: ユーザーのGoogle Driveフォルダ一覧を取得

3. フォルダ選択API
   - エンドポイント: `/api/folders/select`
   - メソッド: POST
   - パラメータ: `{ folderId: string }`
   - 説明: OCR処理対象のフォルダを選択

4. PDF一覧取得API
   - エンドポイント: `/api/pdfs`
   - メソッド: GET
   - 説明: 選択されたフォルダ内のPDFファイル一覧を取得

5. OCR結果取得API
   - エンドポイント: `/api/ocr/:pdfId`
   - メソッド: GET
   - 説明: 特定のPDFファイルのOCR結果を取得

6. OCR結果更新API
   - エンドポイント: `/api/ocr/:pdfId`
   - メソッド: PUT
   - パラメータ: `{ content: string }`
   - 説明: OCR結果を更新

7. CSVエクスポートAPI
   - エンドポイント: `/api/export/csv`
   - メソッド: GET
   - 説明: 全OCR結果をCSV形式でエクスポート
