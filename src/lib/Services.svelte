<script lang="ts">
	import { onMount } from 'svelte';
	import { contactStore } from './stores/contactStore';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let section: HTMLElement;
	let grid: HTMLElement;

	// Cursor tooltip state
	let currentTooltip: string | null = null;
	let mouseCoords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.4 });

	function handleMouseMove(e: MouseEvent) {
		mouseCoords.set({ x: e.clientX, y: e.clientY });
	}

	function handleMouseEnter(title: string) {
		currentTooltip = title;
	}

	function handleMouseLeave() {
		currentTooltip = null;
	}

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

	function handleServiceClick(title: string) {
		const message = `Hello, I would like to enquire about consultation for ${title}.`;
		contactStore.open(message);
	}
</script>

<!-- Cursor Tooltip -->
{#if currentTooltip}
	<div
		class="fixed z-[9999] pointer-events-none bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-3 transform -translate-x-1/2 -translate-y-full mt-[-20px]"
		style="left: {$mouseCoords.x}px; top: {$mouseCoords.y}px;"
		transition:fade={{ duration: 150 }}
	>
		<span class="text-[#527359] font-medium text-sm uppercase tracking-wider">Contact for</span>
		<span class="text-gray-900 font-serif italic text-lg">{currentTooltip}</span>
	</div>
{/if}

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
					on:click={() => handleServiceClick(service.title)}
					on:keydown={(e) => e.key === 'Enter' && handleServiceClick(service.title)}
					on:mouseenter={() => handleMouseEnter(service.title)}
					on:mouseleave={handleMouseLeave}
					on:mousemove={handleMouseMove}
					role="button"
					tabindex="0"
				>
					<!-- Image -->
					<div
						class="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
					>
						<img src={service.image} alt={service.title} class="w-full h-full object-cover" />
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-colors duration-300"
						></div>

						<!-- Hover Tooltip Overlay -->
					</div>

					<!-- Content (Visible normally, fade out on hover to show tooltip clearly?) 
						 Actually, user asked for tooltip on hover. Let's keep content visible but maybe subtle or let the overlay cover it.
						 The overlay above has z-index implication. Since it is absolute inset-0 after image, it covers image. 
						 The existing content div is below. Let's ensure overlay is on top of everything if we want to obscure.
						 OR better, let's keep the existing bottom content visible and just overlay the image part.
					-->

					<!-- Original Content (stays at bottom) -->
					<div
						class="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10 pointer-events-none"
					>
						<h3 class="text-white text-3xl font-normal tracking-wide mb-2 drop-shadow-md">
							{service.title}
						</h3>
						<div
							class="h-1 w-12 bg-[#BED173] transition-all duration-300 group-hover:w-24 shadow-sm"
						></div>
					</div>
				</div>
			{/each}

			<!-- Additional Services Card -->
			<div
				class="group relative h-[400px] bg-[#1a2e22] rounded-sm overflow-hidden p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
			>
				<!-- Subtle Background Pattern -->
				<div
					class="absolute -right-10 -top-10 text-[#BED173]/5 transform rotate-12 scale-150 pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6"
				>
					<svg
						width="300"
						height="300"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
							stroke="currentColor"
							stroke-width="0.5"
							fill="none"
						/>
						<path
							d="M12 8V16M8 12H16"
							stroke="currentColor"
							stroke-width="0.5"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<div class="relative z-10">
					<h3 class="text-3xl md:text-4xl font-light text-white mb-2 font-outfit">
						Beyond <span class="font-serif italic text-[#BED173]">Consultation</span>
					</h3>
					<div class="w-12 h-0.5 bg-[#BED173] mb-8 opacity-50"></div>

					<ul class="space-y-5">
						{#each additional_services as item}
							<li class="flex items-start gap-3 group/item">
								<span
									class="mt-2 w-1.5 h-1.5 rounded-full bg-[#BED173] flex-shrink-0 transition-transform duration-300 group-hover/item:scale-150"
								></span>
								<span
									class="text-gray-300 font-light text-[15px] leading-relaxed group-hover/item:text-white transition-colors"
									>{item}</span
								>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Subtle Action -->
				<div class="relative z-10 pt-6 border-t border-white/5 mt-auto">
					<button
						on:click={() =>
							contactStore.open('I would like to enquire about your additional services.')}
						class="flex items-center gap-2 text-[#BED173] text-sm uppercase tracking-widest hover:text-white transition-colors font-medium group/btn"
					>
						Enquire Now
						<span class="transform transition-transform group-hover/btn:translate-x-1">&rarr;</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
