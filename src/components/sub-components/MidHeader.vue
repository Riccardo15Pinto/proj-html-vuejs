<script>
import { store } from '../../data/data';
export default {
    data() {
        return store
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
                <a href="#">
                    <img :src="getImageUrl('MasterStudy.svg')" alt="">
                </a>
            </figure>

            <div class="input-container">
                <div class="categories">
                    <a href="#">
                        <fontAwesomeIcon icon="fa-solid fa-bars" />
                        Category
                    </a>
                    <div class="categories-input">
                        <ul>
                            <li v-for="item in categories">
                                <a href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <input type="text" placeholder="Search Courses">
                <button>
                    <fontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>

            <div>
                <a href="#">
                    <fontAwesomeIcon icon="fa-solid fa-bullhorn" />
                    Became an Instructor
                </a>

                <a href="#">
                    <fontAwesomeIcon icon="fa-solid fa-briefcase" />
                    For Enterprise
                </a>
            </div>
            <div>
                <a href="#">
                    <fontAwesomeIcon icon="fa-solid fa-user" />
                    Log In
                </a>
                <button>Sing Up</button>
                <a href="#">
                    <fontAwesomeIcon icon="fa-regular fa-heart" />
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
@use '../../scss/style.scss' as *;

.container {
    width: $container;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    figure {
        width: 200px;
    }

    .input-container {
        width: 419px;
        height: 35px;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            color: $darkgrey;
        }

        input {
            height: 100%;
            width: 70%;
            border: none;
            background-color: $lightGrey;
            padding-left: 10px;
        }

        button {
            height: 100%;
            width: 10%;
            border: none;
            background-color: $lightBlue;
            cursor: pointer;
            color: $white;
        }

        .categories {
            position: relative;

            :hover .categories-input {
                display: block;
            }

            .categories-input {
                position: absolute;
                background-color: aliceblue;
                width: 200px;
                padding: 10px;
                display: none;

                li {
                    list-style: none;
                    padding: 10px 0;
                }
            }

        }
    }
}
</style>