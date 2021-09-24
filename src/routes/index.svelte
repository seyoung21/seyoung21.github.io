<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Proj from "$lib/Project.svelte";
</script>

<svelte:head>
	<title>Park Seyoung</title>
</svelte:head>

<div class="container">
  <div class="main-body-container">
    <Proj />
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
