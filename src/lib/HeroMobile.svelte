<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import gsap from 'gsap';

	let section: HTMLElement;
	let leftCol: HTMLElement;
	let imageContainer: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

		// Simple fade-up sequence for mobile
		tl.fromTo(
			imageContainer,
			{ opacity: 0, scale: 1.05 },
			{ opacity: 1, scale: 1, duration: 1.2 }
		).fromTo(
			leftCol.children,
			{ y: 20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
			'-=0.8'
		);
	});
</script>

<section
	bind:this={section}
	class="relative h-[100dvh] flex flex-col justify-end bg-[#faf5f0] overflow-hidden pt-24 pb-8 md:hidden"
>
	<!-- Mobile Gradient Overlay (Magazine Style) -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-[#faf5f0] via-[#faf5f0]/60 to-transparent z-10 pointer-events-none"
	></div>

	<!-- Image Background -->
	<div bind:this={imageContainer} class="absolute -top-12 inset-x-0 h-[70vh] z-0">
		<img
			src="{base}/images/doctor.webp"
			alt="Dr. Avirup Majumdar"
			class="w-full h-full object-cover object-top filter brightness-[0.95]"
		/>
	</div>

	<div class="container mx-auto px-6 w-full relative z-20">
		<div class="flex flex-col items-start text-left">
			<!-- Text Column (Foreground) -->
			<div bind:this={leftCol} class="w-full flex flex-col items-start mb-12">
				<h1
					class="text-5xl font-normal text-[#333133] mb-3 leading-[1.05] tracking-tighter drop-shadow-sm whitespace-nowrap"
				>
					Dr. Avirup Majumdar
				</h1>

				<div class="space-y-2 mb-6 text-xs tracking-tight text-gray-700">
					<p class="font-mono uppercase flex flex-col">
						<span>
							<span class="font-bold text-[#333133]">MBBS, MD</span> (General Medicine)
						</span>
						<span class="mt-1">KGMU Lucknow</span>
					</p>
					<p class="font-mono uppercase">
						<span class="font-bold text-[#333133]">CCEBDM</span> (Diabetology)
					</p>
					<p class="font-mono text-[10px] text-gray-500 mt-2 tracking-widest uppercase opacity-70">
						Reg No- 72871 (WBMC)
					</p>
				</div>

				<div class="shine-container relative inline-block">
					<a
						href="#services"
						class="group inline-flex items-center gap-3 text-[#333133] text-lg font-medium px-2 py-2 hover:opacity-70 transition-all duration-300 relative overflow-hidden"
					>
						<div class="absolute inset-0 z-10 animate-subtle-shine pointer-events-none">
							<div
								class="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
							></div>
						</div>
						<span class="border-b border-[#333133] pb-0.5 relative z-20">View Our Services</span>
						<span
							class="transform group-hover:translate-x-1 transition-transform duration-300 relative z-20"
							>→</span
						>
					</a>
				</div>
				<!-- Scroll Down Indicator -->
				<div class="mt-6 animate-bounce opacity-40 pointer-events-none">
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
		</div>
	</div>
</section>

<style>
	@keyframes subtle-shine {
		0% {
			transform: translateX(-200%);
		}
		30%,
		100% {
			transform: translateX(200%);
		}
	}
	.animate-subtle-shine {
		animation: subtle-shine 4s infinite linear;
	}
</style>
