<script>
	import Logo from '$lib/assets/icons/portfolio_logo.svelte';
	import Icon from '@iconify/svelte';
	import { theme as darkMode } from '../stores/theme';
	import { browser } from '$app/environment';
	import { handleHover } from '$lib/utils/handleHover';
	import { handleFocus } from '$lib/utils/handleFocus';

	const setTheme = () => {
		darkMode.set(!$darkMode);
		localStorage.theme = $darkMode ? 'dark' : 'light';
		$darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	/**
	 * @type {number}
	 */
	$: y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header
	class="{y === 0
		? 'bg-transparent dark:bg-transparent'
		: 'bg-primary shadow-[0_0.5px_0.5px_#334041] dark:bg-primaryContainer dark:shadow-[0_0.5px_0.5px_#69ABFF]'} fixed top-0 z-[1] h-16 w-full rounded-[0_0_10px_10px] px-12 py-2 dark:text-primary"
>
	<nav class="flex items-center justify-between">
		<div class="flex flex-shrink-0 items-center gap-4 text-white">
			<div class="md:hidden">
				<button
					class="flex items-center text-black hover:text-white"
					on:mouseover={handleHover}
					on:mouseleave={handleHover}
					on:focus={() => handleFocus}
				>
					<Icon icon="mingcute:menu-fill" class="text-4xl" />
				</button>
			</div>
			<a href="/" on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
				<Logo mainColor={$darkMode ? '#73ACCA' : '#004066'} />
			</a>
		</div>
		<div class="hidden font-bold text-onPrimary dark:text-secondary md:flex">
			<a
				href="/"
				class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			>
				Home
			</a>
			<a
				href="/portfolio"
				class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			>
				Portfolio
			</a>
			<a
				href="#responsive"
				class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			>
				Blog
			</a>
			<a
				href="#responsive"
				class="hoverable rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white dark:hover:bg-primary dark:hover:text-black"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
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
					class="absolute bottom-0 top-0 m-[auto_0] h-6 w-16 cursor-pointer appearance-none rounded-full bg-white py-4 after:absolute after:bottom-[0] after:left-1 after:top-[0] after:m-[auto_0] after:h-6 after:w-6 after:translate-x-0 after:rounded-full after:bg-onPrimary after:duration-500 checked:after:h-6 checked:after:w-6 checked:after:translate-x-8 checked:after:rounded-full dark:bg-black dark:after:bg-secondary"
					on:click={setTheme}
					on:mouseover={handleHover}
					on:mouseleave={handleHover}
					on:focus={() => handleFocus}
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
