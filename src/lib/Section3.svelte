<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="py-16 md:px-4">
	<div class="container md:w-[70%] w-[90vw] mx-auto max-w-7xl">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border rounded-2xl">
			{#if isVisible}
				<div
					in:fly={{ y: 50, duration: 1000, delay: 200 }}
					class="flex flex-col p-10 items-center text-center"
				>
					<div class="mb-4">
						<img src="{base}/images/section3/first_icon.svg" alt="first_icon" />
					</div>
					<h5 class="text-xl font-semibold mb-2">Board-Certified</h5>
					<p class="text-gray-600">
						Dr. Avirup Majumder brings extensive medical expertise to Siliguri. With an MBBS from
						North Bengal Medical College and an MD in General Medicine from KGMU, Lucknow, he's also
						certified in Diabetes Management. His credentials ensure patients receive care of the
						highest standard.
					</p>
				</div>

				<div
					in:fly={{ y: 50, duration: 1000, delay: 400 }}
					class="flex flex-col p-10 border-l border-r border-dashed items-center text-center"
				>
					<div class="mb-4">
						<img src="{base}/images/section3/second_icon.svg" alt="second_icon" />
					</div>
					<h5 class="text-xl font-semibold mb-2">Top-Rated</h5>
					<span class="text-gray-600">
						<p>
							Recognized for his academic excellence, Dr. Majumder graduated third in his MD class.
							His research is published in respected journals like BMJ Case Reports and Springer
							Nature. As a member of prestigious medical societies including API and ISCCM, he stays
							at the forefront of medical advancements.
						</p>
					</span>
				</div>

				<div
					in:fly={{ y: 50, duration: 1000, delay: 600 }}
					class="flex flex-col p-10 items-center text-center"
				>
					<div class="mb-4">
						<img src="{base}/images/section3/third_icon.svg" alt="third_icon" />
					</div>
					<h5 class="text-xl font-semibold mb-2">Patient-Focused</h5>
					<p class="text-gray-600">
						Committed to serving his community, Dr. Majumder practices in Siliguri, specializing in
						general medicine and diabetology. His affiliations with multiple hospitals ensure
						accessible, comprehensive care. Dr. Majumder's approach combines medical excellence with
						a deep understanding of local health needs.
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
