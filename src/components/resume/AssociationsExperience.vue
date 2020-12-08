
<template>
  <div
    id="associations-section"
    class="associations"
  >
    <PageHeader header="Associations" />
    <div class="container">
      <div
        v-for="association in associations"
        :key="association"
        class="association-content"
      >
        {{ association }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/resume/PageHeader.vue";

export default defineComponent({
  name: "AssociationsExperience",
  components: {
    PageHeader
  },
  props: {
    header: { type: String, default: () => "Associations"},
    associations: { type: Object, default: () => {} }
  },
  setup(props)
  {
    return { props };
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
    margin-left: 5%;
  }
}

</style>