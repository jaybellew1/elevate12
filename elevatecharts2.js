var myChart14 = {
    "type": "bar",
    "theme": "light",
    "title": {
      "text": "Cost History by Service Category",
    },
    "plot":{
      "stacked":true,
      "stackType":"normal"
    },

    "scale-y": {
      "values":"-200:700:100",
      "max-ticks":10,
      "max-items":10,
      "label": {
        "text": "Cost ($)"
      },


      "max-items":10,
      
            "labels": [
              "-200K",
              "-100K",
              "0",
              "100K",
              "200K",
              "300K",
              "400K",
              "500K",
              "600K",
              "700K"
            ]


    },
  
    "scale-x": {
      
      "label":{
        "text":"Months"
    },

      "max-items":13,

      "labels": [
        "April 2017",
        "May 2017",
        "Jun 2017",
        "Jul 2017",
        "Aug 2017",
        "Sep 2017",
        "Oct 2017",
        "Nov 2017",
        "Dec 2017",
        "Jan 2018",
        "Feb 2018",
        "Mar 2018",
        "Apr 2018"
      ]
    },



    "plot":{
      "line-width":2,
      "marker":{
          "size":1,
          "visible":false
      },
      "tooltip":{
          "font-family":"Roboto",
          "font-size":"15px",
          "text":"%t <br> %v on %data-days",
          "text-align":"left",
          "border-radius":2,
          "padding":10
      }
  },





    "series":[
      {
        "values":[200,50,50,50,50,60,50,50,50,105,50,50,70],
        "data-days":[
          "April 2017",
          "May 2017",
          "Jun 2017",
          "Jul 2017",
          "Aug 2017",
          "Sep 2017",
          "Oct 2017",
          "Nov 2017",
          "Dec 2017",
          "Jan 2018",
          "Feb 2018",
          "Mar 2018",
          "Apr 2018"
        ],
        "text":"EC2 Compute"
      },
      {
        "values":[86,300,50,230,50,50,50,50,150,50,50,50,50],
        "data-days":[
          "April 2017",
          "May 2017",
          "Jun 2017",
          "Jul 2017",
          "Aug 2017",
          "Sep 2017",
          "Oct 2017",
          "Nov 2017",
          "Dec 2017",
          "Jan 2018",
          "Feb 2018",
          "Mar 2018",
          "Apr 2018"
        ],
        "text":"EC2 RI Prepay"
      },
      {
        "values":[75,100,50,50,50,50,50,50,50,50,50,120,50],
        "data-days":[
          "April 2017",
          "May 2017",
          "Jun 2017",
          "Jul 2017",
          "Aug 2017",
          "Sep 2017",
          "Oct 2017",
          "Nov 2017",
          "Dec 2017",
          "Jan 2018",
          "Feb 2018",
          "Mar 2018",
          "Apr 2018"
        ],
        "text":"Other"
      },
      {
        "values":[-75,0,-120,0,-25,0,50,-133,-33,0,0,-78,0],
        "data-days":[
          "April 2017",
          "May 2017",
          "Jun 2017",
          "Jul 2017",
          "Aug 2017",
          "Sep 2017",
          "Oct 2017",
          "Nov 2017",
          "Dec 2017",
          "Jan 2018",
          "Feb 2018",
          "Mar 2018",
          "Apr 2018"
        ],
        "text":"EC2 Usage"
      }
    ]
  };
   