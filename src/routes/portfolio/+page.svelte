<script>
	import p1 from '$lib/assets/images/p1.jpg';
	import p2 from '$lib/assets/images/p2.jpg';
	import p3 from '$lib/assets/images/p3.jpg';
	import { scrolling } from '$lib/stores/scrolling';
	import viewport from '$lib/utils/intersectionObserver';
	import Icon from '@iconify/svelte';

	let /** @type {string[]} */ projects = [p1, p2, p3];
	scrolling.set(0);

</script>

<main class="pb-48">
	<section class="flex flex-col justify-center gap-8">
		<div class="px-6 pt-4 sm:pt-12">
			<h1
				class="text-center text-4xl opacity-0 transition-opacity duration-1000 sm:text-5xl"
				use:viewport
				on:enterViewport
				on:exitViewport
			>
				LATEST <span
					class="bg-gradient-to-r from-onPrimary to-tertiary bg-clip-text text-transparent dark:from-primary dark:to-light"
					>PROJECTS</span
				>
			</h1>
		</div>
		<div class="px-6">
			{#if projects.length > 0}
				<div class="flex flex-wrap items-center justify-center gap-6">
					{#each projects as project, i}
						<div
							class="hide-from-left flex cursor-pointer flex-col items-center gap-2"
							style="--delay:{$scrolling === 0 ? i : 0}"
							use:viewport
							on:enterViewport
							on:exitViewport
						>
							<img
								src={project}
								alt="Portfolio"
								class="max-w-[400px] rounded-xl mobile:max-w-[290px]"
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div class="flex cursor-default flex-col items-center gap-2">
					<div class="relative max-h-[300px] max-w-[480px] rounded-xl bg-neutral">
						<Icon icon="fa6-regular:image" class="absolute inset-0 m-auto text-5xl" />
						<p class="absolute inset-0 top-[60%] m-auto text-2xl">No images found</p>
					</div>
				</div>
			{/if}
		</div>
	</section>
</main>

<style>
	div.hide-from-left {
		transition-delay: calc(var(--delay) * 200ms);
	}
</style>
