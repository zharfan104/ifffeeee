var provinsi = ['DKI JAKARTA', 'JAWA BARAT', 'JAWA TENGAH', 'DI YOGYAKARTA',
    'JAWA TIMUR', 'ACEH', 'SUMATERA UTARA', 'SUMATERA BARAT', 'RIAU',
    'JAMBI', 'SUMATERA SELATAN', 'LAMPUNG', 'KALIMANTAN BARAT',
    'KALIMANTAN TENGAH', 'KALIMANTAN SELATAN', 'KALIMANTAN TIMUR',
    'SULAWESI UTARA', 'SULAWESI TENGAH', 'SULAWESI SELATAN',
    'SULAWESI TENGGARA', 'MALUKU', 'BALI', 'NUSA TENGGARA BARAT',
    'NUSA TENGGARA TIMUR', 'PAPUA', 'BENGKULU', 'MALUKU UTARA',
    'BANGKA BELITUNG', 'GORONTALO', 'BANTEN', 'KEPULAUAN RIAU',
    'SULAWESI BARAT', 'PAPUA BARAT', 'KALIMANTAN UTARA'
]
var mapprov = new Object();
for (i = 0; i < provinsi.length; i++) {
    mapprov[provinsi[i]] = i;
}
var mapstatus = {
    "Semua": "gab",
    "Negeri": "negri",
    "Swasta": "swas"
}
var maptahun = {
    "2015": "15",
    "2016": "16",
    "2017": "17",
    "2018": "18",
    "2019": "19",

}
var mapjenjang = {
    "SMA IPS": "ips",
    "SMA IPA": "ipa",
    "SMK": "smk",
}
console.log(mapjenjang)
provinsi.forEach((val) => {
    console.log(val)
    $('#provinsinya').append('<option value="' + val + '" selected="selected">' + val + '</option>');
})
$('#lingkup').hide();
$('#tablesekolahSMK').hide();
$('#tablesekolahIPA').hide();
$('#tablesekolahIPS').hide();
$('#tableSMKProv').hide();
$('#tableIPSProv').hide();

$('#provinsiapa').hide();
$('#tablekabIPA').hide();
$('#tablekabIPS').hide();
$('#tablekabSMK').hide();



var semuatahun = "Semua Tahun"
$("#data_ditampilkan").change(function () {
    var selectedCountry = $(this).children("option:selected").val();

    if (selectedCountry == "Provinsi") {
        $(".semuatahun").show();


        $('#lingkup').hide();
        $('#provinsiapa').hide();

    } else if (selectedCountry == "Kab/Kota") {
        $(".semuatahun").show();

        $('#lingkup').show();
        $('#provinsiapa').hide();
        if ($('#lingkupnya').children("option:selected").val() == "Provinsi") {
            $('#provinsiapa').show();
        }
        $("#lingkupnya").change(function () {
            if ($(this).children("option:selected").val() == "Provinsi") {

                $('#provinsiapa').show();

            } else {
                $('#provinsiapa').hide();

            }
        })

    } else if (selectedCountry == "Sekolah") {
        $(".semuatahun").hide();
        $('#tahun').val("2015")
        $('#lingkup').hide();
        $('#provinsiapa').show();

    }
});
var $table = $('.table');
var $tablekab = $('.tablekab');

$(function () {
    $('#submit').click(function () {
        $('#tablesekolahSMK').hide();
        $('#tablesekolahIPA').hide();
        $('#tablesekolahIPS').hide();
        $('#tableSMKProv').hide();
        $('#tableIPSProv').hide();
        $('#tableIPAProv').hide();
        $('#tablekabIPA').hide();
        $('#tablekabIPS').hide();
        $('#tablekabSMK').hide();
        var jenjang = $('#jenjang').children("option:selected").val();
        var tahun = $('#tahun').children("option:selected").val();
        var status = $('#status').children("option:selected").val();
        var data_ditampilkan = $('#data_ditampilkan').children("option:selected").val();
        var lingkupnya = $('#lingkupnya').children("option:selected").val();
        var provinsinya = $('#provinsinya').children("option:selected").val();
        $('.keterangan').html('<h6>' + jenjang + '(' + tahun + ')' + ' ' + ' ' + data_ditampilkan + '</h6>')
        $table.bootstrapTable('refreshOptions', {
            filterOptions: {
                filterAlgorithm: "or"
            }
        })

        if ($('#tahun').children("option:selected").val() != "Semua") {
            var tahun = $('#tahun').children("option:selected").val()
            var tahunint = parseInt(tahun)
            $table.bootstrapTable('filterBy', {
                "Tahun": [tahun, tahunint]

            })
        }
        $tablekab.bootstrapTable('refreshOptions', {
            filterOptions: {
                filterAlgorithm: "or"
            }
        })

        if ($('#lingkupnya').children("option:selected").val() == "Provinsi") {
            var provinsi = $('#provinsinya').children("option:selected").val()
            $tablekab.bootstrapTable('filterBy', {
                "Provinsi": provinsi

            })
        }


        if ($('#data_ditampilkan').children("option:selected").val() == "Provinsi") {
            if ($('#jenjang').children("option:selected").val() == "SMA IPA") {

                $('#tableIPAProv').show();
                if ($('#status').children("option:selected").val() == "Semua") {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ipa.json'
                    })
                } else if (($('#status').children("option:selected").val() == "Negeri")) {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ipanegri.json'
                    })
                } else {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ipaswas.json'
                    })
                }
            } else if ($('#jenjang').children("option:selected").val() == "SMA IPS") {
                $('#tableIPSProv').show();

                if ($('#status').children("option:selected").val() == "Semua") {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ips.json'
                    })
                } else if (($('#status').children("option:selected").val() == "Negeri")) {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ipsnegri.json'
                    })
                } else {
                    $table.bootstrapTable('refresh', {
                        url: 'JSON/ipsswas.json'
                    })
                }
            } else if ($('#jenjang').children("option:selected").val() == "SMK") {
                $('#tableSMKProv').show();

                $table.bootstrapTable('refresh', {
                    url: 'JSON/SMK.json'
                })

            }
        } else if ($('#data_ditampilkan').children("option:selected").val() == "Kab/Kota") {
            var no_jenjang = mapjenjang[($('#jenjang').children("option:selected").val())]
            var no_status = mapstatus[($('#status').children("option:selected").val())]
            var namafile = no_jenjang + "_" + no_status;
            console.log(namafile)
            $('.table').bootstrapTable('refresh', {
                url: 'JSON/kab/' + namafile + '.json'
            })
            if (no_jenjang == "ipa") {
                $('#tablekabIPA').show();
                console.log("asd")

            } else if (no_jenjang == 'ips') {
                $('#tablekabIPS').show();

            } else {
                $('#tablekabSMK').show();
            }

        } else if ($('#data_ditampilkan').children("option:selected").val() == "Sekolah") {
            var no_prov = mapprov[($('#provinsinya').children("option:selected").val())] + 1
            var no_tahun = maptahun[($('#tahun').children("option:selected").val())]
            var no_jenjang = mapjenjang[($('#jenjang').children("option:selected").val())]
            var namafile = no_jenjang + no_tahun + "_" + no_prov;
            console.log(namafile)

            $('.table').bootstrapTable('refresh', {
                url: 'JSON/sekolah/' + namafile + '.json'
            })

            $('#provinsiapa').show();

            if ($('#jenjang').children("option:selected").val() == "SMA IPA") {

                $('#tablesekolahIPA').show();
            } else if ($('#jenjang').children("option:selected").val() == "SMA IPS") {
                $('#tablesekolahIPS').show();

            } else if ($('#jenjang').children("option:selected").val() == "SMK") {
                $('#tablesekolahSMK').show();
            }

        }

    })
})