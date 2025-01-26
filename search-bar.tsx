import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  category: string
  setCategory: (category: string) => void
}

export function SearchBar({ searchTerm, setSearchTerm, category, setCategory }: SearchBarProps) {
  const categories = [
    "All",
    "Social",
    "Productivity",
    "Entertainment",
    "Games",
    "Education",
    "Utility",
    "Travel",
    "Lifestyle",
    "Finance",
  ]

  return (
    <div className="flex items-center space-x-4 mb-8">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search games and apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full"
        />
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

