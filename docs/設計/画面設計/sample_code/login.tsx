import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"

export default function LoginPage() {
  const handleGoogleLogin = () => {
    // Google認証処理を実装
    console.log("Google認証を開始")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">OCRシステムにログイン</CardTitle>
          <CardDescription>Googleアカウントでログインしてください</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-6 h-6" />
            Googleでログイン
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}