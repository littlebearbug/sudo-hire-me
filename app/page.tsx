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
          <Link href="/editor?template=classic" className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gray-100">
                {/* CSS-only Thumbnail for Classic */}
                <div className="absolute inset-4 bg-white shadow-sm flex flex-col p-4 scale-90 origin-top hover:scale-100 transition-transform duration-300">
                  <div className="h-4 w-16 bg-gray-800 mb-4"></div>
                  <div className="h-px bg-gray-200 w-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-100"></div>
                    <div className="h-2 w-5/6 bg-gray-100"></div>
                    <div className="h-2 w-4/6 bg-gray-100"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Classic
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Timeless and professional. Perfect for corporate roles.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <Check size={16} /> ATS Friendly
                </div>
              </div>
            </div>
          </Link>

          {/* Template Card 2 */}
          <Link href="/editor?template=modern" className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gray-100">
                {/* CSS-only Thumbnail for Modern */}
                <div className="absolute inset-4 bg-white shadow-sm flex flex-row p-0 scale-90 origin-top hover:scale-100 transition-transform duration-300">
                  <div className="w-1/3 bg-gray-800 h-full p-2">
                    <div className="w-8 h-8 rounded-full bg-gray-600 mb-2"></div>
                  </div>
                  <div className="w-2/3 p-2 space-y-2">
                    <div className="h-3 w-20 bg-gray-200"></div>
                    <div className="h-2 w-full bg-gray-100"></div>
                    <div className="h-2 w-full bg-gray-100"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Modern
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Clean and contemporary. Great for tech and creative fields.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <Check size={16} /> ATS Friendly
                </div>
              </div>
            </div>
          </Link>

          {/* Template Card 3 */}
          <Link href="/editor?template=minimal" className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gray-100">
                {/* CSS-only Thumbnail for Minimal */}
                <div className="absolute inset-4 bg-white shadow-sm flex flex-col p-4 items-center text-center scale-90 origin-top hover:scale-100 transition-transform duration-300">
                  <div className="h-4 w-24 bg-gray-900 mb-2"></div>
                  <div className="h-2 w-32 bg-gray-400 mb-6"></div>
                  <div className="w-full space-y-1">
                    <div className="h-1.5 w-full bg-gray-100"></div>
                    <div className="h-1.5 w-full bg-gray-100"></div>
                    <div className="h-1.5 w-2/3 bg-gray-100 mx-auto"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Minimal
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Simple and effective. Focuses purely on content.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <Check size={16} /> ATS Friendly
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
