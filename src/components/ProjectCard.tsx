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
    // <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
    // <article class={`flex aspect-video rounded-lg overflow-hidden shadow-md relative border-2 ${stack === 'front' ? ' border-emerald-400' : ' border-sky-400'}`} id="project-card" onMouseOver={hoverIn} onMouseLeave={hoverOut}>
    <article class={`flex aspect-video rounded-lg overflow-hidden relative `} id="project-card" onMouseOver={hoverIn} onMouseLeave={hoverOut}>
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        ({technologies.map((technology, index) => (
          <span style={`transition-delay: ${index * 70}ms`} class={`transition-all duration-500 ease-in-out z-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div class={`[word-wrap: break-word] my-[5px] flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] text-white border-2 border-${technology.color}-800 backdrop-filter backdrop-blur-sm bg-opacity-30 bg-primary-700 px-[12px] py-0 text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:border-${technology.color}-700 hover:!shadow-none`}>
              { technology.name }
            </div>
          </span>
        ))})
      </div>
      <img class="absolute top-0 w-full" src={image} alt={`An preview of the project named ${name}`}/>
      <img class={`absolute top-0 w-full transition-transform ease-in ${isHovered ? 'translate-y-0' : '-translate-y-full'}`} src={coverImage} alt={`An cover preview of the project named ${name}`}/>
      {/* Github button */}
      <button onClick={redirectGithub} class="absolute right-2 bottom-2 bg-[#171515] text-white px-4 py-2 rounded border border-gray-700 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-800 flex items-center gap-2">
        <img class="w-6 aspect-square" src="github-mark-white.svg" alt="" />
        <img class="h-6" src="GitHub_Logo_White.png" alt="" srcset="" />
      </button>
      <span class={`absolute left-1/2 top-0 -translate-x-1/2 rounded-md rounded-t-none px-6 border-2 border-t-0 text-secondary-200 dark:text-white font-medium ${stack === 'front' ? 'bg-emerald-200 dark:bg-emerald-700 border-emerald-400' : 'bg-sky-200 dark:bg-sky-700 border-sky-400'}`}>
        { stack === 'front' ? 'Front-end' : 'Back-end'}
      </span>
    </article>
  )
}
