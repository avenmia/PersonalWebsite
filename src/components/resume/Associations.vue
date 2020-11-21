
<template>
  <div class="associations">
    <h3>Associations</h3>
    <li v-for="association in associations" :key="association">
      {{ association }}
    </li>
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

.skills
{

}

</style>