<svelte:head>
  <title>Deploifai</title>
</svelte:head>

<div class="container">
  <h2 class="page-title">Creating End-to-End UIUX for SaaS company</h2>

  <p class="proj-date">September 2021</p>
  <div class="proj-metadata">
    <div class="proj-scope">
      <p>
        <span style="font-weight: 400;">Scope</span>
        <br />UIUX
        <br />Vector Animation
        <br />Copywriting
      </p>
    </div>
    <div class="proj-tools">
      <p>
        <span style="font-weight: 400;">Tools</span>
        <br />Figma
        <br />Adobe After Effects
        <br />LottieFiles
      </p>
    </div>
  </div>

  <div class="skip-button"><a href="#final-product">SKIP TO FINAL PRODUCT</a></div>

  <p class="subheading">Redesigning the Landing Page with the Evolving Product</p>
  <p class="description">
    One of the most interesting things about working in a startup is how fast the company and the
    product evolves. Only two months after the initial landing page design, our developers launched
    two more core functions for Deploifai, rendering the UI obsolete.
  </p>

  <p class="caption">Original Landing Page design</p>
  <img
    src="/dep-landing/landing_old.png"
    class="w-3/5 self-center drop-shadow-md rounded-md"
    alt="Deploifai Old UI Design"
  />

  <p class="description">
    <br /> When proceeding with the redesign, I kept the elements that received positive feedback (simplicity
    & engagement with vector animations) and focused on adding what potential users will be looking for
    in trying a new MLops product.
  </p>

  <hr />

  <p class="subheading">Research</p>
  <p class="description">
    Once I have gathered our needs, I researched the websites of our competitors featured on <a
      href="https://mlops.toys/"
      style="text-decoration: underline;">MLOps.toys</a
    >
    to see what elements that our potential users will be looking for in the landing page.
    <br />
    <br />Through my research, I picked out the elements that should be our priority in redesigning.
  </p>
  <div class="checklist self-center p-10 bg-indigo-50 drop-shadow-md m-10">
    <h2 class="text-xl text-left font-bold pb-2">&#x1F58A Checklist</h2>
    <p class="description">
      <li><span>Detailed product walkthrough</span></li>
      <li><span>Third-party integrations supported</span></li>
      <li><span>Abbreviated FaQ section</span></li>
      <li><span>Catchy header animation</span></li>
    </p>
  </div>

  <hr />

  <p class="subheading">Creating Header Animation</p>
  <p class="description pb-6">
    Since I have joined Deploifai, I kept a subtle outerspace theme throughout the product as a
    reference to the word 'deploy' also being used for sending satellite into orbit.
    <br />
    <br />I first designed the elements on Adobe Illustrator and imported the vectors in Adobe
    Aftereffect to animate them. Then I exported it into a Lottie file, a SVG animation, to allow
    faster loading speed when embeded into the landing page.
  </p>

  <lottie-player
    src="/animations/planet-rocket-evolution.json"
    background="transparent"
    speed="1"
    loop
    autoplay
  />
  <p class="caption w-45">
    Each of the three planets represents to three steps <br />
    in MLOps that Deploifai automates and supports.
  </p>

  <hr />

  <p class="subheading" id="final-product">Final Product</p>
  <p class="description italic font-thin text-sm pb-4 text-gray-500">
    You can check it out live <a href="https://deploif.ai/" style="text-decoration: underline;"
      >here</a
    >
  </p>

  <img
    src="/dep-landing/landing_new.png"
    class="w-3/5 self-center drop-shadow-md rounded-md"
    alt="Deploifai New UI Design"
  />

  <p class="description">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
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

  #image1 {
    width: 500px;
    height: auto;
    align-self: center;
    padding: 20px;
  }

  li {
    list-style-type: '□';
  }

  span {
    position: relative;
    left: 12px;
  }

  li::marker {
    color: #9599e2;
    font-size: x-large;
  }

  lottie-player {
    width: 300px;
    height: auto;
    place-self: center;
  }
</style>
