<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	let yOffset = 0;

	function floatingAnimation() {
		const amplitude = 10; // Maximum pixel movement
		const frequency = 1.5; // Seconds for one complete cycle

		setInterval(() => {
			yOffset = amplitude * Math.sin((Date.now() / 1000) * (Math.PI / frequency));
		}, 16); // Update roughly every frame (60 FPS)
	}

	onMount(floatingAnimation);
</script>

<section class="my-24 mx-auto">
	<div class="container mx-auto">
		<div class="max-w-[90vw] md:max-w-7xl mx-auto bg-[#ec9f57] rounded-[80px] shadow-lg overflow-hidden">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }} class="md:p-8 py-4 my-12 mx-auto w-4/6 text-center">
					<h3 class="text-white md:mb-12 mb-8">
						None of these are your actual problem. Let's figure out what's really causing them.
					</h3>
					<a
						href="#form"
						class="inline-block px-12 py-4 bg-white text-black text-lg rounded-md hover:bg-transparent hover:text-white hover:border-white border transition duration-300"
						style="transform: translateY({yOffset}px);"
					>
						Find the Cause
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
