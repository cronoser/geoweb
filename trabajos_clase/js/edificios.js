function addEdificiosCapa() {

    map.addSource("edificios_source", {
        "type": "vector",
        "url": "mapbox://cronoser1.3p16yurq"  // mapbox://Nuestor ID Tileset

    }); //fin map source


    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "construcciones-ds64ca", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 15,
    // "filter": [">", "numberOfFl", 0],
        "paint": {
            "fill-extrusion-color": [
                "interpolate", ["linear"], ["number", ["get", "numberOfFl"]],
                0, "#FFFFFF",
                1, "#e6b03d",
                3, "#e6b03d",
                6, "#3de66d",
                9, "#3de6b1",
                12, "#22ecf0",
                15, "#14b1fd",
                20, "#3d73e6",
                40, "#123a8f",
                80, "#ce2f7e",
                100, "transparent"

            ],
            "fill-extrusion-height": ["*", 2, ["to-number", ["get", "numberOfFl"]]],
            "fill-extrusion-opacity": 0.9
        }
    }
    //,"road-label"
    );  

} //fin funcion