import React from 'react'
import { getPayloadInstance } from '@/lib/payload'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Media } from '@/payload-types'

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getPayloadInstance()

  const { docs } = await payload.find({
    collection: 'case-studies',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const study = docs[0]

  if (!study) {
    return notFound()
  }

  const img = study.coverImage as Media

  return (
    <article className="pt-32 pb-24">
      <header className="container mx-auto px-4 mb-24 text-center md:text-left">
        <div className="font-mono text-accent text-xl mb-6 uppercase tracking-[0.4em]">
          {study.category} / {study.client}
        </div>
        <h1 className="text-[10vw] md:text-[8vw] font-display uppercase leading-[0.9] tracking-tighter mb-12">
          {study.title}
        </h1>
        
        {study.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y-2 border-fg py-12">
            {study.stats.map((stat, i) => (
              <div key={i}>
                <div className="font-mono text-sm opacity-50 uppercase mb-2">{stat.label}</div>
                <div className="font-display text-4xl uppercase">{stat.value}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="container mx-auto px-4">
        <div className="relative aspect-[21/9] border-2 border-fg shadow-brutal mb-24 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
          {img?.url && (
            <Image
              src={img.url}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-mono leading-relaxed mb-16 italic opacity-90 border-l-8 border-accent pl-8">
            {study.excerpt}
          </p>
          
          <div className="prose-brutal font-mono text-lg leading-loose opacity-80">
            {/* Rich text would be rendered here */}
            {/* study.content && <RichText content={study.content} /> */}
            [PROJECT CONTENT COMING SOON]
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'case-studies',
    limit: 100,
  })

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export const revalidate = 60
