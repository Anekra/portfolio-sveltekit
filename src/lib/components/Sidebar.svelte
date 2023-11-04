<script>
	import Logo from '$lib/assets/icons/portfolio_logo.svelte';
	import Icon from '@iconify/svelte';
	import { theme as darkMode } from '../stores/theme';
	import { page } from '$app/stores';
	import { sidebarOpened } from '$lib/stores/sidebarOpened';

	function closeSidebar() {
		sidebarOpened.set(false);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<aside
	class="{$sidebarOpened
		? 'visible translate-x-0 bg-black/50 opacity-100 backdrop-blur-sm'
		: 'invisible -translate-x-full opacity-0'} fixed left-0 z-[1] w-full transition-all duration-500"
	on:click={closeSidebar}

>
	<div
		class="relative flex h-screen w-[240px] flex-col gap-2 rounded-[0_10px_10px_0] bg-light p-6 dark:bg-dark"
		on:click={(e) => {e.stopPropagation()}}
		role="listitem"
	>
		<button
			class="absolute -right-[15px] top-[20px] text-primaryContainer dark:text-light"
			on:click={closeSidebar}
		>
			<Icon icon="iconamoon:arrow-left-6-circle-fill" class="text-4xl" />
		</button>
		<div class="pb-8">
			<Logo color={$darkMode ? '#73ACCA' : '#004066'} />
		</div>
		<a
			href="/"
			class="{$page.route.id === '/'
				? 'bg-primaryContainer text-light dark:bg-secondary dark:text-dark'
				: 'text-black/80 dark:text-neutral'} 
      flex items-center gap-4 rounded-xl p-2"
		>
			<Icon icon="ic:round-home" class="text-2xl" />
			<p class="text-lg">Home</p>
		</a>
		<a
			href="/portfolio"
			class="{$page.route.id === '/portfolio'
				? 'bg-primaryContainer text-light dark:bg-secondary dark:text-dark'
				: 'text-black/80 dark:text-neutral'} 
      flex items-center gap-4 rounded-xl p-2"
		>
			<Icon icon="dashicons:portfolio" class="text-2xl" />
			<p class="text-lg">Portfolio</p>
		</a>
		<a
			href="/blog"
			class="{$page.route.id === '/blog'
				? 'bg-primaryContainer text-light dark:bg-secondary dark:text-dark'
				: 'text-black/80 dark:text-neutral'}
      flex items-center gap-4 rounded-xl p-2"
		>
			<Icon icon="fluent:book-globe-24-filled" class="text-2xl" />
			<p class="text-lg">Blog</p>
		</a>
		<a
			href="/contact"
			class="{$page.route.id === '/contact'
				? 'bg-primaryContainer text-light dark:bg-secondary dark:text-dark'
				: 'text-black/80 dark:text-neutral'} 
      flex items-center gap-4 rounded-xl p-2"
		>
			<Icon icon="mdi:contact-mail" class="text-2xl" />
			<p class="text-lg">Contact</p>
		</a>
	</div>
</aside>
