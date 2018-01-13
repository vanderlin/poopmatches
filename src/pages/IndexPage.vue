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
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <!-- <img src="../images/bulma.png" alt="Logo"> -->
                        </a>
                    </div>
                
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">
                                <span class="icon">
                                    <i class="fa fa-shopping-cart"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-6 is-offset-1">
                            <img src="../assets/img/logo.svg" alt="Poop Matches" width="300px">
                            <h2 class="subtitle is-4"><span>The best match for that</span> 💩</h2>
                    </div>
                    <div class="column is-5">
                        <figure class="image poop-matches-image">
                            <img src="../assets/img/matches.png" alt="Poop Matches">
                        </figure>
                        <p class="has-text-centered">
                            <button class="button is-medium is-outlined" @click.stop="() => { showEmailModal = true}">Order Now</button>
                            <p class="help-text">SOLD OUT</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul class="footer-text">
                        <li><a href="">© 2018 poopmatches.com</a></li>
                    </ul>
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
    background-color: #fff;
    .container {
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
    margin-top: 10px;
    color: red;
    font-size: 12px;
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
.subtitle span {
    font-style: italic;
    font-size: 14px;
}

@-webkit-keyframes moveUp {
    0% { }
    100% { transform: scale(1); opacity: 1; }
}
.poop-matches-image {
    max-width: 300px;
    margin: 0 auto; 
    opacity: 0;
    transform: scale(0.7);
    animation: moveUp .6s ease-in-out forwards;
}
.footer-text {
    font-size: 12px;
}
</style>