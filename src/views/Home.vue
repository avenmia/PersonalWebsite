<template>
<div class="home">
    <HomePage msg="Welcome to Mike's website" />
    <section class="fullpage">
        <h1>Section 1</h1>
    </section>
    <section class="fullpage">
        <h1>Section 2</h1>
    </section>
    <section class="fullpage">
        <h1>Section 3</h1>
    </section>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HomePage,
    },
});
</script>

<style scoped>
.fullpage {
    height: 100vh;
    width: 100%;
}
</style>
