
<template>
  <div class="skills">
    <h3>Skills</h3>
    <p>{{skills}}</p>
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
    return this.skills;
  }
});

</script>


<style scoped>

.skills
{

}

</style>