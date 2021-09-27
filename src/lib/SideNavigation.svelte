<script>
  import SocialsList from "$lib/SocialsList.svelte";
import { onMount } from "svelte";

  let container;

  onMount(() => {
    const logoContainer = container.querySelector(".logo");
    logoContainer.addEventListener("mouseover", () => {
      const player = logoContainer.querySelector("lottie-player");
      player.setDirection(1);
      player.play();
    });

    logoContainer.addEventListener("mouseleave", () => {
      const player = logoContainer.querySelector("lottie-player");
      player.setDirection(-1);
      player.play();
    });
  })
</script>

<div class="container" bind:this="{container}">
  <div class="logo">
    <lottie-player src="/animations/logo.json" background="transparent" speed="1"></lottie-player>
  </div>

  <div class="side-column">
    <h2><a href="/about">About</a></h2>
    <h2><a href="/">My Work</a></h2>
  </div>

  <SocialsList />

</div>


<style>
	.container {
    display: flex;
    flex-direction: column;
    position: fixed;
    align-content: center;
    width: 15%;
    /*border:5px solid blue;*/
  }

  .logo {
    /*border:5px solid red;*/
    flex: 1;
  }

  .side-column {
    padding-top: 50px;
    flex: 1;
  }


  .side-column h2{
    font-weight: 400;
    padding-bottom: 20px;
    padding-left: 20px;
    font-size: medium;
    color: #424242;
  }

  a:hover {
  color: #9599E2;
  }

  a:active {
  color: #424242;
  }



  lottie-player {
    width: 100px;
    height: 100px;
  }
</style>
