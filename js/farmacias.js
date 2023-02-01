function addFarmacias() {

    //var url = 'datos/farmacias.geojson';
    var url = farmaciasGeoJSON;
    map.addSource('farmacias', {
        type: 'geojson',
        data: url
    });

    map.addLayer({
        'id': 'farmacias',
        'type': 'circle',
        'source': 'farmacias',
        'paint': {
            'circle-color': '#00ff00',
            'circle-radius': 5,
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2
        }
    });


} // fin funcion

function buscarFarmacias(valor) {

    console.info("buscarFarmacias", valor);
    var resultadosFarmacias = [];

   // console.info(farmaciasGeoJSON);
    for (var i = 0; i < farmaciasGeoJSON.features.length; i++) {

        var feature = farmaciasGeoJSON.features[i];

        if (feature.properties.nombre && 
            feature.properties.nombre
            .toLowerCase() //pasa el texto a minusculas para evitar problemas en la búsqueda
            .includes(valor.toLowerCase())
        ) {

            feature['place_name'] = `💊 ${feature.properties.nombre}`;
            feature['center'] = feature.geometry.coordinates; //hace zoom sobre el objeto buscado
            feature['place_type'] = ['place'];
            resultadosFarmacias.push(feature); 
        }
    }
    return resultadosFarmacias; //devolvemos el array con la búsqueda de farmacia
} // fin funcion