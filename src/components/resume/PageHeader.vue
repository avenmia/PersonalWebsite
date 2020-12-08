<template>
  <div>
    <h3 class="page-header">
      {{ header }}
    </h3>
    <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: {
    header: { type: String, default: () => "" }
  },
  setup(props)
  {
    return {
      props
    };
  }
});
</script>

<style scoped>

.page-header {
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin: 0 auto;
  color: #ffedd6;
  line-height: 1.5em;
  margin-top: .75em;
  margin-bottom: 6px;
}

hr {
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: .75em;
}
</style>