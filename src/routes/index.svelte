<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Intro from "$lib/Intro.svelte";
</script>

<svelte:head>
	<title>Park Seyoung</title>
</svelte:head>

<header>
  <Header />
</header>

<div class="container">
  <Intro />
  <div class="project">
    <div class="project-title">
      <h2 class="heading">UI/UX research and design</h2>
      <h2 class="subheading">@deploifai</h2>
    </div>

    <div class="project-screenshot shadow-lg rounded">
      <img id="deploifai-screenshot" src="/deploifai.png" alt="deploifai landing page"/>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 72rem;
    width: 100%;
    margin: auto;
  }

  .heading {
    font-size: 24px;
    font-weight: 400;
    color: #424242;
  }

  .subheading {
    font-size: 18px;
    font-weight: 400;
    color: #424242;
  }

  .project {
    display: flex;
    padding: 40px;
  }

  .project-title {
    flex: 1;
    padding: 40px;
  }

  .project-screenshot {
    flex: 1;
    padding: 30px;
  }

</style>
