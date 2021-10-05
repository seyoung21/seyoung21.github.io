<script lang="ts">
  import '../app.postcss';
  import SideNavigation from '$lib/SideNavigation.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<main>
  <div class="container">
    <div class="sidenavigation-container hidden lg:flex">
      <SideNavigation />
    </div>
    <div class="lg:flex-5 lg:pl-60 pb-40 lg:pb-96">
      <slot />
    </div>
  </div>
</main>

<footer>
  <Footer />
</footer>

<style>
  .container {
    flex-direction: row;
    justify-content: center;
    margin: auto;
    padding-top: 80px;
  }
</style>
