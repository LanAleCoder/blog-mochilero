import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">GuateTravel</span>
            </div>
            <p className="text-gray-400">
              Your trusted guide for transportation and travel throughout
              Guatemala. Making your journey easier, safer, and more enjoyable.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#destinations"
                  className="hover:text-white transition-colors"
                >
                  Popular Destinations
                </a>
              </li>
              <li>
                <a
                  href="#transportation"
                  className="hover:text-white transition-colors"
                >
                  Transportation Guide
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-white transition-colors">
                  Travel Tips
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className="hover:text-white transition-colors"
                >
                  Travel Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg mb-4">Top Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Antigua Guatemala
                </a>
              </li>
              <li>
                <a
                  href="/destino/el-paredn"
                  className="hover:text-white transition-colors"
                >
                  El paredón
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Lake Atitlán</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tikal National Park</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Semuc Champey</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Río Dulce</a></li> */}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest transportation updates, new routes, and travel tips delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div> */}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 GuateTravel. All rights reserved. Travel information updated
            regularly.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-4 w-4 text-blue-400" />
            <span className="text-sm">Need help planning your route?</span>
          </div>
          <p className="text-sm text-gray-400">
            Contact our local travel experts: info@guatetravel.com | WhatsApp:
            +502 1234-5678
          </p>
        </div>
      </div>
    </footer>
  );
}
