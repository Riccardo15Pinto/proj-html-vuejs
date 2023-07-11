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
            <figure>
                <img :src="getImageUrl('footer-logo2x-50x56.png')" alt="">
            </figure>
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