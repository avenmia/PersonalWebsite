
<template>
  <div id="skills-section">
    <Header header="Skills"/>
    <div class="container">
      <div v-for="key in keys" :key="key" class="grid">
        <div class="header">
          {{ key }}
        </div>
        <div class="content" v-for="content in skills[key]" :key="content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/resume/Header.vue";

interface Skills
{
  Languages: String[],
  Technologies: String[],
  "Coding Styles": String[],
  "Version Control": String[],
  "Soft Skills": String[]
}

export default defineComponent({
  name: "Skills",
  components: {
    Header
  },
  props: {
    skills: { type: Object as () => Skills, default: () => {} }
  },
  setup(props)
  {
    return {
      keys: Object.keys(props.skills),
      languages: props.skills["Languages"],
      codingStyles: props.skills["Coding Styles"], 
      technologies: props.skills["Technologies"], 
      versionControl: props.skills["Version Control"],
      softSkills: props.skills["Soft Skills"]};
  }
});

</script>


<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.6em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.grid {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  color: #ffedd6;
}

.grid > div {
  padding-top: 0px;
}

.header {
  grid-column-start: 2;
  justify-self: end;
  font-size: 16pt;
  align-self: start;
  font-weight: bold;
}

.content {
  margin-left: 5%;
  grid-column-start: 3;
  grid-column-end: 5;
  align-self: end;
  justify-self: start;
  font-size: 12pt;
}

.content-container 
{
  height: 100%;
}

/* Media Queries */

@media screen and (max-width: 550px)
{
  .container {
  }
  .grid {
    display: flex;
    flex-direction: column;
  }
  .content {
    margin: 5px;
  }

  .page-header {
    font-weight: bold;
  }
}

</style>