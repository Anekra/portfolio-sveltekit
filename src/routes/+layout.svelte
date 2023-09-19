<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
<link href="https://fonts.googleapis.com/css2?family=Andika&family=Baskervville&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />
<slot />
