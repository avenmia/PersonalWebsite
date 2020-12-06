
<template>
  <div id="work-experience-section" class="work-experience">
    <Header header="Work Experience"/>
    <div class="container">
      <div v-for="work in workExperience" :key="work">
        <div class="experience-grid">
          <div v-if="containsPangaea(work)">
            <img src="../../assets/pangaealogo.png" alt="pangaea-logo" />
          </div>
          <div v-else>
            <img :src="UICLogo" alt="uic-logo" />
          </div>
          <div class="experience-dates">
            {{ work["Start Date"] }} to {{ work["End Date"] }}
          </div>
          <div class="experience-content">
            <div class="experience-title">
              {{ work.Employer }}
            </div>
            <div class="job-dates-grid">
              <div class="experience-job">
                {{ work.Title }}
              </div>
            </div>
            <div v-for="description in work.Description" :key="description" class="job-description">
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UICLogo from "@/assets/uicLogo.svg";
import Header from "@/components/resume/Header.vue";

interface WorkExperience
{
  Title: String,
  Employer: String,
  "Start Date": String,
  "End Date": String,
  Description: String[]
}

export default defineComponent({
  name: "WorkExperience",
  components: {
    Header
  },
  props: {
    workExperience: { type: Object as () => WorkExperience[], default: () => {} }
  },
  setup(props)
  {
    function containsPangaea(work: WorkExperience)
    {
      console.log("Contains pangaea");
      return work.Employer.includes("Pangaea");
    }

    return {
      props,
      containsPangaea,
      UICLogo
    };
  }
});

</script>


<style scoped>

.page-header {
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-bottom: 6px;
  margin-left: 15%;
  margin-right: 15%;
  color: #ffedd6;
  line-height: 1.5em;
}

hr {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
  margin-bottom: 1.5em;
}

.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.experience-grid
{
  display: grid;
  grid-template-columns: 66% 33%;
  grid-gap: 10px;  
  margin-left: 15%;
  margin-right: 15%;
}

.job-dates-grid
{
  display: grid;
  grid-template-columns: 60% 40%;
}

.experience-title {
  font-size: 18pt;
}

.experience-job {
  font-size: 14pt;
  font-weight: bold;
}

.experience-content {
  grid-column-start: 1;
  grid-row: 1/3;
  align-self: end;
  text-align: start;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.experience-dates {
  grid-column-start: 2;
  grid-row-start: 2;
}

.job-description {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

img {
  margin-top: 25px;
  width: 150px;
}

.container {
  text-align: center;
}

@media screen and (max-width: 550px)
{
  .experience-grid
  {
    display: flex;
    flex-direction: column;    
  }

  .experience-content
  {
    justify-content: center;
    text-align: start;
    margin: 5px;
    margin-left: 0px;
  }

  .experience-content > *
  {
    margin: 5px;
  }

  .job-description
  {
    margin-bottom: 25px;
  }


}

</style>