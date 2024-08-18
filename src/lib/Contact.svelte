<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { scrollTo } from '$lib/actions/scrollTo';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let Carousel: any;
	let mounted = false;

	let formData = {
		name: '',
		phone: '',
		email: '',
		concern: ''
	};

	let concernOptions = [
		{ value: '', label: 'Choose Option' },
		{ value: 'Diabetes', label: 'Diabetes' },
		{ value: 'Thyroid diseases', label: 'Thyroid diseases' },
		{ value: 'Hypertension and Lifestyle diseases', label: 'Hypertension and Lifestyle diseases' },
		{ value: 'Cardiological illnesses', label: 'Cardiological illnesses' },
		{ value: 'Respiratory diseases', label: 'Respiratory diseases' },
		{ value: 'Infectious diseases', label: 'Infectious diseases' },
		{ value: 'Autoimmune diseases', label: 'Autoimmune diseases' },
		{ value: 'Other medical conditions', label: 'Other medical conditions' }
	];

	const images = [
		`${base}/images/gallery/outside.webp`,
		`${base}/images/gallery/chamber.webp`,
		`${base}/images/gallery/waiting.webp`,
		`${base}/images/gallery/backdrop.webp`
	];

	function handleSubmit(event: Event) {
		event.preventDefault();
		console.log('Form submitted:', formData);
	}

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
		mounted = true;
	});
</script>

<section class="max-w-full bg-[#ec9f57]" {id} use:scrollTo>
	<div class="flex flex-wrap">
		<div class="w-full md:w-1/2 h-[50vh] md:h-[90vh] overflow-hidden">
			{#if browser && mounted && Carousel}
				<svelte:component
					this={Carousel}
					autoplay={true}
					autoplayDuration={3000}
					autoplayProgressVisible={false}
					swiping={false}
					arrows={false}
					dots={false}
					infinite={true}
				>
					{#each images as image}
						<div class="w-full h-full">
							<img src={image} alt="Consultation" class="w-full h-full object-cover" />
						</div>
					{/each}
				</svelte:component>
			{:else}
				<!-- Placeholder content for SSR -->
				<div class="w-full h-full">
					<img src={images[0]} alt="Consultation" class="w-full h-full object-cover" />
				</div>
			{/if}
		</div>
		<div class="w-full md:w-1/2 py-12 px-4 md:px-12 flex items-center">
			<div class="w-full mx-auto">
				<h2 class="font-radley text-white mb-4">Enquire for a Consultation</h2>
				<p class="mb-12 text-gray-100">
					Signing up is quick and simple, giving you fast and easy access to care whenever you need
					it.
				</p>

				<form on:submit={handleSubmit} class="space-y-6">
					<div class="flex flex-wrap -mx-2">
						<div class="w-full sm:w-1/2 px-2 mb-4">
							<label for="name" class="block text-xl mb-2 text-white">Your Name</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-3 py-3 rounded-md bg-white outline-none"
							/>
						</div>
						<div class="w-full sm:w-1/2 px-2 mb-4">
							<label for="phone" class="block text-xl mb-2 text-white">Your Phone</label>
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								required
								class="w-full px-3 py-3 rounded-md bg-white outline-none"
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-2">
						<div class="w-full sm:w-1/2 px-2 mb-4">
							<label for="email" class="block text-xl mb-2 text-white">Your Email</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-3 py-3 rounded-md bg-white outline-none"
							/>
						</div>
						<div class="w-full sm:w-1/2 px-2 mb-4">
							<label for="concern" class="block text-xl mb-2 text-white"
								>Your Wellness Concern</label
							>
							<select
								id="concern"
								bind:value={formData.concern}
								class="w-full px-3 py-3 rounded-md bg-white outline-none"
							>
								{#each concernOptions as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
						</div>
					</div>

					<button
						type="submit"
						class="inline-block bg-[#527359] hover:bg-[#BED173] text-lg text-white font-medium py-4 px-11 rounded-lg transition duration-300 ease-in-out"
					>
						Send Enquiry
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.sc-carousel__carousel-container) {
		height: 100%;
	}
</style>
