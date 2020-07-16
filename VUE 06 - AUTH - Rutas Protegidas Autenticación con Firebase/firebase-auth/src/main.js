import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// ? Install BootstrapVue
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore")

var config = {
    apiKey: "AIzaSyB1AEM6EFsMZIRlopRsPems4xDx7S6ASlQ",
    authDomain: "fir-crud-16c12.firebaseapp.com",
    databaseURL: "https://fir-crud-16c12.firebaseio.com",
    projectId: "fir-crud-16c12",
    storageBucket: "fir-crud-16c12.appspot.com",
    messagingSenderId: "63035789719",
    appId: "1:63035789719:web:6ceba833eaaa87c5b9f4d2",
    measurementId: "G-YE6H18S090"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore();

export default firebase.firestore()

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
        store.dispatch('detectarUsuario', {
            email: user.email,
            uid: user.uid
        })
    } else {
        store.dispatch('detectarUsuario', null)
    }

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})
