import { h } from 'preact'
import { useState } from 'preact/hooks'

interface Technology {
  name: string
  color: string
}

// get props from parent
interface Props {
  name: string
  technologies: Technology[]
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
    <article class="flex aspect-video rounded-lg overflow-hidden relative" id="project-card" onMouseOver={hoverIn} onMouseLeave={hoverOut}>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        ({technologies.map((technology, index) => (
          <span style={`transition-delay: ${index * 70}ms`} class={`transition-all duration-500 ease-in-out z-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div
              class={`[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border-2 border-${technology.color}-800 bg-transparent px-[12px] py-0 text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:border-${technology.color}-700 hover:!shadow-none`}
            >
              { technology.name }
            </div>
          </span>
        ))})
      </div>
      <img class="absolute top-0 w-full" src={image} alt={`An preview of the project named ${name}`}/>
      <img class={`absolute top-0 w-full transition-transform  ${isHovered ? 'translate-y-0' : '-translate-y-full'}`} src={coverImage} alt={`An cover preview of the project named ${name}`}/>
    </article>
  )
}
