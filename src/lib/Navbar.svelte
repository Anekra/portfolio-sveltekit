<script>
	import Logo from '$lib/images/portfolio_logo.svelte';
	import Icon from '@iconify/svelte';
</script>

<header class="">
	<nav
		class="flex h-16 flex-wrap items-center justify-between bg-primary px-12 dark:bg-onPrimary dark:text-primary"
	>
		<div class="flex flex-shrink-0 items-center gap-4 text-white">
			<div class="md:hidden">
				<button class="flex items-center text-black hover:text-white">
					<Icon icon="mingcute:menu-fill" class="text-4xl" />
				</button>
			</div>
			<Logo />
		</div>
		<div class="hidden text-sm font-bold text-onPrimary sm:gap-2 md:flex">
			<a href="#responsive" class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white">
				Home
			</a>
			<a href="#responsive" class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white">
				Portfolio
			</a>
			<a href="#responsive" class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white">
				Service
			</a>
			<a href="#responsive" class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white">
				Blog
			</a>
			<a href="#responsive" class="rounded-3xl px-4 py-2 hover:bg-onPrimary hover:text-white">
				Contact
			</a>
		</div>
		<div>
			<button class="flex gap-10 justify-around items-center h-9 bg-onPrimary rounded-full">
				<Icon icon="tabler:sun-filled" class="rounded-xl bg-primary text-white"/>
				<Icon icon="tabler:moon-filled" />
			</button>
		</div>
	</nav>
</header>
