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

            <div class="bar-element">
                <div class="categories">
                    <a href="#">
                        <fontAwesomeIcon icon="fa-solid fa-bars" />
                        Category
                        <div class="categories-element">
                            <ul>
                                <li v-for="item in categories">
                                    <a href="#">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div class="input-container">
                    <input type="text" placeholder="Search Courses">
                    <button>
                        <fontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
            </div>

            <div class="join-member">
                <a href="#">
                    <fontAwesomeIcon icon="fa-solid fa-bullhorn" />
                    Became an Instructor
                </a>

                <a href="#">
                    <fontAwesomeIcon icon="fa-solid fa-briefcase" />
                    For Enterprise
                </a>
            </div>

            <div class="log">
                <a href="#" class="log-in">
                    <fontAwesomeIcon icon="fa-solid fa-user" />
                    Log In
                </a>
                <button class="sing">Sing Up</button>
                <a href="#" class="heart-icon">
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

    .bar-element {
        display: flex;
        align-items: center;

        .categories {
            padding: 0 10px;

            a {
                position: relative;
                text-decoration: none;
                color: $darkgrey;

                .categories-element {
                    position: absolute;
                    background-color: $lightGrey;
                    width: 200px;
                    padding: 10px;
                    top: 20px;
                    display: none;

                    li {
                        list-style: none;
                        padding: 10px 0;

                        &:hover {
                            color: $white;
                        }
                    }

                }

                &:hover .categories-element {
                    display: block;
                }

            }



        }

        .input-container {
            width: 300px;
            height: 35px;

            a {
                text-decoration: none;
                color: $darkgrey;
            }

            input {
                height: 100%;
                width: 85%;
                border: none;
                background-color: $lightGrey;
                padding-left: 10px;
            }

            button {
                height: 100%;
                width: 15%;
                border: none;
                background-color: $lightBlue;
                cursor: pointer;
                color: $white;
            }

        }
    }

    .join-member {
        a {
            text-decoration: none;
            padding: 0 10px;
            color: $grey;

            &:hover {
                color: $blue;
            }
        }
    }

    .sing {
        padding: 20px 40px;
        background-color: $red;
        border-radius: 30px;
        color: white;
        font-weight: bolder;
        border: none;
        margin: 0 20px;
        transition: color ease-in-out 3s;
        background: linear-gradient(to right, $blue 50%, $red 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all .5s ease-out;
        cursor: pointer;

        &:hover {
            background-position: left bottom;
        }
    }

    .log {
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
        }

        .log-in {
            color: $blue;
        }

        .heart-icon {
            color: $grey;
            font-size: 1.4rem;
        }
    }
}
</style>