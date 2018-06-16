<template>
    <section id="donate" class="main special">
        <header class="major">
            <h2>Donate</h2>
            <p>jHelper is pay-what-you-want software. You can contribute to help and keep this extension
                running.</p>
        </header>

        <div id="paypal-donate" title="Help us to continue improving this tool by donating :)">
            <form id="paypal-donate-form" target="_blank" action="https://www.paypal.com/cgi-bin/webscr"
                  method="post">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TN5D66AR2XWBU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                       name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                     height="1">
            </form>
        </div>
        <!--
        <ul class="statistics">
            <li class="style1">
                <span class="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
            </li>
            <li class="style2">
                <span class="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
            </li>
            <li class="style3">
                <span class="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
            </li>
            <li class="style4">
                <span class="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
            </li>
            <li class="style5">
                <span class="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
            </li>
        </ul>
        <p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
    -->
        <footer class="major">
            <form style="display: none" id="paypal-donate-form" target="_blank"
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TN5D66AR2XWBU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                       name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                     height="1">
                Donate:

            </form>

            <a href="#" id="donate-paypal" class="button special" v-on:click="donateWithPaypal"><span
                    class="icon fa-paypal"></span> Donate with
                PayPal</a>F


            <!--<a href="#" id="donate-bitcoin" class="button special"><span class="icon fa-btc"></span> Donate with-->
            <!--Bitcoins</a>-->
            <!-- <ul class="actions">
                <li><a href="generic.html" class="button">Learn More</a></li>
            </ul> -->
        </footer>

    </section>


</template>

<script>
    import Donate from './donate.js'

    export default Donate
</script>