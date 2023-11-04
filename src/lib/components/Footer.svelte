<script>
	import Icon from '@iconify/svelte';
	import Logo from '$lib/assets/icons/portfolio_logo_icon.svelte';
	import { theme as darkMode } from '$lib/stores/theme';
	import { page } from '$app/stores';
</script>

<footer
	class="absolute bottom-0 flex w-screen flex-col items-center justify-between py-2 shadow-[0_-0.5px_2px_#334041] dark:shadow-[0_-0.5px_2px_#ffffff] sm:h-[127px]"
>
	<div class="flex h-full w-full items-center justify-around py-1">
		<div class="flex w-36 mobileMd:flex-wrap justify-center gap-2 sm:w-64 md:w-72 px-4">
			<a href="https://github.com/anekra" class="btn">
				<Icon icon="mdi:github" class="text-3xl sm:text-4xl md:text-5xl" />
			</a>
			<a href="#google" class="btn">
				<Icon icon="mdi:google" class="text-3xl sm:text-4xl md:text-5xl" />
			</a>
			<a href="#linkdin" class="btn">
				<Icon icon="mdi:linkedin" class="text-3xl sm:text-4xl md:text-5xl" />
			</a>
			<a href="#instagram" class="btn">
				<Icon icon="mdi:instagram" class="text-3xl sm:text-4xl md:text-5xl" />
			</a>
		</div>
		<div class="flex w-36 justify-center sm:w-64 md:w-72">
			<button
				class="btn flex cursor-pointer items-center gap-1 border border-black px-2 py-1 hh:hover:border-transparent dark:border-white hh:dark:hover:border-transparent"
			>
				<Icon icon="mdi:google-play" class="text-2xl sm:text-4xl" />
				<div class="flex flex-col items-start gap-1 leading-none">
					<h3 class="text-[8px] sm:text-[11px]">GET IT ON</h3>
					<h3 class="text-start text-[12px] font-bold sm:text-lg sm:tracking-widest">Google Play</h3>
				</div>
			</button>
		</div>
	</div>
	<div class="absolute sm:top-3 mobileMd:top-8 mx-4 flex">
		<a
			href={$page.route.id}
			class="btn border border-black p-1 hh:hover:border-transparent dark:border-white hh:dark:hover:border-transparent sm:p-2"
		>
			<Logo color={$darkMode ? 'white' : 'black'} />
		</a>
	</div>
	<div class="flex justify-center">
		<h1 class="text-xl text-onPrimary dark:text-secondary">© 2023 Andika Eka Putra</h1>
	</div>
</footer>
