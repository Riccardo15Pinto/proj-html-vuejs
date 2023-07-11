<script>
import { store } from '../../data/data'
import CourseCard from './CourseCard.vue';
export default {
    components: { CourseCard },
    data() {
        return store
    },
}
</script>

<template>
    <section>
        <div class="container">

            <h2>Popular Development Courses</h2>

            <div class="card-container">
                <CourseCard :item="courses[0]" :average="courses[0].average" />
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

        h2 {
            color: $blue;
        }
    }
}
</style>