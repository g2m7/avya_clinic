<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import gsap from 'gsap';

	let section: HTMLElement;
	let leftCol: HTMLElement;
	let imageContainer: HTMLElement;
	let bgPlane: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

		if (leftCol && imageContainer && bgPlane) {
            // Subtle entrance sequence
			tl.fromTo(
				bgPlane,
				{ scaleX: 0, opacity: 0 },
				{ scaleX: 1, opacity: 1, duration: 1.2, transformOrigin: "right center" }
			)
			.fromTo(
				imageContainer,
				{ opacity: 0, x: 20 },
				{ opacity: 1, x: 0, duration: 1 },
				'-=0.8'
			)
            .fromTo(
				leftCol.children,
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                '-=0.6'
			);
		}
	});
</script>

<section bind:this={section} class="relative min-h-[90vh] flex items-center bg-[#faf5f0] overflow-hidden pt-24 pb-12">

    <!-- Spatial Depth: Background Plane (Mid-ground) -->
    <!-- Positioned on the right, creating a split-plane effect that the image will bridge -->
    <div
        bind:this={bgPlane}
        class="hidden lg:block absolute top-0 right-0 h-full w-[35%] bg-[#E8E4DF] z-0 pointer-events-none"
    ></div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            <!-- Text Column (Foreground) -->
			<div bind:this={leftCol} class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <!-- Logo Infrastructure -->
                <div class="mb-10 opacity-80">
                    <img src="{base}/images/logo.jpeg" class="h-14 w-auto mix-blend-multiply grayscale-[20%]" alt="Aavya Mediclinic Logo" />
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
						class="inline-block border border-gray-400 text-gray-800 text-lg font-light py-3 px-8 rounded-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
					>
						Check Availability
					</a>
				</div>
			</div>

			<!-- Image Column (Foreground/Bridge) -->
			<div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <!-- Image Container bridges the gap between the main bg and the right plane -->
                <!-- Translating it slightly left (-translate-x-12) on desktop to effect the overlap -->
				<div
					bind:this={imageContainer}
					class="relative w-full max-w-md aspect-[4/5] shadow-2xl lg:-translate-x-12"
				>
					<img
						src="{base}/images/doctor.webp"
						alt="Dr. Avirup Majumdar"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
