<svelte:head>
	<title>Deploifai</title>
</svelte:head>


<div class="container">
<h2 class="heading"> Lorem ipsum dolor sit amet</h2>
<p class="subheading"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<div class="video-embed">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0GZFtz_O3KI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


<div class="gif-embed">
  <div class="gif-rocket">
    <img src="/promovid-embed/rocket_launch.gif" alt="">
  </div>
  
  <div class="gif-gather4zip">
    <img src="/promovid-embed/gather4zip.gif" alt="">
  </div>
  
  <div class="gif-drag-drop">
    <img src="/promovid-embed/drag_drop.gif" alt="">
  </div>
</div>



</div>


<style>
    .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    max-width: 72rem;
    width: 100%;
    margin: auto;
  }

  .video-embed {
      flex: 1;
      align-self: center;
      padding: 60px;
  }

  .gif-embed {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 60px;
  }

  .heading {
    font-size: 24px;
    font-weight: 700;
    color: #424242;
  }


  .subheading {
    font-size: 18px;
    font-weight: 400;
    color: #424242;
  } 


  .description {
    font-size: 18px;
    font-weight: 400;
    color: #424242;
  }

  /* #image1 {
      width: 500px;
      height: auto;
      align-self: center;
      padding: 20px;
  } */
</style>