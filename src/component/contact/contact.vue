<template>
    <section id="contact" class="main special">
        <header class="major">
            <h2>Contact us</h2>
            <p>Send us an email with your thoughts to <a
                    href="mailto:jhelper.app@gmail.com">jhelper.app@gmail.com</a></p>
        </header>
        <!--<form method="post" action="#">-->
            <!--<div class="row uniform">-->
                <!--<div class="6u 12u$(xsmall)">-->
                    <!--<label for="contact-name">Name</label>-->
                    <!--<input v-on:keyup="enableNameValidation" v-bind:class="{'not-valid' : !isValidName() }" type="text" id="contact-name" name="name" value="" placeholder="Name" v-model="name">-->
                <!--</div>-->
                <!--<div class="6u$ 12u$(xsmall)">-->
                    <!--<label for="contact-email">e-mail*</label>-->
                    <!--<input v-on:keyup="enableEmailValidation" v-bind:class="{'not-valid' : !isValidEmail() }" type="email" id="contact-email" name="email" value="" placeholder="Email" v-model="email">-->
                <!--</div>-->
                <!--<div class="12u$">-->
                    <!--<label for="contact-message">Message</label>-->
                    <!--<textarea name="demo-message" id="contact-message" placeholder="Enter your message"-->
                              <!--rows="6" v-model="message"></textarea>-->
                <!--</div>-->
                <!--<div class="12u$">-->
                    <!--<ul class="actions">-->
                        <!--<li><input type="button" value="Send Message" class="special" v-on:click="submit" v-bind:disabled="!isValid()"></li>-->
                        <!--<li><input type="button" value="Reset" v-on:click="reset"></li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
        <!--</form>-->
    </section>
</template>

<script>
    import './contact.css'

    import Contact from './contact.js'

    export default Contact
</script>

