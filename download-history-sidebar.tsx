"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { AppOrGame } from "../data/apps-and-games"

interface DownloadHistoryItem extends AppOrGame {
  downloadDate: string
}

export function DownloadHistorySidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [downloadHistory, setDownloadHistory] = useState<DownloadHistoryItem[]>([])

  useEffect(() => {
    const storedHistory = localStorage.getItem("downloadHistory")
    if (storedHistory) {
      setDownloadHistory(JSON.parse(storedHistory))
    }
  }, [])

  const toggleSidebar = () => setIsOpen(!isOpen)

  const clearHistory = () => {
    setDownloadHistory([])
    localStorage.removeItem("downloadHistory")
  }

  return (
    <>
      <Button
        onClick={toggleSidebar}
        className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 transform"
        variant="outline"
      >
        {isOpen ? "Close History" : "Open History"}
      </Button>
      <aside
        className={`fixed right-0 top-0 h-full w-80 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Download History</h2>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {downloadHistory.length === 0 ? (
            <p className="text-center text-gray-500">No download history yet.</p>
          ) : (
            <ul className="space-y-4">
              {downloadHistory.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 border-b pb-2">
                  <img src={item.icon || "/placeholder.svg"} alt={item.name} className="h-12 w-12 rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.downloadDate}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>
        <Button onClick={clearHistory} className="mt-4 w-full" variant="outline">
          Clear History
        </Button>
      </aside>
    </>
  )
}

