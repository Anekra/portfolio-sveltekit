<script>
	import Icon from '@iconify/svelte';
	import Logo from '$lib/assets/icons/portfolio_logo_icon.svelte';
	import { theme as darkMode } from '$lib/stores/theme';
	import { handleHover } from '$lib/utils/handleHover';
	import { handleFocus } from '$lib/utils/handleFocus';
</script>

<footer
	class="flex items-center gap-2 rounded-[10px_10px_0_0] bg-primary py-6 shadow-[0_-0.5px_0.5px_#334041] dark:bg-primaryContainer dark:shadow-[0_-0.5px_0.5px_#69ABFF]"
>
	<div class="flex flex-grow justify-center gap-2">
		<button
			class="btn"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<Icon icon="mdi:github" class="text-5xl" />
		</button>
		<button
			class="btn"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<Icon icon="mdi:google" class="text-5xl" />
		</button>
		<button
			class="btn"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<Icon icon="mdi:linkedin" class="text-5xl" />
		</button>
		<button
			class="btn"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<Icon icon="mdi:instagram" class="text-5xl" />
		</button>
	</div>
	<div class="flex flex-grow flex-col items-center gap-2">
		<a
			href="/"
			class="btn"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}><Logo color={$darkMode ? 'white' : 'black'} /></a
		>
		<h1 class="text-xl text-onPrimary dark:text-secondary">© 2023 Andika Eka Putra</h1>
	</div>
	<div class="flex flex-grow justify-center">
		<button
			class="btn flex cursor-pointer items-center gap-1 rounded border border-black px-2 py-1 hover:border-transparent dark:hover:border-transparent dark:border-white"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<Icon icon="mdi:google-play" class="text-4xl" />
			<div class="flex flex-col items-start leading-none">
				<h3 class="text-[11px]">GET IT ON</h3>
				<h3 class="text-lg font-bold tracking-widest">Google Play</h3>
			</div>
		</button>
	</div>
</footer>
