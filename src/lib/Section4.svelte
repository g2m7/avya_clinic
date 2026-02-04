<script lang="ts">
	import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let section: HTMLElement;
    let content: HTMLElement;

	onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (content) {
            gsap.from(content.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }
	});
</script>

<section bind:this={section} class="py-24 px-4 bg-[#faf5f0]">
	<div bind:this={content} class="container mx-auto max-w-4xl text-center">
        <span class="text-[#BED173] font-medium tracking-widest uppercase text-sm mb-4 block">Our Location</span>
		<h3 class="mb-12 font-serif italic text-[#333133] text-4xl md:text-5xl">
			About the clinic
		</h3>
		<p class="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
			Aavya Mediclinic is a residential OPD clinic located in Bidyapith Road, Deshbandhu Para,
			Siliguri, West Bengal, India. Dr. Avirup provides medical consultation facilities here
			on all working days (Monday to Saturday)
		</p>
	</div>
	<slot></slot>
</section>
