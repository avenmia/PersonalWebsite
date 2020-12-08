
<template>
  <div
    id="work-experience-section"
    class="work-experience"
  >
    <PageHeader header="Work Experience" />
    <div class="container">
      <div
        v-for="work in workExperience"
        :key="work"
      >
        <div class="experience-grid">
          <div
            v-if="containsPangaea(work)"
            class="image-container"
          >
            <img
              src="../../assets/pangaealogo.png"
              alt="pangaea-logo"
            >
          </div>
          <div
            v-else
            class="image-container"
          >
            <img
              :src="UICLogo"
              alt="uic-logo"
            >
          </div>
          <div class="experience-content">
            <div class="experience-title">
              {{ work.Employer }}
            </div>
            <div class="experience-job">
              {{ work.Title }}
            </div>
            <div class="experience-dates">
              {{ work["Start Date"] }} to {{ work["End Date"] }}
            </div>
            <div
              v-for="description in work.Description"
              :key="description"
              class="job-description"
            >
              <ul>
                <li>
                  {{ description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/resume/PageHeader.vue";
import UICLogo from "@/assets/uicLogo.svg";

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
    PageHeader
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
  grid-template-columns: 85% 15%;
  grid-gap: 10px;
  margin: 0 auto;
}

.experience-title {
  font-size: 1.667em;
  line-height: 1.8em;
  margin-top: .9em;
}

.experience-job {
  font-size: 1.333em;
  line-height: 2.25em;
  font-weight: bold;
  margin-bottom: .5em;
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
  align-self: flex-start;
  margin-bottom: 1.5em;
  margin-top: .5em;
}

.job-description {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.image-container {
  align-self: center;
  grid-row: 1/3;
  justify-self: end;
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

ul {
  padding-left: 12pt;
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
    margin-left: 5%;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .job-description
  {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
}
</style>