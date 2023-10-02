import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

// get props from parent
interface Props {
  name: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  image: string
  coverImage: string
}

export default function ProjectCard({image, coverImage, name, githubUrl, demoUrl, technologies}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  // how to make appear the technologies on hover animated one by one?

  
  function hoverIn() {
    setIsHovered(true)
  }

  function hoverOut() {
    setIsHovered(false)
  }
  return (
    <article class="flex aspect-video rounded-md overflow-hidden relative" id="project-card" onMouseOver={hoverIn} onMouseLeave={hoverOut}>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        ({technologies.map((technology, index) => (
          <span style={`transition-delay: ${index * 70}ms`} class={`text-xs text-secondary-300 bg-primary dark:bg-tertiary dark:text-primary px-2 py-1 rounded-sm transition-all duration-500 ease-in-out z-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            {technology}
            {index}
          </span>
        ))})
      </div>
      <img class="absolute top-0 w-full" src={image} alt={`An preview of the project named ${name}`}/>
      <img class={`absolute top-0 w-full transition-transform  ${isHovered ? 'translate-y-0' : '-translate-y-full'}`} src={coverImage} alt={`An cover preview of the project named ${name}`}/>
    </article>
  )
}
