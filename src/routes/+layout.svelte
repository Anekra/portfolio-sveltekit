<script>
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	/**
	 * @type {HTMLDivElement}
	 */
	let circle;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Andika&family=Baskervville&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<CustomCursor bind:cursor={circle} />
<slot />
<Footer />
