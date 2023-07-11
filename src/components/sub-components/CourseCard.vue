<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: 'object',
    },
    methods: {
        getImageUrl(target) {
            const url = new URL(`../../img/${target}`, import.meta.url);
            return url.href
        }
    }
}

</script>


<template></template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
</style>