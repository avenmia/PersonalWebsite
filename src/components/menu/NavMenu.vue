<template>
  <transition>
    <div
      v-if="isOpen"
      class="menu"
    >
      <font-awesome-icon
        class="times"
        size="2x"
        :icon="['fas', 'times']"
        @click="toggleMenu"
      />
      <a href="#home-section">Home</a>
      <a href="#download-resume">Download Resume</a>
      <a href="#skills-section">Skills</a>
      <a href="#work-experience-section">Work Experience</a>
      <a href="#education-section">Education</a>
      <a href="#associations-section">Associations</a>
    </div>
    <div v-else>
      <font-awesome-icon
        class="bars"
        size="2x"
        :icon="['fas', 'bars']"
        @click="toggleMenu"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faTimes);

export default defineComponent({
  name: "NavMenu",
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
    };
  }
});

</script>

<style scoped>
  .menu {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color:#ffedd6;
    overflow-x: hidden;
    padding-top: 60px;
    width: 20%;
  }

  .menu a {
    color: #2B3349;
    text-decoration: none;
    padding: 8px 32px 8px 32px;
    font-size: 20pt;
    display: block;
    transition: 0.3s;
    text-align: left;
  }

  .menu a:hover {
    color: #ffedd6;
    background-color: #2B3349;
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
    top: 25px;
    left: 25px;
    font-size: 36px;
    margin-left: 10px;
    height: 50px;
    width: 50px;
  }

  .bars:hover {
    height: 55px;
    width: 55px;
  }

  .times {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: #403A3C;
  }

  .times:hover {
    font-size: 40px;
  }

  @media screen and (max-width: 1000px)
  {
    .menu {
      width: 40%;
    }
    .menu a {
      font-size: 16pt;
    }
  }

  @media screen and (max-width: 550px)
  {
    .menu {
      width: 40%;
    }
    .menu a {
      font-size: 12pt;
    }
  }
</style>