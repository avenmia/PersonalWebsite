<template>
  <div class="home">
    <Menu class="menu" />
    <section id="home-section">
      <HomeSection
        :version="version"
      />
    </section>
    <section id="resume-section">
      <ResumeSection />
    </section>
    <p>{{ version }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Menu from "@/components/menu/Menu.vue";
import HomeSection from '@/components/sections/HomeSection.vue'; // @ is an alias to /src
import ResumeSection from '@/components/sections/ResumeSection.vue';
import * as pjson from "../package.json"

console.log(pjson.version);

export default defineComponent({
  name: 'Home',
  components: {
    HomeSection,
    ResumeSection,
    Menu
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

html, body {
  background-color: #403A3C;
  overflow-y: scroll;
}

.menu {
  position: fixed;
  top: 20px;
  z-index: 100;
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
</style>
