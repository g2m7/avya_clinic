<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';
	import { fade, scale } from 'svelte/transition';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let mounted = false;
	let selectedImage: string | null = null;

	const images = [
		`${base}/images/gallery/outside.webp`,
		`${base}/images/gallery/chamber.webp`,
		`${base}/images/gallery/waiting.webp`,
		`${base}/images/gallery/backdrop.webp`
	];

	const socialLinks = [
		{ name: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram.png' },
		{ name: 'Facebook', url: 'https://www.facebook.com/', icon: 'facebook.png' },
		{ name: 'X', url: 'https://x.com/', icon: 'x.png' },
	];

	function openImage(image: string) {
		selectedImage = image;
	}

	function closeImage() {
		selectedImage = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedImage) {
			closeImage();
		}
	}

	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="bg-[#ec9f57] py-16 px-4" {id} use:scrollTo>
	<div class="container mx-auto">
		<div class="row-auto">
			<div class="text-center mb-12">
				<h3 class="text-2xl text-white font-radley mb-6">Follow Dr. Avirup on Social Media</h3>
				<div class="flex justify-center space-x-4">
					{#each socialLinks as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block bg-white text-[#ec9f57] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
						>
							<img src={`${base}/icons/socials/${link.icon}`} alt={link.name} class="w-6 h-auto inline-block mr-2" />
							{link.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
			{#each images as image, index}
				<button
					class="aspect-square overflow-hidden cursor-pointer bg-transparent border-none p-0"
					on:click={() => openImage(image)}
				>
					<img
						src={image}
						alt={`Gallery image ${index + 1}`}
						class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
					/>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if selectedImage}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
		on:click={closeImage}
		on:keydown={(e) => e.key === 'Escape' && closeImage()}
		transition:fade
	>
		<div class="max-w-3xl max-h-[90vh] w-[90vw] relative" on:click|stopPropagation transition:scale>
			<button
				class="absolute top-4 right-4 bg-red-500 text-white rounded-full shadow-xl p-2 hover:bg-red-700 transition-colors duration-300"
				on:click={closeImage}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<img src={selectedImage} alt="Selected gallery image" class="w-full h-auto" />
		</div>
	</div>
{/if}

<style>
	/* Ensure the modal doesn't create a scrollbar */
	:global(body.modal-open) {
		overflow: hidden;
	}
</style>