<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import gsap from 'gsap';

	let section: HTMLElement;
	let leftCol: HTMLElement;
	let imageContainer: HTMLElement;
	let bgShape: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		if (leftCol && imageContainer && bgShape) {
			tl.fromTo(
				leftCol.children,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, stagger: 0.2 }
			)
			.fromTo(
				imageContainer,
				{ scale: 0.9, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.2 },
				'-=0.8'
			)
			.fromTo(
				bgShape,
				{ rotation: -10, opacity: 0, scale: 0.8 },
				{ rotation: 0, opacity: 1, scale: 1, duration: 1.5 },
				'-=1'
			);
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!imageContainer || !bgShape) return;
			const { clientX, clientY } = e;
			const xPos = (clientX / window.innerWidth - 0.5) * 20;
			const yPos = (clientY / window.innerHeight - 0.5) * 20;

			gsap.to(imageContainer, {
				x: xPos,
				y: yPos,
				duration: 1,
				ease: 'power2.out'
			});
			gsap.to(bgShape, {
				x: -xPos * 2,
				y: -yPos * 2,
				duration: 1.5,
				ease: 'power2.out'
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			tl.kill();
		};
	});
</script>

<section bind:this={section} class="relative min-h-screen flex items-center overflow-hidden bg-[#faf5f0] pt-24 pb-12">
    <!-- Background Decor -->
    <div class="absolute inset-0 z-0 pointer-events-none">
         <img
            src="{base}/images/shape-1.png"
            alt=""
            class="absolute top-20 left-10 w-32 opacity-20"
         />
         <img
            src="{base}/images/home-back-10.png"
            alt=""
            class="absolute top-10 right-10 w-24 opacity-30"
        />
    </div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="flex flex-col lg:flex-row items-center">
			<!-- Text Column -->
			<div bind:this={leftCol} class="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left z-20">
                <img src="{base}/images/logo.jpeg" class="w-48 mx-auto lg:mx-0 mb-8 mix-blend-multiply" alt="Logo" />
				<h1 class="text-4xl lg:text-6xl font-light text-[#333133] mb-6 leading-tight">
                    Dr. Avirup Majumdar
                </h1>
				<p class="text-xl text-gray-600 mb-2 font-light">MBBS, MD( General Medicine)(KGMU Lucknow)</p>
				<p class="text-xl text-gray-600 mb-2 font-light">CCEBDM (Diabetology)</p>
				<p class="text-lg text-gray-500 mb-8">Reg No- 72871 (West Bengal Medical Council)</p>

				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<a
						href="#contact"
						class="inline-block bg-[#BED173] text-white text-lg font-medium py-4 px-10 rounded-full hover:bg-[#527359] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
					>
						Contact Us
					</a>
				</div>
			</div>

			<!-- Image Column -->
			<div class="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                <div class="relative w-full max-w-lg">
                     <!-- Decorative Shape behind image -->
                    <img
                        bind:this={bgShape}
                        src="{base}/images/shape-2.png"
                        alt=""
                        class="absolute -right-10 -bottom-10 w-full h-auto z-0 opacity-80"
                    />

                    <!-- Main Image Container -->
				<div
					bind:this={imageContainer}
					class="relative z-10 aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl"
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
	</div>
</section>
