import Util from '../../assets/js/fglib/util'

export default {
    name: 'contact',
    data: function () {
        return {
            name: '',
            email: '',
            message: '',
            validateName: false,
            validateEmail: false
        }
    },
    methods: {
        enableNameValidation: function () {
            this.validateName = true
        },

        isValidName: function () {
            if (!this.validateName)
                return true

            return this.name.length > 0
        },

        enableEmailValidation: function () {
            this.validateEmail = true
        },

        isValidEmail: function () {
            if (!this.validateEmail)
                return true

            return Util.isEmail(this.email)
        },

        isValid: function () {
            return this.isValidName() && this.isValidEmail() && this.message.length
        },

        submit: function () {
            // TODO: send email
        },

        reset: function () {
            this.validateName = this.validateEmail = false
            
            // strings are immutable :-) in js
            this.name = this.email = this.message = ''
        }
    }
}
