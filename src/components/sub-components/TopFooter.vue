<script>
import { store } from '../../data/data'
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
            <div class="col About">
                <h4>ABOUT</h4>
                <p>Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel,
                    rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate.</p>
            </div>
            <div class="col contact">
                <h4>CONTACT</h4>
                <div class="contact-container">
                    <ul>
                        <li>
                            <a href="#">USA, Callifornia 20, First Avenue, Callifornia</a>
                        </li>
                        <li>
                            <a href="#">Tel.: +1 212 458 300 32</a>
                        </li>
                        <li>
                            <a href="#">Fax: +1 212 375 24 14</a>
                        </li>
                        <li>
                            <a href="#" class="email">info@masterstudy.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col social">
                <h4>SOCIAL NETWORK</h4>
                <div class="container-social">
                    <div class="circle" v-for="icon in icons" :key="icon.typeIcon" :class="icon.typeIcon">
                        <a href="#">
                            <fontAwesomeIcon :icon=icon.nameIcon />
                        </a>
                    </div>
                </div>
            </div>
            <figure class="col">
                <img :src="getImageUrl('Top-udemy-courses-90-percent-off.jpg')" alt="">
            </figure>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    padding: 50px 0;
    background-color: $blue;
    border-bottom: 1px solid $lightGrey;

    .container {
        width: $container;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .col {
            flex-basis: 25%;
            padding: 10px;
            color: $white;

            h4 {
                margin-bottom: 30px;
            }
        }

        figure {
            width: 250px;
        }

        .About {
            p {
                line-height: 25px;
                font-size: 0.9rem;
            }
        }

        .contact-container {
            width: 240px;


            li {
                list-style: none;

                a {
                    color: $white;
                    text-decoration: none;
                }

                &:first-child {
                    margin-bottom: 20px;
                }

                &:last-child {
                    color: grey;
                    margin-top: 20px;
                }

            }

            .email {
                color: $darkgrey;
            }

        }

        .container-social {
            display: flex;
            flex-wrap: wrap;

            .circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 11px;

                a {
                    font-size: 2.5rem;
                    color: $white;
                }

            }

            .twitter,

            .skype {
                background-color: $heavenly;
            }

            .linkedin,
            .facebook {
                background-color: $midBlue;
            }

            .pinterest,
            .other {
                background-color: $orange;
            }

            .youtube {
                background-color: $Darkred;
            }

            .instagram {
                background-color: purple;

            }

            .google-plus {
                background-color: $pink;
            }
        }

    }
}
</style>