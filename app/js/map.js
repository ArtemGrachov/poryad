const map = function () {
    const center = {
        lat: 50.878862,
        lng: 30.268079
    }
    const map = new google.maps.Map(document.getElementById('projectMap'), {
        center: center,
        zoom: 11,
        styles: [{
            elementType: 'all',
            stylers: [{
                'saturation': -100
            }, {
                'gamma': 0.2
            }]
        }]
    })
    const marker = new google.maps.Marker({
        position: center
    });
    marker.setMap(map);
    return {
        map: map,
        marker: marker
    };
}