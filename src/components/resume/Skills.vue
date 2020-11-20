
<template>
  <div class="skills">
    <h3>Skills</h3>
    <!-- <p>Coding Styles: {{ codeStyles }}</p> -->
    <p>Coding styles</p>
    <li v-for="style in codeStyles" :key="style">
    {{ style }}
    </li>
    <p>Technologies</p>
    <li v-for="t in tech" :key="t">
      {{ t }}
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
    console.log(`Data skills: %o`, this.skills)
    const codeStyles = this.skills["Coding Styles"]
    const tech = this.skills["Technologies"]
    const versionControl = this.skills["Version Control"]
    const softSkills = this.skills["Soft Skills"]
    console.log("Coding Styles: %o", codeStyles)
    return {codeStyles, tech, versionControl, softSkills};
  }
});

</script>


<style scoped>

.skills
{

}

</style>