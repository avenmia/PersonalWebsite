<template>
<div class="home">
    <section class="fullpage">
        <HomePage msg="Welcome to Mike's website" v-bind:version="pjson.version" />
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
import * as pjson from "../../package.json"

console.log(pjson.version);

export default defineComponent({
    name: 'Home',
    components: {
        HomePage,
        AboutPage,
        EducationPage
    },
});
</script>

<style scoped>
.fullpage {
    height: 100vh;
    width: 100%;
}
</style>
