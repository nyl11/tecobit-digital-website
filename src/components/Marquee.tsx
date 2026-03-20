import React from 'react'

interface MarqueeProps {
  text: string[]
  speed?: number
  reverse?: boolean
  className?: string
  textClassName?: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 20,
  reverse = false,
  className,
  textClassName,
}) => {
  return (
    <div className={`marquee-strip group ${className || ''}`}>
      <div className={`flex w-max animate-marquee ${reverse ? 'flex-row-reverse' : ''}`}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-8 px-4">
            {text.map((t, j) => (
              <span
                key={j}
                className={`font-display text-4xl uppercase tracking-widest text-fg ${textClassName || ''}`}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
