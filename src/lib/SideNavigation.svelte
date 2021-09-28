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

  <div class="intro-sum">
    <h2>
      <span style="font-weight:400;">Seyoung Park </span>is a product designer based in HK who likes &#x1F3A5 and &#x1F408.
    </h2>
  </div>

  <div class="side-column">
    <h2><a href="/about">About</a></h2>
    <h2><a href="/">My Work</a></h2>
  </div>

  <SocialsList />

  <div class="email-link">
    <p>Interested in working with me? Send me an 
    <span style="text-decoration:underline"> <a href="mailto:sy.park2548@gmail.com">Email</a></span></p>
  </div>
</div>


<style>
	.container {
    display: flex;
    flex-direction: column;
    position: fixed;
    align-content: center;
    width: 12%;
    padding-left: 20px;
  }

  .logo {
    flex: 1;
  }

  .intro-sum {
    flex: 1;
    padding-top: 20px;
    font-weight: 300;
  }

  .side-column {
    padding-top: 50px;
    flex: 1;
  }


  .side-column h2{
    font-weight: 400;
    padding-bottom: 20px;
    font-size: medium;
    color: #424242;
  }

  a:hover {
  color: #9599E2;
  }

  a:active {
  color: #424242;
  }

  .email-link {
    padding: 40px 0px;
    font-size: small;
  }

  lottie-player {
    width: 100px;
    height: 100px;
  }
</style>
