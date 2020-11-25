<template>
  <a href="./resume.pdf" download>
    <button id="download-resume" class="download-resume">
      <div class="container">
        <font-awesome-icon class="download-icon" size="sm" :icon="['fas', 'download']" />
        <span>Download Resume</span>
      </div>
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDownload);

export default defineComponent({
  name: "DownloadResume",
  components: {
    FontAwesomeIcon
  }
})
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

button {
  margin: 5%;
}

button:active {
  transform: translateY(4px);
  outline: none;
}

button:focus {
  outline: none;
}

button:hover, button:hover * {
  background-color: #d7bba8;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


.download-resume {
  padding: 10px;
  border-radius: 5px;
  background-color: #E9DACF;
  color: #403A3C;
  border: none;
}

.download-icon {
  color: black;
  background-color: #E9DACF;
  padding: 5px;
}
</style>