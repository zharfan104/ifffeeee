jenjang = "SMA IPA"
tahun = "2015"
matauji = "Rerata Nilai"
status = "Negeri"
toogle = true;
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
    "SMK": "SMK"
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
if ((!($("#peta12").prop('checked'))) || matauji != "Rerata Nilai") {
    if (tanpajenjang.includes(matauji)) {
        var hasil = statesData.features[0].properties[mapstatusnya[status]][mapmataujinya[matauji] + maptahunnya[tahun]]
        console.log(mapmataujinya[matauji] + maptahunnya[tahun])
    } else {
        var hasil = statesData.features[0].properties[mapstatusnya[status]][mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun]]
        console.log(mapmataujinya[matauji] + mapjenjangnya[jenjang] + maptahunnya[tahun])
    }
} else {
    var hasil = statesData.features[0].properties[mapstatusnya[status]][mapjenjangnya[jenjang] + maptahunnya[tahun]]

}
console.log(statesData.features[0].properties)
console.log(hasil)