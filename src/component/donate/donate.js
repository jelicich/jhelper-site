export default {
    name: 'donate',
    data: function () {
        return {

        }
    },
    methods: {
        donateWithPaypal: function () {
            this.$refs['paypal-donate-form'].submit()
        }
    }
}