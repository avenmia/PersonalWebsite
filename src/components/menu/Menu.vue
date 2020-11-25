<template>
  <div class="menu" v-if="isOpen">
    <a href="#home-section">Home</a>
    <a href="#skills-section">Skills</a>
    <a href="#work-experience-section">Work Experience</a>
    <a href="#education-section">Education</a>
    <a href="#associations-section">Associations</a>
    <button @click="toggleMenu">Close Menu</button>
  </div>
  <div v-else>
    <button @click="toggleMenu">Open Menu</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
  props: {
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
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>