<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: 'object',
    },
    computed: {
        currentAverage() {
            console.log(this.item.average)
            return parseInt(this.item.average);
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
        <div class="card-content">
            <div class="title">
                <h6>{{ item.category }}</h6>
                <h4>{{ item.title }}</h4>
            </div>
            <div class="info-card">
                <div class="average">
                    <img :src="getImageUrl('starfull.svg')" alt="" v-for="n in currentAverage">
                    <img :src="getImageUrl('staremptyl.svg')" alt="" v-for="n in 5 - currentAverage">
                </div>
                <div>
                    <h6 class="price">{{ item.actualPrice }}</h6>
                    <h6>{{ item.actualPrice }}</h6>
                </div>
            </div>
        </div>

        <div class="retro-card">
            <div class="author">
                <figure>
                    <img :src="getImageUrl(item.teacherImage)" alt="">
                </figure>
                <h6>{{ item.teacher }}</h6>
            </div>
            <div class="description">

                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>

                <div class="time">
                    <fontAwesomeIcon icon="fa-regular fa-clock" />
                    <span>{{ item.time }}</span>
                </div>
            </div>
            <div class="footer-card">
                <button>PREVIEW THIS COURSE</button>
                <div class="container-footer-card">
                    <div class="like-it">
                        <div class="circle">
                            <fontAwesomeIcon icon="fa-regular fa-heart" class="heart" />
                        </div>
                        <span>Add to Whishlist</span>
                    </div>
                    <div class="retro-price">
                        <h6 class="price">{{ item.price }}</h6>
                        <h6>{{ item.actualPrice }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.card {
    border: 1px solid $darkgrey;
    width: 300px;
    position: relative;

    figure {
        width: 100%;
    }

    .card-content {
        padding: 15px;

        .title {
            border-bottom: 1px solid $darkgrey;

            h6 {
                margin-top: 15px;
                color: $darkgrey;
            }

            h4 {
                color: $blue;
                font-weight: lighter;
                font-size: 0.9rem;
                margin: 20px 0;
                line-height: 20px;
            }
        }

        .info-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 0;

            .average {
                display: flex;
                align-items: center;
                width: 20px;
            }

            .price {
                text-decoration: line-through;
                color: $darkgrey;
            }
        }
    }

    .retro-card {
        position: absolute;
        display: none;
        top: 0;
        background-color: $white;
        height: 100%;
        padding: 20px;

        .author {
            display: flex;
            align-items: center;

            figure {
                width: 30px;

                img {
                    border-radius: 50%;
                }
            }

            h6 {
                margin-left: 10px;
                color: $darkgrey;
            }
        }

        .description {
            margin: 10px 0;

            h2 {
                font-size: 1rem;
                margin-bottom: 10px;
            }

            p {
                color: $darkgrey;
                line-height: 20px;
                font-size: 0.9rem;
                font-weight: lighter;
            }

            .time {
                color: $blue;
                margin: 10px 0;

                span {
                    padding-left: 10px;
                }
            }
        }

        .footer-card {
            button {
                padding: 20px 40px;
                background-color: $red;
                color: white;
                font-weight: bolder;
                border: none;
                transition: color ease-in-out 3s;
                background: linear-gradient(to right, $green 50%, $lightBlue 50%);
                background-size: 200% 100%;
                background-position: right bottom;
                transition: all .5s ease-out;
                cursor: pointer;
                width: 100%;

                &:hover {
                    background-position: left bottom;
                }
            }

            .container-footer-card {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0;

                .like-it {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    .circle {
                        width: 40px;
                        height: 40px;
                        border: 1px solid $blue;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .heart {
                            color: $red;
                        }
                    }

                    span {
                        font-size: 0.8rem;
                        padding-left: 10px;
                    }

                }

                .retro-price {
                    display: flex;
                    align-items: center;

                    .price {
                        color: $darkgrey;
                        text-decoration: line-through;
                        margin-right: 10px;
                    }
                }
            }
        }
    }

    &:hover .retro-card {
        display: block;
    }
}
</style>