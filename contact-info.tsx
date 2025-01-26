import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <Card className="mt-8" id="contact-info">
      <CardHeader>
        <CardTitle>Contact & Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>support@skhanyisohub.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+27 123 456 7890</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>123 Main Street, Johannesburg, South Africa</span>
          </div>
          <p className="mt-4">
            SKHANYISO HUB is your one-stop destination for all your favorite apps and games. We strive to provide a
            seamless experience for discovering and downloading the best mobile applications. Our team is dedicated to
            curating a diverse selection of high-quality apps across various categories.
          </p>
          <p>
            If you have any questions, concerns, or feedback, please don't hesitate to reach out to us using the contact
            information provided above. We're here to help and continuously improve your app store experience!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

