import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const appliedTheme = theme === 'system' ? systemTheme : theme;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(appliedTheme);
    localStorage.setItem('theme', theme);

    const checkIfClickedOutside = (e: any) => {
      console.log(e.target.id)
      if (isOpen && e.target.id !== "menu-button" && e.target.id !== "menu-option") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [theme, isOpen]);

  const handleThemeChange = (e: any) => {
    setTheme(e.target.value);
  };

  return (
    <div class="relative inline-block text-left">
      <div>
        <button onClick={() => setIsOpen(!isOpen)} type="button" id="menu-button" aria-expanded="true" aria-haspopup="true" class="flex justify-center items-center gap-2 w-full rounded-md border-none px-4 py-2 dark:bg-secondary-100 dark:text-white text-sm font-medium transition-colors focus:outline-none focus:bg-secondary-900 dark:focus:bg-secondary-200 bg-white hover:bg-secondary-900 dark:hover:bg-secondary-200 shadow-md dark:shadow-secondary-300 text-secondary-300">
          Theme
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg dark:bg-secondary-100 bg-white ring-1 ring-secondary-100 ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div class="py-1" role="none">
            <button id="menu-option" onClick={() => handleThemeChange({target: {value: 'system'}})} class={`block w-full text-left px-4 py-2 text-sm text-secondary-300 dark:text-white hover:bg-primary-900 dark:hover:bg-secondary transition-all ${theme === 'system' ? 'bg-primary dark:bg-tertiary dark:text-primary' : ''}`} role="menuitem">System</button>
            <button id="menu-option" onClick={() => handleThemeChange({target: {value: 'dark'}})} class={`block w-full text-left px-4 py-2 text-sm text-secondary-300 dark:text-white hover:bg-primary-900 dark:hover:bg-secondary transition-all ${theme === 'dark' ? 'bg-primary dark:bg-tertiary dark:text-primary' : ''}`} role="menuitem">Dark</button>
            <button id="menu-option" onClick={() => handleThemeChange({target: {value: 'light'}})} class={`block w-full text-left px-4 py-2 text-sm text-secondary-300 dark:text-white hover:bg-primary-900 dark:hover:bg-secondary transition-all ${theme === 'light' ? 'bg-primary dark:bg-tertiary dark:text-primary' : ''}`} role="menuitem">Light</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
