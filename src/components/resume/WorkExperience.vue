
<template>
  <div class="work-experience">
    <h3 class="header">Work Experience</h3>
    <hr>
    <div class="experience">
      <div class="experience-container">
        <div class="experience-grid">
          <div class="experience-image">
          </div>
          <div class="experience-content">
            <div class="experience-title">
              {{ workExperience[0].Employer }}
            </div>
            <div class="experience-job">
              {{ workExperience[0].Title }}
            </div>
            <div class="experience-dates">
            {{ workExperience[0]["Start Date"] }} - {{ workExperience[0]["End Date"]}}
            </div>
            <div class="experience-job-description">
              <div v-for="description in workExperience[0].Description" :key="description">
              {{ description }}
              </div>
            </div>
          </div>
        </div>
        <div class="experience-grid">
          <div class="experience-image">
          </div>
          <div class="experience-content">
            <div class="experience-title">
              {{ workExperience[1].Employer }}
            </div>
            <div class="experience-job">
              {{ workExperience[1].Title }}
            </div>
            <div class="experience-dates">
            {{ workExperience[1]["Start Date"] }} - {{ workExperience[1]["End Date"]}}
            </div>
            <div class="experience-job-description" v-for="description in workExperience[1].Description" :key="description">
              {{ description }}
            </div>
          </div>
        </div>
        <div class="experience-grid">
          <div class="experience-image">
          </div>
          <div class="experience-content">
            <div class="experience-title">
              {{ workExperience[2].Employer }}
            </div>
            <div class="experience-job">
              {{ workExperience[2].Title }}
            </div>
            <div class="experience-dates">
            {{ workExperience[2]["Start Date"] }} - {{ workExperience[2]["End Date"]}}
            </div>
            <div class="experience-job-description" v-for="description in workExperience[2].Description" :key="description">
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

export default defineComponent({
  name: "WorkExperience",
  props: {
    workExperience: { type: Object, default: () => {} }
  },
  data()
  {
    return this.workExperience;
  }
});

</script>


<style scoped>

.header {
  display: flex;
  justify-content: center;
  font-size: 24pt;
  margin-bottom: 1px;
  margin-left: 15%;
  margin-right: 15%;
  color: #E9DACF;
}

hr {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
}

.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.experience-grid
{
  display: grid;
  grid-template-columns: 33% 66%;
  grid-gap: 10px;  
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
  margin-top: 1%;
}

.experience-image {
  grid-row-start: 1;
  grid-row-end: 2;
  background-image: url(https://i.imgur.com/lVYOYGP.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
}

.experience-job {
  font-size: 18pt;
}

.experience-title {
  font-size: 14pt;
  font-weight: bold;
}

.experience-content {
  grid-column-start: 2;
  align-self: start;
  text-align: start;
}

</style>