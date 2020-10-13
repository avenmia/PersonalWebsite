<template>
<div class="home">
    <section class="fullpage">
        <HomePage msg="Welcome to Mike's website" v-bind:version="version" />
    </section>
    <section class="fullpage">
        <AboutPage />
    </section>
    <section class="fullpage">
        <EducationPage />
    </section>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue'; // @ is an alias to /src
import EducationPage from '@/components/EducationPage.vue'; // @ is an alias to /src
import * as pjson from "../package.json"

console.log(pjson.version);

export default defineComponent({
    name: 'Home',
    components: {
        HomePage,
        AboutPage,
        EducationPage
    },
    data() {
        return {
            version: pjson.version
        }
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.fullpage {
    height: 100vh;
    width: 100%;
}
</style>
