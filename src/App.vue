<template>
  <div class="home">
    <section class="fullpage">
      <HomeSection
        :version="version"
      />
    </section>
    <section class="fullpage">
      <AboutSection />
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import HomeSection from '@/components/sections/HomeSection.vue'; // @ is an alias to /src
import AboutSection from '@/components/sections/AboutSection.vue'; // @ is an alias to /src
import * as pjson from "../package.json"

console.log(pjson.version);

export default defineComponent({
  name: 'Home',
  components: {
    HomeSection,
    AboutSection
  },
  data() 
  {
    return {
      version: pjson.version
    }
  }
});
</script>

<style>

* {
  margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.fullpage {
    height: 100vh;
    width: 100%;
}
</style>
