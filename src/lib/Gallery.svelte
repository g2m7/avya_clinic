<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';
	import { fade, scale } from 'svelte/transition';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let selectedImage: string | null = null;
    let grid: HTMLElement;
    let section: HTMLElement;

	const images = [
		`${base}/images/gallery/outside.webp`,
		`${base}/images/gallery/chamber.webp`,
		`${base}/images/gallery/waiting.webp`,
		`${base}/images/gallery/backdrop.webp`
	];

	const socialLinks = [
		{ name: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram.png' },
		{ name: 'Facebook', url: 'https://www.facebook.com/', icon: 'facebook.png' }
	];

	function openImage(image: string) {
		selectedImage = image;
        document.body.style.overflow = 'hidden';
	}

	function closeImage() {
		selectedImage = null;
        document.body.style.overflow = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedImage) {
			closeImage();
		}
	}

	onMount(async () => {
        gsap.registerPlugin(ScrollTrigger);

        if (grid) {
            gsap.from(grid.children, {
                scrollTrigger: {
                    trigger: grid,
                    start: "top 80%"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section bind:this={section} class="bg-[#ec9f57] py-24 px-4 relative overflow-hidden" {id} use:scrollTo>
    <!-- Decorative Circle -->
    <div class="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

	<div class="container mx-auto max-w-6xl relative z-10">
		<div class="text-center mb-16">
			<h3 class="text-2xl text-white font-radley mb-8 opacity-90">Follow Dr. Avirup on Social Media</h3>
			<div class="flex justify-center gap-6">
				{#each socialLinks as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 bg-white text-[#ec9f57] font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
					>
						<img
							src={`${base}/icons/socials/${link.icon}`}
							alt={link.name}
							class="w-5 h-5"
						/>
						{link.name}
					</a>
				{/each}
			</div>
		</div>

        <div class="w-full h-px bg-white/20 my-16"></div>

		<h2 class="text-center text-white text-5xl font-light mb-16">Clinic <span class="font-serif italic">Gallery</span></h2>

		<div bind:this={grid} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each images as image, index}
				<button
					class="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50"
					on:click={() => openImage(image)}
                    aria-label="View larger image"
				>
					<img
						src={image}
						alt={`Gallery image ${index + 1}`}
						class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
					/>
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                             <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                        </div>
                    </div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if selectedImage}
	<div
		class="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[100]"
		on:click={closeImage}
		on:keydown={(e) => e.key === 'Escape' && closeImage()}
		transition:fade={{ duration: 200 }}
		role="button"
		tabindex="0"
		aria-label="Close gallery"
	>
		<div
			class="relative max-w-5xl w-full p-4 cursor-default"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="presentation"
		>
            <div class="aspect-video relative rounded-lg overflow-hidden shadow-2xl" transition:scale={{ start: 0.9, duration: 300 }}>
			    <img src={selectedImage} alt="Selected gallery image" class="w-full h-full object-contain bg-black" />
            </div>

			<button
				class="absolute -top-12 right-4 text-white hover:text-gray-300 transition-colors"
				on:click={closeImage}
                aria-label="Close"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10"
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
		</div>
	</div>
{/if}
