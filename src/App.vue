<script>
import { store } from './data/data'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
    components: { AppHeader, AppMain, AppFooter },
    data() {
        return store
    }
}

</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use '../src/scss/style.scss' as *;
</style>
