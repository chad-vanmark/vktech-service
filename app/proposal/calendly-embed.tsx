'use client'

import { useEffect, useRef, useState } from 'react'

const CALENDLY_URL =
  'https://calendly.com/vktech-service/free-website-proposal?embed_type=Inline&hide_gdpr_banner=1&primary_color=00C8E8&background_color=1E2A3A&text_color=ffffff'

// Calendly posts messages to the parent window when its internal height changes.
// Shape: { event: 'calendly.page_height', payload: { height: number } }
// We listen and sync our iframe height accordingly so it never clips or scrolls.

export default function CalendlyEmbed() {
  const [height, setHeight] = useState(830)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== 'https://calendly.com') return
      if (
        e.data &&
        typeof e.data === 'object' &&
        e.data.event === 'calendly.page_height' &&
        typeof e.data.payload?.height === 'number'
      ) {
        const next = Math.max(830, e.data.payload.height)
        setHeight(next)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div className="w-full overflow-hidden rounded">
      <iframe
        ref={iframeRef}
        src={CALENDLY_URL}
        title="Schedule a free proposal call with VKTech"
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="0"
        style={{ border: 'none', display: 'block', transition: 'height 0.2s ease' }}
      />
    </div>
  )
}
