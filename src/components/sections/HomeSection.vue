<template>
  <div class="homesection">
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
      <div class="home-container">
        <div class="home-container-section">
          <h1>Michael Avendano</h1>
          <p>Software Engineer</p>
          <div class="links">
            <a href="https://www.linkedin.com/in/michael-avendano/">
              <img
                src="../../assets/linkedin.png"
              >
            </a>
            <br>
            <a href="https://github.com/avenmia">
              <img
                src="../../assets/github.png"
              >
            </a>
            <br>
            <a href="https://stackoverflow.com/users/7331107/avenmia">
              <img
                src="../../assets/stackoverflow.svg"
              >
            </a>
          </div>
        </div>
      </div>
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

.home-container-section {
  margin: 5%;
}

.home-container {
  background: black;
  order: 1;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  
}

.homesection {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/1440x763ChiSkyline.jpg");
  height: 100%;
}

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
    margin: 5vw;
}

.links {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 30px;
}

.links:nth-child()
{
  position: fixed;
}
</style>
