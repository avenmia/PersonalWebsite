
<template>
  <div id="associations-section" class="associations">
    <Header header="Associations"/>
    <div class="container">
      <div v-for="association in associations" :key="association">
        {{ association }}
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/resume/Header.vue"

export default defineComponent({
  name: "Associations",
  components: {
    Header
  },
  props: {
    header: { type: String, default: () => "Associations"},
    associations: { type: Object, default: () => {} }
  },
  setup(props)
  {
    return { props }
  }
});

</script>


<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  margin-left: 15%;
  margin-right: 15%;
  font-size: 12pt;
}

@media screen and (max-width: 550px)
{
  .container {
    flex-direction: column;
    justify-content: flex-start;
  }
}

</style>