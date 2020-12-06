
<template>
  <div id="education-section" class="education">
    <Header header="Education"/>
    <div class="container">
      <div class="flex" v-for="ed in education" :key="ed">
        <div class="school">
          {{ ed.School }}
        </div>
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
  text-align: start;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.school {
  font-size: 1.667em;
  line-height: 1.8em;
  margin-top: .9em;
}

.degree {
  font-size: 1.333em;
  line-height: 2.25em;
}

.dates {
  grid-column-start: 3;
  grid-row-start: 2;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
}

h2 {
  font-weight: normal;
}

@media screen and (max-width: 550px)
{
  .container {
    margin-left: 5%;
  }
}


</style>