<script>
import { store } from '../../data/data'
export default {
    data() {
        return {
            store,
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
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <figure>
                    <img src="" alt="">
                </figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
</style>