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


    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
</style>