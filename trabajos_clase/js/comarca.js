function addLimite() {

    map.addSource("limite_source", {
        "type": "vector",
        "url": "mapbox://cronoser1.c2isu8pe"  // mapbox://Nuestro ID Tileset
       // "url": "datos/merindades.geojson"
    }); //fin map source


    map.addLayer({
        "id": "relation",
        "type": "line",
        "source": "limite_source",
        "source-layer": "merindades-c3mcl4", // Nuestro nombre Tileset
        "maxzoom": 21,
        "minzoom": 15,
        "paint": {
            "line-color": "#00ffff",
        }
    }
    );  

} //fin funcion