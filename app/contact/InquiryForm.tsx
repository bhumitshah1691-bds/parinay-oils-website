'use client'

import { useState } from 'react'
import { submitInquiry } from './actions'

export default function InquiryForm() {
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    const result = await submitInquiry(formData)

    if (result.success) {
      setStatus({ type: 'success', message: result.message })
      const form = document.getElementById('inquiry-form') as HTMLFormElement
      form?.reset()
    } else {
      setStatus({ type: 'error', message: result.message })
    }

    setIsSubmitting(false)
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-[#E5E0D5] text-base focus:outline-none focus:border-[#2D6A2F] focus:ring-2 focus:ring-[#2D6A2F]/15 transition-colors min-h-[48px]'

  return (
    <form id="inquiry-form" action={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#1A1A1A]" htmlFor="inquiry-name">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="inquiry-name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#1A1A1A]" htmlFor="inquiry-email">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="inquiry-email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#1A1A1A]" htmlFor="inquiry-message">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          placeholder="Your message..."
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status.type !== 'idle' && (
        <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto btn btn-primary mt-2 py-3.5 text-base justify-center min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
