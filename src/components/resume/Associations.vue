
<template>
  <div id="associations-section" class="associations">
    <h3 class="header">Associations</h3>
    <hr>
    <div class="container">
      <div v-for="association in associations" :key="association">
        {{ association }}
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Associations",
  props: {
    associations: { type: Object, default: () => {} }
  },
  data()
  {
    console.log("Associations");
    console.log(this.associations)
    return this.associations;
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
  margin-top: 1%;
  margin-bottom: 1%;
}

</style>