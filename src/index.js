import Contact from './component/contact.vue'

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#wrapper',
        data: function () {
            return {
            }
        },
        components: {
            Contact
        }
    })
})
