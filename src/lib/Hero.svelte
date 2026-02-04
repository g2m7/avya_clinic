<script lang="ts">
	import HeroDesktop from './HeroDesktop.svelte';
	import HeroTablet from './HeroTablet.svelte';
	import HeroMobile from './HeroMobile.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import gsap from 'gsap';

	let section: HTMLElement;
	let leftCol: HTMLElement;
	let imageContainer: HTMLElement;
	let bgShape: HTMLElement;
	let decoShape: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

		if (leftCol && imageContainer && bgShape) {
			// Original Entrance Sequence
			tl.fromTo(
				bgShape,
				{ scale: 0.8, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' }
			)
				.fromTo(imageContainer, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, '-=0.8')
				.fromTo(
					leftCol.children,
					{ y: 30, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
					'-=0.6'
				);

			if (decoShape) {
				gsap.fromTo(
					decoShape,
					{ rotation: 0, opacity: 0 },
					{ rotation: 360, opacity: 1, duration: 20, repeat: -1, ease: 'linear' }
				);
			}
		}
	});
</script>

<section
	bind:this={section}
	class="relative min-h-screen flex flex-col justify-end md:justify-center md:items-center bg-[#faf5f0] overflow-hidden pt-24 pb-12"
>
	<!-- Decoration: Striped Circle (Left) -->
	<div
		class="hidden md:block absolute top-1/4 -left-12 w-24 md:w-32 h-24 md:h-32 opacity-20 pointer-events-none"
	>
		<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
	</div>

	<!-- Background Organic Shape (Right) replaced the rectangular plane -->
	<div
		bind:this={bgShape}
		class="hidden md:block absolute top-[5%] right-0 h-[80%] md:h-[90%] w-[45%] z-0 pointer-events-none"
	>
		<img
			src="{base}/images/shape-2.png"
			alt=""
			class="w-full h-full object-contain object-right-top opacity-50"
		/>
	</div>

	<!-- Mobile Gradient Overlay (Magazine Style) -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-[#faf5f0] via-[#faf5f0]/80 to-transparent z-10 lg:hidden pointer-events-none"
	></div>

	<div class="container mx-auto px-4 w-full lg:relative lg:z-10">
		<div class="flex flex-col lg:flex-row items-center lg:gap-24">
			<!-- Text Column (Foreground) -->
			<div
				bind:this={leftCol}
				class="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0"
			>
				<!-- PRESERVED: Leading for Name -->
				<h1
					class="text-3xl md:text-6xl lg:text-8xl font-normal text-[#333133] mb-5 lg:mb-6 leading-[1.15] tracking-tighter drop-shadow-sm whitespace-nowrap lg:whitespace-normal"
				>
					Dr. Avirup <br class="hidden md:block" /> Majumdar
				</h1>

				<!-- PRESERVED: Space Mono Typography for Credentials -->
				<div
					class="space-y-3 lg:space-y-3 mb-8 lg:mb-10 text-xs md:text-sm tracking-tight text-gray-700"
				>
					<p class="font-mono uppercase flex flex-col lg:block">
						<span>
							<span class="font-bold text-[#333133]">MBBS, MD</span> (General Medicine)
						</span>
						<span class="hidden lg:inline text-gray-400 px-1">|</span>
						<span class="mt-1 lg:mt-0">KGMU Lucknow</span>
					</p>
					<p class="font-mono uppercase">
						<span class="font-bold text-[#333133]">CCEBDM</span> (Diabetology)
					</p>
					<p
						class="font-mono text-[10px] md:text-xs text-gray-500 mt-2 tracking-widest uppercase opacity-70"
					>
						Reg No- 72871 (WBMC)
					</p>
				</div>

				<div>
					<!-- PRESERVED: Blue Button -->
					<a
						href="#services"
						class="group inline-flex items-center gap-3 text-[#333133] text-lg font-medium px-2 py-2 hover:opacity-70 transition-all duration-300"
					>
						<span class="border-b border-[#333133] pb-0.5">View Our Services</span>
						<span class="transform group-hover:translate-x-1 transition-transform duration-300"
							>→</span
						>
					</a>
				</div>

				<!-- Scroll Down Indicator (Moved here) -->
				<div class="mt-8 animate-bounce opacity-40 pointer-events-none lg:hidden">
					<svg
						class="w-6 h-6 text-black"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				</div>
			</div>

			<!-- Image Column (Background on Mobile, Bridge on Desktop) -->
			<div
				class="absolute -top-[10%] inset-x-0 h-[80vh] z-0 lg:static lg:h-auto lg:w-1/2 flex justify-center lg:justify-end lg:z-auto"
			>
				<!-- Decoration: Striped Circle (Right Top of Image) -->
				<div
					bind:this={decoShape}
					class="hidden md:block absolute -top-12 md:right-0 lg:right-12 w-20 md:w-24 h-20 md:h-24 z-0 opacity-60"
				>
					<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
				</div>

				<!-- Image Container -->
				<div
					bind:this={imageContainer}
					class="w-full h-full md:relative md:w-[90%] lg:w-[85%] md:max-w-md md:aspect-[4/5] md:-translate-x-6 lg:-translate-x-12 md:z-10"
				>
					<!-- Simple Image: No Filters, No Curtain -->
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup Majumdar"
						class="w-full h-full object-cover object-top md:rounded-sm shadow-none md:shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Down Indicator (Desktop Only) -->
	<div
		class="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 pointer-events-none"
	>
		<svg
			class="w-6 h-6 text-black"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>
