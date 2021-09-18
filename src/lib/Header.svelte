<script>
</script>



<div class="container">
  <div class="logo">
    <lottie-player src="/logo.json" background="transparent" speed="1" autoplay loop></lottie-player>
  </div>
  <div id="header-menu">
    <h2>UI/UX</h2>
    <h2>Video & animations</h2>
    <h2>Branding</h2>
    <h2>Explorations</h2>
  </div>
  <div class="side-column"></div>
</div>



<style>
	.container {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    position: fixed;
    width: 100%;
    margin-top: 0;
    background-color: white;
  }

  .logo {
    flex: 1
  }

  #header-menu {
    display: flex;
    justify-content: space-around;
    flex: 3;
  }

  #header-menu h2 {
    font-weight: 300;
    font-size: medium;
    color: #424242;
  }

  .side-column {
    flex: 1
  }

  lottie-player {
    width: 100px;
    height: 100px;
  }
</style>
