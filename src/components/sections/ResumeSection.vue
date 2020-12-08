<template>
  <div class="resume">
    <SkillsList :skills="SkillsList" />
    <WorkExperience :work-experience="WorkExperience" />
    <EducationExperience :education="EducationExperience" />
    <AssociationsExperience :associations="AssociationsExperience" />
  </div>
</template>

<script lang="ts">
import * as ResumeData from "../../assets/resumeData.json";
import { defineComponent, onMounted, reactive } from 'vue';
import AssociationsExperience from "@/components/resume/AssociationsExperience.vue";
import EducationExperience from "@/components/resume/EducationExperience.vue";
import SkillsList from "@/components/resume/SkillsList.vue";
import WorkExperience from "@/components/resume/WorkExperience.vue";

export default defineComponent({
  name: 'Resume',
  components: {
    SkillsList, 
    WorkExperience,
    EducationExperience,
    AssociationsExperience
  },
  setup()
  {
    const data = reactive({});
    const {Skills, Education} = ResumeData?.Content;
    const WorkExperience = ResumeData?.Content["Work Experience"];
    const Associations = ResumeData?.Content["Professional Associations, Activities, Achievements"];
    return {
      SkillsList: Skills, EducationExperience: Education, WorkExperience, AssociationsExperience: Associations
    };
  }
});
</script>


<style scoped>


</style>