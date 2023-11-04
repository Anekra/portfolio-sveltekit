<script>
	import { enhance } from '$app/forms';
	import Toast from '$lib/components/Toast.svelte';
	import { emailRegExCheck } from '$lib/utils/emailRegExCheck';
	import Icon from '@iconify/svelte';

	let formData = { name: '', email: '', message: '' };
	let focusName = '';
	let nameError = '';
	let emailError = '';
	let messageError = '';
	let submitStatus = '';
	let percentage = 0;
	let closeToast = false;
	/**  @type {string | number | NodeJS.Timeout | undefined} */
	let progress;
	/** @type {import('./$types').ActionData} */
	export let form;

	$: if (form) {
		handleToast(form);
	}

	$: if (closeToast || percentage === 100) {
		handleCloseToast();
	}
	/** @param {FocusEvent} e */
	function handleFocus(e) {
		if (e.type === 'focusin') {
			focusName = /** @type {HTMLInputElement} */ (e.target)?.name || '';
		} else {
			focusName = '';
		}
	}

	/** @param {import('./$types').ActionData} form */
	function handleToast(form) {
		if (form?.success) {
			submitStatus = 'success';
			percentage = 0;
			progress = setInterval(() => {
				percentage += 1;
			}, 20);
		} else {
			nameError = /** @type {{name: string, email: string, message: string}} */ (form?.error)?.name;
			emailError = /** @type {{name: string, email: string, message: string}} */ (form?.error)
				?.email;
			messageError = /** @type {{name: string, email: string, message: string}} */ (form?.error)
				?.message;
			if (typeof form?.error === 'string') {
				submitStatus = 'failed';
				percentage = 0;
				progress = setInterval(() => {
					percentage += 1;
				}, 20);
			}
		}
	}

	function handleCloseToast() {
		clearInterval(progress);
		submitStatus = '';
		if (closeToast) {
			percentage === 100;
			closeToast = false;
		}
		percentage = 0;
	}

	/** @param {Event} e */
	function handleInputChange(e) {
		const inputTarget = /** @type {HTMLInputElement} */ (e.target);
		const inputName = inputTarget.name;
		const inputValue = inputTarget.value.trim();

		if (inputName === 'name') {
			inputValue === '' ? (nameError = 'empty name') : (nameError = '');
		} else if (inputName === 'email') {
			inputValue === '' ? (emailError = 'empty email') : (emailError = '');
			if (inputValue !== '') {
				if (!emailRegExCheck(inputValue)) emailError = 'invalid email';
				else emailError = '';
			}
		} else if (inputName === 'message') {
			inputValue === '' ? (messageError = 'emptyMessage') : (messageError = '');
		}
	}
</script>

<main class="pb-36">
	<section class="flex justify-center p-4">
		<div
			class="flex w-fit flex-col items-center justify-center rounded-xl hh:bg-white/20 hh:px-6 hh:pb-6 hh:pt-3 hh:shadow-[0_1px_2px_1px_rgb(0,0,0)] hh:dark:bg-primaryContainer/20 hh:dark:shadow-[0_1px_2px_1px_rgb(255,255,255)]"
		>
			<div>
				<h1 class="text-3xl text-onPrimary dark:text-light">Contact me</h1>
			</div>
			<form
				autocomplete="off"
				method="POST"
				class="flex w-fit flex-col gap-7 pt-6"
				use:enhance={() => {(submitStatus = 'pending')}}
			>
				<div class="relative flex flex-col sm:items-center">
					<p
						class="{nameError ? '' : 'hidden'} 
							absolute -top-[26px] self-end p-1 text-end text-[12px] text-error"
					>
						Name must not be empty!
					</p>
					<div
						class="relative flex w-full flex-col justify-between gap-2 sm:static sm:flex-row sm:items-center"
					>
						<label
							for="name"
							class="{focusName === 'name' || formData.name !== ''
								? 'rounded rsm:-translate-y-6 rsm:bg-light rsm:px-1 rsm:text-sm rsm:text-primaryContainer rsm:dark:bg-dark rsm:dark:text-secondary'
								: ''}
								absolute left-3 top-2 translate-y-0 text-neutral transition-transform duration-500 sm:static sm:text-black/90 sm:dark:text-white md:text-lg"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							class="{nameError
								? 'border-error focus:outline-error'
								: 'border-black/50 focus:outline-primaryContainer dark:border-white dark:focus:outline-secondary'}
								{/** @type {{name: string, email: string, message: string}} */ (form?.data)?.name === ''
								? 'animate-shake'
								: ''} input"
							placeholder={focusName === 'name' ? 'Enter your name here...' : ''}
							bind:value={formData.name}
							on:change={handleInputChange}
							on:input={handleInputChange}
							on:focusin={handleFocus}
							on:focusout={handleFocus}
						/>
					</div>
				</div>
				<div class="relative flex flex-col sm:items-center">
					<p
						class="{emailError || emailError ? '' : 'hidden'} 
							absolute -top-[26px] self-end p-1 text-end text-[12px] text-error"
					>
						{#if emailError === 'empty email'}
							Email must not be empty
						{:else if emailError === 'invalid email'}
							Invalid email address
						{/if}
					</p>
					<div
						class="relative flex w-full flex-col justify-between gap-2 sm:static sm:flex-row sm:items-center"
					>
						<label
							for="email"
							class="{focusName === 'email' || formData.email !== ''
								? 'rsm:-translate-y-6 rsm:rounded rsm:bg-light rsm:px-1 rsm:text-sm rsm:text-primaryContainer rsm:dark:bg-dark rsm:dark:text-secondary'
								: ''}
							absolute left-3 top-2 text-neutral transition-transform duration-500 sm:static sm:text-black/90 sm:dark:text-white md:text-lg"
							>Email</label
						>
						<input
							type="email"
							name="email"
							class="{emailError
								? 'border-error focus:outline-error'
								: 'border-black/50 focus:outline-primaryContainer dark:border-white dark:focus:outline-secondary'}
								{/** @type {{name: string, email: string, message: string}} */ (form?.data)?.email === ''
								? 'animate-shake'
								: ''} input"
							placeholder={focusName === 'email' ? 'youremail@example.com' : ''}
							bind:value={formData.email}
							on:change={handleInputChange}
							on:change={handleInputChange}
							on:input={handleInputChange}
							on:focusin={handleFocus}
							on:focusout={handleFocus}
						/>
					</div>
				</div>
				<div class="relative flex flex-col">
					<p
						class="{messageError ? '' : 'hidden'} 
							absolute -top-[26px] self-end p-1 text-end text-[12px] text-error"
					>
						Message must not be empty
					</p>
					<div class="relative flex w-full flex-col justify-between gap-2 sm:static sm:flex-row">
						<label
							for="message"
							class="{focusName === 'message' || formData.message !== ''
								? 'rsm:-translate-y-6 rsm:rounded rsm:bg-light rsm:px-1 rsm:text-sm rsm:text-primaryContainer rsm:dark:bg-dark rsm:dark:text-secondary'
								: ''}
							absolute left-3 top-2 text-neutral transition-transform duration-500 sm:static sm:pt-1 sm:text-black/90 sm:dark:text-white md:text-lg"
							>Message</label
						>
						<textarea
							name="message"
							cols="30"
							rows="8"
							class="{messageError
								? 'border-error focus:outline-error'
								: 'border-black/50 focus:outline-primaryContainer dark:border-white dark:focus:outline-secondary'}
								{/** @type {{name: string, email: string, message: string}} */ (form?.data)?.message === ''
								? 'animate-shake'
								: ''} textarea"
							placeholder={focusName === 'message' ? 'Enter your message here...' : ''}
							bind:value={formData.message}
							on:change={handleInputChange}
							on:change={handleInputChange}
							on:input={handleInputChange}
							on:focusin={handleFocus}
							on:focusout={handleFocus}
						/>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<label for="bcc" class="order-2 text-sm">Send a copy of the response</label>
					<div
						class="group relative order-3 flex justify-center text-gray-500 underline duration-300 hover:text-red-500"
					>
						<Icon icon="zondicons:exclamation-outline" class="mt-1 text-sm" />
						<span
							class="absolute -top-2 hidden w-56 -translate-y-full rounded-lg bg-gray-700 px-2 py-2 text-center font-sans text-sm text-white after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 after:content-[''] group-hover:flex"
							>If checked it will send you a copy of the email response</span
						>
					</div>
					<input type="checkbox" name="bcc" class="order-1 h-[15px] w-[15px] rounded" />
				</div>
				<div class="self-center">
					<button
						type="submit"
						class="btn-primary"
						style="cursor: {submitStatus === 'pending' || (percentage > 0 && percentage < 100)
							? 'progress'
							: ''};"
						disabled={submitStatus === 'pending' || (percentage > 0 && percentage < 100)
							? true
							: false}
					>
						SEND
					</button>
				</div>
			</form>
		</div>
	</section>
	{#if submitStatus === 'success' || submitStatus === 'failed'}
		<Toast {percentage} bind:closeToast toastType={submitStatus} />
	{/if}
</main>
