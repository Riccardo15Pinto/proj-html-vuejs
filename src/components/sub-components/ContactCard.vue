<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: 'object'
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
        <figure class="card-image">
            <img :src="getImageUrl(item.imagePath)" alt="">
        </figure>
        <div class="card-text">
            <div class="container-text">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <button>{{ item.inizialize }}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.card {
    display: flex;
    align-items: center;
    border: 1px solid $darkgrey;
    padding: 20px;

    .card-image {
        width: 200px;
        height: 200px;
        padding: 20px;

        img {
            height: 100%;
        }
    }

    .card-text {
        padding: 0 30px;

        .container-text {
            width: 330px;

            h2 {
                font-size: 2rem;
                color: $blue;
                margin-bottom: 10px;
            }

            p {
                line-height: 40px;
                color: $darkgrey;
            }

            button {
                margin: 20px 0;
                padding: 20px 40px;
                border-radius: 30px;
                color: white;
                font-weight: bolder;
                border: none;
                background: linear-gradient(to right, $green 50%, $red 50%);
                background-size: 200% 100%;
                background-position: right bottom;
                transition: all .5s ease-out;
                cursor: pointer;

                &:hover {
                    background-position: left bottom;
                }
            }
        }
    }
}
</style>