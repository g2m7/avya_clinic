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

	let imageContainer: HTMLDivElement;

	const containerPosition = spring(
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
		if (imageContainer && shapeElement) {
			const rect = imageContainer.getBoundingClientRect();
			const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
			const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

			containerPosition.set({ x: mouseX * 20, y: mouseY * 20 });
			shapePosition.set({ x: -mouseX * 40, y: -mouseY * 40 });
		}
	}

	// function handleMouseMove(event: MouseEvent) {
	// 	if (imageElement && shapeElement) {
	// 		const rect = imageElement.getBoundingClientRect();
	// 		const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
	// 		const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

	// 		heroPosition.set({ x: mouseX * 10, y: mouseY * 10 });
	// 		shapePosition.set({ x: -mouseX * 40, y: -mouseY * 40 });
	// 	}
	// }

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

<section class="max-h-screen flex items-center stacking-context z-content md:mb-48 mb-6">
	<div class="absolute bg-[#faf5f0] z-background inset-0"></div>
	<div class="container mx-auto md:px-4 lg:mt-[calc(120px-3rem)] md:mt-[calc(180px-3rem)]">
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
						src="{base}/images/shape-1.png"
						alt="Decorative dots"
						class="absolute transition-all duration-300 ease-in-out z-positioned md:block hidden"
						class:opacity-0={!isVisible}
						class:opacity-100={isVisible}
						class:translate-y-10={!isVisible}
						class:translate-y-0={isVisible}
					/>
				</div>
			</div>
			<!-- Left Column Desktop -->
			<div
				class="hidden md:block w-full lg:w-1/2 md:pl-24 md:mr-5 mb-16 lg:mb-0 text-center lg:text-left"
			>
				<div
					class="transition-opacity duration-300 ease-in-out"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
				>
					<img src="{base}/images/logo.jpeg" class="w-1/2 mb-6" alt="" />
					<h2 class="md:text-3xl lg:text-4xl md:mb-6 mb-4">Dr. Avirup Majumdar</h2>
					<p class="md:mb-4 mb-2">MBBS, MD( General Medicine)(KGMU Lucknow)</p>
					<p class="md:mb-4 mb-2">CCEBDM (Diabetology)</p>
					<p class="md:mb-8 mb-0">Reg No- 72871 (West Bengal Medical Council)</p>
					<a
						href="#contact"
						class="hidden sm:inline-block bg-[#BED173] text-lg text-white font-medium py-4 px-11 rounded-md hover:bg-[#527359] transition duration-300 ease-in-out"
					>
						Contact Us
					</a>
				</div>
			</div>

			<!-- Right Column Default -->
			<div class="w-full lg:w-1/2 relative md:mb-[-60px] md:mt-0 mb-12 mt-8">
				<img src="{base}/images/logo.jpeg" class="md:hidden w-1/2 mx-auto mb-6" alt="" />

				<div
					bind:this={imageContainer}
					on:mousemove={handleMouseMove}
					class="transition-all duration-300 ease-in-out transform aspect-square relative overflow-hidden rounded-tl-[40%] rounded-br-[40%] shadow-xl"
					class:translate-y-10={!isVisible}
					class:translate-y-0={isVisible}
					style="transform: translate({$containerPosition.x}px, {$containerPosition.y}px)"
					role="img"
				>
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup"
						class="absolute w-full h-full object-cover object-center"
					/>
				</div>
				<img
					bind:this={shapeElement}
					src="{base}/images/shape-2.png"
					alt="Decorative shape"
					class="shape-2 absolute lg:translate-y-5 lg:max-w-[615px] z-positioned"
					style="transform: translate({$shapePosition.x}px, {$shapePosition.y}px)"
				/>
				<img
					src="{base}/images/home-back-10.png"
					alt="Decorative dots"
					class="absolute top-10 right-10 w-16 h-auto transition-all duration-300 md:block hidden ease-in-out z-positioned"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
					class:translate-y-10={!isVisible}
					class:translate-y-0={isVisible}
				/>
			</div>

			<!-- Left Column Mobile -->
			<div
				class="md:hidden w-full lg:w-1/2 md:pl-24 md:mr-5 mb-16 lg:mb-0 text-center lg:text-left"
			>
				<div
					class="transition-opacity duration-300 ease-in-out"
					class:opacity-0={!isVisible}
					class:opacity-100={isVisible}
				>
					<h2 class="md:text-3xl lg:text-4xl md:mb-6 mb-4">Dr. Avirup Majumdar</h2>
					<p class="md:mb-4 mb-2">MBBS, MD( General Medicine)(KGMU Lucknow)</p>
					<p class="md:mb-4 mb-2">CCEBDM (Diabetology)</p>
					<p class="md:mb-8 mb-0">Reg No- 72871 (West Bengal Medical Council)</p>
					<a
						href="#contact"
						class="hidden sm:inline-block bg-[#BED173] text-lg text-white font-medium py-4 px-11 rounded-md hover:bg-[#527359] transition duration-300 ease-in-out"
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.shape-2 {
		right: -25%;
		bottom: -10%;
		z-index: -1;
	}

	@media (max-width: 480px) {
		.shape-2 {
			right: -10%;
			bottom: -15%;
			width: 50%;
		}
	}
</style>
