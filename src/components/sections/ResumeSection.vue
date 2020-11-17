<template>
  <div class="resume">
    <p>Resume</p>
    <Skills :skills="Skills"/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive
} from 'vue';
import * as ResumeData from "../../assets/resumeData.json"
import Skills from "@/components/resume/Skills.vue"



export default defineComponent({
  name: 'Resume',
  components: {
    Skills
  },
  setup()
  {
    const data = reactive({});

    async function fetchData()
    {
      return await fetch("https://swapi.dev/api/people/1/", {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {return res.json()});
    }
    
    onMounted(async () => 
    {
      console.log(await fetchData());
      console.log("On mounted")
      console.log(ResumeData);
    })
  },
  data()
  {
    const {Skills, Education} = ResumeData?.Content;
    const WorkExperience = ResumeData?.Content["Work Experience"];
    const Associations = ResumeData?.Content["Professional Associations, Activities, Achievements"];
    return {
      Skills, Education, WorkExperience, Associations
    }
  },
  onRenderTriggered(e: any)
  {
    debugger;
  },



})
</script>


<style scoped>


</style>