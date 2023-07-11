<script>
import { store } from '../../data/data'
export default {
    data() {
        return store
    }
}

</script>

<template>
    <section>
        <div class="container">

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    background-color: $blue;

    .container {
        width: $container;
        margin: 0 auto;

    }
}
</style>