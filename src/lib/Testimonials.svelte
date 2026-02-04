<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { scrollTo } from '$lib/actions/scrollTo';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

    let section: HTMLElement;
    let grid: HTMLElement;

	const testimonials = [
		{
			text: `Dr. Majumdar is a wonderful physician. My mother and I regularly visit him for our routine check-ups. We are really satisfied with his medication. By the help of his valuable advices and prescribed medication, we've been successfully able to maintain the normal range of hypertension and diabetes since long. The best thing about him is he treats the patients with minimum amount of medicines, actually required. He's quite amicable in nature. We can discuss all our health issues freely with him and he listens to them with ample patience. He's such a helpful human being adorned with gentle behavior. Thank you doctor!`,
			author: 'Mrs. Smaranika Roy'
		},
		{
			text: `Dr. Avirup Majumdar has provided excellent care for both my mother and me. His expertise and compassion have made a significant difference in our health journey. If you are looking for someone who genuinely cares about his patients' well-being and delivers results, Dr. Avirup Majumdar is the one. Highly recommended.`,
			author: 'Miss Unnayana Ganguly'
		},
		{
			text: `I suffering from diabetes from 8 years. But my sugar level was not good. But when I visited this doctor right now my sugar level is under controlled and doctor behaviour, know the patient problem and environment level of this chamber are also good. As a physician this doctor is perfect as my side`,
			author: 'Mr. Jayanta Das'
		},
		{
			text: `He is the best MD doctor in Siliguri. I will must recommend him as he young and talented doctor in Siliguri.`,
			author: 'Mr. Prithwish Banerjee'
		},
		{
			text: `One of the best Medicine MD in Siliguri `,
			author: 'Mr. Jagat Kiran Sarkar'
		}
	];

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (grid) {
             gsap.from(grid.children, {
                scrollTrigger: {
                    trigger: grid,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    });
</script>

<section bind:this={section} class="py-24 px-4 bg-[#faf5f0] relative" {id} use:scrollTo>
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-20">
             <span class="text-[#BED173] font-medium tracking-widest uppercase text-sm mb-4 block">Patient Voices</span>
		<h2 class="text-4xl md:text-5xl font-light text-[#333133]">
			Success Stories & <span class="font-serif italic text-[#88abda]">Testimonials</span>
		</h2>
        </div>

		<div bind:this={grid} class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
			{#each testimonials as testimonial}
				<div class="bg-white p-10 rounded-2xl shadow-sm break-inside-avoid hover:shadow-lg transition-shadow duration-300">
                    <div class="text-[#BED173] text-6xl font-serif leading-none mb-4 opacity-50">"</div>
					<p class="mb-6 text-lg text-gray-600 font-light leading-relaxed">{testimonial.text}</p>
					<div class="flex items-center mt-auto pt-6 border-t border-gray-100">
                        <div class="w-10 h-10 rounded-full bg-[#faf5f0] flex items-center justify-center text-[#527359] font-bold text-lg mr-4">
                            {testimonial.author.charAt(0)}
                        </div>
						<span class="text-base font-medium text-[#333133]">{testimonial.author}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

    <div class="absolute bottom-0 right-0 z-0 pointer-events-none hidden md:block opacity-40">
	<img
		src="{base}/images/home-back-3.png"
		alt=""
		class="w-48"
	/>
    </div>
	<slot></slot>
</section>
