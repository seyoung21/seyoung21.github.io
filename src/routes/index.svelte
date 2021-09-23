<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import SideNavigation from "$lib/SideNavigation.svelte";
  import Proj from "$lib/Project.svelte";
</script>

<svelte:head>
	<title>Park Seyoung</title>
</svelte:head>

<header>
  <SideNavigation />
</header>

<div class="container">
  <Proj />
</div>

<style>
  .container {
    max-width: 72rem;
    width: 100%;
    margin: auto;
    padding: 200px;
  }

  .heading {
    font-size: 24px;
    font-weight: 400;
    color: #424242;
  }

  .subheading {
    font-size: 18px;
    font-weight: 400;
    color: #424242;
  }
</style>
