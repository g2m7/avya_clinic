<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { scrollTo } from '$lib/actions/scrollTo';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

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
</script>

<section class="md:py-16 px-4 md:mt-24 mb-16 relative" {id} use:scrollTo>
	<div class="container md:max-w-[70vw] mx-auto">
		<h2 class="md:mb-24 mb-10 text-center">
			Success Stories & <span class="text-[#88abda]">Testimonials</span>
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
			{#each testimonials as testimonial, index}
				{#if isVisible}
					<div
						in:fly={{ y: 50, duration: 1000, delay: index * 200 }}
						class="bg-white p-12 rounded-2xl border flex justify-between flex-col"
					>
						<p class="mb-8 text-xl italic"><span class="text-[#c92828]">"</span>{testimonial.text}<span class="text-[#c92828]">"</span></p>
						<div class="flex items-center">
							<span class="text-xl">{testimonial.author}</span>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	{#if isVisible}
		<img
			in:fade
			src="{base}/images/home-back-3.png"
			alt="Decorative shape"
			class="absolute bottom-0 w-28 right-20 hidden md:block"
		/>
	{/if}

	<slot></slot>
</section>
