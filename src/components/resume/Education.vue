
<template>
  <div class="education">
    <h3>Education</h3>
    <div v-for="ed in education" :key="ed" >
    <p>{{ ed.School }}</p>
    <p>{{ ed.Degree}}</p>
    <p>{{ ed.Major }}</p>
    <p>{{ ed["Start Date"] }}</p>
    <p>{{ ed["End Date"] }}</p>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
  props: {
    education: { type: Object, default: () => {} }
  },
  data()
  {
    console.log("Education");
    console.log(this.education)
    return this.education;
  }
});

</script>


<style scoped>

.skills
{

}

</style>