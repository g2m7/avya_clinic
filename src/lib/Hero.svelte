<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = false;
	let imageElement: HTMLImageElement;
	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		isVisible = true;
	});

	function handleMouseMove(event: MouseEvent) {
		if (imageElement) {
			const rect = imageElement.getBoundingClientRect();
			mouseX = (event.clientX - rect.left) / rect.width;
			mouseY = (event.clientY - rect.top) / rect.height;
			imageElement.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
		}
	}
</script>

<section class="max-h-screen flex items-center relative z-10">
	<div class="absolute bg-[#faf5f0] z-[-1] min-h-[780px] w-full"></div>
	<div class="container mx-auto px-4 lg:mt-[calc(160px-3rem)] md:mt-[calc(180px-3rem)]">
		<div class="flex flex-col lg:flex-row items-center justify-center p-5">
			<!-- Left Column -->
			<div class="w-full lg:w-1/2 mr-5 mb-10 lg:mb-0 text-center lg:text-left">
				<div
					class="transition-opacity duration-300 ease-in-out"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
				>
					<p class="font-radley  mb-8 text-2xl ">Naturopathic Care with Dr. Martin</p>
					<h1 class="text-4xl md:text-5xl lg:text-[82px] mb-8">
						Natural Healing,<br />
						<span class="text-[#527359]">Simplified</span>
					</h1>
					<p class="mb-10 max-w-xl mx-auto lg:mx-0">
						To heal the core you must find the root cause. It's simpler than you think, and it will
						change your life.
					</p>
					<a
						href="/about-me"
						class="inline-block bg-[#BED173] text-lg text-white font-medium py-4 px-11 rounded-md hover:bg-[#527359] transition duration-300 ease-in-out"
					>
						Start Here
					</a>
				</div>
			</div>

			<!-- Right Column -->
			<div class="w-full lg:w-1/2 relative mb-[-60px]">
				<div
					class="transition-all duration-300 ease-in-out transform"
					class:translate-y-10={!isVisible}
					class:translate-y-0={isVisible}
				>
					<img
						bind:this={imageElement}
						on:mousemove={handleMouseMove}
						src="/images/hero.jpg"
						alt="Dr. Martin"
						class="w-full h-auto rounded-tl-[40%] rounded-br-[40%] z-10 mx-auto transition-transform duration-300 ease-out"
					/>
				</div>
				<img
					src="/images/shape-2.png"
					alt="Decorative shape"
					class="shape-2 absolute lg:max-w-[615px]"
				/>
				<img
					src="/images/home-back-10.png"
					alt="Decorative dots"
					class="absolute top-10 right-10 w-16 h-auto transition-all duration-300 ease-in-out"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
					class:translate-y-10={!isVisible}
					class:translate-y-0={isVisible}
				/>
			</div>
		</div>
	</div>
</section>

<!-- Scroll to top button -->
<button
	class="fixed bottom-4 right-4 bg-[#527359] text-white p-2 rounded-full hover:bg-[#333133] transition-colors duration-300 z-50"
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

<style>
	.shape-2 {
		right: -25%;
		bottom: -10%;
		z-index: -1;
	}
</style>
