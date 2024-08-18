<script lang="ts">
	import Testimonials from './Testimonials.svelte';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isOffcanvasOpen = false;
	let showButton = false;
	let y: number;

	function toggleOffcanvas() {
		isOffcanvasOpen = !isOffcanvasOpen;
	}

	function handleScroll() {
		y = window.scrollY;
		showButton = y > 200; // Show button when scrolled down 200px
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header class="absolute w-full z-50 bg-[#faf5f0]">
	<nav class="max-w-full md:mx-2 my-3 px-8 sm:px-4 lg:px-6">
		<img
			src="{base}/images/home-back-8.png"
			alt="Decorative element"
			class="absolute -top-10 -left-10 -rotate-12 w-96 scale-x-[-1] -z-10 opacity-30 md:hidden"
		/>

		<div class="flex justify-between items-center h-16">
			<!-- Logo Area -->
			<div class="flex-shrink-0">
				<a href="https://aavyamediclinic.com/">
					<img src="{base}/images/logo.jpeg" alt="The Practitioner" class="w-32" /></a
				>
			</div>

			<!-- Navigation Links -->
			<div class="hidden md:flex space-x-8">
				<a
					href="#about"
					class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link"
					>About</a
				>
				<a
					href="#services"
					class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link"
					>Services</a
				>
				<a
					href="#testimonials"
					class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link"
					>Testimonials</a
				>

				<a
					href="#contact"
					class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link"
					>Contact Us</a
				>
			</div>

			<!-- CTA Button -->
			<div class="hidden md:block">
				<a
					href="#form"
					target="_blank"
					class="inline-flex items-center px-7 py-3 bg-[#BED173] text-white text-lg font-bold rounded-md hover:bg-[#ec9f57] transition-colors duration-300"
				>
					Contact us
				</a>
			</div>

			<!-- Mobile menu button -->
			<div
				class="md:hidden p-1 rounded-full"
				class:bg-white={isOffcanvasOpen}
				class:bg-[#BED173]={!isOffcanvasOpen}
			>
				<button
					on:click={toggleOffcanvas}
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md md:hover:text-[#BED173] hover:bg-white/10 transition-colors duration-300"
					aria-controls="mobile-menu"
					aria-expanded="false"
					class:text-red-500={isOffcanvasOpen}
					class:text-white={!isOffcanvasOpen}
				>
					<span class="sr-only">Open main menu</span>
					{#if !isOffcanvasOpen}
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
					{#if isOffcanvasOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if isOffcanvasOpen}
		<div class="md:hidden" id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 bg-white">
				<a
					href="#about"
					class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]"
					>About</a
				>
				<a
					href="#services"
					class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]"
					>Services</a
				>
				<a
					href="#testimonials"
					class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]"
					>Testimonials</a
				>
				<a
					href="#contact"
					class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]"
					>Contact us</a
				>
			</div>
		</div>
	{/if}
</header>

<!-- Scroll to top button -->
{#if showButton}
	<button
		on:click={scrollToTop}
		class="fixed bottom-4 right-4 bg-[#88abda] text-white z-20 p-4 rounded-full hover:bg-[#333133] transition-colors duration-300"
		transition:fade
		aria-label="Scroll to top"
	>
		<svg
			class="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			></path>
		</svg>
	</button>
{/if}

<style>
	.nav-link {
		text-shadow: 0 0 0 transparent;
		transition:
			color 0.3s ease-in-out,
			background-color 0.3s ease-in-out,
			border-color 0.3s ease-in-out,
			border-radius 0.3s ease-in-out,
			text-shadow 0.3s ease-in-out;
	}
</style>
