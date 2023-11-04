<script>
	import viewport from '$lib/utils/intersectionObserver';
	import Icon from '@iconify/svelte';

	let skillClicked = false;
	let elementId = 0;
	let fade = false;

	/** @param {number} id */
	function onSkillClicked(id) {
		fade = true;
		elementId = id;
		skillClicked = true;
		setTimeout(() => {
			fade = false;
		}, 200);
	}
	function onMouseLeaveSkill() {
		skillClicked = false;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col justify-center gap-2 px-6 pb-6 pt-20 md:px-6 lg:px-28 xl:px-44">
	<div class="m-auto flex w-fit flex-col items-center justify-center">
		<h2
			class="hide-from-left text-2xl font-bold text-onPrimary dark:text-primary"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			Skills
		</h2>
		<h2 class="hide-from-right text-2xl font-bold" use:viewport on:enterViewport on:exitViewport>
			I'm Good At
		</h2>
	</div>
	<div
		class="items-around flex flex-wrap items-center justify-evenly gap-6 py-6 text-onPrimary dark:text-primary sm:flex-row sm:gap-2"
	>
		<div
			class="hide-from-left h-[220px] w-[220px] cursor-pointer flex-col items-center justify-center rounded-xl bg-onPrimary text-white dark:bg-primaryContainer dark:text-white sm:bg-transparent sm:text-onPrimary sm:hover:bg-primary sm:hover:text-black sm:dark:bg-transparent sm:dark:text-primary sm:dark:hover:bg-primaryContainer sm:dark:hover:text-white sm:dark:hover:shadow-neonWhite xl:h-[300px] xl:w-[300px]"
			on:mouseleave={onMouseLeaveSkill}
			on:click={() => onSkillClicked(1)}
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			{#if skillClicked && elementId === 1}
				<div
					class="{fade && elementId === 1 ? 'cursor-wait opacity-0' : 'opacity-100'}
						flex h-full cursor-default items-center justify-center"
				>
					<Icon icon="devicon:figma" class="text-center text-[140px] lg:text-[160px]" />
				</div>
			{:else}
				<div class="flex h-full flex-col items-center justify-center rounded-xl">
					<Icon icon="mdi:art" class="text-[120px] xl:text-[150px]" />
					<h2 class="w-[200px] !cursor-pointer text-center text-2xl font-bold xl:text-3xl">
						Web & Mobile App Design
					</h2>
				</div>
			{/if}
		</div>
		<div
			class="hide-from-left h-[220px] w-[220px] cursor-pointer flex-col items-center justify-center rounded-xl bg-onPrimary text-white dark:bg-primaryContainer dark:text-white sm:bg-transparent sm:text-onPrimary sm:hover:bg-primary sm:hover:text-black sm:dark:bg-transparent sm:dark:text-primary sm:dark:hover:bg-primaryContainer sm:dark:hover:text-white sm:dark:hover:shadow-neonWhite xl:h-[300px] xl:w-[300px]"
			on:mouseleave={onMouseLeaveSkill}
			on:click={() => onSkillClicked(2)}
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			{#if skillClicked && elementId === 2}
				<div
					class="{fade && elementId === 2 ? 'cursor-wait opacity-0' : 'opacity-100'} 
						flex h-full cursor-default flex-col justify-between p-4"
				>
					<Icon icon="devicon:androidstudio" class="text-[60px] lg:text-[70px]" />
					<Icon icon="logos:compose-multiplatform" class="self-center text-[60px] lg:text-[70px]" />
					<Icon icon="logos:kotlin-icon" class="self-end text-[60px] lg:text-[70px]" />
				</div>
			{:else}
				<div class="flex h-full flex-col items-center justify-center rounded-xl">
					<Icon icon="mingcute:android-fill" class="text-[120px] xl:text-[150px]" />
					<h2 class="w-[200px] !cursor-pointer text-center text-2xl font-bold xl:text-3xl">
						Android Development
					</h2>
				</div>
			{/if}
		</div>
		<div
			class="hide-from-left h-[220px] w-[220px] cursor-pointer flex-col items-center justify-center rounded-xl bg-onPrimary text-white dark:bg-primaryContainer dark:text-white sm:bg-transparent sm:text-onPrimary sm:hover:bg-primary sm:hover:text-black sm:dark:bg-transparent sm:dark:text-primary sm:dark:hover:bg-primaryContainer sm:dark:hover:text-white sm:dark:hover:shadow-neonWhite xl:h-[300px] xl:w-[300px]"
			on:mouseleave={onMouseLeaveSkill}
			on:click={() => onSkillClicked(3)}
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			{#if skillClicked && elementId === 3}
				<div
					class="{fade && elementId === 3 ? 'cursor-wait opacity-0' : 'opacity-100'} 
						grid h-full cursor-default grid-cols-4 place-items-center"
				>
					<Icon icon="logos:javascript" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:typescript" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:express" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:nextjs" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:svelte" class="text-4xl xl:text-5xl" />
					<Icon icon="logos:nuxt-icon" class="text-4xl xl:text-5xl" />
					<Icon icon="logos:kotlin-icon" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:java" class="text-4xl xl:text-5xl" />
					<Icon icon="devicon:spring" class="text-4xl xl:text-5xl " />
					<Icon icon="simple-icons:springboot" class="text-4xl text-[#77bc1f] xl:text-5xl" />
					<Icon icon="devicon:go" class="text-4xl xl:text-5xl" />
					<Icon icon="logos:gin" class="text-4xl xl:text-5xl" />
				</div>
			{:else}
				<div class="flex h-full flex-col items-center justify-center rounded-xl">
					<Icon icon="icon-park-solid:source-code" class="text-[120px] xl:text-[150px]" />
					<h2 class="w-[200px] !cursor-pointer text-center text-2xl font-bold xl:text-3xl">
						Full Stack Development
					</h2>
				</div>
			{/if}
		</div>
	</div>
</div>
