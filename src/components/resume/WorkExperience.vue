
<template>
  <div class="work-experience">
    <h3>Work Experience</h3>
    <div v-for="experience in workExperience" :key="experience" >
    <p>{{ experience.Title }}</p>
    <p>{{ experience.Employer}}</p>
    <p>{{ experience["Start Date"] }}</p>
    <p>{{ experience["End Date"] }}</p>
    <p v-for="description in experience.Description" :key="description">
      {{ description }}
    </p>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkExperience",
  props: {
    workExperience: { type: Object, default: () => {} }
  },
  data()
  {
    console.log("Work Experience");
    console.log(this.workExperience)
    return this.workExperience;
  }
});

</script>


<style scoped>

.skills
{

}

</style>