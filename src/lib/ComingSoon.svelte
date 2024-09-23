<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  onMount(() => {
    // Any client-side initialization can go here if needed
  });
</script>

<div class="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center font-sans">
  <img src="{base}/images/logo.jpeg" class="w-40" alt="">
  <div class="relative mt-10 z-20">
    {#each 'HELLO' as char, i}
      <h1 class="inline-block text-9xl tracking-widest animate-letter-{i+1}">{char}</h1>
    {/each}
  </div>
  <h2 class="absolute top-2/3 left-0 right-0 tracking-widest animate-con z-10">WE ARE UNDER CONSTRUCTION</h2>
</div>

<style lang="postcss">
  @keyframes animate-con {
    0% { opacity: 0; }
    33.3% { opacity: 0; }
    100% { margin: 0; }
  }

  @keyframes animate-letter-1 {
    0% { opacity: 0; transform: translate(1500px, 1000px); }
    70% { opacity: 0; }
    100% { transform: translate(0, 0); }
  }

  @keyframes animate-letter-2 {
    0% { opacity: 0; transform: translate(-100px, -1050px); }
    70% { opacity: 0; }
    100% { transform: translate(0, 0); }
  }

  @keyframes animate-letter-3 {
    0% { opacity: 0; transform: translateY(1000px); }
    70% { opacity: 0; }
    100% { transform: translate(0, 0); }
  }

  @keyframes animate-letter-4 {
    0% { opacity: 0; transform: translate(-1500px, -1000px); }
    70% { opacity: 0; }
    100% { transform: translate(0, 0); }
  }

  @keyframes animate-letter-5 {
    0% { opacity: 0; }
    70% { opacity: 0; }
    100% { opacity: 1; }
  }

  .animate-con {
    animation: animate-con 5.5s ease-out;
  }

  .animate-letter-1 { animation: animate-letter-1 1.5s ease-out; }
  .animate-letter-2 { animation: animate-letter-2 1.5s ease-out; }
  .animate-letter-3 { animation: animate-letter-3 1.5s ease-out; }
  .animate-letter-4 { animation: animate-letter-4 1.5s ease-out; }
  .animate-letter-5 { animation: animate-letter-5 1.5s ease-out; }
</style>