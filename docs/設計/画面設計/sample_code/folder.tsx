import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

type Folder = {
  id: string
  name: string
}

export default function FolderSelectPage() {
  const [folders, setFolders] = useState<Folder[]>([
    { id: "1", name: "フォルダ1" },
    { id: "2", name: "フォルダ2" },
    { id: "3", name: "フォルダ3" },
  ])

  const handleFolderSelect = (folderId: string) => {
    console.log(`フォルダ ${folderId} が選択されました`)
    // フォルダ選択処理を実装
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Google Driveフォルダを選択</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[50vh] border rounded-md p-4">
            {folders.map((folder) => (
              <Button
                key={folder.id}
                onClick={() => handleFolderSelect(folder.id)}
                variant="ghost"
                className="w-full justify-start text-left mb-2"
              >
                {folder.name}
              </Button>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}