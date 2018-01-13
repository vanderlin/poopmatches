<template>
<div class="main">
    <div class="modal" :class="{'is-active': showEmailModal}">
        <div class="modal-background" @click="() => { showEmailModal = false}"></div>
        <div class="modal-content">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <div class="field">
                        <div class="control">
                            <label class="label">Enter email for waiting list.</label>
                            <input class="input" v-model="email" placeholder="me@gmail.com"></input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="has-text-centered control">
                            <button class="button send-button" @click.stop="send">SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="() => { showEmailModal = false}"></button>
    </div>

    <section class="hero main-hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-full matches-info has-text-centered">
                        <h1 class="title">
                            Poop Matches
                        </h1>
                        <h2 class="subtitle">
                            The right match for that poop.
                        </h2>
                        <figure class="image match-images">
                            <img src="../assets/img/matches.png" alt="">
                            <p class="help-text">SOLD OUT</p>
                        </figure>
                    </div>
                    <div class="column is-full order-col">
                        <button class="button is-large" @click.stop="() => { showEmailModal = true}">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'App',
    props: {
    },
    data() {
        return {
            email: null,
            showEmailModal: false
        }
    },
    components: {

    },
    methods: {
        send() {
            this.showEmailModal = false
            if(this.email) {
                this.$db.ref('emails').push({
                    added_at: this.firebaseTimestamp(),
                    email: this.email
                })
            }
        }
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~bulma/sass/utilities/mixins';
.main-hero {
    background-color: #EAEFEF;
    .container {
        height: 80vh;
    }
}
.matches-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.order-col {
    text-align: center;
    .button {
        border-radius: 25px;
        text-transform: uppercase;
        font-size: 18px; 
        height: 50px;
        min-width: 200px;
    }
}
.match-images {
    max-width: 300px;
    margin: 30px auto;
}
.help-text {
    color: red;
}
.modal {
    .label {
        color: white;
    }
    .send-button {
        border-radius: 20px;
        width: 120px;
        margin-top: 20px;
    }
}
</style>