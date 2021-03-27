




var loanData = {
    "ind1": [
        { label: LoanRanges[0], y: ind1loanRanges_length[0]},
        { label: LoanRanges[1], y: ind1loanRanges_length[1]},
        { label: LoanRanges[2], y: ind1loanRanges_length[2]},
        { label: LoanRanges[3], y: ind1loanRanges_length[3]},
        { label: LoanRanges[4], y: ind1loanRanges_length[4]},
    ],
    "ind1": [
        { label: LoanRanges[0], y: ind2loanRanges_length[0]},
        { label: LoanRanges[1], y: ind2loanRanges_length[1]},
        { label: LoanRanges[2], y: ind2loanRanges_length[2]},
        { label: LoanRanges[3], y: ind2loanRanges_length[3]},
        { label: LoanRanges[4], y: ind2loanRanges_length[4]},
    ],
    "ind1": [
        { label: LoanRanges[0], y: ind3loanRanges_length[0]},
        { label: LoanRanges[1], y: ind3loanRanges_length[1]},
        { label: LoanRanges[2], y: ind3loanRanges_length[2]},
        { label: LoanRanges[3], y: ind3loanRanges_length[3]},
        { label: LoanRanges[4], y: ind3loanRanges_length[4]}
    ]}


var dataPoints = [];
var chart = new CanvasJS.Chart("chartContainer4", {
	theme: "dark1", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
        text: "Industry",
        fontFamily:"Helvetica Neue"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
        dataPoints: dataPoints   
	}]
});
chart.render();

$( ".dropdown" ).change(function() {
    chart.options.data[0].dataPoints = [];
  var e = document.getElementById("selDataset");
    var selected = e.options[e.selectedIndex].value;
  dps = loanData[selected];
  for(var i in dps) {
      var xVal = dps[i].x;
    chart.options.data[0].dataPoints.push({x: dps[i].x, y: dps[i].y});
  }
  chart.render();
});