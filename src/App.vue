<template>
  <div class="home">
    <section class="fullpage">
      <HomeSection
        :version="version"
      />
    </section>
    <section class="fullpage-2x">
      <ResumeSection />
    </section>
    <p>{{ version }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import HomeSection from '@/components/sections/HomeSection.vue'; // @ is an alias to /src
import ResumeSection from '@/components/sections/ResumeSection.vue';
import * as pjson from "../package.json"

console.log(pjson.version);

export default defineComponent({
  name: 'Home',
  components: {
    HomeSection,
    ResumeSection
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
    background-color: #403A3C;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #E9DACF;
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

.fullpage-2x {
    height: 200vh;
    width: 100%;
    margin-bottom: 5%;
}
</style>
