
<template>
  <div class="education">
    <h3 class="header">Education</h3>
    <hr>
    <div class="container">
      <div class="grid">
        <div class="school">
          University of Illinois at Chicago
        </div>
        <div class="key">
          Degree
        </div>
        <div class="value">
          Bachelor of Science
        </div>
        <div class="key">
          Major
        </div>
        <div class="value">
          Computer Science
        </div>
        <div class="dates">
          01-2017 to 12-2018
        </div>
      </div>
      <div class="grid">
        <div class="school">
          University of Illinois at Chicago
        </div>
        <div class="key">
          Degree
        </div>
        <div class="value">
          Bachelor of Science
        </div>
        <div class="key">
          Major
        </div>
        <div class="value">
          Physics
        </div>
        <div class="dates">
          08-2015 to 05-2015
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
  props: {
    education: { type: Object, default: () => {} }
  },
  data()
  {
    console.log("Education");
    console.log(this.education)
    return this.education;
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
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
  margin-top: 1%;
  text-align: start;
}

.school {
  font-size: 14pt;
  font-weight: bold;
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


</style>