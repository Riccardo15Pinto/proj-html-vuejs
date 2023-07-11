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
        <ContactCard v-for="(contact, i) in contacts" :item="contact" />
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px;

    .card {
        flex-basis: 48%;
    }
}
</style>