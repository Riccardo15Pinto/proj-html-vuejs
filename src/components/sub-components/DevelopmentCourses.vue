<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        getImageUrl(target) {
            const url = new URL(`../../img/${target}`, import.meta.url);
            return url.href
        }
    }
}
</script>

<template>
    <section>
        <div class="container">

            <h2>Popular Development Courses</h2>

            <div class="card-container">

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    .container {
        width: $container;
        margin: 0 auto;

        h2 {
            color: $blue;
        }
    }
}
</style>