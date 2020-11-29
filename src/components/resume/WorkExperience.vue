
<template>
  <div id="work-experience-section" class="work-experience">
    <h3 class="header">Work Experience</h3>
    <hr>
    <div class="experience">
      <div class="container">
        <div v-for="work in workExperience" :key="work">
          <div class="experience-grid">
            <div v-if="containsPangaea(work)">
              <div class="experience-pangaea-image"></div>
            </div>
            <div v-else>
              <div class="experience-image"></div>
            </div>
            <div class="experience-content">
              <div class="experience-title">
                {{ work.Employer }}
              </div>
              <div class="experience-job">
                {{ work.Title }}
              </div>
              <div class="experience-dates">
                {{ work["Start Date"] }} - {{ work["End Date"] }}
              </div>
              <div class="experience-job-description">
                <div v-for="description in work.Description" :key="description">
                {{ description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  props: {
    workExperience: { type: Object as () => WorkExperience[], default: () => {} }
  },
  setup(props)
  {
    function containsPangaea(work: WorkExperience)
    {
      return work.Employer.includes("Pangaea");
    }

    return {
      props,
      containsPangaea
    };
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
  height: 100%;
}

.experience-pangaea-image {
  grid-row-start: 1;
  grid-row-end: 2;
  background-image: url("../../assets/pangaealogo.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
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

@media screen and (max-width: 550px)
{
  .experience-grid
  {
    display: flex;
    flex-direction: column;    
  }
  
  .experience-title
  {
    text-decoration-line: underline;
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

  .experience-job-description
  {
  }

  .experience-pangaea-image
  {
    display: none;
  }

  .experience-image
  {
    display: none;
  }
}

</style>