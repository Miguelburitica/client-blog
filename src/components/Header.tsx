import { useState } from 'preact/hooks'
import ThemeSwitcher from './ThemeSwitch'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen)
	}
	
	return (
		<nav class="flex justify-center w-full fixed backdrop-blur-sm top-0 shadow-md dark:shadow-secondary-200 px-2 z-10">
			<div class="flex justify-between items-center max-w-6xl w-full py-2">
				<h2 class="text-4xl">Miguel</h2>
				<ul class=" hidden md:flex gap-4">
					<li class="hover:text-primary transition-colors flex items-center justify-center">
						<a href="/#about">
							Home
						</a>
					</li>
					<li class="hover:text-primary transition-colors flex items-center justify-center">
						<a href="/#projects">
							Projects
						</a>
					</li>
					<li class="hover:text-primary transition-colors flex items-center justify-center">
						<a href="/interestes">
							Personal Interests
						</a>
					</li>
					<ThemeSwitcher />
				</ul>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-14 aspect-square md:hidden hover:bg-secondary-900 dark:hover:bg-secondary-200 transition-all rounded-full p-2 cursor-pointer" onClick={toggleMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
				<div className={`flex flex-col md:hidden w-full h-screen bg-primary-900 dark:bg-secondary-200 fixed top-0 left-0 z-50 transition-all duration-300 ease-linear ${isMenuOpen ? 'translate-x-0 left-0' : 'translate-x-full'}`}>
					<div className="flex justify-between items-center py-4 shadow-md dark:shadow-secondary-100 px-2">
						<h2 className="text-4xl">Miguel</h2>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-14 aspect-square transition-all rounded-full p-2 cursor-pointer hover:bg-secondary-900 dark:hover:bg-secondary-100" onClick={toggleMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</div>
					<ul className="flex flex-col pt-8 items-center justify-center">
						<li class="w-full">
							<a href="/#about" class="text-secondary-300 hover:bg-primary dark:text-white dark:hover:bg-secondary transition-all px-4 py-3 flex justify-start">
								Home
							</a>
						</li>
						<li class="w-full">
							<a href="/#projects" class="text-secondary-300 hover:bg-primary dark:text-white dark:hover:bg-secondary transition-all px-4 py-3 flex justify-start">
								Projects
							</a>
						</li>
						<li class="w-full mb-4">
							<a href="/interestes" class="text-secondary-300 hover:bg-primary dark:text-white dark:hover:bg-secondary transition-all px-4 py-3 flex justify-start">
								Personal Interests
							</a>
						</li>
						<ThemeSwitcher />
					</ul>
				</div>
			</div>
		</nav>
	)
}
