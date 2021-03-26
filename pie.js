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
		dataPoints: [
            { label: LoanRanges[0], y: ind1loanRanges_length[0]},
            { label: LoanRanges[1], y: ind1loanRanges_length[1]},
            { label: LoanRanges[2], y: ind1loanRanges_length[2]},
            { label: LoanRanges[3], y: ind1loanRanges_length[3]},
            { label: LoanRanges[4], y: ind1loanRanges_length[4]},
		]
	}]
});
chart.render();

}