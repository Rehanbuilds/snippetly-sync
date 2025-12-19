// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: b8bc90ee-7c2d-41d6-9301-254c7aea3cad

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  ImageIcon,
  Archive,
  FileCode,
  Layers,
  BookOpen,
  Database,
  Code,
  Stamp,
  ArrowLeft,
} from "lucide-react"
import { PDFConverter } from "@/components/pdf-converter"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const tools = [
    // Office Documents
    {
      id: "word-pdf",
      icon: FileText,
      title: "Word ↔ PDF",
      description: "Convert Word documents to PDF and vice versa with perfect formatting preservation",
      fromFormat: "DOCX",
      toFormat: "PDF",
      category: "Office Documents",
    },
    {
      id: "excel-pdf",
      icon: FileSpreadsheet,
      title: "Excel ↔ PDF",
      description: "Convert Excel spreadsheets to PDF and vice versa while maintaining data integrity",
      fromFormat: "XLSX",
      toFormat: "PDF",
      category: "Office Documents",
    },
    {
      id: "ppt-pdf",
      icon: Presentation,
      title: "PowerPoint ↔ PDF",
      description: "Convert PowerPoint presentations to PDF and vice versa with slide fidelity",
      fromFormat: "PPTX",
      toFormat: "PDF",
      category: "Office Documents",
    },
    {
      id: "csv-pdf",
      icon: Database,
      title: "CSV to PDF",
      description: "Convert CSV files to well-formatted PDF tables with customizable styling",
      fromFormat: "CSV",
      toFormat: "PDF",
      category: "Office Documents",
    },
    {
      id: "excel-csv",
      icon: FileSpreadsheet,
      title: "Excel ↔ CSV",
      description: "Convert Excel spreadsheets to CSV and vice versa for easy data exchange",
      fromFormat: "XLSX/CSV",
      toFormat: "CSV/XLSX",
      category: "Office Documents",
    },
    // Media Files
    {
      id: "image-pdf",
      icon: ImageIcon,
      title: "Image ↔ PDF",
      description: "Convert images (JPG, PNG, GIF) to PDF and extract images from PDF files",
      fromFormat: "JPG/PNG",
      toFormat: "PDF",
      category: "Media Files",
    },
    // Text Files
    {
      id: "text-pdf",
      icon: FileCode,
      title: "Text ↔ PDF",
      description: "Convert plain text files to PDF and extract text content from PDF documents",
      fromFormat: "TXT",
      toFormat: "PDF",
      category: "Text Files",
    },
    // Data & Web Formats
    {
      id: "json-pdf",
      icon: Code,
      title: "JSON ↔ PDF",
      description: "Convert JSON data to readable PDF documents and extract JSON from PDFs",
      fromFormat: "JSON",
      toFormat: "PDF/JSON",
      category: "Data & Web Formats",
    },
    {
      id: "html-pdf",
      icon: Code,
      title: "HTML to PDF",
      description: "Convert web pages or HTML code into high-quality PDF documents",
      fromFormat: "HTML",
      toFormat: "PDF",
      category: "Data & Web Formats",
    },
    // PDF Utilities
    {
      id: "compress-pdf",
      icon: Archive,
      title: "Compress PDF",
      description: "Reduce PDF file size while maintaining optimal quality and readability",
      fromFormat: "PDF",
      toFormat: "Compressed PDF",
      category: "PDF Utilities",
    },
    {
      id: "merge-pdf",
      icon: Layers,
      title: "Merge PDFs",
      description: "Combine multiple PDF files into a single document with custom page ordering",
      fromFormat: "Multiple PDFs",
      toFormat: "Single PDF",
      category: "PDF Utilities",
    },
    {
      id: "add-watermark",
      icon: Stamp,
      title: "Add Watermark",
      description: "Add custom text or image watermarks to your PDF documents",
      fromFormat: "PDF",
      toFormat: "Watermarked PDF",
      category: "PDF Utilities",
    },
    // Archive Files
    {
      id: "zip-pdf",
      icon: Archive,
      title: "ZIP ↔ PDF",
      description: "Convert ZIP archives to PDF catalog or create ZIP files from PDF pages",
      fromFormat: "ZIP",
      toFormat: "PDF",
      category: "Archive Files",
    },
    // E-book Formats
    {
      id: "pdf-epub",
      icon: BookOpen,
      title: "PDF to ePub",
      description: "Convert PDF documents to ePub format for better e-reader compatibility",
      fromFormat: "PDF",
      toFormat: "ePub",
      category: "E-book Formats",
    },
  ]

  const categories = [...new Set(tools.map((tool) => tool.category))]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">PDF Conversion Tools</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade PDF tools for all your document conversion needs. Fast, secure, and completely free.
            </p>
          </div>

          {selectedTool ? (
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setSelectedTool(null)}
                className="mb-6 border-black text-black hover:bg-black hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Tools
              </Button>
              <PDFConverter tool={tools.find((t) => t.id === selectedTool)!} />
            </div>
          ) : (
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-black mb-6">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools
                      .filter((tool) => tool.category === category)
                      .map((tool) => (
                        <Card
                          key={tool.id}
                          className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                        >
                          <CardHeader className="text-center pb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-xl mb-4 mx-auto">
                              <tool.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-black">{tool.title}</CardTitle>
                            <CardDescription className="text-gray-600 text-sm leading-relaxed">
                              {tool.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="text-center pt-0">
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-700">
                                {tool.fromFormat} → {tool.toFormat}
                              </span>
                            </div>
                            <Button
                              className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                              onClick={() => setSelectedTool(tool.id)}
                            >
                              Use This Tool
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Info Section */}
          {!selectedTool && (
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Need Help Choosing?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Not sure which tool to use? Our PDF conversion tools are designed to handle any document format with
                professional quality results. All conversions are processed securely and your files are automatically
                deleted after processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black text-white hover:bg-gray-800">Contact Support</Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  View FAQ
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
