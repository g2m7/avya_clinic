<script lang="ts">
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';
	import { contactStore } from './stores/contactStore';

	let isOffcanvasOpen = false;
	let y: number;

	$: isScrolled = y > 20;

	function toggleOffcanvas() {
		isOffcanvasOpen = !isOffcanvasOpen;
		if (isOffcanvasOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		isOffcanvasOpen = false;
		document.body.style.overflow = '';
	}
	// Chat tooltip logic
	let showChatTooltip = false;

	onMount(() => {
		// Show tooltip after 12 seconds (delayed as requested)
		const timer = setTimeout(() => {
			showChatTooltip = true;
		}, 12000);

		return () => clearTimeout(timer);
	});

	// Also show tooltip on scroll if not already shown (threshold increased)
	$: if (y > 800 && !showChatTooltip) {
		showChatTooltip = true;
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
		<div
			class="hidden md:flex items-center space-x-8 lg:space-x-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
		>
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

		<!-- CTA Button -->
		<div class="hidden md:block">
			<button
				on:click={() => contactStore.open()}
				class="bg-[#1a279c] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#151f7a] transition-colors duration-300 shadow-lg hover:shadow-xl"
			>
				Contact Us
			</button>
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

<!-- Chat Now Button Container -->
<div class="fixed bottom-6 right-6 z-[1000] flex items-center gap-4">
	<!-- Tooltip -->
	{#if showChatTooltip}
		<div
			transition:fly={{ x: 20, duration: 600 }}
			class="bg-[#1a279c] text-white px-5 py-3 rounded-xl shadow-2xl font-medium text-sm whitespace-nowrap relative hidden md:block"
			style="box-shadow: 0 10px 25px -5px rgba(26, 39, 156, 0.4);"
		>
			Chat with us 👋
			<!-- Little triangle arrow pointing right -->
			<div
				class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[4px] w-3 h-3 bg-[#1a279c] transform rotate-45"
			></div>
		</div>
	{/if}

	<a
		href="https://wa.me/917047812650"
		target="_blank"
		rel="noopener noreferrer"
		class="bg-[#25D366] text-white p-4 rounded-full hover:bg-[#20bd5a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
		aria-label="Chat on WhatsApp"
	>
		<!-- Shimmer effect -->
		<div
			class="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"
		></div>

		<svg
			class="w-8 h-8 fill-current relative z-10"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
			/>
		</svg>
		<!-- Ping animation ping ring to draw attention -->
		<span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3" class:hidden={!showChatTooltip}>
			<span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
			></span>
			<span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
		</span>
	</a>
</div>
