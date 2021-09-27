<div class="project">
    

    <div class="project-thumbnail">
      <a href="/projects/deploifai-ui">
        <img id="deploifai-screenshot" src="/thumbnails/deploifai.png" alt="deploifai landing page"/>
        <div class="project-title">
          <h3 class="heading">UI/UX research and design</h3>
          <h3 class="subheading">Deploifai</h3>
         </div>
      </a>
  
    </div>

    <div class="project-thumbnail">
      <img id="test" src="/thumbnails/sulli-thumbnail.png" alt="Sulli"/>
      <div class="project-title">
        <h3 class="heading">Lorem ipsum dolor sit amet</h3>
        <h3 class="subheading">consectetur adipiscing elit</h3>
       </div>
    </div>

    <div class="project-thumbnail">
      <img id="test2" src="/thumbnails/coffeechat-thumbnail.png" alt="Coffeechat"/>
      <div class="project-title">
        <h3 class="heading">Lorem ipsum dolor sit amet</h3>
        <h3 class="subheading">consectetur adipiscing elit</h3>
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