<svelte:head>
	<title>Deploifai</title>
</svelte:head>


<div class="container">
<h2 class="page-title">Motion Graphic Promotional Video</h2>
<p class="proj-date"> August 2021</p>
  <div class="proj-metadata">
      <div class="proj-scope">
        <p>
           <span style="font-weight: 400;">Scope</span>
          <br/>Kinetic Typography
          <br/>Motion Graphics
          <br/>Digital Marketing
        </p>
      </div>
      <div class="proj-tools">
        <p>
          <span style="font-weight: 400;">Tools</span>
         <br/>Adobe Premiere Pro
         <br/>Adobe After Effects
       </p>
      </div>
  </div>

  <div class="skip-button"><a href="#final-product">SKIP TO FINAL PRODUCT</a></div>

  <p class="subheading">Scratching the Itch</p>
  <p class="description">
    <a href="https://deploif.ai/" style="font-weight: 700; text-decoration: underline;">Deploifai</a> is a SaaS company that provides infrastructure to ship machine learning models faster and simpler. 
    Once Deploifai has built the MVP (minimum viable product), the goal was to establish an online presence and raise awareness about the necessity of our product.
    <br>  
    <br/>We had <span style="color: #9599E2;">three objectives</span> for producing a promotional video. 
    <br>      
    <li>1. Empathize with developers' pain points in deploying ML models</li>
    <li>2. Communicate the simplicity of using Deploifai as a solution</li>
    <li>3. Establish a brand presence as a SaaS company</li>
  </p>
  <hr/>

  <p class="subheading">Storyboarding</p>
  <img src="/promovid-embed/storyboard.png" alt="storyboard" id="storyboard">
  <p class="description">
    After discussing with the developers on the team to choose our direction, I created a mockup storyboard on Adobe Illustrator. As this video was a mixture of kinetic typography and motion graphic design, I used this step to try out different colors, layout, and typography. 
    <br>
    <br>The music was choosen from the free resource, <a href="pixhttps://pixabay.com/music/" style="text-decoration: underline;">Pixabay Music</a>. I used the music as reference when creating the storyboard to ensure the timing will be appropriate.
  </p>

  <hr/>

  <p class="subheading">Customizing Infographic Animations</p>
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
  <p class="description">
    Above animations were created using Adobe After Effects to be used a svg animation elements in the company landing page to describe how Deploifai works. Since the feedback for these animations were positive when embeded in the landing page, I considered them suitable to be used for the promotional video also. 
  </p>

  <hr/>

  <p id= "final-product" class="subheading"> Final Product </p>

  <div class="video-embed">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0GZFtz_O3KI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

<p class="description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>





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

  li {
    list-style-type: none;
  }

  .video-embed {
      flex: 1;
      align-self: center;
      padding: 20px;
  }

  .gif-embed {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 60px;
  }

#storyboard {
      width: 500px;
      height: auto;
      align-self: center;
      padding-bottom: 20px;
  }

</style>