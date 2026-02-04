<script lang="ts">
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
	class="relative min-h-screen hidden lg:flex items-center bg-[#faf5f0] overflow-hidden pt-24 pb-12"
>
	<!-- Decoration: Striped Circle (Left) -->
	<div class="absolute top-1/4 -left-12 w-32 h-32 opacity-20 pointer-events-none">
		<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
	</div>

	<!-- Background Organic Shape (Right) -->
	<div
		bind:this={bgShape}
		class="absolute top-[5%] right-0 h-[90%] w-[45%] z-0 pointer-events-none"
	>
		<img
			src="{base}/images/shape-2.png"
			alt=""
			class="w-full h-full object-contain object-right-top opacity-50"
		/>
	</div>

	<div class="container mx-auto px-6 relative z-10 w-full">
		<div class="flex flex-row items-center gap-24">
			<!-- Text Column (Foreground) -->
			<div bind:this={leftCol} class="w-1/2 flex flex-col items-start text-left">
				<h1
					class="text-8xl font-normal text-[#333133] mb-6 leading-[1.05] tracking-tighter drop-shadow-sm"
				>
					Dr. Avirup <br /> Majumdar
				</h1>

				<div class="space-y-3 mb-10 text-sm tracking-tight text-gray-700">
					<p class="font-mono uppercase">
						<span class="font-bold text-[#333133]">MBBS, MD</span> (General Medicine)
						<span class="text-gray-400 px-1">|</span> KGMU Lucknow
					</p>
					<p class="font-mono uppercase">
						<span class="font-bold text-[#333133]">CCEBDM</span> (Diabetology)
					</p>
					<p class="font-mono text-xs text-gray-500 mt-2 tracking-widest uppercase opacity-70">
						Reg No- 72871 (WBMC)
					</p>
				</div>

				<div>
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
			</div>

			<!-- Image Column (Bridge) -->
			<div class="w-1/2 flex justify-end relative">
				<!-- Decoration: Striped Circle (Right Top of Image) -->
				<div bind:this={decoShape} class="absolute -top-12 right-12 w-24 h-24 z-0 opacity-60">
					<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
				</div>

				<!-- Image Container -->
				<div
					bind:this={imageContainer}
					class="relative w-[85%] max-w-md aspect-[4/5] -translate-x-12 z-10"
				>
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup Majumdar"
						class="w-full h-full object-cover rounded-sm shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Down Indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 pointer-events-none"
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
