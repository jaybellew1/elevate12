var myChart14 = {
    "type": "bar",
    "theme": "light",
    "title": {
      "text": "Cost History by Service Category",
    },
    "plot":{
      "stacked":true,
      "stackType":"normal",
      "tooltip":{
        "font-family":"Roboto",
        "font-size":"15px",
        "text":"%t<br>$%vK on %data-days",
        "text-align":"left",
        "border-radius":3,
        "padding":10
    }

    },


    "legend": {
      "toggle-action": "hide",
      "align": "center",
      "vertical-align": "bottom",
      "border":"none"
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
        "Apr 2017",
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
        "values":[156.40,184.55,185.36,205.24,189.62,205.69,201.33,195.67,220.74,204.99,175.55,185.22,202.21,210.54],
        "data-days":["April 2017","May 2017","Jun 2017","Jul 2017", "Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018","Mar 2018","Apr 2018"],
        "text":"EC2 Compute"
      },
      {
        "values":[55.25,56.21,65.25,45.01,54.36,45.25,251.33,156.165,89.65,48.52,55.152,62.14,90.25],
        "data-days":["April 2017","May 2017","Jun 2017","Jul 2017", "Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018","Mar 2018","Apr 2018"],
        "text":"EC2 RI Prepay"
      },
      {
        "values":[18.52,25.12,12.55,11.54,10.25,18.25,8.26,-35.26,-25.36,-62.52,-85.41,-25.26,-55.44],
        "data-days":["April 2017","May 2017","Jun 2017","Jul 2017", "Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018","Mar 2018","Apr 2018"],
        "text":"Other"
      },
      {
        "values":[-75,0,-50,0,-25,0,50,-13,-33,0,0,-78,0],
        "data-days":["April 2017","May 2017","Jun 2017","Jul 2017", "Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018","Mar 2018","Apr 2018"],
        "text":"EC2 Usage"
      },
      {
        "values":[13.52,25.12,25.55,11.54,10.25,18.25,8.26,75.26,5.36,22.52,5.41,25.26,55.44],
        "data-days":["April 2017","May 2017","Jun 2017","Jul 2017", "Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018","Mar 2018","Apr 2018"],
        "text":"EC2 Transfer"
      },
    ]
  };
   