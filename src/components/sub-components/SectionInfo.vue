<script>
export default {
    data() {
        return {

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
    <section>
        <figure>
            <img :src="getImageUrl('bg.png')" alt="">
        </figure>

        <div class="floating-card">
            <h2>Limitless learning, more possibilities</h2>
            <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling
                commitments.</p>
            <button>READ MORE</button>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    position: relative;

    .floating-card {
        position: absolute;
        top: 160px;
        left: 350px;
        width: 525px;

        h2 {
            font-size: 3.5rem;
            color: $blue;
        }

        p {
            margin: 10px 0;
            line-height: 25px;
            font-weight: bold;
            color: $blue;

        }

        button {

            padding: 20px 40px;
            background-color: $red;
            border-radius: 30px;
            color: white;
            font-weight: bolder;
            border: none;
            transition: color ease-in-out 3s;
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