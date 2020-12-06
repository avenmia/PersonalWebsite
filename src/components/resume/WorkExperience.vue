
<template>
  <div id="work-experience-section" class="work-experience">
    <Header header="Work Experience"/>
    <div class="container">
      <div v-for="work in workExperience" :key="work">
        <div class="experience-grid">
          <div class="image-container" v-if="containsPangaea(work)">
            <img src="../../assets/pangaealogo.png" alt="pangaea-logo" />
          </div>
          <div class="image-container" v-else>
            <img :src="UICLogo" alt="uic-logo" />
          </div>
          <div class="experience-dates">
            {{ work["Start Date"] }} to {{ work["End Date"] }}
          </div>
          <div class="experience-content">
            <h2 class="experience-title">
              {{ work.Employer }}
            </h2>
            <h3 class="experience-job">
              {{ work.Title }}
            </h3>
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
  font-size: 1.667em;
  line-height: 1.8em;
  margin-top: .9em;
  margin-bottom: .9em;
}

.experience-job {
  font-size: 1.333em;
  line-height: 2.25em;
  margin-top: 1.125em;
  margin-bottom: 1.125em;
  font-weight: bold;
}

.experience-content {
  grid-column-start: 1;
  grid-row: 1/3;
  align-self: end;
  text-align: start;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  font-size: 12pt;
}

.experience-dates {
  grid-column-start: 2;
  grid-row-start: 2;
  align-self: flex-start;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.job-description {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.image-container {
  align-self: flex-end;
}

img {
  margin-top: 25px;
  width: 150px;
}

h2 {
  font-weight: normal;
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