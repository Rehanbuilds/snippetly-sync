// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: 344be25c-1d98-4b8c-a249-a3902a8965ed

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, Shield, Zap, Cloud, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section for About Page */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              About <span className="text-gray-700">PDF Pilot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for all PDF solutions. We are committed to providing fast, secure, and reliable tools
              for everyone.
            </p>
            <Link href="/tools">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Start Converting Today
              </Button>
            </Link>
          </div>

          {/* Our Mission Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At PDF Pilot, our mission is to simplify document management for individuals and businesses worldwide.
                  We believe that working with PDF files should be effortless, secure, and accessible to everyone,
                  regardless of their technical expertise.
                </p>
                <p className="text-lg text-gray-700">
                  We strive to build intuitive, high-performance tools that empower you to convert, edit, and manage
                  your PDFs with confidence and ease.
                </p>
              </div>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our Mission"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us - Expanded */}
          <section className="mb-16 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">Why Trust PDF Pilot?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Uncompromised Security</h3>
                  <p className="text-gray-600">
                    Your privacy is our top priority. All files are processed using advanced encryption and are
                    automatically deleted from our servers after conversion.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Blazing Fast Conversions</h3>
                  <p className="text-gray-600">
                    Leveraging cutting-edge technology, we ensure your documents are converted in mere seconds, saving
                    you valuable time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <Cloud className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Cloud-Powered Accessibility</h3>
                  <p className="text-gray-600">
                    Access our tools from any device, anywhere in the world. No software downloads or installations
                    needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">User-Centric Design</h3>
                  <p className="text-gray-600">
                    Our interface is designed to be intuitive and easy to use, ensuring a smooth experience for
                    everyone.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">High Quality Results</h3>
                  <p className="text-gray-600">
                    We prioritize the integrity of your documents, ensuring that converted files maintain their original
                    formatting and quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    PDF Pilot is available worldwide, supporting a diverse range of users and their document needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-black text-white p-12 rounded-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience Effortless PDF Management?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing community of satisfied users and simplify your document workflow today.
            </p>
            <Link href="/tools">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Get Started Now
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
