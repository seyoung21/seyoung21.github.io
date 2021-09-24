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


 

<div class="container">
  <div class="sidenavigation-container">
    <SideNavigation />
  </div>
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
    padding-top: 100px;
  
  }
  
  .sidenavigation-container{
    flex: 1;
  }

  .main-body-container {
    flex: 5;
  }

/*
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
  */
</style>
