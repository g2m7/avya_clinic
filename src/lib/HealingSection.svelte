<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { scrollTo } from '$lib/actions/scrollTo';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let isVisible = false;
	const listImageUrl = `${base}/icons/approved_icon.svg`;
	const listItems = [
		'You often feel tired, fatigued, and run down during your day, even without obvious cause.',
		'You try to eat a balanced diet, but still struggle with weight, blood sugar, or cholesterol levels.',
		'You have chronic symptoms like digestive issues, unexplained pain, frequent infections, or mood changes.',
		"You're juggling work, family, and health concerns, and need practical ways to improve your overall well-being.",
		'You want a thorough yet efficient approach to diagnosis and treatment, with a focus on lasting results.'
	];

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="flex flex-col md:flex-row w-full md:h-[95vh]" {id} use:scrollTo>
	<!-- Left column (image) -->
	<div class="w-full md:w-1/2 h-full">
		<img
			src="{base}/images/healing-section.jpg"
			alt="Background"
			class="w-full h-full object-cover"
		/>
	</div>

	<!-- Right column (content) -->
	<div
		class="w-full md:w-1/2 bg-[#527359] text-white px-8 py-12 md:p-12 flex items-center overflow-y-auto"
	>
		<div class="max-w-xl mx-auto">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }} class="text-left">
					<h4 class="text-6xl font-light text-white mb-6 hidden mb:block">
						<span class="text-[#88abda]">Do you suffer </span>from one or more of the following?
					</h4>
					<h2 class="font-light text-white mb-6 mb:hidden">
						<span class="text-[#88abda]">Do you suffer </span>from one or more of the following?
					</h2>
					<ul class="space-y-4">
						{#each listItems as item}
							<li class="flex items-start">
								<img
									src={listImageUrl}
									alt="Bullet point"
									class="w-10 h-10 mr-2 mt-1 flex-shrink-0"
								/>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
	<slot></slot>
</section>
