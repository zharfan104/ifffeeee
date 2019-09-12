var tahun = "2015";

var maptahunnya = {
    "2015-2016": "1516",
    "2015-2017": "1517",
    "2015-2018": "1518",
    "2015-2019": "1519",
    "2016-2017": "1617",
    "2016-2018": "1618",
    "2016-2019": "1619",
    "2017-2018": "1718",
    "2017-2019": "1719",
    "2018-2019": "1819",
    "2015": "15",
    "2016": "16",
    "2017": "17",
    "2018": "18",
    "2019": "19",


}
var mapstatusnya = {
    "Semua": "gabungan",
    "Swasta": "swas",
    "Negeri": "negri",
}

var mapjenjangnya = {
    "SMA IPA": "ipa",
    "SMA IPS": "ips",
    "SMA SMK": "smk"
}
var mapmataujinya = {
    "Bahasa Indonesia": "indo",
    "Bahasa Inggris": "ing",
    "Matematika": "mat",
    "Fisika": "fis",
    "Sosiologi": "sosio",
    "Geografi": "geo",
    "Ekonomi": "eko",
    "Kompetensi": "komp",
    "Kimia": "kim",
    "Biologi": "bio",
    "Rerata Nilai": "rata"

}
var tanpajenjang = [
    "Fisika",
    "Sosiologi",
    "Geografi",
    "Ekonomi",
    "Kompetensi",
    "Kimia",
    "Biologi",
]
$(".peningkatan").hide()

$(function () {
    $('#peta12').change(function () {
        console.log($(this).prop('checked'))
        if ($(this).prop('checked')) {
            console.log($(this).prop('checked'))
            $(".tahunan").show()
            $(".peningkatan").hide()
            window.tahun = "2015"
        } else {
            window.tahun = "2015-2016"
            $(".peningkatan").show()
            $(".tahunan").hide()
            console.log(tahun)
        }
    })
})
var map = L.map('map').setView([0, 120], 4);
var hasil_fc;

var jenjang = "SMA IPA";
var matauji = "Kimia";
var status = "Negeri";
$('.Peningkatan .dropdown-item').click(function () {
    window.tahun = $(this).text();
    $("#Peningkatan").html($(this).text());


})
$('.Tahun .dropdown-item').click(function () {
    window.tahun = $(this).text();
    $("#Tahun").html($(this).text());

})
$('.Jenjang .dropdown-item').click(function () {



    $("#Jenjang").html($(this).text());
    window.jenjang = $(this).text();
    if (jenjang == "SMA IPS") {
        $('.MataUjiSMK').css('display', 'none');
        $('.MataUjiIPA').css('display', 'none');
        $('.MataUjiIPS').css('display', 'block');
        window.matauji = "Ekonomi";
        $("#IPS").html("Ekonomi");



    } else if (jenjang == "SMK") {
        $('.MataUjiIPS').css('display', 'none');
        $('.MataUjiIPA').css('display', 'none');
        $('.MataUjiSMK').css('display', 'block');
        window.matauji = "Kompetensi";
        $("#SMK").html("Kompetensi");
    } else {
        $('.MataUjiIPA').css('display', 'block');
        $('.MataUjiIPS').css('display', 'none');
        $('.MataUjiSMK').css('display', 'none');
        window.matauji = "Fisika";
        $("#IPA").html("Fisika");
    }

});
$('.MataUjiSMK .dropdown-item').click(function () {
    window.matauji = $(this).text();
    $("#SMK").html($(this).text());
});

$('.MataUjiIPS .dropdown-item').click(function () {
    window.matauji = $(this).text();

    $("#IPS").html($(this).text());
});
$('.MataUjiIPA .dropdown-item').click(function () {
    window.matauji = $(this).text();
    console.log("MataUji : " + $(this).text());
    $("#IPA").html($(this).text());
});



$('.Status .dropdown-item').click(function () {
    console.log("Status : " + $(this).text());
    $("#Status").html($(this).text());
    status = $(this).text();
});
$('.btn-dark').click(function () {
    console.log(jenjang, matauji, status, tahun);
    console.log(mapjenjangnya[jenjang], mapmataujinya[matauji], mapstatusnya[status], maptahunnya[tahun]);

    info.update = myInfoUpdate(jenjang, matauji, tahun, status);
    $('#updated').html('<h5> Generated Map:</h5>')
    $('#hasilpeta').html('<p>' + jenjang + ' ' + matauji + ' (' + status + ') ' + tahun +
        '</p>')
    $('#First').css("display", "none")
    if ($("#peta12").prop('checked')) {

        geojson = L.geoJson(statesData, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

    } else {


        geojson = L.geoJson(statesData, {
            style: style2,
            onEachFeature: onEachFeature
        }).addTo(map);

    }

})

var legend = L.control({
    position: 'bottomleft'
});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 40, 45, 50, 55, 60, 70, 75],
        labels = [],
        from, to;
    labels.push(
        '<h8>Tahunan</h8>');
    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);
var legend2 = L.control({
    position: 'bottomright'
});

legend2.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-20, -15, -11, -7, -3, 1, 4, 7],
        labels = [],
        from, to;
    labels.push(
        '<h8>Selisih</h8>');
    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor2(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend2.addTo(map);


L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
            ', Atribut <a href="https://github.com/superpikar/indonesia-geojson">Indonesia Data</a>',
        id: 'mapbox.light'
    }).addTo(map);


// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

function myInfoUpdate(jenjang, matauji, tahun, status) {
    return function (props) {
        if (props == undefined) {
            props = statesData.features[0].properties;
        }
        var hasil = props;
        props = JSON.parse(JSON.stringify(hasil));
        if ((!($("#peta12").prop('checked'))) || matauji != "Rerata Nilai") {
            if (tanpajenjang.includes(matauji)) {
                var hasil = props[mapstatusnya[status]][mapmataujinya[matauji] + maptahunnya[tahun]]
                console.log(mapmataujinya[matauji] + maptahunnya[tahun])
            } else {
                var hasil = props[mapstatusnya[status]][mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun]]
                console.log(mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun])
            }
        } else {
            var hasil = props[mapstatusnya[status]][mapjenjangnya[jenjang] + maptahunnya[tahun]]

        }
        this._div.innerHTML = '<h4>' + jenjang + '(' + matauji + ')' + '</h4>' + (props ?
            '<b> ' + props.state + ' (' + tahun + ')' + '</b><br/> Nilai: ' + hasil + '' :
            'Hover over the Province');
    };
};


//  info.update = myInfoUpdate("SMA IPA", "All", "2015", "negri");

info.update = myInfoUpdate(jenjang, matauji, tahun, status);

info.addTo(map);


// get color depending on population density value
function getColor(d) {
    console.log(d);
    return d > 75 ? 'white' :
        d > 70 ? '#FFEDA0' :
        d > 65 ? '#FED976' :
        d > 60 ? '#FEB24C' :
        d > 55 ? '#FD8D3C' :
        d > 50 ? '#FC4E2A' :
        d > 45 ? '#E31A1C' :
        d > 40 ? '#BD0026' :
        '#800026';

}

function style(feature) {
    if ((!($("#peta12").prop('checked'))) || matauji != "Rerata Nilai") {
        if (tanpajenjang.includes(matauji)) {
            var hasil_fc = feature.properties[mapstatusnya[status]][mapmataujinya[matauji] + maptahunnya[tahun]]
            console.log(mapmataujinya[matauji] + maptahunnya[tahun])
        } else {
            var hasil_fc = feature.properties[mapstatusnya[status]][mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun]]
            console.log(mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun])
        }
    } else {
        var hasil_fc = feature.properties[mapstatusnya[status]][mapjenjangnya[jenjang] + maptahunnya[tahun]]

    }
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(hasil_fc)
    };
}

function style2(feature) {
    if ((!($("#peta12").prop('checked'))) || matauji != "Rerata Nilai") {
        if (tanpajenjang.includes(matauji)) {
            var hasil_fc = feature.properties[mapstatusnya[status]][mapmataujinya[matauji] + maptahunnya[tahun]]
            console.log(mapmataujinya[matauji] + maptahunnya[tahun])
        } else {
            var hasil_fc = feature.properties[mapstatusnya[status]][mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun]]
            console.log(mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun])
        }
    } else {
        var hasil_fc = feature.properties[mapstatusnya[status]][mapjenjangnya[jenjang] + maptahunnya[tahun]]

    }
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor2(hasil_fc)
    };
}

function getColor2(d) {
    console.log(d);

    return d > 7 ? 'white' :
        d > 4 ? '#FFEDA0' :
        d > 1 ? '#FED976' :
        d > -3 ? '#FEB24C' :
        d > -7 ? '#FD8D3C' :
        d > -11 ? '#FC4E2A' :
        d > -15 ? '#E31A1C' :
        d > -20 ? '#BD0026' :
        '#800026';

}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

//   geojson = L.geoJson(statesData, {
//       style: style,
//       onEachFeature: onEachFeature
//   }).addTo(map);

map.attributionControl.addAttribution(
    'Data Hasil UN &copy; <a href="https://hasilun.puspendik.kemdikbud.go.id">Kemendikbud</a>');