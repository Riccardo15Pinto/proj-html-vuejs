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
        <figure>
            <img :src="getImageUrl(store.testimonials[currentIndex].imagePath)" alt="">
        </figure>

        <div class="floating-card">
            <h2>{{ store.testimonials[currentIndex].title }}</h2>
            <p>{{ store.testimonials[currentIndex].description }}</p>
            <div class="author">
                <h4>{{ store.testimonials[currentIndex].nameAuthor }}</h4>
                <h6>{{ store.testimonials[currentIndex].role }}</h6>
            </div>
        </div>

        <div class="tip">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    position: relative;
    height: 600px;

    figure {
        height: 100%;

        img {
            height: 100%;
        }
    }

    .tip {
        background-color: $white;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 318px;
        left: 1000px;
        rotate: 135deg;
    }

    .floating-card {
        padding: 50px 100px;
        position: absolute;
        top: 140px;
        background-color: $white;
        width: 700px;
        left: 320px;

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: $blue;
        }

        p {
            line-height: 30px;
            font-size: 0.9rem;
            color: $darkgrey;
        }

        .author {
            margin: 40px 0;

            h4 {
                color: $blue;
            }

            h6 {
                color: $darkgrey;
            }
        }
    }
}
</style>