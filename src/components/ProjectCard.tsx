'use client'

import React, { useState, useMemo } from 'react'
import { Project } from '../data/projectsData'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewVideo, setPreviewVideo] = useState<string | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const { image, video } = project
  const isImageArray = Array.isArray(image)
  const youtubeUrl = video
    ? `https://www.youtube.com/embed/${video}?autoplay=1`
    : null

  const isMobile = project.mediaType === 'mobile'
  const isDesign = project.mediaType === 'design'

  const visibleImages = useMemo(() => {
    if (!isImageArray) return []

    const total = image.length
    const maxVisible = Math.min(2, total)

    return Array.from({ length: maxVisible }, (_, i) => {
      const index = (carouselIndex + i) % total
      return {
        src: image[index],
        index,
      }
    })
  }, [image, carouselIndex, isImageArray])

  const nextSlide = () => {
    if (!isImageArray) return
    setCarouselIndex((prev) => (prev + 1) % image.length)
  }

  const prevSlide = () => {
    if (!isImageArray) return
    setCarouselIndex((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    )
  }


  const PhoneFrame = ({
    children,
  }: {
    children: React.ReactNode
  }) => (
    <div className="h-[250px] flex justify-center items-center">
      <div className="bg-black p-[3px] rounded-[28px] shadow-lg ">
        <div className="rounded-[23px] overflow-hidden bg-black h-full  flex items-center">
          {children}
        </div>
      </div>
    </div>
  )

  const renderImage = (src: string, index: number) => {
    if (isMobile) {
      return (
        <PhoneFrame key={index}>
          <img
            src={src}
            alt={project.title}
            onClick={() => setPreviewImage(src)}
            className="w-auto max-h-[240px] object-cover cursor-zoom-in"
          />
        </PhoneFrame>
      )
    }
    if (isDesign) {
      return (
        <div key={index} className="h-[250px] flex items-center justify-center">
          <img
            src={src}
            alt={project.title}
            onClick={() => setPreviewImage(src)}
            className="max-h-full w-auto object-contain cursor-zoom-in"
          />
        </div>
      )
    }
    return (
      <div
        key={index}
        className="w-full h-[250px] overflow-hidden flex items-center justify-center "
      >
        <img
          src={src}
          alt={project.title}
          onClick={() => setPreviewImage(src)}
          className="max-h-full w-auto object-contain cursor-zoom-in rounded-xl"
        />
      </div>
    )
  }

  return (
    <>
      <div className="min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden ">
        <div className="bg-[var(--color-beige)] h-[260px] relative overflow-hidden py-1">
          {video ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setPreviewVideo(youtubeUrl)}
            >
              <img
                src={project.thumbnail
                  ? project.thumbnail
                  : `https://img.youtube.com/vi/${video}/hqdefault.jpg`
                }
                alt="Video thumbnail"
                className="w-full object-top object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-black px-4 py-2 rounded-full text-white text-lg">
                  ▶
                </div>
              </div>
            </div>

          ) : isImageArray && image.length > 0 ? (
            <div className="w-full flex items-center justify-center relative">
              {image.length > 2 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 z-10 px-3 text-2xl text-[var(--color-accent)]"
                  >
                    &#8592;
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-0 z-10 px-3 text-2xl text-[var(--color-accent)]"
                  >
                    &#8594;
                  </button>
                </>
              )}

              <div className="flex justify-center items-center gap-4">
                {visibleImages.map(({ src, index }) =>
                  renderImage(src, index)
                )}
              </div>
            </div>

          ) : typeof image === 'string' ? (

            <div className="w-full flex items-center justify-center">
              {renderImage(image, 0)}
            </div>

          ) : null}
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <p className="text-sm text-[var(--color-text-main)]">
              {project.category}
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-accent)]">
              {project.company}
            </h3>

            <h4 className="text-lg font-semibold text-[var(--color-text-main)]">
              {project.title}
            </h4>

            <p
              className={`text-sm text-gray-600 mt-2 ${!isExpanded ? 'line-clamp-3' : ''
                }`}
            >
              {project.description}
            </p>

            {project.description.length > 120 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[var(--color-accent)] hover:underline text-sm mt-1"
              >
                {isExpanded ? 'Läs mindre' : 'Läs mer..'}
              </button>
            )}

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-[80vh] rounded-lg"
          />
        </div>
      )}

      {previewVideo && (
        <div
          onClick={() => setPreviewVideo(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={previewVideo}
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard