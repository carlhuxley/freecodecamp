$(document).ready(function() {
   $("#quoteButton").click(function() {
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: "http://api.forismatic.com/api/1.0/?",
      async: false,
      contentType: "application/json; charset=utf-8",
      data: {
        method: "getQuote",
        format: "jsonp",
        lang: "en",
        jsonp: "parseQuote"
      },
      jsonp: true,
      jsonpCallback: "parseQuote",
      success: function(msg) {
        console.log(msg);
      }
    });
  });

  //Tweet composer function
  /* This function takes the quote and author text returned from the quote API and pastes it into the Tweet Web Intent string.*/
  $('#tweetLink').click(function(e) {
    var tweet = '\"' + document.getElementById("quote").innerHTML + '\" ' + document.getElementById("author").innerHTML;
    var url = "https://twitter.com/intent/tweet?text=" + tweet;
    this.href = url;
  });
});
