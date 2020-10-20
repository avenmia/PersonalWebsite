<template>
  <div class="homesection">
    <h1>Michael Avendano</h1>
    <p>Software Engineer</p>
    <a href="https://www.linkedin.com/in/michael-avendano/">LinkedIn</a>
    <br>
    <a href="https://github.com/avenmia">Github</a>
    <br>
    <a href="https://stackoverflow.com/users/7331107/avenmia">Stack Overflow</a>
    <p>{{ version }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeSection",
  props: {
    version: String
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
