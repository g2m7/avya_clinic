<script lang="ts">
  import { scrollTo } from '$lib/actions/scrollTo';
  const currentYear = new Date().getFullYear();
  
  interface $$Props {
    id: string;
  }

  export let id: $$Props['id'];
</script>

<footer class="bg-[#08263f] py-4" {id} use:scrollTo>
  <div class="max-w-[75vw] mx-auto text-left">
    <p class="font-normal text-lg text-[#97a4ae]">
      © {currentYear} Avya Clinic. All rights reserved.
    </p>
  </div>
  <slot></slot>
</footer>

<style>
  footer {
    width: 100%;
  }
  
  div {
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
</style>