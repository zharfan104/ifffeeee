 var getData = function (props, jenjang, matauji, tahun, status) {
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
         } else if (matauji == "matipa") {
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
 }