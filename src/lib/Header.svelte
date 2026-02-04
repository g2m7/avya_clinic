<script lang="ts">
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';

	let isOffcanvasOpen = false;
	let showButton = false;
	let isScrolled = false;
	let y: number;

	function toggleOffcanvas() {
		isOffcanvasOpen = !isOffcanvasOpen;
		if (isOffcanvasOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function handleScroll() {
		y = window.scrollY;
		showButton = y > 200;
		isScrolled = y > 50;
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

<svelte:window bind:scrollY={y} />

<header
	class="fixed w-full z-header transition-all duration-300 ease-in-out"
	class:backdrop-blur-md={isScrolled}
	class:shadow-sm={isScrolled}
    class:py-2={isScrolled}
    class:py-4={!isScrolled}
    style={isScrolled ? "background-color: rgba(250, 245, 240, 0.8);" : "background-color: transparent;"}
>
	<nav class="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0 group">
            <p class="text-2xl font-medium text-[#1a279c] group-hover:text-opacity-80 transition-colors">Aavya Mediclinic</p>
        </a>

        <!-- Desktop Menu -->
		<div class="hidden md:flex space-x-10 items-center">
			<a
				href="#about"
				class="text-gray-600 hover:text-black text-lg transition-colors relative group"
				use:scrollTo
			>
				About
				<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#BED173] transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a
				href="#services"
				class="text-gray-600 hover:text-black text-lg transition-colors relative group"
				use:scrollTo
			>
				Services
				<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#BED173] transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a
				href="#testimonials"
				class="text-gray-600 hover:text-black text-lg transition-colors relative group"
				use:scrollTo
			>
				Testimonials
				<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#BED173] transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a
				href="#contact"
				class="text-gray-600 hover:text-black text-lg transition-colors relative group"
				use:scrollTo
			>
				Contact Us
				<span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#BED173] transition-all duration-300 group-hover:w-full"></span>
			</a>
		</div>

        <!-- Mobile Menu Button -->
		<div class="md:hidden z-50">
			<button
				on:click={toggleOffcanvas}
				type="button"
                class="relative z-50 p-2 text-gray-800 focus:outline-none"
                aria-label="Toggle Menu"
			>
                <div class="w-6 h-6 flex flex-col justify-around">
                    <span class="w-full h-0.5 bg-current transition-all duration-300 transform origin-center" class:rotate-45={isOffcanvasOpen} class:translate-y-2.5={isOffcanvasOpen}></span>
                    <span class="w-full h-0.5 bg-current transition-all duration-300" class:opacity-0={isOffcanvasOpen}></span>
                    <span class="w-full h-0.5 bg-current transition-all duration-300 transform origin-center" class:-rotate-45={isOffcanvasOpen} class:-translate-y-2.5={isOffcanvasOpen}></span>
                </div>
			</button>
		</div>
	</nav>

	<!-- Mobile Menu Overlay -->
	{#if isOffcanvasOpen}
		<div
			class="fixed inset-0 bg-[#BED173] z-40 flex flex-col items-center justify-center space-y-8"
			transition:fade={{ duration: 300 }}
		>
			<a
				href="#about"
				on:click={toggleOffcanvas}
				class="text-white text-4xl font-light hover:text-black transition-colors"
				in:fly={{ y: 20, delay: 100, duration: 400 }}
				use:scrollTo
			>About</a>
			<a
				href="#services"
				on:click={toggleOffcanvas}
				class="text-white text-4xl font-light hover:text-black transition-colors"
				in:fly={{ y: 20, delay: 150, duration: 400 }}
				use:scrollTo
			>Services</a>
			<a
				href="#testimonials"
				on:click={toggleOffcanvas}
				class="text-white text-4xl font-light hover:text-black transition-colors"
				in:fly={{ y: 20, delay: 200, duration: 400 }}
				use:scrollTo
			>Testimonials</a>
			<a
				href="#contact"
				on:click={toggleOffcanvas}
				class="text-white text-4xl font-light hover:text-black transition-colors"
				in:fly={{ y: 20, delay: 250, duration: 400 }}
				use:scrollTo
			>Contact Us</a>
		</div>
	{/if}
</header>

<!-- Scroll to top button -->
{#if showButton}
	<button
		on:click={scrollToTop}
		class="fixed bottom-8 right-8 bg-[#88abda] text-white z-floating p-3 rounded-full hover:bg-[#333133] hover:scale-110 transition-all duration-300 shadow-lg"
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
