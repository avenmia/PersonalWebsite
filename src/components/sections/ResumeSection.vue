<template>
  <div class="resume">
    <p>Resume</p>
    <p>{{ resumeData }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive
} from 'vue';



export default defineComponent({
  name: 'Resume',
  onRenderTriggered(e: any)
  {
    debugger;
  },
  setup()
  {
    const data = reactive({});

    async function fetchData()
    {
      return await fetch("https://swapi.dev/api/people/1/", {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {return res.json()});
    }
    
    onMounted(async () => 
    {
      console.log(await fetchData());
    })
  },



})
</script>


<style scoped>


</style>