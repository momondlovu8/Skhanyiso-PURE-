import Image from "next/image"
import Link from "next/link"
import { Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { AppOrGame } from "../data/apps-and-games"

interface AppCardProps {
  app: AppOrGame
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Image src={app.icon || "/placeholder.svg"} alt={app.name} width={64} height={64} className="rounded-lg" />
          <CardTitle className="text-lg">{app.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600">{app.description}</p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{app.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-gray-50">
        <span className="text-sm text-gray-600">{app.downloads.toLocaleString()} downloads</span>
        <Button size="sm" asChild>
          <Link href={`/download/${app.id}`}>
            <Download className="w-4 h-4 mr-2" />
            Download
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

