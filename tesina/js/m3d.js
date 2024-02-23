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

function activarCascadas(estado){
    if (estado){
        map.setLayoutProperty('cascadas-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('cascadas-merindades','visibility','none');
    }
} //fin funcion cascadas

function activarCasasdelParque(estado){
    if (estado){
        map.setLayoutProperty('casasparque-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('casasparque-merindades','visibility','none');
    }
} //fin funcion cascadas

function activarCastillos(estado){
    if (estado){
        map.setLayoutProperty('castillos-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('castillos-merindades','visibility','none');
    }
} //fin funcion castillos

function activarDolmenes(estado){
    if (estado){
        map.setLayoutProperty('megalitos-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('megalitos-merindades','visibility','none');
    }
} //fin funcion Dolmenes

function activarEremitorios(estado){
    if (estado){
        map.setLayoutProperty('eremitorios-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('eremitorios-merindades','visibility','none');
    }
} //fin funcion Eremitorios

function activarLoberas(estado){
    if (estado){
        map.setLayoutProperty('loberas-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('loberas-merindades','visibility','none');
    }
} //fin funcion Eremitorios

function activarNecropolis(estado){
    if (estado){
        map.setLayoutProperty('necropolis-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('necropolis-merindades','visibility','none');
    }
} //fin funcion Necropolis

function activarParquesNaturales(estado){
    if (estado){
        map.setLayoutProperty('pn-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('pn-merindades','visibility','none');
    }
} //fin funcion Parques Naturales

function activarTemplos(estado){
    if (estado){
        map.setLayoutProperty('templos-merindades','visibility','visible');
    } else { 
        map.setLayoutProperty('templos-merindades','visibility','none');
    }
} //fin funcion Templos





function cambiarCapa(estado){
    if (estado){
        map.setLayoutProperty('mapbox-satellite','visibility','visible');
        //map.setStyle('mapbox://styles/mapbox/satellite-v9');
    } else { 
        map.setLayoutProperty('mapbox-satellite','visibility','none');
        //map.setStyle('mapbox://styles/cronoser/clqa5177w007001o339rt6lzs');
    }
} //fin funcion


