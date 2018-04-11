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
      "max-value": 1000,
      "label": {
        "text": "Cost ($)"
      }


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




    "series":[
      {
        "values":[200,50,50,50,50,60,50,50,50,105,50,50,70]
      },
      {
        "values":[350,50,50,230,50,50,50,50,150,50,50,50,50]
      },
      {
        "values":[240,50,50,50,50,50,50,50,50,50,50,120,50]
      }
    ]
  };
   