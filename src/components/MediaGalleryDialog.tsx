import { useEffect, useId, useRef, useState } from 'react'
import type { ProjectMedia } from '../types'

type Props = {
  open: boolean
  onClose: () => void
  title: string
  media: ProjectMedia[]
  initialIndex?: number
}

export default function MediaGalleryDialog({
  open,
  onClose,
  title,
  media,
  initialIndex = 0,
}: Props) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    if (!open) return
    setIndex(Math.min(Math.max(initialIndex, 0), Math.max(media.length - 1, 0)))
  }, [open, initialIndex, media.length])

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % media.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + media.length) % media.length)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, media.length])

  if (!open || media.length === 0) return null

  const current = media[index]
  const go = (next: number) => setIndex((next + media.length) % media.length)

  return (
    <div className="media-dialog-root" role="presentation">
      <button type="button" className="media-dialog-backdrop" aria-label="Close gallery" onClick={onClose} />
      <div
        className="media-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="media-dialog-head">
          <div>
            <div className="media-dialog-kicker">Media Gallery</div>
            <h2 id={titleId} className="media-dialog-title">
              {title}
            </h2>
          </div>
          <div className="media-dialog-head-actions">
            <span className="media-dialog-count">
              {index + 1} / {media.length}
            </span>
            <button ref={closeRef} type="button" className="media-dialog-close" onClick={onClose}>
              Close
            </button>
          </div>
        </header>

        <div className="media-dialog-stage">
          {media.length > 1 && (
            <button
              type="button"
              className="media-nav media-nav-prev"
              onClick={() => go(index - 1)}
              aria-label="Previous media"
            >
              ←
            </button>
          )}

          <div className="media-dialog-frame">
            {current.type === 'image' ? (
              <img src={current.src} alt={current.caption} className="media-dialog-img" />
            ) : (
              <div className="media-dialog-embed">
                <iframe
                  src={current.src}
                  title={current.caption}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            )}
            <p className="media-dialog-caption">{current.caption}</p>
          </div>

          {media.length > 1 && (
            <button
              type="button"
              className="media-nav media-nav-next"
              onClick={() => go(index + 1)}
              aria-label="Next media"
            >
              →
            </button>
          )}
        </div>

        {media.length > 1 && (
          <div className="media-dialog-thumbs" role="list">
            {media.map((item, i) => (
              <button
                key={`${item.caption}-${i}`}
                type="button"
                role="listitem"
                className={`media-thumb${i === index ? ' is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show ${item.caption}`}
                aria-current={i === index}
              >
                {item.type === 'image' ? (
                  <img src={item.thumb ?? item.src} alt="" />
                ) : (
                  <span className="media-thumb-embed">▶ Video</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
