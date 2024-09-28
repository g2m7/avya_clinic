<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { scrollTo } from '$lib/actions/scrollTo';
	import { fade } from 'svelte/transition';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];
	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

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
</script>

<section class="md:py-16 px-4 py-12 mb-16 relative" {id} use:scrollTo>
	<div class="container mx-auto text-center">
		<div class="container w-[45vw] md:mb-16 mx-auto">
			<h3 in:fade={{ duration: 1000 }} class="mb-12 font-radley text-[#88abda] text-2xl">
				Services
			</h3>
			<!-- <h2 class="text-[#88abda] mb-10">Services</h2> -->
			<h3 class="md:mb-24 mb-6 leading-relaxed">
				Medical consultation is provided (by Dr. Avirup) for the following ailments :
			</h3>
			<!-- <p class="text-lg leading-relaxed">Medical consultation is provided (by Dr. Avirup) for the following ailments :</p> -->
		</div>
		<div class="container md:max-w-[70vw] w-full mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8">
				{#each services as service}
					<div class="bg-[#faf5f0] rounded-[30px] shadow-sm overflow-hidden">
						<img src={service.image} alt={service.title} class="w-full h-3/4 object-cover" />
						<div class="p-10">
							<h3 class="text-[24px] mb-2">{service.title}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
