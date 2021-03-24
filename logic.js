// function buildPlot(industryType) {
//     d3.csv("data/output/nycppprecipients_ind.csv").then((data)=>{
//         var industrySel = data.Industry;
//         var industryFil = industrySel.filter(key => key.Industry == industryType);
//         var results = industryFil[0];

//         var industryLoans = results.LoanRange;
//         var IndustryEachRange = industryLoans

//         var LoanRanges = ["a $5-10 million", "b $2-5 million", "c $1-2 million", "d $350,000-1 million", "e $150,000-350,000"]
//     })
// }


// function Industrya(data) {
//     return data.Industry == "Accomodation and Food Services"
// }
// var Industry1 = data.filter(Industrya);

// // function for each loan range 
// function LoanRangea(data) {
//     return data.LoanRange == "a $5-10 million"
// }
// var LoanRange1 = data.filter(LoanRangea);


// // first need to dynamically fill dropdown / select options for each Industry
// //filter for variable to eaqual array of each selected value 
// function init() {
    // var dropdown = d3.select("#selDataset"); 
    // this gives an object with dates as keys
    d3.csv("data/output/nycppprecipients_ind.csv").then((data)=> {
        console.log(data);
    const groups = data.reduce((groups, info) => {
        const industry = info.Industry;
        if (!groups[industry]) {
        groups[industry] = [];
        }
        groups[industry].push(info);
        return groups;
    }, {});
        const groupArrays = Object.keys(groups).map((industry) => {
        return {
        industry,
        info: groups[industry]
        };
    });
    console.log(groupArrays);
        for (var i=0; i <groupArrays.length; i++) {  //starts in place of console.log
        var industry = groupArrays[i].industry;
        for (var i=0; i <industry.length; i++) {
            console.log(industry);
        }
    
        // var info = groupArrays[i].info;
        // var jobsRetained = info[i].JobsRetained;
        // var filteredData = groupArrays.filter(k => k.industry === "Health Care and Social Assistance")
        // var JobsRetained = filteredData.map(k => k.JobsRetained);

        // var sum = math.sum(jobsRetained);
        // console.log(sum);


        // console.log(jobsRetained);


    console.log(industry);
    };
    });
//     }
// init();


// var dropdown = d3.select("#selDataset");  //dropdown before d3.csv 

//   for (var i=0; i <groupArrays.length; i++) {  //starts in place of console.log
//       var industry = groupArrays[i].industry;

    //   if (industry) {
    //       groupArrays.industry.forEach(function(name){
    //           dropdown.append("option").text(name).property("value", name);
    //       })
//   };
// };
