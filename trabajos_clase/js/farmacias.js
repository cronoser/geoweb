function addFarmacias() {

    //var url = 'datos/farmacias.geojson'; //Si tuvieramos que trabajar con ficheros locales
    var url = farmaciasGeoJSON;
    
    map.addSource('farmacias', {
        type: 'geojson',
        //data: url, //Es mejor definirlos de la siguiente forma
        data: farmaciasGeoJSON
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

            feature['place_name'] = `💊 ${feature.properties.nombre}`; //si quisieramos concatenar nombre con otro campo lo pondríamos a continuación
            feature['center'] = feature.geometry.coordinates; //hace zoom sobre el objeto buscado
            feature['place_type'] = ['place'];
            resultadosFarmacias.push(feature); 
        }
    }
    return resultadosFarmacias; //devolvemos el array con la búsqueda de farmacia
} // fin funcion buscarFarmacias

function addFarmaciasCercanas() {

    map.addSource('farmacias_sel', {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'farmacias_sel',
        'type': 'circle',
        'source': 'farmacias_sel',
        'paint': {
            'circle-color': '#f909b5', //magenta
            'circle-radius': 8, //radio 8
            'circle-stroke-color': '#ffffff', 
            'circle-stroke-width': 2
        }
    });

   map.addLayer({
        "id": "farmacias_sel_text",
        "type": "symbol",
        "source": "farmacias_sel",
        "layout": {
          'text-field': ['concat',['get', 'distancia'],' m'], //el campo distancia no existe en el geojson, lo vamos a añadir y este valor se sobre escribiría.
          "text-size": 15,
          'text-offset': [0, 1.3],
          'text-anchor': 'left'
        },
        'paint': {
            'text-color': '#f909b5',
            'text-halo-color': '#333333',
            'text-halo-width': 1
        }
      });

    map.on("click", "farmacias", function (e) { //mientras estés mirando la aplicación estos datos se guardan

        var puntoClick = turf.point([e.lngLat.lng, e.lngLat.lat]);
        var ff = farmaciasGeoJSON;

        for (var i = 0; i < ff.features.length; i++) { //recorro el array de farmacias

            var puntoFarmacia = turf.point(ff.features[i].geometry.coordinates);
            var distancia = turf.distance(puntoClick, puntoFarmacia, { units: 'meters' }); 
            ff.features[i].properties.distancia = parseInt(distancia); //creamos la propiedad distancia

        }

        ff.features.sort(function (a, b) {
            return a.properties.distancia - b.properties.distancia
        });

        map.getSource('farmacias_sel').setData(turf.featureCollection(ff.features.slice(1, 6)));

    })



} // fin funcion addFarmaciasCercanas