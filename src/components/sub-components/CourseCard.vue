<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: 'object',
        average: 'string',
    },
    computed: {
        currentAverage() {
            return this.average;
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
    <div class="card">
        <figure>
            <img :src="getImageUrl(item.imagePathM)" alt="">
        </figure>
        <div>
            <div class="">
                <h6>{{ item.category }}</h6>
                <h4>{{ item.title }}</h4>
            </div>
            <div class="info-card">
                <div class="average">
                    <img :src="getImageUrl('starfull.svg')" alt="" v-for=" n in currentAverage">
                    <!-- <img :src="getImageUrl('staremptyl.svg')" alt="" v-for="item in 5 - currentAverage"> -->
                </div>
                <div>
                    <h6>{{ item.price }}</h6>
                    <h6>{{ item.actualPrice }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.card {
    width: 250px;

    figure {
        width: 100%;
    }

    .info-card {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .average {
            display: flex;
            align-items: center;
            width: 50px;
        }
    }
}
</style>