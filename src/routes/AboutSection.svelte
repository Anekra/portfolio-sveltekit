<script>
	import photo from '$lib/assets/images/portfolio_profile2.png';
	import { handleFocus } from '$lib/utils/handleFocus';
	import { handleHover } from '$lib/utils/handleHover';
	import Icon from '@iconify/svelte';
</script>

<section class="flex items-center px-44 py-12">
	<div class="flex-grow">
		<div
			class="flip hoverable h-[455px] w-[371px] cursor-default"
			role="feed"
			on:mouseover={handleHover}
			on:mouseleave={handleHover}
			on:focus={() => handleFocus}
		>
			<div class="flip-main h-full w-full rounded-xl">
				<div
					class="flip-front flex h-full w-full flex-col rounded-xl bg-gradient-to-b from-[#106493] to-cyan-100 p-6 text-light dark:text-dark"
				>
					<Icon icon="game-icons:diamonds" class="self-end text-6xl" />
					<Icon icon="game-icons:diamonds" class="flex-grow self-center text-[60vh]" />
					<Icon icon="game-icons:diamonds" class="text-6xl" />
				</div>
				<div class="flip-rear">
					<img
						src={photo}
						alt="Main Profile"
						class="h-[455px] w-[371px] rounded-xl bg-gradient-to-t from-[#106493] to-cyan-100 align-bottom shadow-[0_0_10px_#106493]"
					/>
				</div>
			</div>
		</div>
	</div>
	<article
		class="flex w-1/2 flex-col gap-2 py-8"
		on:mouseover={handleHover}
		on:mouseleave={handleHover}
		on:focus={() => handleFocus}
	>
		<h2 class="text-2xl font-bold text-onPrimary dark:text-primary">About</h2>
		<h1 class="pb-4 text-4xl">Why Hire Me?</h1>
		<ul class="list-disc hover:cursor-text">
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
		<p>
			In choosing me, you gain a dedicated individual committed to work, a collaborative spirit, and
			the drive to continually evolve and contribute to your organization's success.
		</p>
	</article>
</section>

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
