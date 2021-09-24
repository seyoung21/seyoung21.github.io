<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	  import Intro from "$lib/Intro.svelte";
    import SideNavigation from "$lib/SideNavigation.svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>


<div class="container">

  <div class="main-body-container">
    <Intro />
  </div>
   
</div>


<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 72rem;
    width: 100%;
    margin: auto;
  }

	 
</style>
