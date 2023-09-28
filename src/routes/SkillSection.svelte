<script>
	import { handleFocus } from '$lib/utils/handleFocus';
	import { handleHover } from '$lib/utils/handleHover';
	import Icon from '@iconify/svelte';

	let skillClicked = false;

	let elementId = 0;

	/**
	 * @param {number} id
	 */
	function onSkillClicked(id) {
		elementId = id;
		skillClicked = true;
	}
	/**
	 * @param {MouseEvent} e
	 */
	function onMouseLeaveSkill(e) {
		skillClicked = false;
		handleHover(e);
	}
</script>

<section class="flex flex-col justify-center gap-2 px-44 py-6">
	<div
		class="flex flex-col items-center w-fit m-auto justify-center"
		role="group"
		on:mouseover={handleHover}
		on:mouseleave={handleHover}
		on:focus={() => handleFocus}
	>
		<h2 class="text-2xl font-bold text-onPrimary dark:text-primary">Skills</h2>
		<h2 class="text-2xl font-bold">I'm Good At</h2>
	</div>
	<div class="flex justify-evenly gap-6 p-6 text-onPrimary dark:text-primary">
		<button
			class="w-[300px] flex-grow cursor-pointer flex-col items-center justify-center rounded-xl p-6 hover:bg-primary hover:text-black dark:hover:bg-primaryContainer dark:hover:text-white dark:hover:shadow-neonWhite"
			on:mouseover={handleHover}
			on:mouseleave={onMouseLeaveSkill}
			on:focus={() => handleFocus}
			on:click={() => onSkillClicked(1)}
		>
			{#if skillClicked && elementId === 1}
				<div class="flex h-full w-full cursor-default items-center justify-center">
					<Icon icon="devicon:figma" class="text-center text-[160px]" />
				</div>
			{:else}
				<div class="flex w-full flex-col items-center justify-center rounded-xl p-6">
					<Icon icon="mdi:art" class="text-[150px]" />
					<h2 class="max-w-[220px] text-center text-3xl font-bold">Web & Mobile App Design</h2>
				</div>
			{/if}
		</button>
		<button
			class="w-[300px] flex-grow cursor-pointer flex-col items-center justify-center rounded-xl p-6 hover:bg-primary hover:text-black dark:hover:bg-primaryContainer dark:hover:text-white dark:hover:shadow-neonWhite"
			on:mouseover={handleHover}
			on:mouseleave={onMouseLeaveSkill}
			on:focus={() => handleFocus}
			on:click={() => onSkillClicked(2)}
		>
			{#if skillClicked && elementId === 2}
				<div class="flex h-full w-[300px] cursor-default flex-col justify-between px-6">
					<Icon icon="devicon:androidstudio" class="text-[70px]" />
					<Icon icon="logos:compose-multiplatform" class="self-center text-[70px]" />
					<Icon icon="logos:kotlin-icon" class="self-end text-[70px]" />
				</div>
			{:else}
				<div class="flex w-full flex-col items-center justify-center rounded-xl p-6">
					<Icon icon="mingcute:android-fill" class="text-[150px]" />
					<h2 class="max-w-[220px] text-center text-3xl font-bold">Android Development</h2>
				</div>
			{/if}
		</button>
		<button
			class="w-[300px] flex-grow cursor-pointer rounded-xl hover:bg-primary hover:text-black active:cursor-wait dark:hover:bg-primaryContainer dark:hover:text-white dark:hover:shadow-neonWhite"
			on:mouseover={handleHover}
			on:mouseleave={onMouseLeaveSkill}
			on:focus={() => handleFocus}
			on:click={() => onSkillClicked(3)}
		>
			{#if skillClicked && elementId === 3}
				<div class="grid h-full w-full cursor-default grid-cols-4 place-items-center">
					<Icon icon="logos:javascript" class="text-5xl" />
					<Icon icon="devicon:typescript" class="text-5xl" />
					<Icon icon="devicon:express" class="text-5xl" />
					<Icon icon="devicon:nextjs" class="text-5xl" />
					<Icon icon="devicon:svelte" class="text-5xl" />
					<Icon icon="logos:nuxt-icon" class="text-5xl" />
					<Icon icon="logos:kotlin-icon" class="text-5xl" />
					<Icon icon="devicon:java" class="text-5xl" />
					<Icon icon="devicon:spring" class="text-5xl " />
					<Icon icon="simple-icons:springboot" class="text-5xl text-[#77bc1f]" />
					<Icon icon="devicon:go" class="text-5xl" />
					<Icon icon="logos:gin" class="text-5xl" />
				</div>
			{:else}
				<div class="flex w-full flex-col items-center justify-center rounded-xl p-6">
					<Icon icon="icon-park-solid:source-code" class="text-[150px]" />
					<h2 class="max-w-[220px] text-center text-3xl font-bold">Full Stack Development</h2>
				</div>
			{/if}
		</button>
	</div>
</section>
