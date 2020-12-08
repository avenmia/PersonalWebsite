<template>
  <div class="home-section">
    <div class="home-container">
      <div class="home-container-section">
        <h1 class="header">
          Michael Avendano
        </h1>
        <p>Software Engineer</p>
        <div class="links">
          <a href="https://www.linkedin.com/in/michael-avendano/">
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'linkedin']"
            />
          </a>
          <br>
          <a href="https://github.com/avenmia">
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'github']"
            />
          </a>
          <br>
          <a href="https://stackoverflow.com/users/7331107/avenmia">
            <font-awesome-icon
              size="2x"
              :icon="['fab', 'stack-overflow']"
            />
          </a>
        </div>
      </div>
    </div>
    <p id="photo-credit">
      <span>Photo by <a href="https://unsplash.com/@maxwbender?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Max Bender</a> on <a href="https://unsplash.com/s/photos/chicago?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </p>
  </div>
</template>

<script>
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Vue } from 'vue';

library.add(faGithub, faLinkedin, faStackOverflow);

export default {
  name: "HomeSection",
  components: {
    FontAwesomeIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.home-container-section {
  margin-top: 20px;
}


.home-container {
  background: black;
  order: 1;
  width: auto;
  height: 250px;
  border-radius: 10px;
  padding: 5vh 10vw;
  text-align: center;
  
}

.home-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/max-bender-1080x1920-contain.jpg");
  background-size: cover;
}

.links {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.links a:hover {
  color: black;
  background-color: #ffedd6;
  border-radius: 50%;
  padding: 10px;
}

.header {
  font-size: 2em;
}

#photo-credit {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #ccc;
  font-size: 8pt;
}

a {
  color: #ffedd6;
  padding: 10px;
}

p {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

a:visited {
  color: #ffedd6;
}

/* Small devices */
@media screen and (max-width: 300px)
{
  .home-section {
    background-image: url("../../assets/max-bender-653x280.jpg");
  }
}

@media screen and (min-width: 300px)
{
  .home-section {
    background-image: url("../../assets/max-bender-900x400.jpg");
  }
}

@media screen and (min-width: 600px)
{
  .home-section {
    background-image: url("../../assets/max-bender-1280x720.jpg")
  }
}

@media screen and (min-width: 992px)
{
  .home-section {
    background-image: url("../../assets/max-bender-960x768.jpg");
  }
}

@media screen and (min-width: 1200px)
{
  .home-section {
    background-image: url("../../assets/max-bender-1080x1920-contain.jpg");
  }
}

/* Ultra wide monitors */
@media screen and (min-width: 2000px)
{
  .home-section {
    background-image: url("../../assets/max-bender-1080x1920-contain.jpg");
  }
}
</style>
