import { SliceZone } from "@prismicio/react"
import { Metadata } from "next"

import { createClient } from "@/prismicio"
import { components } from "@/slices"

export default async function Home() {
  const client = createClient()
  const page = await client.getSingle("homepage")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle("homepage")

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
