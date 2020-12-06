
<template>
  <div id="education-section" class="education">
    <Header header="Education"/>
    <div class="container">
      <div class="flex" v-for="ed in education" :key="ed">
        <h2 class="school">
          {{ ed.School }}
        </h2>
        <div class="degree">
          {{ ed.Degree }} in {{ ed.Major }}
        </div>
        <div class="dates">
          {{ ed["Start Date"] }} to {{ ed["End Date"]}}
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/resume/Header.vue";

interface Education 
{
  School: String,
  Degree: String,
  Major: String,
  "Start Date": String,
  "End Date": String
}

export default defineComponent({
  name: "Education",
  components: {
    Header
  },
  props: {
    education: { type: Object as () => Education[], default: () => {} }
  },
  setup(props)
  {
    return props;
  }
});

</script>


<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.flex {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
  margin-top: 1%;
  text-align: start;
}

.school {
  font-size: 1.667em;
  line-height: 1.8em;
  margin-top: .9em;
  margin-bottom: .9em;
}

.degree {
  font-size: 1.333em;
  line-height: 2.25em;
  margin-top: 1.125em;
  margin-bottom: 1.125em;
}

.dates {
  grid-column-start: 3;
  grid-row-start: 2;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

h2 {
  font-weight: normal;
}

@media screen and (max-width: 550px)
{
}


</style>