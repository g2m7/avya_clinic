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

	const services = [
		{
			title: 'Diabetes',
			image: '/images/services/diabetes.webp'
		},
		{
			title: 'Thyroid diseases',
			image: '/images/services/thyroid.webp'
		},
		{
			title: 'Hypertension and Lifestyle diseases',
			image: '/images/services/lifestyle.webp'
		},
		{
			title: 'Cardiological illnesses',
			image: '/images/services/cardio.webp'
		},
		{
			title: 'Respiratory diseases',
			image: '/images/services/respiratory.webp'
		},
		{
			title: 'Infectious diseases',
			image: '/images/services/infectious.webp'
		},
		{
			title: 'Autoimmune diseases',
			image: '/images/services/autoimune.webp'
		}
	];
	const additional_services = [
		'Other medical conditions',
		'Diagnostic services – All pathological tests are done here',
		'Home collection facilities are available',
		'Periodic free health camps'
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (grid) {
			gsap.from(grid.children, {
				scrollTrigger: {
					trigger: grid,
					start: 'top 85%'
				},
				y: 100,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: 'power3.out'
			});
		}
	});
</script>

<section bind:this={section} class="py-24 px-4 bg-white" {id} use:scrollTo>
	<div class="container mx-auto">
		<div class="text-center mb-20 max-w-3xl mx-auto">
			<span class="text-[#BED173] font-medium tracking-widest uppercase text-sm mb-4 block"
				>What We Treat</span
			>
			<h2 class="mb-8 font-light text-[#333133] text-4xl md:text-5xl">
				Medical <span class="font-serif italic text-[#527359]">Services</span>
			</h2>
			<p class="text-xl text-gray-600 font-light leading-relaxed">
				Medical consultation is provided by Dr. Avirup for the following ailments:
			</p>
		</div>

		<!-- Services Grid -->
		<div bind:this={grid} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
			{#each services as service}
				<div
					class="group relative bg-[#faf5f0] rounded-sm overflow-hidden cursor-pointer h-[400px]"
				>
					<!-- Image -->
					<div
						class="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
					>
						<img src={service.image} alt={service.title} class="w-full h-full object-cover" />
						<div
							class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
						></div>
					</div>

					<!-- Content -->
					<div
						class="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
					>
						<h3 class="text-white text-3xl font-light mb-2">{service.title}</h3>
						<div class="h-1 w-12 bg-[#BED173] transition-all duration-300 group-hover:w-24"></div>
					</div>
				</div>
			{/each}

			<!-- Additional Services Card -->
			<div
				class="group bg-[#527359] rounded-sm overflow-hidden h-[400px] p-10 flex flex-col justify-center text-white relative"
			>
				<div
					class="absolute top-0 right-0 w-32 h-32 bg-[#BED173] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
				></div>

				<h3 class="text-3xl font-light mb-6">Additional Services</h3>
				<ul class="space-y-4">
					{#each additional_services as item}
						<li class="flex items-start">
							<svg
								class="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#BED173]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path></svg
							>
							<span class="font-light text-lg opacity-90">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
