<script lang="ts">
    import SocialsListWhite from "$lib/SocialsListWhite.svelte"
</script>

<div class="footer-background">
    <div class="footer-container">
        <div class="footer-logo">
            <img id="logo-white" src="/brand/logo-white.svg" alt="">
        </div>
        <div class="footer-text">
            <p>
                Copyright &copy 2021 Seyoung Park 
            <br> All rights reserved.
            </p>
            
        </div>
        <div class="footer-socialslist">
            <SocialsListWhite />
        </div>
    </div>
</div>




<style>
    .footer-background {
        background: #424242;
        width: 100%;
        padding: 50px 15px;
    }
    .footer-container{
		display: flex;
		flex-direction: row;
        padding: 0px 40px;

		max-width: 72rem;
		width: 100%;
		margin: auto;
        align-items: flex-end;
	}

	.footer-logo {
		flex: 1;

	}

	.footer-text {
		flex: 8;
        color: white;
        font-weight: 300;
        font-size: small;
	}

	.footer-socialslist {
		flex: 1;

	}

	#logo-white {
		height: 40px;
		width: auto;
    }
</style>