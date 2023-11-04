<script>
	import viewport from '$lib/utils/intersectionObserver';
	import Icon from '@iconify/svelte';

	export let /** @type {string} */ image;
</script>

<div
	class="relative flex items-center gap-12 px-6 py-12 sm:px-24 md:justify-center md:py-24 lg:px-36 xl:px-44"
>
	<div
		class="flip-container absolute left-[56%] top-[22%] order-2 w-fit md:static md:order-1 mobile:left-[58%] mobile:top-[14%]"
	>
		<div
			class="hide-from-left flip h-[255px] w-[199px] cursor-default md:h-[355px] md:w-[271px] lg:h-[455px] lg:w-[371px] mobile:h-[75px] mobile:w-[69px]"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			<div class="flip-main h-full w-full rounded-xl">
				<div
					class="flip-front flex h-full w-full flex-col rounded-xl bg-gradient-to-b from-[#106493] to-cyan-100 p-1 text-light dark:text-dark sm:px-2 sm:py-3 md:p-6"
				>
					<Icon icon="game-icons:diamonds" class="self-end text-3xl md:text-6xl" />
					<Icon
						icon="game-icons:diamonds"
						class="flex-grow self-center text-[10vh] md:text-[60vh]"
					/>
					<Icon icon="game-icons:diamonds" class="text-3xl md:text-6xl" />
				</div>
				<div class="flip-rear">
					<img
						src={image}
						alt="Main Profile"
						class="h-[255px] w-[199px] rounded-xl bg-gradient-to-t from-[#106493] to-cyan-100 object-contain object-bottom shadow-[0_0_10px_#106493] md:h-[355px] md:w-[271px] lg:h-[455px] lg:w-[371px] mobile:h-[75px] mobile:w-[69px]"
					/>
				</div>
			</div>
		</div>
	</div>
	<article class="flex flex-col py-8 sm:order-1 md:w-1/2">
		<h2
			class="hide-from-right w-fit text-2xl font-bold text-onPrimary dark:text-primary"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			About
		</h2>
		<h1
			class="hide-from-right w-fit pb-4 pr-28 text-2xl lg:text-4xl"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			Why Hire Me?
		</h1>
		<ul
			class="hide-from-right list-disc pb-4 pl-6 text-sm hover:cursor-text sm:w-[250px] md:h-[250px] md:w-full lg:text-base h-[290px] w-[230px] mobile:h-full mobile:w-full"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			<li>
				My strong commitment to fulfilling all duties within agreements to which I have already
				agreed.
			</li>
			<li>Hark worker.</li>
			<li>Honest.</li>
			<li>Can work either as a team or as individual.</li>
			<li>Eager to acquire new technical and managerial skills.</li>
			<li>Open minded.</li>
			<li>Polite and Respectful of Others.</li>
			<li>Willing to work onsite or remotely.</li>
		</ul>
		<p class="hide-from-right text-sm lg:text-base" use:viewport on:enterViewport on:exitViewport>
			In choosing me, you gain a dedicated individual committed to work, a collaborative spirit, and
			the drive to continually evolve and contribute to your organization's success.
		</p>
	</article>
</div>

<style>
	.flip {
		background-color: transparent;
		perspective: 1000px;
	}
	.flip-main {
		position: relative;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}
	.flip:hover .flip-main {
		transform: rotateY(180deg);
	}
	.flip-front,
	.flip-rear {
		position: absolute;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.flip-rear {
		transform: rotateY(180deg);
	}
</style>
