import { h } from 'preact'
import { useState } from 'preact/hooks'

interface Technology {
  name: string
  color: string
}

// get props from parent
interface Props {
  name: string
  stack: string
  technologies: Technology[]
  githubUrl: string
  demoUrl: string
  image: string
  coverImage: string
}

export default function ProjectCard({image, coverImage, name, githubUrl, demoUrl, technologies, stack}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  function hoverIn() {
    setIsHovered(true)
  }

  function hoverOut() {
    setIsHovered(false)
  }

  function redirectGithub() {
    window.open(githubUrl, '_blank')
  }
  
  return (
    <article class={`flex aspect-video rounded-lg overflow-hidden shadow-sm relative border-2 ${stack === 'front' ? ' border-primary-400' : ' border-secondary-400'}`} id="project-card" onMouseOver={hoverIn} onMouseLeave={hoverOut}>
      <div className="flex gap-4 flex-wrap items-center justify-start w-full h-fit mt-auto mb-2 pl-2">
        {technologies.map((technology, index) => (
          <span style={`transition-delay: ${index * 70}ms`} class={`transition-all duration-500 ease-in-out z-10 h-fit ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div class={`[word-wrap: break-word] flex h-[32px] items-center justify-between rounded-[16px] text-white border-2 border-${technology.color}-800 backdrop-filter backdrop-blur-sm bg-opacity-30 bg-primary-700 px-[12px] py-0 text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:border-${technology.color}-700 hover:!shadow-none`}>
              { technology.name }
            </div>
          </span>
        ))}
      </div>
      <img class="absolute top-0 w-full" src={image} alt={`An preview of the project named ${name}`}/>
      <img class={`absolute top-0 w-full transition-transform ease-in ${isHovered ? 'translate-y-0' : '-translate-y-full'}`} src={coverImage} alt={`An cover preview of the project named ${name}`}/>
      <button onClick={redirectGithub} class="absolute right-2 bottom-2 bg-[#171515] text-white px-4 py-2 rounded border border-gray-700 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-800 flex items-center gap-2">
        <img class="w-6 aspect-square" src="github-mark-white.svg" alt="" />
        <img class="h-6" src="GitHub_Logo_White.png" alt="" srcset="" />
      </button>
      <span class={`absolute left-1/2 top-0 -translate-x-1/2 rounded-md rounded-t-none px-6 border-2 border-t-0 text-secondary-200 dark:text-white  font-medium ${stack === 'front' ? 'dark:bg-primary-200 bg-primary-700 border-primary-400' : 'dark:bg-secondary-200 bg-secondary-700 border-secondary-400'}`}>
        { stack === 'front' ? 'Front-end' : 'Back-end'}
      </span>
    </article>
  )
}
