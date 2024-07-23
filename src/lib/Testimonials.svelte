<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { base } from '$app/paths';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	const testimonials = [
		{
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error, quaerat mollitia in incidunt minus! Natus nostrum vero accusantium dolorem doloribus dolor at ut eum quasi doloremque, sit maxime dolore odit voluptates harum beatae cupiditate nulla recusandae in culpa necessitatibus? Laboriosam a temporibus voluptate et vel? Adipisci possimus repellat expedita!',
			author: 'John Doe',
			image:
				'{base}/images/quote-1.jpg'
		},
		{
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error, quaerat mollitia in incidunt minus! Natus nostrum vero accusantium dolorem doloribus dolor at ut eum quasi doloremque, sit maxime dolore odit voluptates harum beatae cupiditate nulla recusandae in culpa necessitatibus? Laboriosam a temporibus voluptate et vel? Adipisci possimus repellat expedita!',
			author: 'John Doe',
			image:
				'{base}/images/quote-2.jpg'
		},
		{
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error, quaerat mollitia in incidunt minus! Natus nostrum vero accusantium dolorem doloribus dolor at ut eum quasi doloremque, sit maxime dolore odit voluptates harum beatae cupiditate nulla recusandae in culpa necessitatibus? Laboriosam a temporibus voluptate et vel? Adipisci possimus repellat expedita!',
			author: 'John Doe',
			image:
				'{base}/images/quote-3.jpg'
		}
	];
</script>

<section class="py-16 px-4 mt-48 mb-16 relative">
	<div class="container max-w-[70vw] mx-auto">
		<h2 class="mb-24 text-center">
			Success Stories & <span class="text-[#88abda]">Testimonials</span>
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			{#each testimonials as testimonial, index}
				{#if isVisible}
					<div
						in:fly={{ y: 50, duration: 1000, delay: index * 200 }}
						class="bg-white p-12 rounded-2xl border"
					>
						<p class="mb-8 text-xl">{testimonial.text}</p>
						<div class="flex items-center">
							<img
								src={testimonial.image}
								alt={testimonial.author}
								class="w-12 h-12 rounded-full mr-4"
							/>
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
			class="absolute bottom-0 w-28 right-20"
		/>
	{/if}
</section>
