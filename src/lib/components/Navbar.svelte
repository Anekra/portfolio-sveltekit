<script>
	import Logo from '$lib/assets/icons/portfolio_logo.svelte';
	import Icon from '@iconify/svelte';
	import { theme as darkMode } from '../stores/theme';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { sidebarOpened } from '$lib/stores/sidebarOpened';
	import { scrolling } from '$lib/stores/scrolling';

	const setTheme = () => {
		darkMode.set(!$darkMode);
		localStorage.theme = $darkMode ? 'dark' : '';
		$darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	/** @type {boolean | null} */
	let isScrollUp = null;

	if (browser) {
		let y = window.scrollY;
		window.onscroll = () => {
			scrolling.set(window.scrollY);
			if (y > $scrolling) isScrollUp = true;
			else if (y < $scrolling) isScrollUp = false;
			y = $scrolling;
		};
	}

	function openSidebar() {
		sidebarOpened.set(true)
	}
</script>

<header
	class="
		{$scrolling === 0 && $page.route.id === '/'
		? 'bg-transparent dark:bg-transparent'
		: 'bg-light shadow-[0_0.3px_2px_#334041] dark:bg-dark dark:shadow-[0_0.3px_2px_#ffffff]'}
		{isScrollUp === false ? '-translate-y-full' : 'translate-y-0'}
		{$page.route.id === '/'
		? 'fixed'
		: 'sticky'}
		top-0 z-[1] flex h-16 w-screen items-center justify-between py-2 pe-12 ps-8 transition-transform duration-500 dark:text-primary md:px-12"
>
	<nav class="flex items-center gap-4 text-white">
		<button class="flex items-center text-black hover:text-white md:hidden" on:click={openSidebar}>
			<Icon icon="mingcute:menu-fill" class="text-3xl text-[#004066] dark:text-[#73ACCA]" />
		</button>
		<a href="/" class="">
			<Logo color={$darkMode ? '#73ACCA' : '#004066'} />
		</a>
	</nav>
	<nav class="hidden font-bold text-onPrimary dark:text-secondary md:flex">
		<a
			href="/"
			class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
		>
			Home
		</a>
		<a
			href="/portfolio"
			class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
		>
			Portfolio
		</a>
		<a
			href="/blog"
			class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
		>
			Blog
		</a>
		<a
			href="/contact"
			class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
		>
			Contact
		</a>
	</nav>
	<nav class="relative h-8 w-16">
		{#if browser}
			<input
				type="checkbox"
				id="check"
				checked={$darkMode}
				class="absolute bottom-0 top-0 m-[auto_0] h-6 w-16 cursor-pointer appearance-none rounded-full bg-white py-4 after:absolute after:bottom-[0] after:left-1 after:top-[0] after:m-[auto_0] after:h-6 after:w-6 after:translate-x-0 after:rounded-full after:bg-onPrimary after:duration-500 checked:after:h-6 checked:after:w-6 checked:after:translate-x-8 checked:after:rounded-full dark:bg-black dark:after:bg-secondary"
				on:click={setTheme}
			/>
		{/if}
		{#if !$darkMode}
			<button on:click={setTheme}>
				<Icon
					icon="tabler:sun-filled"
					class="absolute bottom-0 left-1 top-0 m-[auto_0] text-2xl text-white"
				/>
			</button>
		{:else}
			<button on:click={setTheme}>
				<Icon
					icon="tabler:moon-filled"
					class="absolute bottom-0 right-[6px] top-0 m-[auto_0] text-xl text-black"
				/>
			</button>
		{/if}
	</nav>
</header>
