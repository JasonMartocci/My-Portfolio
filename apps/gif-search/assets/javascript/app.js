function buttonFeature(value){
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
    request.send('GET', 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value, true);
};

$(document).ready(function() {

  $("#input-append").submit(function(e) {
      $('#search').trigger('click');
      return false;
  });

  // Function for search feature and to create buttons
  $('#search').on('click', function(e) {
    var searchFeature = ($('#formValueId').val());
    request = new XMLHttpRequest;
    request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+searchFeature, true);
    var next = 1;
    var searchFeature = ($('#formValueId').val());
      e.preventDefault();
      var addto = "#field" + next;
      next = next + 1;
      var newIn = '<button id="newButton" value='+searchFeature+' onclick="buttonFeature(this.value)">'+searchFeature+'</button>';

      var newInput = $(newIn);
      $(addto).after(newInput);


    // Function to pull images from data source and turn it into an image on the page
    request.onload = function() {
      $("#searchResults").empty();
      for (var i = 0; i <= 9; i++) {
        var slug = JSON.parse(request.responseText).data[i].slug;
        var animated = JSON.parse(request.responseText).data[i].images.fixed_height.url;
        var still = JSON.parse(request.responseText).data[i].images.fixed_height_still.url;
        var rating = JSON.parse(request.responseText).data[i].rating;
        var uID = JSON.parse(request.responseText).data[i].id;

        var image = $('<img src = "'+animated+'"  alt="'+slug+'" class="pause" status="movingImage" id="'+uID+'" title="Rating:'+ rating +'"> ').attr('data-still', still);

        image.attr('data-animated', animated);

        var ratingHtml = + rating;

        $("#searchResults").append(image);
        $("#searchResults").append(ratingHtml);
      };

      // Function to swap movingImage with stillImage
      $('.pause').on('click', function(){

        var status = $(this).attr('status');
        var imageUrl = $(this).attr('src');
        var imageId = $(this).attr('id');

        var animatedImage = animated;
        var stillImage = still;

        if (status=='stillImage') {

          $(this).attr('status', 'movingImage');
          $(this).attr('src', $(this).attr('data-animated'));
          console.log(this);

        } else if (status=='movingImage') {

          $(this).attr('status', 'stillImage');
          $(this).attr('src', $(this).attr('data-still'));
          console.log(this);

        }
        return false;
      });
    };

    request.onerror = function() {
      console.log('connection error');
    };

    request.send();
  });
});