<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import gsap from 'gsap';

	let section: HTMLElement;
	let leftCol: HTMLElement;
	let imageContainer: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

		if (leftCol && imageContainer) {
			tl.fromTo(
				leftCol.children,
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
			)
			.fromTo(
				imageContainer,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 1 },
				'-=0.6'
			);
		}

        // Removed mousemove parallax for a calmer, more stable feel
	});
</script>

<section bind:this={section} class="relative min-h-[90vh] flex items-center bg-[#faf5f0] pt-24 pb-12">
	<div class="container mx-auto px-6 relative z-10">
		<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            <!-- Text Column -->
			<div bind:this={leftCol} class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <!-- Logo as infrastructure, smaller and cleaner -->
                <div class="mb-10 opacity-80">
                    <img src="{base}/images/logo.jpeg" class="h-16 w-auto mix-blend-multiply grayscale-[20%]" alt="Aavya Mediclinic Logo" />
                </div>

				<h1 class="text-5xl lg:text-7xl font-normal text-slate-900 mb-6 leading-[1.1] tracking-tight">
                    Dr. Avirup Majumdar
                </h1>

                <div class="space-y-1 mb-10">
				<p class="text-xl text-gray-700 font-light">MBBS, MD (General Medicine) <span class="text-gray-400">|</span> KGMU Lucknow</p>
				<p class="text-xl text-gray-700 font-light">CCEBDM (Diabetology)</p>
				<p class="text-sm text-gray-500 mt-2 tracking-wide uppercase">Reg No- 72871 (WBMC)</p>
                </div>

				<div>
					<a
						href="#contact"
						class="inline-block border border-gray-400 text-gray-800 text-lg font-light py-3 px-8 rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
					>
						Check Availability
					</a>
				</div>
			</div>

			<!-- Image Column -->
			<div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <!-- Simplified Image Container: No shapes, minimal rounding -->
				<div
					bind:this={imageContainer}
					class="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden bg-gray-200"
				>
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup Majumdar"
						class="w-full h-full object-cover"
					/>
                    <!-- Subtle overlay to ensure text contrast if needed, or just tone down the image slightly -->
                    <div class="absolute inset-0 bg-black/5 pointer-events-none"></div>
				</div>
			</div>
		</div>
	</div>
</section>
