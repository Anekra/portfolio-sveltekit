<script>
	import viewport from '$lib/utils/intersectionObserver';
	import Icon from '@iconify/svelte';

	export let /** @type {string[]} */ projects = [];
	let currentProject = 0;
	let /** @type {number} */ width;

	function handleNextBtn() {
		++currentProject;
	}
	function handlePreviousBtn() {
		--currentProject;
	}
</script>

<svelte:window bind:innerWidth={width} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="align-center flex flex-col items-center justify-center gap-6 px-6 pt-8">
	<div class="m-auto flex w-fit flex-col items-center justify-center" role="group">
		<h2
			id="mainTittle1"
			class="hide-from-left text-2xl font-bold text-onPrimary dark:text-primary"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			Portfolio
		</h2>
		<h2
			id="subTittle1"
			class="hide-from-right text-2xl font-bold"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			Latest Projects
		</h2>
	</div>
	<div class="flex flex-col gap-4">
		<div class="flex justify-between">
			<p>My projects</p>
			<a href="#seeall"
				><p class="hover:cursor-pointer hover:text-onPrimary dark:hover:text-primary">see all</p>
			</a>
		</div>
		<div class="flex flex-col gap-2">
			<div
				class="max-w-[400px] overflow-hidden md:max-w-[750px] lg:max-w-[997px] mobile:max-w-[290px]"
			>
				{#if projects.length > 0}
					<div
						class="carousel flex transition-transform duration-500 ease-out md:gap-6"
						style="--current:{currentProject};"
					>
						{#each projects as project}
							<div
								class="hide-from-left flex cursor-pointer flex-col items-center gap-2"
								use:viewport
								on:enterViewport
								on:exitViewport
							>
								<img
									src={project}
									alt="Portfolio"
									class="max-w-[400px] rounded-xl md:max-w-[359px] lg:max-w-[485px] mobile:max-w-[290px]"
								/>
								<p>Blog</p>
							</div>
						{/each}
					</div>
				{:else}
					<div class="flex cursor-default flex-col items-center gap-2">
						<div class="max:w-[480px] relative max-h-[300px] rounded-xl bg-neutral">
							<Icon icon="fa6-regular:image" class="absolute inset-0 m-auto text-5xl" />
							<p class="absolute inset-0 top-[60%] m-auto text-2xl">No images found</p>
						</div>
					</div>
				{/if}
			</div>
			<div
				class="hide-from-bottom flex justify-center gap-2"
				use:viewport
				on:enterViewport
				on:exitViewport
			>
				{#if currentProject > 0}
					<button on:click={handlePreviousBtn}>
						<Icon
							icon="mingcute:left-fill"
							class="rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
						/>
					</button>
				{/if}
				{#if (width <= 768 && currentProject < projects.length - 1) || (width > 768 && currentProject < projects.length - 2)}
					<button on:click={handleNextBtn}>
						<Icon
							icon="mingcute:right-fill"
							class="rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
						/>
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		div.carousel {
			transform: translateX(calc(var(--current) * -51%));
		}
	}
	@media (max-width: 768px) {
		div.carousel {
			transform: translateX(calc(var(--current) * -100%));
		}
	}
</style>
