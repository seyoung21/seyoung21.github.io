<div class="project">
    

    <div class="project-thumbnail">
      <a href="/projects/deploifai-ui">
        <img id="deploifai-screenshot" src="/thumbnails/deploifai.png" alt="deploifai landing page"/>
        <div class="project-title">
          <h2 class="heading">UI/UX research and design</h2>
          <h2 class="subheading">Deploifai</h2>
         </div>
      </a>
  
    </div>

    <div class="project-thumbnail">
      <img id="test" src="/thumbnails/sulli-thumbnail.png" alt="Sulli"/>
      <div class="project-title">
        <h2 class="heading">Lorem ipsum dolor sit amet</h2>
        <h2 class="subheading">consectetur adipiscing elit</h2>
       </div>
    </div>

    <div class="project-thumbnail">
      <img id="test2" src="/thumbnails/coffeechat-thumbnail.png" alt="Coffeechat"/>
      <div class="project-title">
        <h2 class="heading">Lorem ipsum dolor sit amet</h2>
        <h2 class="subheading">consectetur adipiscing elit</h2>
       </div>
    </div>
    
  </div>

  <style>
    .project {
    display: grid;
    grid-template-columns: repeat(2, 400px [col-start]);
    column-gap: 30px;
    row-gap: 20px;

  }

  .project-title {
    flex: 1;
    padding-top: 10px;
  }

  .project-thumbnail {
    flex: 1;
    min-width: 400px;
    border-radius: 8px;
  }


  .project-thumbnail:hover {
    background-color: #e1e1e1e1;
  }
  </style>