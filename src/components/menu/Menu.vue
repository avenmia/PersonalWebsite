<template>
  <transition>
    <div class="menu" v-if="isOpen">
      <font-awesome-icon class="times" size="2x" :icon="['fas', 'times']" @click="toggleMenu" />
      <a href="#home-section">Home</a>
      <a href="#download-resume">Download Resume</a>
      <a href="#skills-section">Skills</a>
      <a href="#work-experience-section">Work Experience</a>
      <a href="#education-section">Education</a>
      <a href="#associations-section">Associations</a>
    </div>
    <div v-else>
      <font-awesome-icon class="bars" size="2x" :icon="['fas', 'bars']" @click="toggleMenu" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes);

export default defineComponent({
  name: "Menu",
  components: {
    FontAwesomeIcon
  },
  setup()
  {
    const isOpen = ref(false);

    const toggleMenu = (event: any) => event ? isOpen.value = !isOpen.value : isOpen.value;

    return {
      isOpen,
      toggleMenu
    }
  }
})

</script>

<style scoped>
  .menu {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color:#E9DACF;
    overflow-x: hidden;
    padding-top: 60px;
  }

  .menu a {
    color: #403A3C;
    text-decoration: none;
    padding: 8px 8px 8px 32px;
    font-size: 25px;
    display: block;
    transition: 0.3s;
    text-align: left;
  }

  .menu a:hover {
    color: #E9DACF;
    background-color: #403A3C;
  }

.v-leave-active,
.v-enter-active {
  transition: .5s;
}

.v-enter-from {
  transform: translate(-100%, 0);
}

.v-leave-to {
  transform: translate(-100%, 0);
}

  .bars {
    background-color: #E9DACF;
    color: #403A3C;
    border-radius: 5px;
    padding: 5px;
    z-index: 2;
    position: fixed;
    top: 10px;
    left: 25px;
    font-size: 36px;
    margin-left: 10px;
  }

  .times {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: #403A3C;
  }
</style>