function addPOI() {

    var url = 'datos/cascadas.geojson';
    map.addSource('cascadas', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'rutas',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#ff0000',
    'line-width': 3
    }
    });

} //fin funcion

//estos es un ejemplo de valores que se le pasan (lat,long, zoom) 12.96/41.76589/2.30274
function zoomToRutas(valores) {

    var coord = valores.split("/"); //parte el valor en un array con 3 posiciones

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });

} //fin funcion