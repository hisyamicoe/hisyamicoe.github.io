
    $(document).ready(function() {

      $("#surprise-button").click(function(e) {
        $.get("https://media.giphy.com/media/CyNwabts0egVy/giphy.gif", function(res) {
          $('#haha').html('<img src="' + res.data.image_url + '">' )
        })
      })
    })
  
