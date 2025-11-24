import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function TemplatePage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Template Preview: {id}</h1>
        <p className="text-gray-500 mb-8">
          This is a preview of the {id} template. In a full implementation, this
          would show a static preview of the template with dummy data.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <ArrowLeft size={16} /> Back
            </button>
          </Link>
          <Link href="/editor">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Use This Template
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
