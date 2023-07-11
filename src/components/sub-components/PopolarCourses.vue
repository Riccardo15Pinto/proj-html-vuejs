<script>
import { store } from '../../data/data'
import CourseCard from './CourseCard.vue';
export default {
    components: { CourseCard },
    data() {
        return {
            store,
            populars: [],
            isNextKlicked: true,
            isPrevKlicked: false,
            firstIndex: 0,
            secondndex: 1,
            thirdndex: 2,
            fourthIndex: 3,
            fifthIndex: 4,
            sixthIndex: 5,
        }
    },
    computed: {
        popolarCourses() {

            this.populars = [...store.courses];
            const filter = this.populars.filter(element => element.popular);

            return filter
        },


    },

    methods: {


        getNextImage() {

            this.isPrevKlicked = true;
            console.log(this.isPrevKlicked, 'prev')

            if (this.sixthIndex === this.popolarCourses.length - 1) {
                this.isNextKlicked = true;
                this.isPrevKlicked = true;
                console.log(this.isNextKlicked, 'next')
                console.log(this.isPrevKlicked, 'prev')
                this.firstIndex = 0;
                this.secondndex = 1;
                this.thirdndex = 2;
                this.fourthIndex = 3;
                this.fifthIndex = 4;
                this.sixthIndex = 5;
                this.isNextKlicked = true;
                this.isPrevKlicked = false;
                console.log(this.isNextKlicked, 'next')
                console.log(this.isPrevKlicked, 'prev')
            } else {
                this.isNextKlicked = true;
                this.isPrevKlicked = true;
                this.firstIndex += 1;
                this.secondndex += 1;
                this.thirdndex += 1;
                this.fourthIndex += 1;
                this.fifthIndex += 1;
                this.sixthIndex += 1;
            }
        },

        getPrevImage() {

            --this.firstIndex;
            --this.secondndex;
            --this.thirdndex;
            --this.fourthIndex;
            --this.fifthIndex;
            --this.sixthIndex;

            if (!this.firstIndex) {
                this.isNextKlicked = true;
                this.isPrevKlicked = false;
            }
            console.log(this.isPrevKlicked)

            if (this.firstIndex < 0) {
                this.isPrevKlicked = true;

                this.isNextKlicked = true;

                this.firstIndex = 7;
                this.secondndex = 8;
                this.thirdndex = 9;
                this.fourthIndex = 10;
                this.fifthIndex = 11;
                this.sixthIndex = 12;
                this.isPrevKlicked = true;
                this.isNextKlicked = true;

                console.log(this.isPrevKlicked)
                console.log('stai facendo bene')
            }

        },

        goNext() {
            this.getNextImage()
        },

        goPrev() {
            this.getPrevImage()
        }

    }
}
</script>

<template>
    <section>
        <div class="container">

            <h2>Popular Courses</h2>

            <p>Discover our most popular courses for self learning</p>

            <div class="card-container">
                <CourseCard :item="popolarCourses[firstIndex]" :key="popolarCourses[firstIndex].id" />
                <CourseCard :item="popolarCourses[secondndex]" :key="popolarCourses[secondndex].id" />
                <CourseCard :item="popolarCourses[thirdndex]" :key="popolarCourses[thirdndex].id" />
                <CourseCard :item="popolarCourses[fourthIndex]" :key="popolarCourses[fourthIndex].id" />
                <CourseCard :item="popolarCourses[fifthIndex]" :key="popolarCourses[fifthIndex].id" />
                <CourseCard :item="popolarCourses[sixthIndex]" :key="popolarCourses[sixthIndex].id" />
            </div>
            <div class="button-container">
                <button @click="goPrev" :class="{ isTrue: isPrevKlicked }"> {{ '<' }} </button>
                        <button @click="goNext" :class="{ isTrue: isNextKlicked }"> {{ '>' }} </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    background-color: $lightGrey;

    .container {
        width: $container;
        margin: 0 auto;
        padding: 30px 0;

        h2 {
            color: $blue;
            margin-top: 70px;
            font-size: 2.5rem;
            text-align: center;
        }

        p {
            text-align: center;
            font-size: 0.9rem;
            font-weight: lighter;
            color: $darkgrey;
            margin-bottom: 30px;
        }

        .card-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .card {
                margin: 10px;
                flex-basis: calc(100% / 6 - 20px);
            }
        }

        .button-container {
            text-align: center;
            margin: 40px 0;

            button {
                font-size: 1.5rem;
                color: $blue;
                background-color: white;
                padding: 15px;
                margin: 5px;
                border: none;
            }

            .isTrue {
                background-color: $green;
            }
        }
    }
}
</style>