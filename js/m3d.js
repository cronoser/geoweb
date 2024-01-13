function add3D() {

    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    //Mapbox Satellite
    map.addSource('icgc-dem', {
        'type': 'raster-dem',
        "tiles": [
        "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png"
      ],
        'tileSize': 512,
        'maxzoom': 14
    });

    //IGN Base Orto
    map.addSource('IGN-BaseOrto', {
        'type': 'raster-dem',
        "tiles": [
        "https://tms-ign-base.idee.es/1.0.0/IGNBaseOrto/{z}/{x}/{-y}.png"
      ],
        'tileSize': 512,
        'maxzoom': 16
    });
    


   map.setFog({});


    map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
    });


    //edificios de los estilos Mapbox
/*

    map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': ['get', 'height'],                    
                'fill-extrusion-opacity': 0.9
            }
        });
*/

} //fin funcion

function changeTerrain(terreno){

    if(terreno){
        map.setTerrain({
            'source': terreno,
            'exaggeration': 1.5
        });
    }else{
        map.setTerrain(null);
    }

} //fin funcion