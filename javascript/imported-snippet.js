// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: 12aa030f-1483-48c3-821f-700d12feef95

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { FeaturesList } from "@/components/features-list"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FeaturesList />
      <CTA />
      <Footer />
    </div>
  )
}
