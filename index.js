
    $(document).ready(function() {

      $("#surprise-button").click(function(e) {
        $.get("http://api.giphy.com/v1/gifs/random?tag=cat&api_key=dc6zaTOxFJmzC", function(res) {
          $('#haha').html('<img src="' + res.data.image_url + '">' )
        })
      })
    })
  
