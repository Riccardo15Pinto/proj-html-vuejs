<script>
import { store } from '../../data/data'
import CourseCard from './CourseCard.vue';
export default {
    components: { CourseCard },
    data() {
        return {
            store,
            recent: [],
        }
    },
    computed: {
        RecentCourses() {

            this.recent = [...store.courses];
            const filter = this.recent.splice(4, store.courses.length - 1);

            return filter
        }
    }
}
</script>

<template>
    <section>
        <div class="container">

            <h2>Recent Courses</h2>

            <nav>
                <ul>
                    <li v-for="item in store.categories">
                        <a href="#">{{ item.name }}</a>
                    </li>
                </ul>
            </nav>

            <div class="card-container">
                <CourseCard v-for="n in RecentCourses" :item="n" :key="n.id" />
            </div>

            <button>SHOW ALL</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    .container {
        width: $container;
        margin: 0 auto;
        padding: 30px 0;

        h2 {
            color: $blue;
            margin-bottom: 40px;
            margin-left: 10px;
            text-align: center;
        }

        nav {
            width: 1220px;
            margin: 35px auto;

            ul {
                display: flex;
                align-items: center;
                justify-content: space-between;

                li {
                    list-style: none;

                    a {
                        text-decoration: none;
                        color: $blue;
                        padding: 10px 20px;
                        background-color: transparent;
                        border-radius: 30px;

                        &:hover {
                            background-color: $blue;
                            color: $white;

                        }

                        &:focus {
                            background-color: $blue;
                            color: $white;

                        }
                    }
                }
            }
        }

        .card-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .card {
                margin: 10px 10px;
                flex-basis: calc(100% / 6 - 20px);
            }
        }

        button {
            display: block;
            margin: 40px auto;
            padding: 20px 40px;
            border-radius: 30px;
            color: white;
            font-weight: bolder;
            border: none;
            background: linear-gradient(to right, $Darkred 50%, $red 50%);
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
</style>