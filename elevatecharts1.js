zingchart.THEME="classic";
 
var myConfig11 = {
    "layout":"h",
     "globals":{
        "font-family":"Roboto"
    },
    "graphset":[
        {
            "type":"pie",
            "background-color":"#F4F4F4",
            "legend":{
                "background-color":"none",
                "border-width":0,
                "shadow":false,
                "layout":"float",
                "margin":"auto auto 16% auto",
                "marker":{
                    "border-radius":3,
                    "border-width":0
                },
                "item":{
                    "color":"%backgroundcolor"
                }
            },
            "title":{
                "text":"Total number of bytes transferred",
                "background-color":"none",
                "font-size":16,
                "color":"#626262",
                "x":-20,
                "y":80
            },
            "plotarea":{
                "background-color":"#FFFFFF",
                "border-color":"#DFE1E3",
                "border-width":1,
                "border-radius":3,
                "margin":"15% 5%"
            },
            "labels":[
                {
                    "x":"45%",
                    "y":"47%",
                    "width":"10%",
                    "text":"362 TB",
                    "font-size":24
                }    
            ],
            "plot":{
                "size":100,
                "slice":70,
                "margin-right":100,
                "border-width":0,
                "shadow":0,
                "value-box":{
                    "visible":false
                },
                "tooltip":{
                    "text":"%v TB",
                    "shadow":false,
                    "border-radius":3
                }
            },
            "series":[
                {
                    "values":[136],
                    "text":"AT&T",
                    "background-color":"#6CCFDF"
                },
                {
                    "values":[118],
                    "text":"Verizon",
                    "background-color":"#E76D45"
                },
                {
                    "values":[108],
                    "text":"T-Mobile",
                    "background-color":"#55BA72"
                }
            ]
        },
        {
            "type":"pie",
            "background-color":"#F4F4F4",
            "legend":{
                "background-color":"none",
                "border-width":0,
                "shadow":false,
                "layout":"float",
                "margin":"auto auto 16% auto",
                "marker":{
                    "border-radius":3,
                    "border-width":0
                },
                "item":{
                    "color":"%backgroundcolor"
                }
            },
            "title":{
                "text":"Total number of requests",
                "background-color":"none",
                "color":"#626262",
                "font-size":16,
                "x":-52,
                "y":80
            },
            "plotarea":{
                "background-color":"#FFFFFF",
                "border-color":"#DFE1E3",
                "border-width":1,
                "border-radius":3,
                "margin":"15% 5%"
            },
            "labels":[
                {
                    "x":"45%",
                    "y":"47%",
                    "width":"10%",
                    "text":"6.2 BN",
                    "font-size":24
                }    
            ],
            "plot":{
                "size":100,
                "slice":70,
                "border-width":0,
                "shadow":0,
                "value-box":{
                    "visible":false
                },
                 "tooltip":{
                    "text":"%v BN",
                    "shadow":false,
                    "border-radius":3
                }
            },
            "series":[
                {
                    "values":[2.33],
                    "text":"AT&T",
                    "background-color":"#6CCFDF"
                },
                {
                    "values":[2.02],
                    "text":"Verizon",
                    "background-color":"#E76D45"
                },
                {
                    "values":[1.85],
                    "text":"T-Mobile",
                    "background-color":"#55BA72"
                }
            ]
        }
    ]
};
 
zingchart.render({ 
	id : 'myChart11', 
	data : myConfig11, 
	height: 500, 
	width: 725 
});