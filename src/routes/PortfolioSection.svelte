<script>
	import { handleFocus } from '$lib/utils/handleFocus';
	import { handleHover } from '$lib/utils/handleHover';
	import Icon from '@iconify/svelte';
</script>

<section class="align-center flex flex-col justify-center gap-6 px-44 py-12">
	<div
		class="m-auto flex w-fit flex-col items-center justify-center"
		role="group"
		on:mouseover={handleHover}
		on:mouseleave={handleHover}
		on:focus={() => handleFocus}
	>
		<h2 class="text-2xl font-bold text-onPrimary dark:text-primary">Portfolio</h2>
		<h2 class="text-2xl font-bold">Latest Projects</h2>
	</div>
	<div class="flex flex-col gap-4">
		<div class="flex justify-between">
			<p on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
				My projects
			</p>
			<a
				href="#seeall"
				on:mouseover={handleHover}
				on:mouseleave={handleHover}
				on:focus={() => handleFocus}
				><p class="hover:cursor-pointer hover:text-onPrimary dark:hover:text-primary">see all</p>
			</a>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex justify-between gap-6">
				<div class="flex h-full w-full flex-col items-center gap-2">
					<div class="relative h-[300px] w-full rounded-xl bg-neutral">
						<Icon
							icon="fa6-regular:image"
							class="absolute bottom-0 left-0 right-0 top-0 m-auto text-5xl"
						/>
					</div>
					<p on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
						Blog
					</p>
				</div>
				<div class="flex h-full w-full flex-col items-center gap-2">
					<div class="relative h-[300px] w-full rounded-xl bg-neutral">
						<Icon
							icon="fa6-regular:image"
							class="absolute bottom-0 left-0 right-0 top-0 m-auto text-5xl"
						/>
					</div>
					<p on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
						GameFinder
					</p>
				</div>
			</div>
			<div class="flex justify-center gap-2">
				<button on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
					<Icon
						icon="mingcute:left-fill"
						class="rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
					/>
				</button>
				<button on:mouseover={handleHover} on:mouseleave={handleHover} on:focus={() => handleFocus}>
					<Icon
						icon="mingcute:right-fill"
						class="rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
					/>
				</button>
			</div>
		</div>
	</div>
</section>
