 var map = L.map('map').setView([0, 120], 4);
 var hasil_fc;
 var mapall = {
     'Bahasa Indonesia': 'indo',
     'Bahasa Inggris': 'ing',
     'Matematika': 'mat',
     'Ekonomi': 'eko',
     'Sosiologi': 'sosio',
     'Rerata Nilai': 'All',
     'Geografi': 'geo',
     'Kompetensi': 'komp',
     'Fisika': 'fis',
     'Kimia': 'kim',
     'Biologi': 'bio',
     'Negeri': 'negri',
     'Swasta': 'swas',
     'Semua': 'gabungan',

 };
 var mapallinv = {
     'indo': 'Bahasa Indonesia',
     'ing': 'Bahasa Inggris',
     'mat': 'Matematika',
     'eko': 'Ekonomi',
     'sosio': 'Sosiologi',
     'All': 'Rerata Nilai',
     'geo': 'Geografi',
     'komp': 'Kompetensi',
     'fis': 'Fisika',
     'kim': 'Kimia',
     'bio': 'Biologi',
     'negri': 'Negeri',
     'swas': 'Swasta',
     'gabungan': 'Semua',

 };


 function getsyn(k) {
     return mapall[k];
 }

 function getsyninv(k) {
     return mapallinv[k];
 }
 var jenjang = "SMA IPA";
 var matauji = "kim";
 var tahun = "2015";
 var status = "negri";
 $('.Jenjang .dropdown-item').click(function () {
     console.log("Jenjang : " + $(this).text());

     $("#Jenjang").html($(this).text());
     window.jenjang = $(this).text();
     if (jenjang == "SMA IPS") {
         console.log("masuk");
         $('.MataUjiSMK').css('display', 'none');
         $('.MataUjiIPA').css('display', 'none');
         $('.MataUjiIPS').css('display', 'block');
         window.matauji = getsyn("Ekonomi");
         $("#IPS").html("Ekonomi");



     } else if (jenjang == "SMK") {
         $('.MataUjiIPS').css('display', 'none');
         $('.MataUjiIPA').css('display', 'none');
         $('.MataUjiSMK').css('display', 'block');
         window.matauji = getsyn("Kompetensi");
         $("#SMK").html("Kompetensi");
     } else {
         $('.MataUjiIPA').css('display', 'block');
         $('.MataUjiIPS').css('display', 'none');
         $('.MataUjiSMK').css('display', 'none');
         window.matauji = getsyn("Fisika");
         $("#IPA").html("Fisika");
     }

 });
 $('.MataUjiSMK .dropdown-item').click(function () {
     window.matauji = getsyn($(this).text());
     console.log("MataUji : " + $(this).text());
     $("#SMK").html($(this).text());
 });

 $('.MataUjiIPS .dropdown-item').click(function () {
     window.matauji = getsyn($(this).text());

     console.log("MataUji : " + $(this).text());
     $("#IPS").html($(this).text());
 });
 $('.MataUjiIPA .dropdown-item').click(function () {
     window.matauji = getsyn($(this).text());
     console.log("MataUji : " + $(this).text());
     $("#IPA").html($(this).text());
 });

 $('.Tahun .dropdown-item').click(function () {
     console.log("Tahun : " + $(this).text());
     $("#Tahun").html($(this).text());
     window.tahun = $(this).text();
 });
 $('.Status .dropdown-item').click(function () {
     console.log("Status : " + $(this).text());
     $("#Status").html($(this).text());
     status = getsyn($(this).text());
 });
 $('.btn-dark').click(function () {
     console.log(jenjang, matauji, status, tahun);
     info.update = myInfoUpdate(jenjang, matauji, tahun, status);
     $('#updated').html('<h5> Generated Map:</h5>')
     $('#hasilpeta').html('<p>' + jenjang + ' ' + getsyninv(matauji) + ' (' + getsyninv(status) + ') ' + tahun +
         '</p>')
     $('#First').css("display", "none")

     geojson = L.geoJson(statesData, {
         style: style,
         onEachFeature: onEachFeature
     }).addTo(map);
 })



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
         if (jenjang == "SMA IPA") {
             //  console.log(props);

             if (matauji == "All") {

                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.ipa15;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa15;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.ipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.ipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.ipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ipa19;
                     }
                 }
             } else if (matauji == "bio") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.bio15;

                     } else if (status == "swas") {
                         hasil = props.swas.bio15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.bio15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.bio16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.bio16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.bio17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.bio17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.bio18;
                     } else if (status == "swas") {
                         hasil = props.swas.bio18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.bio18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.bio19;
                     } else if (status == "swas") {
                         hasil = props.swas.bio19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.bio19;
                     }
                 }

             } else if (matauji == "fis") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.fis15;

                     } else if (status == "swas") {
                         hasil = props.swas.fis15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.fis15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.fis16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.fis16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.fis17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.fis17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.fis18;
                     } else if (status == "swas") {
                         hasil = props.swas.fis18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.fis18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.fis19;
                     } else if (status == "swas") {
                         hasil = props.swas.fis19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.fis19;
                     }
                 }

             } else if (matauji == "kim") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.kim15;

                     } else if (status == "swas") {
                         hasil = props.swas.kim15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.kim15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.kim16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.kim16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.kim17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.kim17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.kim18;
                     } else if (status == "swas") {
                         hasil = props.swas.kim18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.kim18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.kim19;
                     } else if (status == "swas") {
                         hasil = props.swas.kim19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.kim19;
                     }
                 }
             } else if (matauji == "mat") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.matipa15;
                     } else if (status == "swas") {
                         hasil = props.swas.matipa15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.matipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.matipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.matipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.matipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.matipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.matipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matipa19;
                     }
                 }
             } else if (matauji == "ing") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.ingipa15;

                     } else if (status == "swas") {
                         hasil = props.swas.ingipa15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.ingipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.ingipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.ingipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.ingipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.ingipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.ingipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingipa19;
                     }
                 }
             } else if (matauji == "indo") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.indoipa15;

                     } else if (status == "swas") {
                         hasil = props.swas.indoipa15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.indoipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.indoipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.indoipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.indoipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.indoipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.indoipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoipa19;
                     }
                 }
             } else if (matauji == "jum") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jumipa15;

                     } else if (status == "swas") {
                         hasil = props.swas.jumipa15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jumipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jumipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jumipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.jumipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jumipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.jumipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumipa19;
                     }
                 }
             } else if (matauji == "jsp") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jspipa15;

                     } else if (status == "swas") {
                         hasil = props.swas.jspipa15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspipa15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jspipa16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspipa16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jspipa17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspipa17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jspipa18;
                     } else if (status == "swas") {
                         hasil = props.swas.jspipa18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspipa18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jspipa19;
                     } else if (status == "swas") {
                         hasil = props.swas.jspipa19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspipa19;
                     }
                 }
             }

         } else if (jenjang == "SMA IPS") {
             if (matauji == "All") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.ips15;

                     } else if (status == "swas") {
                         hasil = props.swas.ips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.ips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.ips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.ips18;
                     } else if (status == "swas") {
                         hasil = props.swas.ips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.ips19;
                     } else if (status == "swas") {
                         hasil = props.swas.ips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ips19;
                     }
                 }

             } else if (matauji == "eko") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.eko15;

                     } else if (status == "swas") {
                         hasil = props.swas.eko15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.eko15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.eko16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.eko16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.eko17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.eko17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.eko18;
                     } else if (status == "swas") {
                         hasil = props.swas.eko18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.eko18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.eko19;
                     } else if (status == "swas") {
                         hasil = props.swas.eko19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.eko19;
                     }
                 }

             } else if (matauji == "sosio") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.sosio15;

                     } else if (status == "swas") {
                         hasil = props.swas.sosio15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.sosio15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.sosio16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.sosio16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.sosio17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.sosio17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.sosio18;
                     } else if (status == "swas") {
                         hasil = props.swas.sosio18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.sosio18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.sosio19;
                     } else if (status == "swas") {
                         hasil = props.swas.sosio19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.sosio19;
                     }
                 }
             } else if (matauji == "geo") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.geo15;

                     } else if (status == "swas") {
                         hasil = props.swas.geo15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.geo15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.geo16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.geo16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.geo17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.geo17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.geo18;
                     } else if (status == "swas") {
                         hasil = props.swas.geo18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.geo18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.geo19;
                     } else if (status == "swas") {
                         hasil = props.swas.geo19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.geo19;
                     }
                 }
             } else if (matauji == "mat") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.matips15;

                     } else if (status == "swas") {
                         hasil = props.swas.matips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.matips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.matips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.matips18;
                     } else if (status == "swas") {
                         hasil = props.swas.matips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.matips19;
                     } else if (status == "swas") {
                         hasil = props.swas.matips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matips19;
                     }
                 }
             } else if (matauji == "ing") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.ingips15;

                     } else if (status == "swas") {
                         hasil = props.swas.ingips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.ingips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.ingips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.ingips18;
                     } else if (status == "swas") {
                         hasil = props.swas.ingips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.ingips19;
                     } else if (status == "swas") {
                         hasil = props.swas.ingips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingips19;
                     }
                 }
             } else if (matauji == "indo") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.indoips15;

                     } else if (status == "swas") {
                         hasil = props.swas.indoips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.indoips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.indoips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.indoips18;
                     } else if (status == "swas") {
                         hasil = props.swas.indoips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.indoips19;
                     } else if (status == "swas") {
                         hasil = props.swas.indoips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoips19;
                     }
                 }
             } else if (matauji == "jum") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jumips15;

                     } else if (status == "swas") {
                         hasil = props.swas.jumips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jumips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jumips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jumips18;
                     } else if (status == "swas") {
                         hasil = props.swas.jumips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jumips19;
                     } else if (status == "swas") {
                         hasil = props.swas.jumips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumips19;
                     }
                 }
             } else if (matauji == "jsp") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jspips15;

                     } else if (status == "swas") {
                         hasil = props.swas.jspips15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspips15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jspips16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspips16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jspips17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspips17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jspips18;
                     } else if (status == "swas") {
                         hasil = props.swas.jspips18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspips18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jspips19;
                     } else if (status == "swas") {
                         hasil = props.swas.jspips19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspips19;
                     }
                 }
             }

         } else if (jenjang == "SMK") {
             if (matauji == "All") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.SMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.SMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.SMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.SMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.SMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.SMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.SMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.SMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.SMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.SMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.SMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.SMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.SMK19;
                     }
                 }
             } else if (matauji == "komp") {
                 if (tahun == "2015") {

                     if (status == "negri") {

                         hasil = props.negri.komp15;
                         console.log(hasil)

                     } else if (status == "swas") {
                         hasil = props.swas.komp15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.komp15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.komp16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.komp16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.komp17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.komp17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.komp18;
                     } else if (status == "swas") {
                         hasil = props.swas.komp18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.komp18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.komp19;
                     } else if (status == "swas") {
                         hasil = props.swas.komp19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.komp19;
                     }
                 }
             } else if (matauji == "mat") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.matSMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.matSMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matSMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.matSMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matSMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.matSMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matSMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.matSMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.matSMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matSMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.matSMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.matSMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.matSMK19;
                     }
                 }
             } else if (matauji == "ing") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.ingSMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.ingSMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingSMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.ingSMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingSMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.ingSMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingSMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.ingSMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.ingSMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingSMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.ingSMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.ingSMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.ingSMK19;
                     }
                 }
             } else if (matauji == "indo") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.indoSMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.indoSMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoSMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.indoSMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoSMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.indoSMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoSMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.indoSMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.indoSMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoSMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.indoSMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.indoSMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.indoSMK19;
                     }
                 }
             } else if (matauji == "jum") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jumSMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.jumSMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumSMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jumSMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumSMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jumSMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumSMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jumSMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.jumSMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumSMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jumSMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.jumSMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jumSMK19;
                     }
                 }
             } else if (matauji == "jsp") {
                 if (tahun == "2015") {
                     if (status == "negri") {
                         hasil = props.negri.jspSMK15;

                     } else if (status == "swas") {
                         hasil = props.swas.jspSMK15;

                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspSMK15
                     }
                 } else if (tahun == "2016") {
                     if (status == "negri") {
                         hasil = props.negri.jspSMK16;
                     } else if (status == "swas") {
                         hasil = props.swas.ipa16;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspSMK16;
                     }

                 } else if (tahun == "2017") {
                     if (status == "negri") {
                         hasil = props.negri.ipa17;
                     } else if (status == "swas") {
                         hasil = props.swas.jspSMK17;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspSMK17;
                     }

                 } else if (tahun == "2018") {
                     if (status == "negri") {
                         hasil = props.negri.jspSMK18;
                     } else if (status == "swas") {
                         hasil = props.swas.jspSMK18;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspSMK18;
                     }
                 } else if (tahun == "2019") {
                     if (status == "negri") {
                         hasil = props.negri.jspSMK19;
                     } else if (status == "swas") {
                         hasil = props.swas.jspSMK19;
                     } else if (status == "gabungan") {
                         hasil = props.gabungan.jspSMK19;
                     }
                 }
             }
         }

         this._div.innerHTML = '<h4>' + jenjang + '(' + getsyninv(matauji) + ')' + '</h4>' + (props ?
             '<b> ' + props.state + ' (' + tahun + ')' + '</b><br/> Nilai: ' + hasil + '' :
             'Hover over the Province');
         console.log(hasil)
     };

 };


 //  info.update = myInfoUpdate("SMA IPA", "All", "2015", "negri");

 info.update = myInfoUpdate(jenjang, matauji, tahun, status);
 console.log(jenjang, matauji, tahun, status)

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
     if (jenjang == "SMA IPA") {
         //  console.log(feature.properties);

         if (matauji == "All") {

             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa15;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa15;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ipa19;
                 }
             }
         } else if (matauji == "bio") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.bio15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.bio15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.bio15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.bio16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.bio16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.bio17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.bio17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.bio18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.bio18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.bio18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.bio19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.bio19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.bio19;
                 }
             }

         } else if (matauji == "fis") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.fis15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.fis15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.fis15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.fis16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.fis16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.fis17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.fis17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.fis18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.fis18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.fis18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.fis19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.fis19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.fis19;
                 }
             }

         } else if (matauji == "kim") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.kim15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.kim15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.kim15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.kim16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.kim16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.kim17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.kim17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.kim18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.kim18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.kim18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.kim19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.kim19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.kim19;
                 }
             }
         } else if (matauji == "mat") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matipa15;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matipa15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matipa19;
                 }
             }
         } else if (matauji == "ing") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingipa15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingipa15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingipa19;
                 }
             }
         } else if (matauji == "indo") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoipa15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoipa15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoipa19;
                 }
             }
         } else if (matauji == "jum") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumipa15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumipa15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumipa19;
                 }
             }
         } else if (matauji == "jsp") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspipa15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspipa15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspipa15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspipa16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspipa16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspipa17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspipa17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspipa18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspipa18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspipa18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspipa19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspipa19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspipa19;
                 }
             }
         }

     } else if (jenjang == "SMA IPS") {
         if (matauji == "All") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ips19;
                 }
             }

         } else if (matauji == "eko") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.eko15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.eko15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.eko15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.eko16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.eko16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.eko17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.eko17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.eko18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.eko18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.eko18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.eko19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.eko19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.eko19;
                 }
             }

         } else if (matauji == "sosio") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.sosio15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.sosio15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.sosio15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.sosio16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.sosio16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.sosio17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.sosio17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.sosio18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.sosio18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.sosio18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.sosio19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.sosio19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.sosio19;
                 }
             }
         } else if (matauji == "geo") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.geo15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.geo15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.geo15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.geo16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.geo16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.geo17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.geo17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.geo18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.geo18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.geo18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.geo19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.geo19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.geo19;
                 }
             }
         } else if (matauji == "mat") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matips19;
                 }
             }
         } else if (matauji == "ing") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingips19;
                 }
             }
         } else if (matauji == "indo") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoips19;
                 }
             }
         } else if (matauji == "jum") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumips19;
                 }
             }
         } else if (matauji == "jsp") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspips15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspips15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspips15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspips16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspips16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspips17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspips17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspips18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspips18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspips18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspips19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspips19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspips19;
                 }
             }
         }

     } else if (jenjang == "SMK") {
         if (matauji == "All") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.SMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.SMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.SMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.SMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.SMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.SMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.SMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.SMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.SMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.SMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.SMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.SMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.SMK19;
                 }
             }
         } else if (matauji == "komp") {
             if (tahun == "2015") {

                 if (status == "negri") {

                     hasil_fc = feature.properties.negri.komp15;
                     console.log(hasil_fc)

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.komp15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.komp15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.komp16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.komp16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.komp17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.komp17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.komp18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.komp18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.komp18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.komp19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.komp19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.komp19;
                 }
             }
         } else if (matauji == "mat") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matSMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matSMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matSMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matSMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matSMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matSMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matSMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matSMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matSMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matSMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.matSMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.matSMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.matSMK19;
                 }
             }
         } else if (matauji == "ing") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingSMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingSMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingSMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingSMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingSMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingSMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingSMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingSMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingSMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingSMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ingSMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ingSMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.ingSMK19;
                 }
             }
         } else if (matauji == "indo") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoSMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoSMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoSMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoSMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoSMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoSMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoSMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoSMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoSMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoSMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.indoSMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.indoSMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.indoSMK19;
                 }
             }
         } else if (matauji == "jum") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumSMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumSMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumSMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumSMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumSMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumSMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumSMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumSMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumSMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumSMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jumSMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jumSMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jumSMK19;
                 }
             }
         } else if (matauji == "jsp") {
             if (tahun == "2015") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspSMK15;

                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspSMK15;

                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspSMK15
                 }
             } else if (tahun == "2016") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspSMK16;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.ipa16;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspSMK16;
                 }

             } else if (tahun == "2017") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.ipa17;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspSMK17;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspSMK17;
                 }

             } else if (tahun == "2018") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspSMK18;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspSMK18;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspSMK18;
                 }
             } else if (tahun == "2019") {
                 if (status == "negri") {
                     hasil_fc = feature.properties.negri.jspSMK19;
                 } else if (status == "swas") {
                     hasil_fc = feature.properties.swas.jspSMK19;
                 } else if (status == "gabungan") {
                     hasil_fc = feature.properties.gabungan.jspSMK19;
                 }
             }
         }
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


 var legend = L.control({
     position: 'bottomright'
 });

 legend.onAdd = function (map) {

     var div = L.DomUtil.create('div', 'info legend'),
         grades = [0, 40, 45, 50, 55, 60, 70, 75],
         labels = [],
         from, to;

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