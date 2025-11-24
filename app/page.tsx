import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded">
              <FileText size={20} />
            </div>
            <span className="font-bold text-xl text-gray-900">
              ResumeBuilder
            </span>
          </div>
          <Link href="/editor">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Go to Editor
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Build your professional resume <br className="hidden sm:block" />
            <span className="text-blue-600">in minutes</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Free, open-source, and privacy-focused. Your data stays on your
            device.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/editor">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Building Now <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Template Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Classic Template Preview
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">Classic</h3>
              <p className="mt-2 text-sm text-gray-500">
                Timeless and professional. Perfect for corporate roles.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <Check size={16} /> ATS Friendly
              </div>
            </div>
          </div>

          {/* Template Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Modern Template Preview
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">Modern</h3>
              <p className="mt-2 text-sm text-gray-500">
                Clean and contemporary. Great for tech and creative fields.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <Check size={16} /> ATS Friendly
              </div>
            </div>
          </div>

          {/* Template Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Minimal Template Preview
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">Minimal</h3>
              <p className="mt-2 text-sm text-gray-500">
                Simple and effective. Focuses purely on content.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <Check size={16} /> ATS Friendly
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
