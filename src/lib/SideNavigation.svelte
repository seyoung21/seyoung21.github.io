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

  <div class="side-column">
    <h2><a href="/about">About</a></h2>
    <h2><a href="/">My Work</a></h2>
  </div>

  <div class="social-media">
    <a href="https://twitter.com/SeyoungPark21"><img id="twitter" src="/twitter.svg" alt="Twitter"></a>
    <a href="https://www.behance.net/angelapark1"><img id="behance" src="/behance.svg" alt="Behance"></a>
    <a href="https://www.youtube.com/channel/UCLIvcFP9LJmhTozEgr7Wf1w"><img id="youtube" src="/youtube.svg" alt="Youtube"></a>
  </div>

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

  .social-media{
    display: flex;
    padding-top: 30px;
    align-items: center;
    padding-left: 20px;
  }

  #twitter {
    width: auto;
    height: 14px;
    padding-right: 12px;
  }

  #behance{
    width: auto;
    height: 20px;
    padding-right: 12px;
  }

  #youtube{
    width: auto;
    height: 20px;
  }



  lottie-player {
    width: 100px;
    height: 100px;
  }
</style>
