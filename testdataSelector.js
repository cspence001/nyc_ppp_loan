// exact elements to be used in industry select 


 //pie industry // for select industry page // percentages
 var chart = new CanvasJS.Chart("chartContainer4", {
    theme: "dark1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Industry2 (for separate page)",
        fontFamily:"Helvetica Neue"
    },
    data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}",
        dataPoints: [
            { label: LoanRanges[0], y: ind2loanRanges_length[0]},
            { label: LoanRanges[1], y: ind2loanRanges_length[1]},
            { label: LoanRanges[2], y: ind2loanRanges_length[2]},
            { label: LoanRanges[3], y: ind2loanRanges_length[3]},
            { label: LoanRanges[4], y: ind2loanRanges_length[4]},
        ]
    }]
});
chart.render();

var barChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    datasets: [{
      label: 'One',
      backgroundColor: 'rgba(206, 0, 23, 1)',
      data: [0, 1, 3, 0, 2, 0, 0, 2, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 2, 1, 0, 1, 2, 1, 1, 0, 0, 0, 2, 2, 0, 3]
    }, {
      label: 'Two',
      backgroundColor: 'rgba(206, 0, 23, 0.75)',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]
    }, {
      label: 'Three',
      backgroundColor: 'rgba(206, 0, 23, 0.5)',
      data: [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }]
  
  };
  var ctx = document.getElementById('canvas').getContext('2d');
  var chartInstance = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      title: {
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });


  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Top U.S Smartphone Operating Systems By Market Share, Q3 2012"
    },
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 53.37, indexLabel: "Android" },
     {  y: 35.0, indexLabel: "Apple iOS" },
     {  y: 7, indexLabel: "Blackberry" },
     {  y: 2, indexLabel: "Windows Phone" },
     {  y: 5, indexLabel: "Others" }
     ]
   }
   ]
 });

  chart.render();
}


var jsonData = {
    "dps1": [
        { "x": "2016-6-25 12:58:52", "y": 10.22 },
        { "x": "2016-7-25 13:33:23", "y": 11.14 },
        { "x": "2016-8-25 13:49:18", "y": 13.58 },
        { "x": "2016-9-25 13:55:01", "y": 15.25 },
        { "x": "2016-10-25 14:00:15", "y": 17.25 },
    ],
    "dps2": [
         { "x": "2016-6-25 12:58:52", "y": 19.99 },
         { "x": "2016-7-25 13:33:23", "y": 21.78 },
         { "x": "2016-8-25 13:49:18", "y": 23.45 },
         { "x": "2016-9-25 13:55:01", "y": 24.73 },
         { "x": "2016-10-25 14:00:15", "y": 26.58 }
    ],
    "dps3": [
        { "x": "2016-6-25 12:58:52", "y": 27.66 },
        { "x": "2016-7-25 13:33:23", "y": 28.68 },
        { "x": "2016-8-25 13:49:18", "y": 30.73 },
        { "x": "2016-9-25 13:55:01", "y": 32.46 },
        { "x": "2016-10-25 14:00:15", "y": 34.79 }
    ],
    "dps4": [
        { "x": "2016-6-25 12:58:52", "y": 10.22 },
        { "x": "2016-7-25 13:33:23", "y": 11.14 },
        { "x": "2016-8-25 13:49:18", "y": 15.25 },
        { "x": "2016-9-25 13:55:01", "y": 19.99 },
        { "x": "2016-10-25 14:00:15", "y": 21.78 }
    ],
    "dps5": [
        { "x": "2016-6-25 12:58:52", "y": 24.73 },
        { "x": "2016-7-25 13:33:23", "y": 26.58 },
        { "x": "2016-8-25 13:49:18", "y": 27.66 },
        { "x": "2016-9-25 13:55:01", "y": 28.68 },
        { "x": "2016-10-25 14:00:15", "y": 32.46 }
    ]}
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer",
    {
        axisX: {
          valueFormatString: "D/MM h:mm",
        intervalType: 'month',
        interval: 1
      },
        data: [{
        showInLegend: true,
        type: 'column',
        //xValueFormatString:"D MM h:mm",
        xValueType: "dateTime",
        showInLegend: true,
        name: "series1",
        legendText: "EnergykWh",
        dataPoints: dataPoints // this should contain only specific serial number data
    
        }]
    });
    
    $( ".dropdown" ).change(function() {
        chart.options.data[0].dataPoints = [];
      var e = document.getElementById("dd");
        var selected = e.options[e.selectedIndex].value;
      dps = jsonData[selected];
      for(var i in dps) {
          var xVal = dps[i].x;
        chart.options.data[0].dataPoints.push({x: new Date(xVal), y: dps[i].y});
      }
      chart.render();
    });