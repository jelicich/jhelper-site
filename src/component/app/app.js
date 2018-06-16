import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/bxslider/dist/jquery.bxslider.min.js'
import '../../node_modules/jquery.scrollex/jquery.scrollex.min.js'
import '../../node_modules/jquery.scrolly/jquery.scrolly.js'
import '../../assets/js/skel.min.js'
import '../../assets/js/util.js'
import '../../assets/js/main.js'
import '../../node_modules/vue/dist/vue.js'

import '../../assets/css/main.css'
import '../../assets/css/custom.css'
import '../../node_modules/bxslider/dist/jquery.bxslider.css'


import Contact from '../contact/contact.vue'
import Donate from '../donate/donate.vue'

const Video = {
    init: function () {
        var $videos = $('video');
        this.renderVideoPlayButton($videos)
    },

    renderVideoPlayButton: function ($videos) {
        var t = this;
        $videos.each(function (i, el) {
            $el = $(el);
            var $videoPlayButton = t.formatVideoPlayButton($el)
            $el.addClass('has-media-controls-hidden')
            $videoPlayButton.on('click', t.hideVideoPlayButton)
        })

    },

    formatVideoPlayButton: function ($video) {
        var $svg = $('<svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video"><circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/><polygon points="70, 55 70, 145 145, 100" fill="#fff"/></svg>')
        $video.parent().append($svg);
        return $svg;
    },

    hideVideoPlayButton: function () {
        var $video = $(this).prev();
        $video.get(0).play()
        $(this).addClass('is-hidden')
        $video.removeClass('has-media-controls-hidden')
        $video.attr('controls', 'controls')
    }
}

export default {
    name: 'app',
    data: function () {
        return {}
    },
    components: {
        Donate,
        Contact
    },
    created: function () {
        console.log('created')

        $('.videos-slider').bxSlider({
            controls: false,
            auto: false
        });

        Video.init()
    }
}