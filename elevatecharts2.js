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
      "max-value": 100,
      "label": {
        "text": "Cost ($)"
      }
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
        "values":[20,5,5,5,5,6,5,5,5,15,5,5,7]
      },
      {
        "values":[35,5,5,23,5,5,5,5,15,5,5,5,5]
      },
      {
        "values":[24,5,5,5,5,5,5,5,5,5,5,12,5]
      }
    ]
  };
   