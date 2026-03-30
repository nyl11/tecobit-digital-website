import React from 'react'
import { getPayloadInstance } from '@/lib/payload'
import { BlockRenderer } from '@/components/BlockRenderer'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayloadInstance()

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = docs[0]

  // If page doesn't exist or is the home page (handled by root page.tsx)
  if (!page || slug === 'home') {
    return notFound()
  }

  return (
    <div className={`page-${slug}`}>
      <BlockRenderer blocks={page.layout || []} />
    </div>
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 100,
    where: {
      slug: {
        not_equals: 'home',
      },
    },
  })

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export const revalidate = 60 // ISR
