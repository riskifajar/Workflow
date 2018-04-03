//maps
function initMap() {
    var options = {
        zoom: 10,
        center: {
            lat: -6.182629,
            lng: 106.947666
        }
    }
    var map = new google.maps.Map(document.getElementById('maps'), options);
    var marker = new google.maps.Marker({
            position: {
                lat: -6.19700,
                lng: 106.956895
            },
            map: map
        });
};