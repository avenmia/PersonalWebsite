<template>
  <div class="home">
    <NavMenu />
    <section id="home-section">
      <HomeSection :version="version" />
    </section>
    <section id="resume-section">
      <DownloadResume />
      <ResumeSection />
    </section>
    <p class="version">
      {{ version }}
    </p>
  </div>
</template>

<script lang="ts">
import * as pjson from "../package.json";
import {
  defineComponent
} from 'vue';
import DownloadResume from '@/components/resume/DownloadResume.vue';
import HomeSection from '@/components/sections/HomeSection.vue'; // @ is an alias to /src
import NavMenu from "@/components/menu/NavMenu.vue";
import ResumeSection from '@/components/sections/ResumeSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeSection,
    ResumeSection,
    DownloadResume,
    NavMenu
  },
  setup()
  {
    return {
      version: pjson.version
    };
  }
});
</script>

<style>

* {
  margin: 0;
  box-sizing: border-box;
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

#resume-section {
  max-width: 960px;
  margin: 0 auto;
}

.version {
  text-align: center;
}
</style>
