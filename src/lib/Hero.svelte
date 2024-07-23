<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { base } from '$app/paths';

	let mouseX = 0;
	let mouseY = 0;

	let isVisible = false;
	let imageElement: HTMLImageElement;
	let shapeElement: HTMLImageElement;

	const heroPosition = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.3
		}
	);
	const shapePosition = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.3
		}
	);

	onMount(() => {
		isVisible = true;
	});

	function handleMouseMove(event: MouseEvent) {
		if (imageElement && shapeElement) {
			const rect = imageElement.getBoundingClientRect();
			const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
			const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

			heroPosition.set({ x: mouseX * 10, y: mouseY * 10 });
			shapePosition.set({ x: -mouseX * 40, y: -mouseY * 40 });
		}
	}

	interface ScrollSpringParams {
		translateY: number;
		damping?: number;
		stiffness?: number;
		maxTranslate?: number;
		minTranslate?: number;
	}

	function createScrollSpring(node: HTMLElement, params: ScrollSpringParams) {
		const {
			translateY,
			damping = 0.8,
			stiffness = 0.015,
			maxTranslate = 100, // Maximum pixels to translate down
			minTranslate = -100 // Maximum pixels to translate up
		} = params;

		const springStore = spring({ y: 0 }, { stiffness, damping });

		let startY = 0;
		let elementHeight = node.offsetHeight;
		let windowHeight = window.innerHeight;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startY = window.scrollY;
						elementHeight = entry.boundingClientRect.height;
						windowHeight = window.innerHeight;
					}
				});
			},
			{ threshold: 0 }
		);

		observer.observe(node);

		function updatePosition() {
			const scrollY = window.scrollY;
			const relativeScroll = scrollY - startY;
			const viewportPosition = node.getBoundingClientRect().top;

			// Calculate the translation based on viewport position
			let translation = (viewportPosition / windowHeight) * translateY * elementHeight;

			// Clamp the translation within the specified range
			translation = Math.max(minTranslate, Math.min(maxTranslate, translation));

			springStore.set({ y: translation });
		}

		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);

		const unsubscribe = springStore.subscribe(($spring) => {
			node.style.transform = `translateY(${$spring.y}px)`;
		});

		return {
			destroy() {
				observer.disconnect();
				window.removeEventListener('scroll', updatePosition);
				window.removeEventListener('resize', updatePosition);
				unsubscribe();
			},
			update(newParams: ScrollSpringParams) {
				Object.assign(params, newParams);
			}
		};
	}
</script>

<section class="max-h-screen flex items-center relative z-10 mb-[215px]">
	<div class="absolute bg-[#faf5f0] z-[-1] min-h-[780px] w-full"></div>
	<div class="container mx-auto px-4 lg:mt-[calc(160px-3rem)] md:mt-[calc(180px-3rem)]">
		<div class="flex flex-col lg:flex-row items-center justify-center p-5">
			<!-- Image decorations -->
			<div class="container absolute top-40 left-5 w-full h-auto">
				<div
					use:createScrollSpring={{
						translateY: 1,
						maxTranslate: 50,
						minTranslate: -50
					}}
				>
					<img
						src="{base}{base}/images/shape-1.png"
						alt="Decorative dots"
						class="absolute transition-all duration-300 ease-in-out"
						class:opacity-0={!isVisible}
						class:opacity-100={isVisible}
						class:translate-y-10={!isVisible}
						class:translate-y-0={isVisible}
					/>
				</div>
			</div>

			<!-- Left Column -->
			<div class="w-full lg:w-1/2 mr-5 mb-10 lg:mb-0 text-center lg:text-left">
				<div
					class="transition-opacity duration-300 ease-in-out"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
				>
					<p class="font-radley font-[#989898] mb-10 text-2xl">Naturopathic Care with Dr. Avirup</p>
					<h1 class="text-4xl md:text-5xl lg:text-[82px] mb-12">
						Natural Healing,<br />
						<span class="text-[#527359]">Simplified</span>
					</h1>
					<p class="mb-12 max-w-xl mx-auto lg:mx-0">
						To heal the core you must find the root cause. It's simpler than you think, and it will
						change your life.
					</p>
					<a
						href=""
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
						src="{base}/images/hero.jpg"
						alt="Dr. Avirup"
						class="w-full h-auto rounded-tl-[40%] rounded-br-[40%] z-10 mx-auto transition-transform duration-300 ease-out"
						style="transform: translate({$heroPosition.x}px, {$heroPosition.y}px)"
					/>
				</div>
				<img
					bind:this={shapeElement}
					src="{base}/images/shape-2.png"
					alt="Decorative shape"
					class="shape-2 absolute translate-y-5 lg:max-w-[615px]"
					style="transform: translate({$shapePosition.x}px, {$shapePosition.y}px)"
				/>
				<img
					src="{base}/images/home-back-10.png"
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
