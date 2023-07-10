<script>
import { store } from '../../data/data'
export default {
    data() {
        return {
            store,
            socials: [],
        }
    },
    computed: {
        filteredSocial() {
            const filter = store.icons.filter(element => element.valid);
            return this.socials = filter
        }
    }
}

</script>

<template>
    <section>
        <div class="container">

            <select>
                <option value="0">English</option>
                <option value="1">Italian</option>
                <option value="2">Deutsch</option>
            </select>

            <div class="list">
                <ul class="items">
                    <li v-for="voice in store.voices" :key="voice.name">
                        <a href="#">{{ voice.name }}</a>
                    </li>
                </ul>

                <ul class="icon">
                    <li v-for="social in filteredSocial" :key="social.typeIcon">
                        <a href="#">
                            <fontAwesomeIcon :icon=social.nameIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    border-bottom: 1px solid $grey;

    .container {
        width: $container;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        select {
            border: none;
            color: $grey;
            cursor: pointer;


        }

        .list {
            display: flex;
            align-items: center;


            ul {
                display: flex;
                align-items: center;
                list-style-type: none;
                margin-right: 30px;

                a {
                    text-decoration: none;
                    margin-left: 10px;
                    color: $grey;
                }
            }

            .items {

                :hover {
                    color: $lightBlue;
                }
            }

            .icon {

                :hover {
                    color: $lightBlue;
                }
            }
        }
    }
}
</style>