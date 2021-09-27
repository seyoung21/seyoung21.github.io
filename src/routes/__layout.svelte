<script lang="ts">
import "../app.postcss";
import SideNavigation from "$lib/SideNavigation.svelte";
import SocialsList from "$lib/SocialsList.svelte"
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
		<img id="logo-white" src="logo-white.svg" alt="">
	</div>
	<div class="footer-text">
		All rights reserved 2021
	</div>
	<div class="footer-socialslist">
		<SocialsList />
	</div>
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
		align-content: center;
	}

	.footer-logo {
		flex: 1;

	}

	.footer-text {
		flex: 1;
		color: white;
	}

	.footer-socialslist {
		flex: 1;
		fill: white;

	}

	#logo-white {
		height: 60px;
		width: auto;
	}
</style>
