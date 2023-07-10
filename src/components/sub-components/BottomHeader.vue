<script>
import { store } from '../../data/data'
export default {
    data() {
        return store
    }
}

</script>

<template>
    <section>
        <div class="container">
            <ul>
                <li v-for="feat in features" :key="feat.title">
                    <fontAwesomeIcon :icon=feat.image />
                    <a href="#">{{ feat.title }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    background-color: $blue;

    .container {
        width: $container;
        margin: 0 auto;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                padding: 20px 20px;
                color: $white;
                list-style: none;
                font-size: 1.4rem;
                transition: background-color 1s;

                a {
                    text-decoration: none;
                    color: $white;
                    padding-left: 10px;
                    font-size: 1.1rem;
                }

                &:hover {
                    background-color: $lightBlue;
                }
            }
        }
    }
}
</style>
