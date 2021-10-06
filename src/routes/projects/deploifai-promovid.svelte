<svelte:head>
  <title>Deploifai</title>
</svelte:head>

<div class="container">
  <h2 class="page-title">Motion Graphic Promotional Video</h2>
  <p class="proj-date">August 2021</p>
  <div class="proj-metadata">
    <div class="proj-scope">
      <p>
        <span style="font-weight: 400;">Scope</span>
        <br />Kinetic Typography
        <br />Motion Graphics
        <br />Digital Marketing
      </p>
    </div>
    <div class="proj-tools">
      <p>
        <span style="font-weight: 400;">Tools</span>
        <br />Adobe Premiere Pro
        <br />Adobe After Effects
      </p>
    </div>
  </div>

  <div class="skip-button"><a href="#final-product">SKIP TO FINAL PRODUCT</a></div>

  <p class="subheading">Scratching the Itch - Targeting User's Pain Points</p>
  <p class="description">
    <a href="https://deploif.ai/" style="font-weight: 700; text-decoration: underline;">Deploifai</a
    >
    is a SaaS company that provides an infrastructure to ship machine learning models faster and simpler.
    Once Deploifai has built the MVP (minimum viable product), the goal was to establish an online presence
    and raise awareness about the necessity of our product.
    <br />
    <br />We had <span style="color: #9599E2;">three objectives</span> for producing a promotional
    video.
    <!-- <br />
    <li>1. Empathize with developers' pain points in deploying ML models</li>
    <li>2. Communicate the simplicity of using Deploifai as a solution</li>
    <li>3. Establish a brand presence as a SaaS company</li> -->
  </p>

  <div class="self-center p-10 bg-indigo-50 drop-shadow-md m-10">
    <h2 class="text-xl text-left font-bold pb-2">&#x1F3AF Goals</h2>
    <ol>
      <li><span>Empathize with developers' pain points in deploying ML models</span></li>
      <li><span>Communicate the simplicity of using Deploifai as a solution</span></li>
      <li><span>Establish a brand presence as a SaaS company</span></li>
    </ol>
  </div>
  <hr />

  <p class="subheading">Storyboarding</p>
  <img src="/promovid-embed/storyboard.png" alt="storyboard" id="storyboard" />
  <p class="description">
    After discussing with the developers on the team to choose our direction, I created a mockup
    storyboard on Adobe Illustrator. As this video was a mixture of kinetic typography and motion
    graphic design, I used this step to try out different colours, layouts, and typography.
    <br />
    <br />The music was choosen from the free resource,
    <a href="pixhttps://pixabay.com/music/" style="text-decoration: underline;">Pixabay Music</a>. I
    used the music as reference when creating the storyboard to ensure the timing will be
    appropriate.
  </p>

  <hr />

  <p class="subheading">Customizing Infographic Animations</p>
  <div class="gif-embed">
    <div class="gif-rocket">
      <img src="/promovid-embed/rocket_launch.gif" alt="" />
    </div>

    <div class="gif-gather4zip">
      <img src="/promovid-embed/gather4zip.gif" alt="" />
    </div>

    <div class="gif-drag-drop">
      <img src="/promovid-embed/drag_drop.gif" alt="" />
    </div>
  </div>
  <p class="description">
    The above animations were created using Adobe After Effects to be used SVG animation elements in
    the company landing page to describe how Deploifai works. Since the feedback for these
    animations were positive when embedded in the landing page, I considered them suitable to be
    used for the promotional video also.
  </p>

  <hr />

  <p id="final-product" class="subheading">Final Product</p>

  <div class="video-embed">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0GZFtz_O3KI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>

  <p class="description">
    The final video was published on multiple platforms such as <a
      href="https://www.producthunt.com/posts/deploifai"
      style="text-decoration: underline;">Product Hunt</a
    >, Twitter, and YouTube to promote
    <a href="https://deploif.ai/" style="text-decoration: underline;">Deploifai</a>
    and its solution for ML developers' pain points. It received more than
    <span style="font-weight: 700;">
      800 impressions on Twitter and nearly 50 impressions on Product Hunt</span
    >. As the product launches more functions to improve MLops journey for developers and data
    scientists, we plan on producing more promotional videos in a similar style.
  </p>
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

  li {
    list-style-type: decimal;
    list-style-position: inside;
    line-height: 200%;
  }

  li span {
    position: relative;
    left: 12px;
  }

  li::marker {
    color: #9599e2;
    font-size: medium;
    font-weight: bold;
  }
</style>
