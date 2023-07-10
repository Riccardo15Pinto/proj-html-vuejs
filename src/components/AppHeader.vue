<script>
import { store } from '../data/data'
import TopHeader from '../components/sub-components/TopHeader.vue'
import MidHeader from '../components/sub-components/MidHeader.vue';
import BottomHeader from '../components/sub-components/BottomHeader.vue'
export default {
    components: { TopHeader, MidHeader, BottomHeader },
    data() {
        return store
    }
}

</script>

<template>
    <header>
        <TopHeader />
        <MidHeader />
        <BottomHeader />
    </header>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;
</style>