<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollTo } from '$lib/actions/scrollTo';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

    let section: HTMLElement;
    let heading: HTMLElement;
    let content: HTMLElement;

	onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        if (heading && content) {
            tl.from(heading, { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
              .from(content.children, { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5");
        }

        return () => {
             // ScrollTrigger instances are automatically killed when the refresh occurs or component unmounts usually,
             // but good practice to kill animation.
             tl.kill();
        }
	});
</script>

<section bind:this={section} class="py-24 px-4 bg-white relative overflow-hidden" {id} use:scrollTo>
    <!-- Subtle Background Detail -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-[#faf5f0] rounded-bl-full z-0 opacity-50"></div>

	<div class="container mx-auto max-w-4xl relative z-10">
        <div class="text-center mb-16" bind:this={heading}>
            <span class="text-[#BED173] font-medium tracking-widest uppercase text-sm mb-4 block">About Dr. Avirup</span>
            <h2 class="text-4xl md:text-5xl font-light text-[#333133]">
                A Journey of <span class="italic font-serif text-[#527359]">Excellence</span>
            </h2>
        </div>

		<div bind:this={content} class="prose prose-lg mx-auto text-gray-600 leading-relaxed font-light">
            <p class="first-letter:text-5xl first-letter:font-serif first-letter:text-[#527359] first-letter:mr-3 first-letter:float-left">
                Dr. Avirup Majumdar is a bright, talented and esteemed physician in the city of
                Siliguri, West Bengal. He showed sheer academic brilliance throughout his school life
                at Margaret (Sister Nivedita) English School, Pradhan Nagar, Siliguri.
            </p>
            <p>
                He passed his MBBS from North Bengal Medical College, Siliguri with numerous awards
                and distinctions including Senior Class prosectorship in Pharmacology and Honours
                marks in Opthalmology and Pharmacology.
            </p>
            <p>
                Dr. Avirup pursued his MD in General Medicine at King George's Medical University
                (KGMU), Lucknow, securing 3rd highest marks in his batch. He has several publications
                in reputed journals including British Medical Journal (BMJ Case Reports) and Springer
                Nature.
            </p>
            <p>
                He received certification in Diabetes Management (CCEBDM) from PHFI, New Delhi and a
                certificate of appreciation for his outstanding contribution as a COVID warrior from
                KGMU, Lucknow.
            </p>
            <p>
                Dr. Avirup is a Life Member of Association of Physicians of India (API), Research
                Society for Study of Diabetes in India (RSSDI), Indian Society of Critical Care
                Medicine (ISCCM) and Indian Society of Hypertension (ISH).
            </p>
            <p>
                He is currently practicing as a Physician and Diabetologist in Siliguri and is
                attached to Desun Hospital, Basu's Clinic and Medica Cancer Hospital.
            </p>
		</div>
	</div>
</section>
