(function() {
  

  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
  var searchObj = {
  	tags: "post canyon",
  	tagmode: "any",
  	format: "json"
  }; 

   function newSearch(){
  	$.getJSON( flickerAPI, searchObj, render)
  }

  function render(data) {
	console.log(data);
	var resultsHTML = '';
	data.items.forEach(function(result) {
		var img = result.description;
		console.log(img);
		var picturesHTML = '<div class=:"imgResult">' + img + '</div>';
		resultsHTML += picturesHTML;
	})
	$('#images').html(resultsHTML)
};


  $('#submit').on('click', function(e) {
	var searchQuery = $('#search').val();
    searchObj.tags = searchQuery;
   
    newSearch();

  });

 
  






})();