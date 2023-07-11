<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="newsletter-text">
                <h2>Subscribe our newsletter</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words</p>
            </div>
            <div class="newsletter-input">
                <h5>
                    YOUR E-MAIL ADDRESS
                </h5>
                <div class="input-container">
                    <input type="text" placeholder="Enter Your E-mail">
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
    background-color: $red;
    padding: 50px 0;

    .container {
        width: $container;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;

        .newsletter-text {
            width: 590px;
        }


        .newsletter-input {
            padding-left: 20px;

            h5 {
                margin-bottom: 10px;
            }

            .input-container {
                width: 300px;
                height: 35px;

                input {
                    height: 100%;
                    width: 70%;
                    border: none;
                    background-color: $lightGrey;
                    padding-left: 10px;
                }

                button {
                    height: 100%;
                    width: 30%;
                    border: none;
                    background-color: $lightBlue;
                    cursor: pointer;
                    color: $white;
                }

            }
        }
    }
}
</style>