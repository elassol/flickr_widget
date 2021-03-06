// Json Feed in JQuery

// $(document).ready(function(){

//     console.log("hello");

//     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=35315969@N08&lang=en-us&format=json&jsoncallback=?", function(data){
//         $.each(data.items, function(i,item){
//             $("<img/>").attr("src", item.media.m).appendTo("#wrap-images")
//             .wrap("<a href='" + item.link + "'></a>");
//         });
//         $("#title").html(data.title);
//         $("#description").html(data.description);
//         $("#link").html("<a href='"+data.link+"' target=\"_blank\">Visit the Viget Inspiration Pool!</a>");
//     });

   
// });


// INIT WAY TO  Using an object literal for a jQuery feature

var FlickrWidget = {


    init: function (settings) {

        // Private variables and functions
        var widgetID = $("#wrap-images");
        var myFlickr = "35315969@N08";
        var myURL = "http://api.flickr.com/services/feeds/photos_public.gne?id=" + myFlickr + "&lang=en-us&format=json&jsoncallback=?";

        $.getJSON(myURL, function(data){
            $.each(data.items, function(i,item){
                if (i < 6){
                    $(" <a href='" + item.link + "' style=\"background-image: url('" + item.media.m + ")\";><h3> " + item.title + " </h3></a> ").appendTo(widgetID);
                } else {

                }
                
            });
            $("#title").html(data.title);
            $("#description").html(data.description);
            $("#link").html("<a href='" + data.link + "' target=\"_blank\">Visit the Full Gallery!</a>");
        });

    }
    
};

$( document ).ready( FlickrWidget.init );




    
   

    






// Example Feed


// ({
//         "title": "Uploads from eduardo.lasso",
//         "link": "http://www.flickr.com/photos/elassol/",
//         "description": "",
//         "modified": "2013-02-22T17:05:59Z",
//         "generator": "http://www.flickr.com/",
//         "items": [
//        {
//             "title": "Xmas drinks",
//             "link": "http://www.flickr.com/photos/elassol/8497330403/",
//             "media": {"m":"http://farm9.staticflickr.com/8532/8497330403_b00a174e63_m.jpg"},
//             "date_taken": "2013-02-22T17:05:59-08:00",
//             "description": " <p><a href=\"http://www.flickr.com/people/elassol/\">eduardo.lasso<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/elassol/8497330403/\" title=\"Xmas drinks\"><img src=\"http://farm9.staticflickr.com/8532/8497330403_b00a174e63_m.jpg\" width=\"240\" height=\"240\" alt=\"Xmas drinks\" /><\/a><\/p> ",
//             "published": "2013-02-22T17:05:59Z",
//             "author": "nobody@flickr.com (eduardo.lasso)",
//             "author_id": "35315969@N08",
//             "tags": "uploaded:by=flickrmobile flickriosapp:filter=nofilter"
//        },