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