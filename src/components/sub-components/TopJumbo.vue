<script>
import { store } from '../../data/data'
export default {
    data() {
        return {
            store,
            currentIndex: 0,
            loop: null

        }
    },
    methods: {
        getImageUrl(target) {
            const url = new URL(`../../img/${target}`, import.meta.url);
            return url.href
        },

        getImageSlider() {
            if (this.currentIndex === store.activities.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        }

    },
    mounted() {
        this.loop = setInterval(this.getImageSlider, 5000);

    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="jumbo-text">
                <div class="container-text">
                    <h2>{{ store.activities[currentIndex].title }}</h2>
                    <p>{{ store.activities[currentIndex].text }}</p>
                </div>
            </div>
            <div class="band"></div>
            <div class="jumbo-image">
                <figure>
                    <img :src="getImageUrl(store.activities[currentIndex].image)" alt="">
                </figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    padding: 20px 0;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 400px;

        .jumbo-text {
            background-color: $red;
            height: 100%;
            flex-basis: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            .container-text {
                color: $white;
                position: absolute;
                z-index: 1;
                left: 270px;

                h2 {
                    font-size: 3rem;
                    padding-bottom: 20px
                }

                p {
                    font-size: 1.3rem;
                }
            }
        }

        .band {
            background-color: $red;
            position: absolute;
            transform: skewX(28deg);
            width: 254px;
            height: 100%;
            left: 655px;
        }

        .jumbo-image {
            flex-basis: 60%;
            height: 100%;

            figure {
                height: 100%;

                img {
                    height: 100%;
                }
            }
        }
    }
}
</style>