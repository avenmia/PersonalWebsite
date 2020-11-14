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
            <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
          </a>
          <br>
          <a href="https://github.com/avenmia">
            <font-awesome-icon size="2x" :icon="['fab', 'github']" />
          </a>
          <br>
          <a href="https://stackoverflow.com/users/7331107/avenmia">
            <font-awesome-icon size="2x" :icon="['fab', 'stack-overflow']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  height: 200px;
  border-radius: 10px;
  padding: 5vh 10vw
  
}

.home-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/1440x763ChiSkyline.jpg");
  background-size: cover;
}

.links {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.header {
  font-size: 2em;
}

a {
  color: #E9DACF;
  padding: 20px;
}

a:visited {
  color: #E9DACF;
}

</style>
