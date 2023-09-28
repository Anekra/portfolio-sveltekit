<script>
	import { hoverAble } from '$lib/stores/hoverAble';
	/**
	 * @type {HTMLDivElement}
	 */
	export let cursor;
	/**
	 * @param {MouseEvent} e
	 */
	function mouseMove(e) {
		if (cursor.style.visibility !== 'visible') cursor.style.visibility = 'visible';
		cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
		cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
	}

	$: display = `${$hoverAble ? 'hidden' : 'fixed'}`;
</script>

<svelte:body on:mousemove={mouseMove} />

<div
	bind:this={cursor}
	class="{display} pointer-events-none invisible h-8 w-8 rounded-[50%] bg-secondary shadow-[0_0_10px_#fff] after:absolute after:inset-0 after:m-auto after:h-2 after:w-2 after:rounded-[50%] after:bg-onSecondary after:blur-sm"
/>
