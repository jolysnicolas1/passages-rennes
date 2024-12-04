"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

export default function NewsInnerCard({
  title,
  content,
  imageUrl,
}: {
  title: string
  content: string
  imageUrl?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      )
    }
  }, [contentRef])

  return (
    <div className="flex flex-col h-full">
      {imageUrl && (
        <div className="aspect-video relative h-64 w-full pb-4 round">
          <Image
            fill
            src={imageUrl}
            alt={title}
            className="object-cover pb-4 rounded-md"
          />
        </div>
      )}
      <div className="max-w-xs">
        <h3 className="text-balance text-lg font-semibold tracking-[-0.015em] text-white md:line-clamp-1">
          {title}
        </h3>
        <p
          ref={contentRef}
          className={` mt-4 text-base/6 text-neutral-200 overflow-hidden transition-all duration-300 ${
            isExpanded ? "" : "sm:line-clamp-4"
          }`}
        >
          {content}
        </p>
      </div>
      {showButton && (
        <Button
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden underline mt-2 -ml-4 self-start text-base/6 text-neutral-200 sm:flex justify-center items-center"
        >
          {isExpanded ? "Lire moins" : "Lire la suite"}
        </Button>
      )}
    </div>
  )
}
