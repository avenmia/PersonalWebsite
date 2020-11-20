
<template>
  <div class="skills">
    <h3>Skills</h3>
    <!-- <p>Coding Styles: {{ codeStyles }}</p> -->
    <p>Coding styles</p>
    <li v-for="style in codeStyles" :key="style">
      {{ style }}
    </li>
    <p>Technologies</p>
    <li v-for="tech in technologies" :key="tech">
      {{ tech }}
    </li>
    <p>Version Control</p>
    <li v-for="vc in versionControl" :key="vc">
      {{ vc }}
    </li>
    <p>Soft Skills</p>
    <li v-for="skill in softSkills" :key="skill">
      {{ skill }}
    </li>
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
      codingStyles: this.skills["Coding Styles"], 
      technologies: this.skills["Technologies"], 
      versionControl: this.skills["Version Control"],
      softSkills: this.skills["Soft Skills"]};
  }
});

</script>


<style scoped>

.skills
{

}

</style>