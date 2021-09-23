<script>
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
    <lottie-player src="/logo.json" background="transparent" speed="1"></lottie-player>
  </div>
</div>

<div class="side-column">
  <h2><a href="#">About</a></h2>
  <h2><a href="#">My Work</a></h2>
</div>



<style>
	.container {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    position: fixed;
    width: 100%;
    margin-top: 0;
  }

  .logo {
    flex: 1;
    padding: 130px;
    max-width: 10px;
  }

  .side-column {
    position: fixed;
    padding-top: 300px;
    padding-left: 150px;
  }


  .side-column h2{
    font-weight: 400;
    padding-bottom: 20px;
    font-size: medium;
    color: #424242;
  }

  lottie-player {
    width: 100px;
    height: 100px;
  }
</style>
