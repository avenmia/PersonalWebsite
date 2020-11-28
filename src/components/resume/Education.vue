
<template>
  <div id="education-section" class="education">
    <h3 class="header">Education</h3>
    <hr>
    <div class="container">
      <div class="grid" v-for="ed in education" :key="ed">
        <div class="school">
          {{ ed.School }}
        </div>
        <div class="key">
          Degree
        </div>
        <div class="value">
          {{ ed.Degree }}
        </div>
        <div class="key">
          Major
        </div>
        <div class="value">
          {{ ed.Major }}
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 40% 30% 30%;
  grid-template-areas: 
    "header header header"
    "key value value"
    "key value value";
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
  margin-top: 1%;
  text-align: start;
}

.school {
  font-size: 14pt;
  font-weight: bold;
  grid-area: header;
}

.key {
  grid-column-start: 1;
  grid-column-end: 2;
}

.value {
  grid-column-start: 2;
  grid-column-end: 3;
}

.dates {
  grid-column-start: 3;
  grid-row-start: 2;
}

@media screen and (max-width: 550px)
{
}


</style>