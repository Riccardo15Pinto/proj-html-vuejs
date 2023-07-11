<script>
import { store } from '../../data/data'
import CourseCard from './CourseCard.vue';
export default {
    components: { CourseCard },
    data() {
        return {
            store,
            developments: [],
        }
    },
    computed: {
        developmentCourses() {
            const filtered = store.courses.filter(element => element.category === 'Development');
            return filtered
        }
    }
}
</script>

<template>
    <section>
        <div class="container">

            <h2>Popular Development Courses</h2>

            <div class="card-container">
                <CourseCard v-for="n in developmentCourses" :item="n" :key="n.id" />
            </div>
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
        }

        .card-container {
            display: flex;
            align-items: center;

            .card {
                margin: 0 10px;
                flex-basis: calc(100% / 6 - 20px);
            }
        }
    }
}
</style>