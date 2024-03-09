var config = {
    style: 'mapbox://styles/cronoser1/clg6hi5hh002101qx9ovtvu3a',
    // style: 'mapbox://styles/mapbox/satellite-v9', //estilo original
    accessToken: 'pk.eyJ1IjoiY3Jvbm9zZXIxIiwiYSI6ImNsY3oxbmM4dTJpdnczcm1zN3Exc3RyMDcifQ.UYUlgPFANSfaK4YmcUDF1g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Loberas',
    subtitle: 'Un paseo por las loberas de la comarca de Las Merindades (Bugos)',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'lobera1',
            alignment: 'left',
            hidden: false,
            title: 'Lobera Monte Santiago',
            image: 'https://www.lasmerindades.com/sites/merindades/files/styles/slide_cabecera/public/lobera.jpg',
            description: 'Dentro del paraje natural Monte Santiago y junto a la cáscada mas alta de España. Se trata de una lobera excepcional, ya que uno de los muros da lugar a dos loberas, una en cada extremo',
            location: {
                center: [-2.9838734, 42.940537],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'lobera2',
            alignment: 'left',
            hidden: false,
            title: 'Lobera2',
            image: 'https://www.lasmerindades.com/sites/merindades/files/styles/slide_cabecera/public/lobera.jpg',
            description: 'Dentro del paraje natural Monte Santiago y junto a la cáscada mas alta de España. Se trata de una lobera excepcional, ya que uno de los muros da lugar a dos loberas, una en cada extremo',
            location: {
                center: [-2.9838734, 45.940537],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
        /*,{
            id: 'lobera2',
            alignment: 'right',
            hidden: false,
            title: 'Lobera de la Barrerilla',
            image: 'https://3.bp.blogspot.com/-9VwQP5A_8Zs/Vk-kMftrfQI/AAAAAAAABc8/U71U3IDuggc/s640/lobera%2Bde%2Bla%2Bbarrerilla%2B3.JPG',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [-3.2940803, 42.9545148],
                zoom: 16,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }*/
    ]
};
