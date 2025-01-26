"use client"

import Link from "next/link"
import { Package2, Home, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Package2 className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">SKHANYISO HUB</h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`flex items-center space-x-2 hover:text-blue-100 transition-colors ${
                pathname === "/" ? "text-blue-200" : ""
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center space-x-2 hover:text-blue-100 transition-colors ${
                pathname === "/contact" ? "text-blue-200" : ""
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

