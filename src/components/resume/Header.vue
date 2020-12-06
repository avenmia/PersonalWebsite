<template>
  <div>
    <h3 class="page-header">{{ header }}</h3>
    <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    header: { type: String, default: () => ""}
  },
  setup(props)
  {
    return {
      props
    }
  }
})
</script>

<style scoped>

.page-header {
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-bottom: 6px;
  margin-left: 15%;
  margin-right: 15%;
  color: #ffedd6;
  line-height: 1.5em;
}

hr {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
  margin-bottom: 1.5em;
}

</style>