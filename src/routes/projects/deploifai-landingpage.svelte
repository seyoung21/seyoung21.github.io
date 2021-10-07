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
    to see what elements that our potential users will be looking for on the landing page.
    <br />
    <br />Through my research, I picked out the elements that should be our priority in redesigning.
  </p>
  <div class="checklist self-center p-10 bg-indigo-50 drop-shadow-md m-10">
    <h2 class="text-xl text-left font-bold pb-2">&#x1F58A Checklist</h2>
    <p class="description">
      <li><span>Catchy header animation</span></li>
      <li><span>Detailed product walkthrough</span></li>
      <li><span>Third-party integrations supported</span></li>
      <li><span>Abbreviated FaQ section</span></li>
    </p>
  </div>

  <hr />

  <p class="subheading">Creating the Header Animation</p>
  <p class="description pb-6">
    Since I have joined Deploifai, I kept a subtle outer space theme throughout the product as a
    wordplay to the verb 'deploy' also being used for sending a satellite into orbit.
    <br />
    <br />I first designed the elements on Adobe Illustrator and imported the vectors in Adobe
    Aftereffect to animate them. Then I exported it into a Lottie file, an SVG animation, to allow
    faster loading speed when embedded into the landing page.
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
  <p class="subheading">Presenting a convincing product walkthrough</p>
  <p class="description pb-6">
    Creating a simple functional product walkthrough was a challenge as it required significant
    collaboration with the engineering team. I did not have the advanced technical background to
    explain the intricate selling points of the platform.
    <br />
    <br />After discussion with the engineering team, I learned that many developers refer to the
    Documentation page to determine whether the product will be compatible with their projects.
    Instead, the landing page should target the business decision-making-units (DMU) such as Buyers
    and Deciders.
  </p>

  <img
    src="/dep-landing/target-audience.png"
    class="w-2/5 self-center drop-shadow-md rounded-md pt-2"
    alt="Target Audience User Flow"
  />
  <p class="caption pb-4">Target Audience User Flow</p>

  <p class="description">
    Therefore, we briefly outlined the functions of each core feature and the integrations
    supported. We also produced a few step-by-step tutorial videos averaging approximately 5 min
    each and embedded them as a pop-up player within the same page. This served the purpose of
    keeping the visitors on the page longer as well as keeping the user experience light and
    responsive.
  </p>

  <hr />
  <p class="subheading">Minimizing stress with industry-standard integrations</p>
  <p class="description">
    The key brand value of Deploifai is minimizing friction and time in every stage of MLOps. The
    purpose of many MLOps tools in the market is to save the users time and money. While this might
    be true, many platforms have an entry barrier or a steep learning curve.
    <br />
    <br /> Therefore, we saw an opportunity in emphasizing the minimal friction in adopting our platform
    by clearly listing out industry-standard integrations. Simple copywriting like "Bring your own cloud
    service" was adopted for the same rationale.
  </p>

  <hr />

  <p class="subheading" id="final-product">Final Product</p>
  <p class="description italic font-medium text-md pb-4 text-gray-500">
    You can check it out live <a href="https://deploif.ai/" style="text-decoration: underline;"
      >here</a
    >
  </p>

  <img
    src="/dep-landing/landing_new.png"
    class="w-3/5 self-center drop-shadow-md rounded-md"
    alt="Deploifai New UI Design"
  />

  <p class="subheading pt-8">Final Comments</p>
  <p class="description">
    Some adjustments were made in the UI in the development stage to adapt to the reactive layout
    (i.e: mobile version). Overall, we moved away from the gradient theme from the original website
    design and adopted a more toned-down theme of navy blue and dark grey to look professional.
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
    list-style-type: '□';
  }

  li span {
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
