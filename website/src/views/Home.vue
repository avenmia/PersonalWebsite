<template>
<div class="home">
    <HomePage msg="Welcome to Mike's website" />
</div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
    name: 'Home',
    components: {
        HomePage
    }
}
</script>
