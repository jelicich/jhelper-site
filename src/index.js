import Contact from './component/contact/contact.vue'
import Donate from './component/donate/donate.vue'

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#wrapper',
        data: function () {
            return {}
        },
        components: {
            Donate,
            Contact
        }
    })
})
