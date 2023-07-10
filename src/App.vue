<script>
import { store } from './data/data'
import Appheader from './components/AppHeader.vue'
export default {
    components: { Appheader },
    data() {
        return store
    }
}

</script>

<template>
    <Appheader />
</template>

<style lang="scss">
@use '../src/scss/style.scss' as *;
</style>
