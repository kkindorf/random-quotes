  var randomColors = ['#555', '#4286f4', '#248257', '#3d2482', '#825924'];
$(document).ready(function() {

    $("#changeMessage").on("click", function() {
        var color = randoms();

        $("body").css('background-color', color);
        $('.quote').css('color', color);
        $('#changeMessage').css('background-color', color);
        $('button').css('color', 'white');
        $('.fa-twitter').css('color', color);
        $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]?callback=", function(json) {
            var quote = json.value["joke"];
            var quoteLength = quote.length;
                $(".quote").html("<h3>" + quote + "</h3>");
            var tweetQuote = 'https://twitter.com/intent/tweet?text=' + quote;
            $(".twitter-share-button").attr("href", tweetQuote);
        });
    });
});

var randoms = function(){
  return randomColors[Math.floor(Math.random()*randomColors.length)]
}
