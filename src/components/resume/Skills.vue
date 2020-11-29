
<template>
  <div id="skills-section">
    <h3 class="header">Skills</h3>
    <hr>
    <div class="container">
      <div v-for="key in keys" :key="key" class="grid">
        <div class="skill-header">
          {{ key }}
        </div>
        <div class="skill-content" v-for="content in skills[key]" :key="content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

.header {
  display: flex;
  justify-content: center;
  font-size: 24pt;
  margin-bottom: 1px;
  margin-left: 15%;
  margin-right: 15%;
  color: #E9DACF;
}

hr {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.grid {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
  margin-top: 1%;
  color: #E9DACF;
}

.grid > div {
  padding-top: 0px;
}

.skill-header {
  grid-column-start: 2;
  justify-self: end;
  font-size: 16pt;
  align-self: start;
}

.skill-content {
  margin-left: 5%;
  grid-column-start: 3;
  grid-column-end: 5;
  align-self: end;
  padding-top: 4pt;
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
  .skill-content {
    margin: 5px;
  }

  .skill-header {
    text-decoration-line: underline;
    font-weight: bold;
  }
}

</style>