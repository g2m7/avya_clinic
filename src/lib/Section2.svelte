<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { scrollTo } from '$lib/actions/scrollTo';

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="md:mt-8 md:mb-8 py-16 md:px-4" {id} use:scrollTo>
	<div class="container mx-auto md:w-1/2 w-[90vw]">
		<div class="text-center">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }}>
					<div class="mb-12">
						<div class="text-center">
							{#if isVisible}
								<div in:fly={{ y: 50, duration: 1000 }}>
									<h3
										in:fade={{ duration: 1000 }}
										class="mb-6 font-radley font-[#989898] text-2xl"
									>
										About Dr. Avirup
									</h3>
									<h3 class="h-auto">
										Hi! I'm Dr. Avirup Majumder, Esteemed Physician,
										<span class="text-[#88abda]"> Diabetologist, </span>
										and Internal Medicine Specialist in
										<span class="text-[#88abda]">Siliguri.</span>
									</h3>
								</div>
							{/if}
						</div>
					</div>

					<div class="text-lg leading-relaxed text-left">
						<p class="mb-4">
							Dr. Avirup Majumdar is a bright, talented and esteemed physician in the city of
							Siliguri, West Bengal. He showed sheer academic brilliance throughout his school life
							at Margaret (Sister Nivedita) English School, Pradhan Nagar, Siliguri.
						</p>
						<p class="mb-4">
							He passed his MBBS from North Bengal Medical College, Siliguri with numerous awards
							and distinctions including Senior Class prosectorship in Pharmacology and Honours
							marks in Opthalmology and Pharmacology.
						</p>
						<p class="mb-4">
							Dr. Avirup pursued his MD in General Medicine at King George's Medical University
							(KGMU), Lucknow, securing 3rd highest marks in his batch. He has several publications
							in reputed journals including British Medical Journal (BMJ Case Reports) and Springer
							Nature.
						</p>
						<p class="mb-4">
							He received certification in Diabetes Management (CCEBDM) from PHFI, New Delhi and a
							certificate of appreciation for his outstanding contribution as a COVID warrior from
							KGMU, Lucknow.
						</p>
						<p class="mb-4">
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
			{/if}
		</div>
	</div>
</section>
