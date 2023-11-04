<script>
	import { browser } from '$app/environment';
	import certTypes from '$lib/utils/certTypes';
	import viewport from '$lib/utils/intersectionObserver';
	import Icon from '@iconify/svelte';

	export let /** @type {string[]}*/ certificates;
	export let /** @type {string[]}*/ certThumbnails;
	export let /** @type {string[]}*/ educations;
	let tab = 'certificate';
	let currentCert = 1;
	let fade = false;
	let certLoading = false;
	let showModal = false;

	/** @param {string} name */
	function handleTab(name) {
		tab = name;
		currentCert = 1;
	}
	function handleNextBtn() {
		fade = true;
		setTimeout(() => {
			currentCert++;
			fade = false;
		}, 500);
	}

	function handlePreviousBtn() {
		fade = true;
		setTimeout(() => {
			currentCert--;
			fade = false;
		}, 500);
	}

	function handleModal() {
		showModal = !showModal;
		if (browser) {
			if (showModal) {
				document.body.classList.add('modal-open');
			} else {
				document.body.classList.remove('modal-open');
			}
		}
	}

	/** @param {string} src */
	const preload = async (src) => {
		certLoading = true;
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise((resolve, reject) => {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
			certLoading = false;
		});
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="flex flex-col items-center justify-center gap-4 px-6 py-4 sm:px-12 lg:px-28 xl:px-44">
	<div class="relative flex h-11 w-fit gap-2" role="group">
		<button
			class="hide-from-left flex w-32 flex-col"
			on:click={() => handleTab('certificate')}
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			<h2
				class="{tab === 'certificate'
					? 'text-onPrimary dark:text-primary'
					: 'text-neutral'} text-2xl font-bold hover:cursor-pointer hover:text-black dark:hover:text-white"
			>
				Certificate
			</h2>
		</button>
		<button
			class="hide-from-right flex w-32 flex-col"
			on:click={() => handleTab('education')}
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			<h2
				class="{tab === 'education'
					? 'text-onPrimary dark:text-primary'
					: 'text-neutral'} text-2xl font-bold hover:cursor-pointer hover:text-black dark:hover:text-white"
			>
				Education
			</h2>
		</button>
		<div
			class="hide-from-left absolute bottom-0 left-[calc(50%-132px)]"
			use:viewport
			on:enterViewport
			on:exitViewport
		>
			<hr
				class="{tab === 'education'
					? 'translate-x-[calc(100%+10px)]'
					: 'translate-x-0'} h-2 w-[10.5ch] rounded border-none bg-onPrimary text-2xl transition-all duration-300 hover:cursor-default dark:bg-primary"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex justify-center gap-2">
			{#if tab === 'certificate'}
				<div class="flex flex-col items-center gap-2">
					{#if certificates}
						<div class="hide cursor-pointer" use:viewport on:enterViewport on:exitViewport>
							{#await preload(certThumbnails[currentCert - 1])}
								<div
									class="flex animate-pulse items-center justify-center md:h-[430px] md:w-[530px]"
								>
									<svg
										aria-hidden="true"
										class="mr-2 h-12 w-12 animate-spin fill-primary text-gray-200 dark:text-gray-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
							{:then base64}
								<img
									src={base64}
									alt="Certificate"
									class="{fade ? 'opacity-0' : 'opacity-100'}
										rounded-xl transition-opacity duration-500 md:h-[430px]"
									on:click={handleModal}
								/>
							{/await}
						</div>
					{:else}
						<div
							class="hide relative h-[380px] w-[530px] rounded-xl bg-neutral"
							use:viewport
							on:enterViewport
							on:exitViewport
						>
							<Icon
								icon="fa6-regular:image"
								class="absolute bottom-0 left-0 right-0 top-0 m-auto text-5xl"
							/>
						</div>
					{/if}
					<p class="hide-from-left text-xl" use:viewport on:enterViewport on:exitViewport>
						{#if !certLoading}
							{certTypes[currentCert - 1]}
						{:else}
							​{''}
						{/if}
					</p>
				</div>
			{:else if tab === 'education'}
				<div class="flex flex-col items-end justify-around gap-4 rounded-xl sm:flex-row sm:gap-12">
					{#each educations as education, i}
						<div class="flex flex-col items-center gap-2" role="group">
							<img
								src={education}
								alt="education"
								class="hide h-[190px] md:h-[300px] lg:h-[360px]"
								use:viewport
								on:enterViewport
								on:exitViewport
							/>
							<p class="hide-from-right text-xl" use:viewport on:enterViewport on:exitViewport>
								{#if i === 0} High School {:else} College {/if}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		{#if tab === 'certificate' && certificates.length > 0}
			<div
				class="hide-from-bottom flex justify-center gap-2"
				use:viewport
				on:enterViewport
				on:exitViewport
			>
				{#if currentCert > 1}
					<button on:click={handlePreviousBtn} disabled={fade}>
						<Icon
							icon="mingcute:left-fill"
							class="{fade ? 'cursor-wait' : ''}
							cursor-pointer rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
						/>
					</button>
				{/if}
				{#if currentCert < certThumbnails.length}
					<button on:click={handleNextBtn} disabled={fade}>
						<Icon
							icon="mingcute:right-fill"
							class="{fade ? 'cursor-wait' : ''}
							cursor-pointer rounded-xl bg-onPrimary p-2 text-5xl text-light dark:bg-primary dark:text-dark"
						/>
					</button>
				{/if}
			</div>
		{/if}
	</div>
	<dialog
		class="{showModal ? 'visible bg-black/50 backdrop-blur-md dark:bg-white/50' : 'invisible'} 
			fixed inset-0 z-[1] flex h-screen w-screen flex-col items-center justify-center overflow-y-auto overflow-x-hidden transition-colors"
		on:click={handleModal}
	>
		<div class="absolute left-[1%] md:left-[2%] lg:left-[2.5%]">
			<Icon
				icon="zondicons:close-solid"
				class="cursor-pointer text-[7vw] text-[#660900] dark:text-error sm:text-5xl"
			/>
		</div>
		<iframe
			src={`${certificates[currentCert - 1]}#toolbar=0&view=fit`}
			frameborder="0"
			title="Certificate"
			class="h-full w-10/12 overflow-x-auto overflow-y-auto"
			on:click={(e) => e.stopPropagation()}
			role="feed"
		/>
	</dialog>
</div>
