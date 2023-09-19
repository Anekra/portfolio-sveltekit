import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/**
 * @type {import('svelte/store').Writable<boolean>}
 */
export const theme = writable(false);

if (browser) {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    theme.set(true);
  } else {
    document.documentElement.classList.remove('dark');
    theme.set(false);
  }
}

theme.subscribe(
  /**
   * @param {boolean} value
   */
  (value) => {
    if (browser) {
      localStorage.theme = value ? 'dark' : 'light'
    }
  }
);