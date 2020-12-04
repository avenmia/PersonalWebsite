<template>
  <div class="home">
    <Menu />
    <section id="home-section">
      <HomeSection
        :version="version"
      />
    </section>
    <section id="resume-section">
      <DownloadResume />
      <ResumeSection />
    </section>
    <p class="version">{{ version }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Menu from "@/components/menu/Menu.vue";
import HomeSection from '@/components/sections/HomeSection.vue'; // @ is an alias to /src
import ResumeSection from '@/components/sections/ResumeSection.vue';
import DownloadResume from '@/components/resume/DownloadResume.vue'
import * as pjson from "../package.json"

console.log(pjson.version);

export default defineComponent({
  name: 'Home',
  components: {
    HomeSection,
    ResumeSection,
    DownloadResume,
    Menu
  },
  setup()
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
    background-color: #2B3349;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffedd6;
}

html, body {
  background-color: #2B3349;
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

.class {
  text-align: center;
}

</style>
