
<template>
  <div id="skills-section">
    <h3 class="header">Skills</h3>
    <hr>
    <div class="container">
      <div class="grid">
        <div class="skill-header">
          Languages
        </div>
        <div class="skill-content" v-for="language in languages" :key="language">
          {{ language }}
        </div>
      </div>
      <div class="grid">
        <div class="skill-header">
          Technologies
        </div>
        <div class="skill-content" v-for="tech in technologies" :key="tech">
          {{ tech }}
        </div>
      </div>
      <div class="grid">
        <div class="skill-header">
          Coding Styles
        </div>
        <div class="skill-content" v-for="style in codingStyles" :key="style">
          {{ style }}
        </div>
      </div>
      <div class="grid">
        <div class="skill-header">
          Version Control
        </div>
        <div class="skill-content" v-for="vc in versionControl" :key="vc">
          {{ vc }}
        </div>
      </div>
      <div class="grid">
        <div class="skill-header">
          Soft Skills
        </div>
        <div class="skill-content" v-for="skill in softSkills" :key="skill">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  props: {
    skills: { type: Object, default: () => {} }
  },
  data()
  {
    return {
      languages: this.skills["Languages"],
      codingStyles: this.skills["Coding Styles"], 
      technologies: this.skills["Technologies"], 
      versionControl: this.skills["Version Control"],
      softSkills: this.skills["Soft Skills"]};
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