
<template>
  <div id="associations-section" class="associations">
    <Header header="Associations"/>
    <div class="container">
      <div class="association-content" v-for="association in associations" :key="association">
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
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  font-size: 12pt;
  line-height: 1.6em;
}

.association-content {
  font-size: 1.333em;
  line-height: 2.25em;
  margin-top: 1.125em;
  margin-bottom: 1.125em;
}

@media screen and (max-width: 550px)
{
  .container {
    flex-direction: column;
    justify-content: flex-start;
  }
}

</style>