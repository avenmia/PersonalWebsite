<template>
  <div class="homepage">
    <h1>Michael Avendano</h1>
    <p>Software Engineer</p>
    <p>{{ version }}</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    version: String,
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
