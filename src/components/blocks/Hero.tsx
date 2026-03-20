import React from 'react'
import Image from 'next/image'
import { Marquee } from '../Marquee'
import type { Page, Media } from '@/payload-types'

type HeroProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'hero' }>

export const Hero: React.FC<HeroProps> = ({
  headlineTop,
  headlineBottom,
  accentWord,
  marqueeText,
  ctaLabel,
  ctaLink,
  isFixed,
  backgroundImage,
}) => {
  const bgImage = backgroundImage as Media | undefined

  return (
    <section
      className={`transition-all duration-700 ${
        isFixed ? 'h-screen sticky top-0 z-0' : 'min-h-screen relative z-10'
      }`}
    >
      <div className="relative h-screen w-full flex flex-col overflow-clip pt-20">
        {bgImage?.url && (
          <div className="absolute inset-0 z-0 scale-105">
            <Image
              src={bgImage.url}
              alt={bgImage.alt || 'Hero Background'}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
        <div className="container mx-auto px-4 z-10 text-center grow flex flex-col justify-center items-center">
          <div className="relative inline-block mb-2">
            <h1 className="leading-[1.05] font-display uppercase tracking-normal text-white">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                {headlineTop}
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-accent">
                {accentWord}
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                {headlineBottom}
              </span>
            </h1>
          </div>

          {ctaLabel && (
            <div className="mt-8 transition-all hover:scale-105">
              <a
                href={ctaLink || '#'}
                className="btn inline-block border-white! text-white! hover:bg-white! hover:text-black!"
              >
                {ctaLabel}
              </a>
            </div>
          )}
        </div>

        <div className="relative z-10 w-full pb-10">
          {marqueeText && (
            <Marquee
              text={marqueeText.map((m: { text: string }) => m.text)}
              className="border-white/60! bg-transparent!"
              textClassName="!text-white"
            />
          )}
        </div>
      </div>
    </section>
  )
}
