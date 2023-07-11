<script>
import { store } from './data/data'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
    components: { AppHeader, AppMain },
    data() {
        return store
    }
}

</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use '../src/scss/style.scss' as *;
</style>
