'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function CTAButtons() {
  const router = useRouter()
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <button
        onClick={() => router.push('/quiz')}
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-md transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        Start Quiz
      </button>
      <a
        href="#tools"
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:shadow-md"
      >
        Browse All Tools
      </a>
    </div>
  )
}