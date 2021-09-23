<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	  import Intro from "$lib/Intro.svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
    <Intro />
</div>

<style>
	  .container {
    max-width: 72rem;
    width: 100%;
    margin: auto;
    padding: 200px;
  }
</style>
