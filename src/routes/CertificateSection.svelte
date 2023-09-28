<script>
	import { handleFocus } from '$lib/utils/handleFocus';
	import { handleHover } from '$lib/utils/handleHover';
	import Logo1 from '$lib/assets/images/ubsi_logo.png';
	import Logo2 from '$lib/assets/images/sman4_logo.png';
	import Icon from '@iconify/svelte';

	let tab = 'certificate';

	/**
	 * @param {string} name
	 */
	function handleTab(name) {
		tab = name;
	}
</script>

<section class="flex flex-col items-center justify-center gap-4 px-44 py-12">
	<div
		class="relative flex h-11 w-fit gap-2"
		role="group"
		on:mouseover={handleHover}
		on:mouseleave={handleHover}
		on:focus={() => handleFocus}
	>
		<button class="flex w-32 flex-col" on:click={() => handleTab('certificate')}>
			<h2
				class="{tab === 'certificate'
					? 'text-onPrimary dark:text-primary'
					: 'text-neutral'} text-2xl font-bold hover:cursor-pointer hover:text-black dark:hover:text-white"
			>
				Certificate
			</h2>
		</button>
		<button class="flex w-32 flex-col" on:click={() => handleTab('education')}>
			<h2
				class="{tab === 'education'
					? 'text-onPrimary dark:text-primary'
					: 'text-neutral'} text-2xl font-bold hover:cursor-pointer hover:text-black dark:hover:text-white"
			>
				Education
			</h2>
		</button>
		<div class="absolute bottom-0 left-[calc(50%-132px)]">
			<hr
				class="{tab === 'education'
					? 'translate-x-[calc(100%+15px)]'
					: 'translate-x-0'} h-2 w-[10ch] rounded border-none bg-onPrimary text-2xl transition-all duration-300 hover:cursor-default dark:bg-primary"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
			/>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex justify-center gap-2">
			{#if tab === 'certificate'}
				<div class="flex h-[420px] w-[800px] flex-col items-center gap-2">
					<div
						class="relative h-[380px] w-[680px] cursor-default rounded-xl bg-neutral"
						role="feed"
						on:mouseover={handleHover}
						on:mouseleave={handleHover}
						on:focus={() => handleFocus}
					>
						<Icon
							icon="fa6-regular:image"
							class="absolute bottom-0 left-0 right-0 top-0 m-auto text-5xl"
						/>
					</div>
					<p
						class="text-xl"
						on:mouseover={handleHover}
						on:mouseleave={handleHover}
						on:focus={() => handleFocus}
					>
						Frontend
					</p>
				</div>
			{:else if tab === 'education'}
				<div class="flex h-[420px] w-[800px] cursor-default items-end justify-around rounded-xl">
					<div
						class="flex flex-col items-center gap-2"
						role="group"
						on:mouseover={handleHover}
						on:mouseleave={handleHover}
						on:focus={() => handleFocus}
					>
						<img src={Logo1} class="w-[360px]" alt="College Logo" />
						<p class="text-xl">College</p>
					</div>
					<div
						class="flex flex-col items-center gap-2"
						role="group"
						on:mouseover={handleHover}
						on:mouseleave={handleHover}
						on:focus={() => handleFocus}
					>
						<img src={Logo2} class="w-[360px]" alt="High School Logo" />
						<p class="text-xl">High School</p>
					</div>
				</div>
			{/if}
		</div>
		{#if tab === 'certificate'}
			<div class="flex justify-center gap-2">
				<button on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
					<Icon
						icon="mingcute:left-fill"
						class="cursor-pointer rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
					/>
				</button>
				<button on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
					<Icon
						icon="mingcute:right-fill"
						class="cursor-pointer rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
						on:mouseover={handleHover}
						on:mouseleave={handleHover}
						on:focus={() => handleFocus}
					/>
				</button>
			</div>
		{/if}
	</div>
</section>
