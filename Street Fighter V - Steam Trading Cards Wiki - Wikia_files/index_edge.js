
(function(compId){var _=null,y=true,n=false,zy='scaleY',x10='rgba(255,255,255,0.00)',x2='5.0.0',x5='rgba(0,0,0,0)',e13='${text02}',zx='scaleX',x4='both',e23='${text05}',e16='${text04}',e19='${job02}',oz='-moz-transform-origin',x9='solid',m='rect',x8='rgba(114,104,89,1.00)',e17='${text03}',e34='${_300x250-visu}',i='none',x25='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e33='${sengager}',x3='6.0.0.400',e15='${filet-02}',e30='${tagline02}',o='opacity',lf='left',e32='${fader}',oo='-o-transform-origin',x1='6.0.0',x11='rgba(255,255,255,1.00)',e28='${tagline01}',e27='${tagline03}',e26='${filet-01}',e24='${text01}',cl='clip',e22='${job04}',x21='@@0@@% @@1@@%',e14='${Logo}',om='-ms-transform-origin',e31='${job03}',on='msTransformOrigin',ot='transform-origin',x12='rgba(255,255,255,1)',tp='top',or='-webkit-transform-origin',g='image',xc='rgba(0,0,0,1)',e18='${job01}',e29='${Intro}',e20='${tagline}';var g7='300x250-spritesheet.png',g6='300x250-visu.jpg';var im='',aud='',vid='',js='',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:x4,rI:n,cn:{dom:[{id:'_300x250-visu',t:g,r:['0px','0px','330px','250px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'Intro',t:'group',r:['51','52','413','273','auto','auto'],o:'1',c:[{id:'text01',t:g,r:['0px','0px','413px','273px','auto','auto'],cl:'rect(0px 200px 23px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'text02',t:g,r:['0px','0px','413px','273px','auto','auto'],cl:'rect(27px 200px 53px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'text03',t:g,r:['0px','0px','413px','273px','auto','auto'],cl:'rect(53px 200px 88px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'text04',t:g,r:['0px','0px','413px','273px','auto','auto'],cl:'rect(88px 200px 112px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'text05',t:g,r:['0px','0px','413px','273px','auto','auto'],cl:'rect(116px 200px 140px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]}]},{id:'tagline',t:'group',r:['121px','-135px','413','273','auto','auto'],o:'1',c:[{id:'tagline01',t:g,r:['-40px','42px','413px','273px','auto','auto'],cl:'rect(140px 143px 157px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'tagline02',t:g,r:['-40px','43px','413px','273px','auto','auto'],cl:'rect(158px 143px 181px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'tagline03',t:g,r:['-40px','43px','413px','273px','auto','auto'],cl:'rect(182px 143px 206px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]}]},{id:'sengager',t:g,r:['80px','-149px','413px','273px','auto','auto'],cl:'rect(208px 143px 273px 0px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'job01',t:g,r:['-163px','95px','413px','273px','auto','auto'],cl:'rect(0px 413px 65px 216px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'job02',t:g,r:['-163px','28px','413px','273px','auto','auto'],cl:'rect(65px 413px 135px 216px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'job03',t:g,r:['-163px','-42px','413px','273px','auto','auto'],cl:'rect(136px 413px 204px 216px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'job04',t:g,r:['-163px','-113px','413px','273px','auto','auto'],cl:'rect(207px 413px 273px 216px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'Logo',t:g,r:['-30px','-2px','413px','273px','auto','auto'],cl:'rect(140px 218px 196px 141px)',o:'0',f:[x5,im+g7,'0px','0px'],tf:[[],[],[],['0.6','0.6']]},{id:'fader',t:m,r:['0px','0px','298px','248px','auto','auto'],o:'1',f:[x8],s:[1,"rgb(0, 0, 0)",x9]},{id:'border',t:m,r:['0px','0px','298px','248px','auto','auto'],cu:'pointer',f:[x10],s:[1,xc,x9]},{id:'filet-01',t:m,r:['81px','89px','140px','1px','auto','auto'],o:'0.5',f:[x11],s:[1,"rgb(0, 0, 0)",i],tf:[[],[],[],['0']]},{id:'filet-02',t:m,r:['81px','167px','140px','1px','auto','auto'],o:'0.5',f:[x11],s:[1,"rgb(0, 0, 0)",i],tf:[[],[],[],['0']]}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'300px','250px'],overflow:'hidden',f:[x12]}}},tt:{d:16250,a:y,data:[["eid48",o,2500,750,"easeOutQuad",e13,'0','1'],["eid601",lf,7000,0,"easeOutQuad",e14,'-30px','-30px'],["eid1234",tp,8750,0,"linear",e15,'167px','167px'],["eid66",o,3000,750,"easeOutQuad",e16,'0','1'],["eid53",zy,2750,750,"easeOutQuad",e17,'0.6','1'],["eid1932",zx,8250,750,"easeOutQuad",e18,'0.6','1'],["eid2132",zx,10000,250,"easeOutQuad",e18,'1','1.2'],["eid2053",lf,10750,0,"easeOutQuad",e19,'-163px','-163px'],["eid2988",zy,15750,500,"easeOutQuad",e20,'1','1.2'],["eid1935",or,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid4236",oz,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid4237",om,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid4238",on,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid4239",oo,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid4240",ot,9000,0,"easeOutQuad",e18,[76,10],[76,10],{vt:x21}],["eid2410",lf,14250,0,"easeOutQuad",e22,'-163px','-163px'],["eid72",zy,3250,750,"easeOutQuad",e23,'0.6','1'],["eid2058",tp,10750,0,"easeOutQuad",e19,'28px','28px'],["eid2402",zy,13500,750,"easeOutQuad",e22,'0.6','1'],["eid2403",zy,15250,250,"easeOutQuad",e22,'1','1.2'],["eid44",cl,3000,0,"easeOutQuad",e24,[0,200,23,0],[0,200,23,0],{vt:x25}],["eid1241",o,8250,500,"linear",e26,'0','0.5'],["eid1242",o,15250,250,"easeOutQuad",e26,'0.5','0'],["eid484",zx,6000,750,"easeOutQuad",e27,'0.6','1'],["eid435",zx,5500,750,"easeOutQuad",e28,'0.6','1'],["eid205",o,5500,250,"easeOutQuad",e29,'1','0'],["eid60",cl,3500,0,"easeOutQuad",e17,[53,200,88,0],[53,200,88,0],{vt:x25}],["eid1936",cl,9000,0,"easeOutQuad",e18,[0,413,65,216],[0,413,65,216],{vt:x25}],["eid478",tp,6500,0,"easeOutQuad",e30,'42px','42px'],["eid487",lf,6750,0,"easeOutQuad",e27,'-40px','-40px'],["eid391",or,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid4241",oz,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid4242",om,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid4243",on,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid4244",oo,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid4245",ot,6250,0,"easeOutQuad",e28,[17,74],[17,74],{vt:x21}],["eid476",o,5750,750,"easeOutQuad",e30,'0','1'],["eid2255",zy,11750,750,"easeOutQuad",e31,'0.6','1'],["eid2256",zy,13500,250,"easeOutQuad",e31,'1','1.2'],["eid2260",o,11750,750,"easeOutQuad",e31,'0','1'],["eid2261",o,13500,250,"easeOutQuad",e31,'1','0'],["eid2412",cl,14250,0,"easeOutQuad",e22,[207,413,273,216],[207,413,273,216],{vt:x25}],["eid14",o,0,2000,"linear",e32,'1','0'],["eid537",zy,6250,750,"easeOutQuad",e14,'0.6','1'],["eid32",zx,2250,750,"easeOutQuad",e24,'0.6','1'],["eid483",tp,6750,0,"easeOutQuad",e27,'42px','42px'],["eid74",o,3250,750,"easeOutQuad",e23,'0','1'],["eid1598",or,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid4246",oz,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid4247",om,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid4248",on,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid4249",oo,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid4250",ot,7000,0,"easeOutQuad",e14,[44,45],[44,45],{vt:x21}],["eid3443",tp,16250,0,"easeOutQuad",e33,'-149px','-149px'],["eid436",zy,5500,750,"easeOutQuad",e28,'0.6','1'],["eid78",cl,4000,0,"easeOutQuad",e23,[116,200,140,0],[116,200,140,0],{vt:x25}],["eid257",or,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid4251",oz,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid4252",om,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid4253",on,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid4254",oo,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid4255",ot,5500,0,"easeOutQuad",e29,[24,25],[24,25],{vt:x21}],["eid3139",zx,15750,500,"easeOutQuad",e33,'0.6','1'],["eid3141",o,15750,500,"easeOutQuad",e33,'0','1'],["eid71",or,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid4256",oz,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid4257",om,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid4258",on,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid4259",oo,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid4260",ot,4000,0,"linear",e23,[24,26],[24,26],{vt:x21}],["eid2056",cl,10750,0,"easeOutQuad",e19,[65,413,135,216],[65,413,135,216],{vt:x25}],["eid2987",zx,15750,500,"easeOutQuad",e20,'1','1.2'],["eid54",zx,2750,750,"easeOutQuad",e17,'0.6','1'],["eid481",or,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid4261",oz,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid4262",om,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid4263",on,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid4264",oo,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid4265",ot,6750,0,"easeOutQuad",e27,[17,74],[17,74],{vt:x21}],["eid2414",or,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid4266",oz,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid4267",om,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid4268",on,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid4269",oo,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid4270",ot,14250,0,"easeOutQuad",e22,[76,86],[76,86],{vt:x21}],["eid2405",zx,13500,750,"easeOutQuad",e22,'0.6','1'],["eid2406",zx,15250,250,"easeOutQuad",e22,'1','1.2'],["eid2559",tp,14250,0,"easeOutQuad",e22,'-113px','-113px'],["eid358",lf,6250,0,"easeOutQuad",e28,'-40px','-40px'],["eid540",o,6250,750,"easeOutQuad",e14,'0','1'],["eid33",zy,2250,750,"easeOutQuad",e24,'0.6','1'],["eid2415",cl,12500,0,"easeOutQuad",e31,[136,413,204,216],[136,413,204,216],{vt:x25}],["eid2488",or,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid4271",oz,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid4272",om,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid4273",on,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid4274",oo,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid4275",ot,12500,0,"easeOutQuad",e31,[76,61],[76,61],{vt:x21}],["eid472",or,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid4276",oz,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid4277",om,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid4278",on,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid4279",oo,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid4280",ot,6500,0,"easeOutQuad",e30,[17,74],[17,74],{vt:x21}],["eid3",or,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid4281",oz,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid4282",om,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid4283",on,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid4284",oo,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid4285",ot,3000,0,"linear",e24,[24,26],[24,26],{vt:x21}],["eid434",o,5500,750,"easeOutQuad",e28,'0','1'],["eid55",o,2750,750,"easeOutQuad",e17,'0','1'],["eid2059",or,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid4286",oz,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid4287",om,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid4288",on,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid4289",oo,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid4290",ot,10750,0,"easeOutQuad",e19,[76,35],[76,35],{vt:x21}],["eid2050",zx,10000,750,"easeOutQuad",e19,'0.6','1'],["eid2066",zx,11750,250,"easeOutQuad",e19,'1','1.2'],["eid18",lf,0,3000,"linear",e34,'0px','-30px'],["eid65",zx,3000,750,"easeOutQuad",e16,'0.6','1'],["eid2048",zy,10000,750,"easeOutQuad",e19,'0.6','1'],["eid2067",zy,11750,250,"easeOutQuad",e19,'1','1.2'],["eid2051",o,10000,750,"easeOutQuad",e19,'0','1'],["eid2061",o,11750,250,"easeOutQuad",e19,'1','0'],["eid2407",o,13500,750,"easeOutQuad",e22,'0','1'],["eid2408",o,15250,250,"easeOutQuad",e22,'1','0'],["eid1246",tp,8250,500,"easeOutQuad",e20,'-135px','-167px'],["eid2841",tp,15250,500,"easeOutQuad",e20,'-167px','-135px'],["eid3140",zy,15750,500,"easeOutQuad",e33,'0.6','1'],["eid2263",lf,12500,0,"easeOutQuad",e31,'-163px','-163px'],["eid550",cl,7000,0,"easeOutQuad",e14,[140,218,196,141],[140,218,196,141],{vt:x25}],["eid2417",tp,12500,0,"easeOutQuad",e31,'-42px','-42px'],["eid480",cl,6500,0,"easeOutQuad",e30,[158,143,181,0],[158,143,181,0],{vt:x25}],["eid1243",tp,8250,500,"easeOutQuad",e14,'-2px','39px'],["eid2913",tp,15250,500,"easeOutQuad",e14,'39px','-2px'],["eid1934",o,8250,750,"easeOutQuad",e18,'0','1'],["eid2131",o,10000,250,"easeOutQuad",e18,'1','0'],["eid1933",zy,8250,750,"easeOutQuad",e18,'0.6','1'],["eid2133",zy,10000,250,"easeOutQuad",e18,'1','1.2'],["eid293",zy,5500,250,"easeOutQuad",e29,'1','1.2'],["eid482",zy,6000,750,"easeOutQuad",e27,'0.6','1'],["eid1702",lf,9000,0,"easeOutQuad",e18,'-163px','-163px'],["eid70",cl,3750,0,"easeOutQuad",e16,[88,200,112,0],[88,200,112,0],{vt:x25}],["eid51",cl,3250,0,"easeOutQuad",e13,[27,200,53,0],[27,200,53,0],{vt:x25}],["eid2258",zx,11750,750,"easeOutQuad",e31,'0.6','1'],["eid2259",zx,13500,250,"easeOutQuad",e31,'1','1.2'],["eid3594",or,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid4291",oz,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid4292",om,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid4293",on,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid4294",oo,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid4295",ot,15750,0,"easeOutQuad",e20,[7,81],[7,81],{vt:x21}],["eid475",zx,5750,750,"easeOutQuad",e30,'0.6','1'],["eid1237",zx,8250,500,"linear",e15,'0','1'],["eid1238",zx,15250,250,"easeOutQuad",e15,'1','0'],["eid485",o,6000,750,"easeOutQuad",e27,'0','1'],["eid1235",o,8250,500,"linear",e15,'0','0.5'],["eid1236",o,15250,250,"easeOutQuad",e15,'0.5','0'],["eid73",zx,3250,750,"easeOutQuad",e23,'0.6','1'],["eid46",zy,2500,750,"easeOutQuad",e13,'0.6','1'],["eid47",zx,2500,750,"easeOutQuad",e13,'0.6','1'],["eid63",or,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid4296",oz,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid4297",om,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid4298",on,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid4299",oo,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid4300",ot,3750,0,"linear",e16,[24,26],[24,26],{vt:x21}],["eid357",tp,6250,0,"easeOutQuad",e28,'42px','42px'],["eid52",or,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid4301",oz,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid4302",om,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid4303",on,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid4304",oo,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid4305",ot,3500,0,"linear",e17,[24,26],[24,26],{vt:x21}],["eid1705",tp,9000,0,"easeOutQuad",e18,'95px','95px'],["eid31",o,2250,750,"easeOutQuad",e24,'0','1'],["eid2989",o,15750,500,"easeOutQuad",e20,'1','0'],["eid3755",cl,6250,0,"easeOutQuad",e28,[140,143,157,0],[140,143,157,0],{vt:x25}],["eid1239",zx,8250,500,"linear",e26,'0','1'],["eid1240",zx,15250,250,"easeOutQuad",e26,'1','0'],["eid539",zx,6250,750,"easeOutQuad",e14,'0.6','1'],["eid3217",or,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid4306",oz,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid4307",om,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid4308",on,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid4309",oo,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid4310",ot,16250,0,"easeOutQuad",e33,[17,89],[17,89],{vt:x21}],["eid45",or,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid4311",oz,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid4312",om,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid4313",on,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid4314",oo,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid4315",ot,3250,0,"linear",e13,[24,26],[24,26],{vt:x21}],["eid292",zx,5500,250,"easeOutQuad",e29,'1','1.2'],["eid473",zy,5750,750,"easeOutQuad",e30,'0.6','1'],["eid477",lf,6500,0,"easeOutQuad",e30,'-40px','-40px'],["eid64",zy,3000,750,"easeOutQuad",e16,'0.6','1'],["eid490",cl,6750,0,"easeOutQuad",e27,[182,143,206,0],[182,143,206,0],{vt:x25}]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-283530558");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${border}","click",function(sym,e){window.open(window.clickTag,'_blank');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-283530558");