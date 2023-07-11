<script>
import { store } from '../../data/data'
import ContactCard from './ContactCard.vue'
export default {
    components: { ContactCard },
    data() {
        return store
    },
}
</script>

<template>
    <section>
        <ContactCard />
        <ContactCard />
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
</style>