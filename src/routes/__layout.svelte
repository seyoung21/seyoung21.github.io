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

<footer class="footer-container">
	<div class="footer-logo">
		<img src="favicon/png" alt="">
	</div>
	<div class="footer-text">
		All rights reserved 2021
	</div>
	<div class="footer-socialslist"></div>
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
		padding-bottom: 80px;
	}

	.footer-container{
		height: 150px;
		background: #424242;
		display: flex;
		flex-direction: row;
	}

	.footer-logo {
		flex: 1;

	}

	.footer-logo {
		flex: 1;
	}

	.footer-logo {
		flex: 1;

	}
</style>
