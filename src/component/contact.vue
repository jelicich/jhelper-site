<template>
    <section id="contact" class="main special">
        <header class="major">
            <h2>Contact us</h2>
            <p>Send us an email with your thoughts to <a
                    href="mailto:jhelper.app@gmail.com">jhelper.app@gmail.com</a></p>
        </header>
        <form method="post" action="#">
            <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                    <label for="contact-name">Name</label>
                    <input type="text" id="contact-name" name="name" value="" placeholder="Name">
                </div>
                <div class="6u$ 12u$(xsmall)">
                    <label for="contact-email">e-mail*</label>
                    <input type="email" id="contact-email" name="email" value="" placeholder="Email">
                </div>
                <div class="12u$">
                    <label for="contact-message">Message</label>
                    <textarea name="demo-message" id="contact-message" placeholder="Enter your message"
                              rows="6"></textarea>
                </div>
                <div class="12u$">
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" class="special"></li>
                        <li><input type="reset" value="Reset"></li>
                    </ul>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'contact',
        data: function () {
            return {

            }
        }
    }
</script>