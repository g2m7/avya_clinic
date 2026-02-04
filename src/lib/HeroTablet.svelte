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
	class="relative min-h-screen hidden md:flex lg:hidden items-center bg-[#faf5f0] overflow-hidden pt-24 pb-12"
>
	<!-- Scale down background elements for tablet -->
	<div class="absolute top-1/4 -left-8 w-24 h-24 opacity-20 pointer-events-none">
		<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
	</div>

	<div
		bind:this={bgShape}
		class="absolute top-[5%] right-0 h-[80%] w-[40%] z-0 pointer-events-none"
	>
		<img
			src="{base}/images/shape-2.png"
			alt=""
			class="w-full h-full object-contain object-right-top opacity-50"
		/>
	</div>

	<div class="container mx-auto px-8 relative z-10 w-full">
		<div class="flex flex-row items-center gap-6">
			<!-- Text Column -->
			<div bind:this={leftCol} class="w-1/2 flex flex-col items-start text-left">
				<h1
					class="text-5xl font-normal text-[#333133] mb-4 leading-[1.1] tracking-tighter drop-shadow-sm"
				>
					Dr. Avirup <br /> Majumdar
				</h1>

				<div class="space-y-2 mb-8 text-xs tracking-tight text-gray-700">
					<p class="font-mono uppercase block">
						<span class="font-bold text-[#333133]">MBBS, MD</span> (General Medicine) <br />
						<span class="text-gray-400 hidden">|</span> KGMU Lucknow
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
						class="group inline-flex items-center gap-2 text-[#333133] text-base font-medium px-2 py-2 hover:opacity-70 transition-all duration-300 relative overflow-hidden"
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
			</div>

			<!-- Image Column -->
			<div class="w-1/2 flex justify-end relative">
				<div bind:this={decoShape} class="absolute -top-8 right-8 w-16 h-16 z-0 opacity-60">
					<img src="{base}/images/shape-1.png" alt="" class="w-full h-full object-contain" />
				</div>

				<div bind:this={imageContainer} class="relative w-[90%] aspect-[4/5] z-10">
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup Majumdar"
						class="w-full h-full object-cover rounded-sm shadow-xl"
					/>
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
