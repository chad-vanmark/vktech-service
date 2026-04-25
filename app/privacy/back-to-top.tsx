'use client'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-sm text-[#64748B] hover:text-[#00C8E8] transition-colors duration-200"
    >
      Back to top &uarr;
    </button>
  )
}
