<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section class="py-16 px-4">
  <div class="container mx-auto max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#if isVisible}
        <div in:fly="{{ y: 50, duration: 1000, delay: 200 }}" class="flex flex-col items-center text-center">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
              <!-- SVG path data for the first icon -->
            </svg>
          </div>
          <h5 class="text-xl font-semibold mb-2">Board-Certified</h5>
          <p class="text-gray-600">
            A highly qualified nutrition specialist, Serena is a graduate of the prestigious New York University Clinical Nutrition program. She went on to complete an internship in dietetics at New York Presbyterian Hospital.
          </p>
        </div>

        <div in:fly="{{ y: 50, duration: 1000, delay: 400 }}" class="flex flex-col items-center text-center">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <!-- SVG path data for the second icon -->
            </svg>
          </div>
          <h5 class="text-xl font-semibold mb-2">Top-Rated</h5>
          <p class="text-gray-600">
            Voted the top dietitian in NYC in 2015, Serena does more than just supervise the diet of her clients. By creating customized nutrition plans tailored to your medical history, daily routine, preferences and diet.
          </p>
        </div>

        <div in:fly="{{ y: 50, duration: 1000, delay: 600 }}" class="flex flex-col items-center text-center">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <!-- SVG path data for the third icon -->
            </svg>
          </div>
          <h5 class="text-xl font-semibold mb-2">Client-Focused</h5>
          <p class="text-gray-600">
            By building partnerships with clients, Serena can help set realistic goals and implement lifelong changes. This allows clients to improve their overall wellness, enjoy longterm weight loss, and manage chronic conditions.
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  /* Add any additional styles here */
</style>