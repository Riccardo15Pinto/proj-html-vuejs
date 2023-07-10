<script>
import { store } from '../data/data'
import TopHeader from '../components/sub-components/TopHeader.vue'
import MidHeader from '../components/sub-components/MidHeader.vue'
export default {
    components: { TopHeader, MidHeader },
    data() {
        return store
    }
}

</script>

<template>
    <header>
        <TopHeader />
        <MidHeader />
    </header>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;
</style>