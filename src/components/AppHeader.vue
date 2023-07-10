<script>
import { store } from '../data/data'
import TopHeader from '../components/sub-components/TopHeader.vue'
export default {
    components: { TopHeader },
    data() {
        return store
    }
}

</script>

<template>
    <header>
        <TopHeader />
    </header>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;
</style>