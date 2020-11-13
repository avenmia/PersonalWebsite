<template>
  <div class="home-section">
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
  margin-top: 20px;
}


.home-container {
  background: black;
  order: 1;
  width: auto;
  height: 200px;
  border-radius: 10px;
  padding: 5vh 10vw
  
}

.home-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/1440x763ChiSkyline.jpg");
  background-size: cover;
}

.links {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

</style>
