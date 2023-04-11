var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiY3Jvbm9zZXIxIiwiYSI6ImNsY3oxbmM4dTJpdnczcm1zN3Exc3RyMDcifQ.UYUlgPFANSfaK4YmcUDF1g',
    showMarkers: true,
    markerColor: '#138d75',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Loberas',
    subtitle: 'Un paseo por las loberas de la comarca de Las Merindades (Burgos)',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'lobera1',
            alignment: 'right',
            hidden: false,
            title: 'Lobera Monte Santiago',
            image: 'https://www.lasmerindades.com/sites/merindades/files/styles/slide_cabecera/public/lobera.jpg',
            description: 'Dentro del Monumento Natural Monte Santiago y junto a la cáscada mas alta de España. Se trata de una lobera excepcional, ya que uno de los muros da lugar a dos loberas, una en cada extremo. Se trata de la mas grande de una total de cuatro loberas en el mismo enclave.',
            video: src='https://www.youtube.com/watch?v=nDleb4WGeqQ',
            location: {
                center: [-2.9855180842918685, 42.936710456036366],
                zoom: 18,
                pitch: 30,
                bearing: -40
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
            title: 'Lobera de San Miguel',
            image: 'https://3.bp.blogspot.com/-tcD4FfL14cg/WRGIlavOM1I/AAAAAAAAYSw/hL77ACxsDIYtpEaV_CqdDpywFypOxPAzwCKgB/s1600/lobera%2Bsan%2Bmiguel%2B3.jpg',
            description: 'Situada en la misma sierra que la lobera de Monte Santiago pero a unos kilómetros al oeste encontramos los restos no muy bien conservados de una antigua lobera que coge su nombre de la cueva de San Miguel el viejo.',
            location: {
                center: [-3.1722287459473932, 43.01701514669193],
                zoom: 18,
                pitch: 45,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'lobera3',
            alignment: 'left',
            hidden: false,
            title: 'Lobera de la Barrerilla',
            image: 'https://3.bp.blogspot.com/-9VwQP5A_8Zs/Vk-kMftrfQI/AAAAAAAABc8/U71U3IDuggc/s640/lobera%2Bde%2Bla%2Bbarrerilla%2B3.JPG',
            description: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cLnal5LroJQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [-3.2940803, 42.9545148],
                zoom: 17,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'lobera4',
            alignment: 'right',
            hidden: false,
            title: 'Lobera del Toyo',
            image: 'https://3.bp.blogspot.com/-pevNU_W2veA/WUldOFuYtyI/AAAAAAAAYeo/SSchWvg3FgIl9QBgHaQraNv4E_viKf6UwCKgBGAs/s1600/Imagen1.jpg',
            description: 'Situada en el valle del río Jerea como la anterior, apenas visible desde fotos de satélite por la vegetación. Su estado de conservación no es bueno.',
            location: {
                center: [-3.2545765, 42.941628],
                zoom: 18,
                pitch: 15,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'lobera5',
            alignment: 'left',
            hidden: false,
            title: 'Lobera del alto del Caballo',
            image: 'http://1.bp.blogspot.com/-5uugB230T60/VCQCfKQUqbI/AAAAAAAARZc/g0cz6FJf_WM/s1600/14.JPG',
            description: 'completar texto.',
            location: {
                center: [-3.5295970127630483, 43.117573962793244],
                zoom: 18,
                pitch: 60,
                bearing: 240
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'lobera6',
            alignment: 'right',
            hidden: false,
            title: 'Lobera de Castrobarto',
            image: 'http://4.bp.blogspot.com/-nE-1UBQYpcI/Vg5jeFx-cNI/AAAAAAAAUNw/jF97Ln_bH2s/s1600/16.JPG',
            description: 'Lorem ipsum',
            location: {
                center: [-3.3729337, 43.0794536],
                zoom: 18,
                pitch: 30,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'lobera7',
            alignment: 'right',
            hidden: false,
            title: 'Callejo de los Lobos',
            image: 'http://3.bp.blogspot.com/-mwp60Hkd3lQ/Uyq5A-9mPwI/AAAAAAAAPzo/_hRT8ku51kI/s1600/00D.jpg',
            description: 'Situado encima del anticlinal de la Hoya de Huidobro y dentro del Parque Natural Hoces del Alto Ebro y Rudrón.',
            location: {
                center: [-3.6734568030152843, 42.75709347924416],
                zoom: 17,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
