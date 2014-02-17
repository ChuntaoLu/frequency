/* frequency.js
 * (c) Pranav Ravichandran <me@onloop.net>
 * Released the MIT license.
 * http://github.com/pranavrc/frequency/
 */

$(document).ready(function () {
    $("*[id^=frequency]").each(function () {
        var frequency = parseInt(($(this).attr('id')).split("-")[1]);
        var fadeDelay = Math.log(frequency) / Math.LN10;
        var fadeTimePercentage = fadeDelay * 100 / frequency;

        $('head').append("<style>     \
            @keyframes fade {         \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.25;}  \
                100% {opacity:0.25;}  \
            }                         \
            @-webkit-keyframes fade { \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.25;}   \
                100% {opacity:0.25;}  \
            }                         \
            @-moz-keyframes fade {    \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.25;}  \
                100% {opacity:0.25;}  \
            }                         \
            @-o-keyframes fade {      \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.25;}  \
                100% {opacity:0.25;}  \
            }                         \
        </style>");

        $(this).css({
            "animation": "fade " + frequency + "s forwards",
            "-webkit-animation": "fade " + frequency + "s forwards",
            "-moz-animation": "fade " + frequency + "s forwards",
            "-o-animation": "fade " + frequency + "s forwards",
            "animation-iteration-count": "infinite",
            "-webkit-animation-iteration-count": "infinite",
            "-moz-animation-iteration-count": "infinite",
            "-o-animation-iteration-count": "infinite"
        });
    });
});