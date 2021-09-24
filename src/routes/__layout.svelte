<script lang="ts">
import "../app.postcss";
import SideNavigation from "$lib/SideNavigation.svelte";
</script>

<main>
	<div class="container">
		<div class="sidenavigation-container">
		  <SideNavigation />
		</div>
		<div class="main-body-container">
			<slot />
		</div>
		 
	  </div>
	  
	  
	 
		   
</main>

<footer>	
</footer>

<style>
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		max-width: 72rem;
		width: 100%;
		margin: auto;
		padding-top: 80px;
	
	}
	
	.sidenavigation-container{
		flex: 1;
	}
	
	.main-body-container {
		flex: 5;
	}
</style>
