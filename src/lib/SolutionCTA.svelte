<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { base } from '$app/paths';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	let rotation = 0;
	let scrollY = 0;

	function animateRotation() {
		rotation = Math.sin(Date.now() / 1000) * 15 + 15; // Rotate between 0 and 30 degrees
	}

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		const rotationInterval = setInterval(animateRotation, 16); // ~60fps
		window.addEventListener('scroll', handleScroll);

		return () => {
			clearInterval(rotationInterval);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="bg-[#faf5f0] py-24 px-4 relative overflow-hidden">
	<div class="container mx-auto max-w-3xl text-center relative z-10">
		{#if isVisible}
			<div in:fly={{ y: 50, duration: 1000 }}>
				<h2 class="mb-4">There is a Solution.</h2>
				<h2 class="text-[#ec9f57] mb-8">Take the First Step</h2>
				<p class="mb-8 max-w-xl mx-auto">
					Solve the root causes of your health issues. Services are provided virtually via phone or
					internet.
				</p>
				<a
					href=""
					class="inline-block px-8 py-3 bg-[#BED173] text-white rounded-md hover:bg-[#a7c14e] transition duration-300"
				>
					Book a Consultation
				</a>
			</div>
		{/if}
	</div>

	<!-- Decorative elements -->
	<img
		src="{base}/images/home-back-9.png"
		alt="Decorative element"
		class="absolute bottom-0 left-0 md:w-48 w-20"
	/>

	<img
		src="{base}/images/home-back-6.png"
		alt="Decorative element"
		class="absolute bottom-8 left-10 md:w-24 w-12"
		style="transform: rotate({rotation}deg)"
	/>

	<img src="{base}/images/home-back-8.png" alt="Decorative element" class="absolute top-0 right-0 md:w-96 w-20" />
</section>