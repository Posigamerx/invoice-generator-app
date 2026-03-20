"use client"

import InvoicePreview from "@/public/components/invoice-preview";
import { useState } from "react";


export default function Home() {
  const [showPreview, setShowPreview] = useState(true);

  if (showPreview){
    <InvoicePreview />;
  }
 return (
  <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Invoice Generator
          </h1>
          <p className="text-gray-500">
            Create Professional invoice quickly
          </p>
        </div>
      </div>

    </div>
  </div>
 )
}
