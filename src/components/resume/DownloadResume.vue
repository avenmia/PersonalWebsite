<template>
  <div class="download-btn">
    <a
      href="./resume.pdf"
      download
    >
      <button
        id="download-resume"
        class="download-resume"
      >
        <div class="container">
          <font-awesome-icon
            class="download-icon"
            size="sm"
            :icon="['fas', 'download']"
          />
          <span>Download Resume</span>
        </div>
      </button>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDownload);

export default defineComponent({
  name: "DownloadResume",
  components: {
    FontAwesomeIcon
  }
});
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
  color: #ffedd6;
  background-color: black;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


.download-resume {
  padding: 10px;
  border-radius: 5px;
  background-color: #ffedd6;
  color: #403A3C;
  border: none;
}

.download-icon {
  color: black;
  background-color: #ffedd6;
  padding: 5px;
  font-size: 20pt;
  margin-right: 5px;
}

.download-btn {
  text-align: center;
}
</style>