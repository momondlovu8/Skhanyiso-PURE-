import { AppCard } from "./app-card"
import type { AppOrGame } from "../data/apps-and-games"

interface AppGridProps {
  apps: (AppOrGame & { rating: number })[]
}

export function AppGrid({ apps }: AppGridProps) {
  const groupedApps = apps.reduce(
    (acc, app) => {
      if (!acc[app.category]) {
        acc[app.category] = []
      }
      acc[app.category].push(app)
      return acc
    },
    {} as Record<string, AppOrGame[]>,
  )

  return (
    <div className="space-y-8">
      {Object.entries(groupedApps).map(([category, categoryApps]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4 text-red-600">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryApps.map((item) => (
              <AppCard key={item.id} app={item} rating={item.rating} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

