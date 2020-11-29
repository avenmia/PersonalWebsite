<template>
  <div class="resume">
    <Skills :skills="Skills"/>
    <WorkExperience :workExperience="WorkExperience" />
    <Education :education="Education" />
    <Associations :associations="Associations" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Skills from "@/components/resume/Skills.vue"
import WorkExperience from "@/components/resume/WorkExperience.vue"
import Education from "@/components/resume/Education.vue"
import Associations from "@/components/resume/Associations.vue"
import * as ResumeData from "../../assets/resumeData.json"

export default defineComponent({
  name: 'Resume',
  components: {
    Skills, 
    WorkExperience,
    Education,
    Associations
  },
  setup()
  {
    const data = reactive({});
    const {Skills, Education} = ResumeData?.Content;
    const WorkExperience = ResumeData?.Content["Work Experience"];
    const Associations = ResumeData?.Content["Professional Associations, Activities, Achievements"];
    return {
      Skills, Education, WorkExperience, Associations
    }
  }
})
</script>


<style scoped>


</style>