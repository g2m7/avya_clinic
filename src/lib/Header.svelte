<script lang="ts">
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';

	let isOffcanvasOpen = false;
	let y: number;

	$: isScrolled = y > 20;
	$: showButton = y > 500;

	function toggleOffcanvas() {
		isOffcanvasOpen = !isOffcanvasOpen;
		if (isOffcanvasOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function closeMenu() {
		isOffcanvasOpen = false;
		document.body.style.overflow = '';
	}
</script>

<svelte:window bind:scrollY={y} />

<header
	class="fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out border-b border-transparent {isScrolled
		? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
		: 'bg-transparent py-5'}"
>
	<nav class="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
		<!-- Logo -->
		<a href="/" class="flex-shrink-0 group block relative z-50" on:click={closeMenu}>
			<img
				src="{base}/images/logo.jpeg"
				alt="Aavya Mediclinic"
				class="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
			/>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center space-x-8 lg:space-x-12">
			{#each ['About', 'Services', 'Testimonials', 'Socials', 'Contact'] as item}
				<a
					href="#{item.toLowerCase()}"
					class="text-gray-600 hover:text-[#1a279c] text-[16px] font-medium transition-colors duration-200 relative group font-outfit tracking-wide"
					use:scrollTo
				>
					{item}
					<!-- Simple underline effect -->
					<span
						class="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1a279c] transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<div class="md:hidden z-50">
			<button
				on:click={toggleOffcanvas}
				type="button"
				class="relative z-50 p-2 text-gray-800 focus:outline-none hover:bg-black/5 rounded-lg transition-colors"
				aria-label="Toggle Menu"
			>
				<div class="w-6 h-6 flex flex-col justify-around">
					<span
						class="w-6 h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full"
						class:rotate-45={isOffcanvasOpen}
						class:translate-y-2.5={isOffcanvasOpen}
					></span>
					<span
						class="w-6 h-0.5 bg-current transition-all duration-300 rounded-full"
						class:opacity-0={isOffcanvasOpen}
					></span>
					<span
						class="w-6 h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full"
						class:-rotate-45={isOffcanvasOpen}
						class:-translate-y-2.5={isOffcanvasOpen}
					></span>
				</div>
			</button>
		</div>
	</nav>

	<!-- Mobile Menu Overlay -->
	{#if isOffcanvasOpen}
		<div
			class="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
			transition:fade={{ duration: 200 }}
		>
			<nav class="flex flex-col items-center space-y-6 relative z-10 w-full px-8">
				{#each ['About', 'Services', 'Testimonials', 'Socials', 'Contact'] as item, i}
					<a
						href="#{item.toLowerCase()}"
						on:click={toggleOffcanvas}
						class="text-gray-900 text-3xl font-light hover:text-[#1a279c] transition-all duration-300 font-outfit"
						in:fly={{ y: 20, delay: 100 + i * 50, duration: 400 }}
						use:scrollTo
					>
						{item}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

<!-- Scroll to top button -->
{#if showButton}
	<button
		on:click={scrollToTop}
		class="fixed bottom-8 right-8 bg-[#1a279c] text-white z-floating p-3.5 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl translate-y-0 opacity-100 group"
		in:fly={{ y: 20, duration: 300 }}
		out:fade={{ duration: 200 }}
		aria-label="Scroll to top"
	>
		<svg
			class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
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
