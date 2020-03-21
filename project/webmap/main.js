window.onload = init;

function init(){
    const map=new ol.Map({
        view: new ol.View({
            center: [8136628.114868422,2154453.798327274],
            zoom : 12,
            maxZoom : 20,
            minZoom : 2
            
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })

    map.on('click', function(e){
        console.log(e.coordinate)
    })
    //Vector Layers

    const Hospital= new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/vector/mapsd.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Hospital'
    })

    map.addLayer(Hospital);
}