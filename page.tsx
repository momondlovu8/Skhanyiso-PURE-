"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/app/components/header"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { appsAndGames } from "@/app/data/apps-and-games"

export default function DownloadPage() {
  const { id } = useParams()
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const app = appsAndGames.find((app) => app.id === id)

  useEffect(() => {
    if (isDownloading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer)
            setIsDownloading(false)
            return 100
          }
          return prevProgress + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }
  }, [isDownloading])

  useEffect(() => {
    if (progress === 100 && app) {
      const downloadHistory = JSON.parse(localStorage.getItem("downloadHistory") || "[]")
      const newDownload = {
        ...app,
        downloadDate: new Date().toLocaleString(),
      }
      const updatedHistory = [newDownload, ...downloadHistory].slice(0, 10) // Keep only the last 10 downloads
      localStorage.setItem("downloadHistory", JSON.stringify(updatedHistory))
    }
  }, [progress, app])

  if (!app) {
    return <div>App not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <img src={app.icon || "/placeholder.svg"} alt={app.name} className="w-16 h-16 rounded-lg mr-4" />
            <div>
              <h1 className="text-2xl font-bold">{app.name}</h1>
              <p className="text-gray-600">{app.category}</p>
            </div>
          </div>
          <p className="mb-4">{app.description}</p>
          <div className="mb-4">
            <p className="font-semibold">Downloads: {app.downloads.toLocaleString()}</p>
          </div>
          {!isDownloading && progress < 100 && (
            <Button onClick={() => setIsDownloading(true)} className="w-full mb-4">
              Start Download
            </Button>
          )}
          {(isDownloading || progress === 100) && (
            <div>
              <Progress value={progress} className="mb-2" />
              <p className="text-center">{progress === 100 ? "Download Complete!" : `Downloading... ${progress}%`}</p>
            </div>
          )}
          {progress === 100 && (
            <Button asChild className="w-full mt-4">
              <a href={app.downloadLink} target="_blank" rel="noopener noreferrer">
                Open in Play Store
              </a>
            </Button>
          )}
        </div>
      </main>
    </div>
  )
}

