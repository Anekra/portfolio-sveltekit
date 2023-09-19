<script>
	import Logo from '$lib/icons/portfolio_logo.svelte';
	import Icon from '@iconify/svelte';
	import { theme as darkMode } from './stores/theme';
	import { browser } from '$app/environment';

	const setTheme = () => {
		darkMode.set(!$darkMode);
		localStorage.theme = $darkMode ? 'dark' : 'light';
		$darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};
</script>

<header>
	<nav
		class="flex h-16 flex-wrap items-center justify-between bg-primary px-12 dark:bg-onPrimary dark:text-primary"
	>
		<div class="flex flex-shrink-0 items-center gap-4 text-white">
			<div class="md:hidden">
				<button class="flex items-center text-black hover:text-white">
					<Icon icon="mingcute:menu-fill" class="text-4xl" />
				</button>
			</div>
			<Logo mainColor={$darkMode ? '#73ACCA' : '#004066'} />
		</div>
		<div class="hidden font-bold text-onPrimary dark:text-secondary md:flex">
			<a
				href="/"
				class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
			>
				Home
			</a>
			<a
				href="/portfolio"
				class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
			>
				Portfolio
			</a>
			<a
				href="#responsive"
				class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
			>
				Service
			</a>
			<a
				href="#responsive"
				class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
			>
				Blog
			</a>
			<a
				href="#responsive"
				class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
			>
				Contact
			</a>
		</div>
		<div class="relative h-8 w-16">
			{#if browser}
			<input
				type="checkbox"
				id="check"
				checked={$darkMode}
				class="absolute bottom-0 top-0 m-[auto_0] h-6 w-16 cursor-pointer appearance-none rounded-full bg-white py-4 after:absolute after:bottom-[0] after:left-1 after:top-[0] after:m-[auto_0] after:h-6 after:w-6 after:translate-x-0 after:rounded-full after:bg-primary after:duration-500 checked:after:h-6 checked:after:w-6 checked:after:translate-x-8 checked:after:rounded-full dark:bg-black dark:after:bg-onPrimary"
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
		</div>
	</nav>
</header>
