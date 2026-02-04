<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let section: HTMLElement;
    let content: HTMLElement;
    let deco1: HTMLElement;
    let deco2: HTMLElement;

	onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (content) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                }
            });

            tl.from(content.children, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }

        if (deco1) {
            gsap.to(deco1, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "linear"
            });
        }

        if (deco2) {
            gsap.to(deco2, {
                y: -20,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }
	});
</script>

<section bind:this={section} class="bg-[#faf5f0] py-32 px-4 relative overflow-hidden">
	<div bind:this={content} class="container mx-auto max-w-4xl text-center relative z-10">
        <span class="text-[#BED173] font-medium tracking-widest uppercase text-sm mb-4 block">Convenience First</span>
		<h2 class="text-4xl md:text-5xl text-[#333133] mb-2 font-light">Diagnostic services</h2>
		<h2 class="text-4xl md:text-5xl text-[#ec9f57] font-serif italic mb-8">at your doorstep</h2>
		<p class="text-xl text-gray-600 font-light mb-2 max-w-2xl mx-auto">All pathological tests conducted with precision.</p>
        <p class="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">Home collection facilities available.</p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
            <div class="text-2xl text-[#333133]">
                For appointments: <a href="tel:+917047812650" class="text-[#88abda] font-medium hover:text-[#527359] transition-colors">+91 70478 12650</a>
            </div>
		<a
			href="tel:70478-12650"
			class="text-lg inline-block px-10 py-4 bg-[#BED173] text-white rounded-full hover:bg-[#527359] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
		>
			Call Now
		</a>
        </div>
	</div>

	<!-- Decorative elements -->
	<img
        bind:this={deco1}
		src="{base}/images/home-back-9.png"
		alt=""
		class="absolute bottom-[-10%] left-[-5%] w-64 opacity-20"
	/>

	<img
        bind:this={deco2}
		src="{base}/images/home-back-6.png"
		alt=""
		class="absolute bottom-20 left-20 w-32 opacity-30 hidden md:block"
	/>

	<img
		src="{base}/images/home-back-8.png"
		alt=""
		class="absolute top-0 right-0 w-96 opacity-10"
	/>
</section>
