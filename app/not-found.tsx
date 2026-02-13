import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl font-bold text-[#2D6A2F] mb-2">404</h1>
      <p className="text-[#4A4A4A] text-lg mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-3 rounded-full bg-[#2D6A2F] text-white font-medium hover:bg-[#245226] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
