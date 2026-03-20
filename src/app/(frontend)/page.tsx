import React from 'react'
import { getPayloadInstance } from '@/lib/payload'
import { BlockRenderer } from '@/components/BlockRenderer'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const payload = await getPayloadInstance()
  
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
  })

  const page = docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <div className="page-home">
      <BlockRenderer blocks={page.layout || []} />
    </div>
  )
}

export const revalidate = 60 // ISR
