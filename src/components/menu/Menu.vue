<template>
  <div class="menu" v-if="isOpen">
    <font-awesome-icon class="times" size="2x" :icon="['fas', 'times']" @click="toggleMenu" />
    <a href="#home-section">Home</a>
    <a href="#skills-section">Skills</a>
    <a href="#work-experience-section">Work Experience</a>
    <a href="#education-section">Education</a>
    <a href="#associations-section">Associations</a>
  </div>
  <div v-else>
    <font-awesome-icon class="bars" size="2x" :icon="['fas', 'bars']" @click="toggleMenu" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes);

export default defineComponent({
  name: "Menu",
  components: {
    FontAwesomeIcon
  },
  data()
  {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu(event:any)
    {
      if (event)
      {
        this.isOpen = !(this.isOpen);
      }
    }
  }
})

</script>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    background-color: #E9DACF;
    max-width: 150px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .bars {
    /* background-color: #403A3C; */
    /* color: #E9DACF; */
    background-color: #E9DACF;
    color: #403A3C;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10%;
  }

  .times {
    /* background-color: #403A3C; */
    /* color: #E9DACF; */
    background-color: #E9DACF;
    color: #403A3C;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10%;
  }
</style>