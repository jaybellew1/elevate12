zingchart.THEME="classic";
 
var myChart11 = {
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
        }
       
    ]
};


 
zingchart.THEME="classic";

var myChart12 = {
   "layout":"h",
    "globals":{
       "font-family":"Roboto"
   },
   "graphset":[
       {
           "type":"pie",
           "background-color":"none",
           "legend":{
               "visible":false,
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
               "visible":false,
               "text":"Total number of Yo",
               "background-color":"none",
               "font-size":16,
               "color":"#626262",
               "x":-20,
               "y":80
           },
           "plotarea":{
               "background-color":"none",
               "border-color":"none",
               "border-width":0,
               "border-radius":0,
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
               "size":'100%',
               "slice":'80%',
               "margin-right":0,
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
       }
      
   ]
};