


//fully working chart 

var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
        text: "# Loans Each Industry"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "stackedBar",
        name: industrylist[0],
        showInLegend: "true",
        dataPoints: [
            { x: LoanRanges[0], y: ind1loanRanges_length[0]},
            { x: LoanRanges[1], y: ind1loanRanges_length[1]},
            { x: LoanRanges[2], y: ind1loanRanges_length[2]},
            { x: LoanRanges[3], y: ind1loanRanges_length[3]},
            { x: LoanRanges[4], y: ind1loanRanges_length[4]},
        ]
    },
    {
        type: "stackedBar",
        name: industrylist[1],
        showInLegend: "true",
        dataPoints: [
            { x: LoanRanges[0], y: ind2loanRanges_length[0]},
            { x: LoanRanges[1], y: ind2loanRanges_length[1]},
            { x: LoanRanges[2], y: ind2loanRanges_length[2]},
            { x: LoanRanges[3], y: ind2loanRanges_length[3]},
            { x: LoanRanges[4], y: ind2loanRanges_length[4]},
        ]
    },
    {
        type: "stackedBar",
        name: industrylist[2],
        showInLegend: "true",
        dataPoints: [
            { x: LoanRanges[0], y: ind3loanRanges_length[0]},
            { x: LoanRanges[1], y: ind3loanRanges_length[1]},
            { x: LoanRanges[2], y: ind3loanRanges_length[2]},
            { x: LoanRanges[3], y: ind3loanRanges_length[3]},
            { x: LoanRanges[4], y: ind3loanRanges_length[4]},
        ]
    },
    {
        type: "stackedBar",
        name: industrylist[3],
        showInLegend: "true",
        dataPoints: [
            { x: LoanRanges[0], y: ind4loanRanges_length[0]},
            { x: LoanRanges[1], y: ind4loanRanges_length[1]},
            { x: LoanRanges[2], y: ind4loanRanges_length[2]},
            { x: LoanRanges[3], y: ind4loanRanges_length[3]},
            { x: LoanRanges[4], y: ind4loanRanges_length[4]},
        ]
    },
    {
        type: "stackedBar",
        name: industrylist[4],
        showInLegend: "true",
        dataPoints: [
            { x: LoanRanges[0], y: ind5loanRanges_length[0]},
            { x: LoanRanges[1], y: ind5loanRanges_length[1]},
            { x: LoanRanges[2], y: ind5loanRanges_length[2]},
            { x: LoanRanges[3], y: ind5loanRanges_length[3]},
            { x: LoanRanges[4], y: ind5loanRanges_length[4]},
        ]
    }]
});
chart.render();

});
