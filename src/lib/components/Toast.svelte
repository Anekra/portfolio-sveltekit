<script>
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	/** @type {number} */
	export let percentage = 0;
	export let closeToast = false;
	export let toastType = '';
</script>

<dialog
	class="{toastType === 'success'
		? 'text-green-500 bg-green-100'
		: 'text-red-500 bg-red-100 '}
		fixed bottom-0 right-0 z-[1] mb-6 mr-6 flex w-fit flex-col overflow-clip rounded-xl pt-2"
	transition:fly={{ x: '100%' }}
>
	<div class="flex w-full items-center justify-between ps-2 pe-4 pb-1">
		<Icon icon="mdi:message-check" class="text-4xl" />
		<h2 class="flex-grow px-2">{toastType === 'success' ? 'Message is sent!' : 'Failed to send the message'}</h2>
		<button
			class="{toastType === 'success'
				? 'text-green-500 hover:bg-green-950'
				: 'text-red-500 hover:bg-red-950'}
				cursor-pointer self-start rounded-xl p-[1px]"
			on:click={() => (closeToast = true)}
		>
			<Icon icon="mingcute:close-fill" />
		</button>
	</div>
	<div
		class="bar"
		style:--percentage="{percentage}%"
		style:--color="{toastType === 'success' ? '#22c55e' : '#ef4444'}"
	/>
</dialog>

<style>
	.bar {
		background: darkgray;
		position: relative;
		height: 8px;
		width: 100%;
		overflow: hidden;
	}
	.bar::before {
		content: '';
		position: absolute;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2)),
			linear-gradient(
				315deg,
				var(--color) 25%,
				#fff 25%,
				var(--color) 50%,
				#fff 50%,
				var(--color) 75%,
				#fff 75%,
				var(--color)
			);
		background-size: 24px 24px;
		height: 8px;
		width: var(--percentage);
		transition: width 20ms ease;
	}
</style>
