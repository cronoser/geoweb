async function enviarPeticion(url) {

  return fetch(url)
      .then(function (response) {
          return response.json()
      })
      .then(function (data) {
          //console.log('Respuesta', data);
          return data;
      }).catch(function (error) {
          console.log('Error', error);
          alert("Error peticion");
          return null;
      });

}


var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
  });

  function addPopupToMap(nombreCapa) {

    map.on('click', nombreCapa, function (e) {

      var text = "";
      //console.info(e);
      for (key in e.features[0].properties) { //aquí contatenamos valores

        text += "<b>" + key + "</b>:" + e.features[0].properties[key] + "<br>";
      }

      popup.setLngLat(e.lngLat)
        .setHTML(text)
        .addTo(map);

    });

    map.on('mouseenter', nombreCapa, function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', nombreCapa, function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }// fin funcion

/*
  map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      'source-layers': ["casasParque_Merindades-2vxw5y"]
    });

    if (!features.length) {
      return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({
      offset: [0, -15]
    })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h2>' + feature.properties.name + '</h2><p>' + feature.properties.phone + '</p><p>' + feature.properties.website + '</p><p>' + feature.properties.wikidata +
        '</p><p>' + feature.properties.wikipedia + '</p>'
      )
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
  });
  }// fin funcion