var center = new google.maps.LatLng(59.76522, 18.35002);

function initialize() {

    var mapOptions = {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center
    };

    map1 = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions);
    map2 = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);
    var marker1 = new google.maps.Marker({
        map: map1,
        position: center
    });
    var marker2 = new google.maps.Marker({
        map: map2,
        position: center
    });
}
if($('#map-canvas1, #map-canvas2').length > 0) {
    initialize();
}