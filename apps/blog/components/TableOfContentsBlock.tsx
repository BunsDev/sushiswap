import { classNames } from '@sushiswap/ui'
import { FC, MouseEvent as ReactMouseEvent, useCallback, useEffect, useState } from 'react'

import { ComponentSharedTableOfContents } from '../.mesh'

interface TableOfContents {
  type: 'static' | 'block'
  block: ComponentSharedTableOfContents
}

function isKeyInViewport(key: string) {
  const el = document.getElementById(key)
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  )
}

export const TableOfContentsBlock: FC<TableOfContents> = ({ block, type }) => {
  const [currentKey, setCurrentKey] = useState<string>(block?.entries?.[0].key)

  const scrollToKey = useCallback((event: ReactMouseEvent<HTMLDivElement, MouseEvent>, key?: string) => {
    if (key) {
      event.preventDefault()

      const element = document.getElementById(key)
      const headerOffset = 54 // header has a h-[54px]
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const getCurrentKey = useCallback(() => {
    for (const entry of block.entries) {
      if (isKeyInViewport(entry.key)) {
        setCurrentKey(entry.key)
        break
      }
    }
  }, [block.entries])

  useEffect(() => {
    window.addEventListener('scroll', getCurrentKey)
    return () => window.removeEventListener('scroll', getCurrentKey)
  }, [getCurrentKey])

  if (!block || block.entries.length === 0) return <></>

  return (
    <div className="bg-opacity-50 rounded-2xl bg-slate-800">
      <div className="p-4 text-sm text-slate-300">{block.header}</div>
      <div className="h-[0.5px] bg-slate-700 bg-opacity-60" />
      <div className="flex flex-col p-5 space-y-2">
        {block.entries.map((block, i) => (
          <div
            className={classNames(
              type === 'static' && block.key !== currentKey && 'text-slate-400',
              'flex space-x-1 text-sm cursor-pointer text-slate-50 hover:font-medium'
            )}
            key={i}
            onClick={(e) => scrollToKey(e, block.key)}
          >
            <div>•</div>
            <div>{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
