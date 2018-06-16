import Vue from 'vue'

import App from './component/app/app.vue'

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#wrapper',
        data: function () {
            return {

            }
        },
        components: {
            App
        }
    })
})
