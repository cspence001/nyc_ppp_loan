// function buildPlot(industryType) {
//     //need for panel metadata
//     d3.csv("data/output/nycppprecipients_ind.csv").then((data)=>{

    d3.csv("/static/data/output/nycppprecipients_ind.csv").then((data)=> {
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
    var industries = [];
    var infos = [];
    console.log(groupArrays);
        for (var i=0; i <groupArrays.length; i++) { 

        industries.push(groupArrays[i].industry);
        infos.push(groupArrays[i].info);

        };
    console.log(industries); //array of all industries (names)
    console.log(infos);//list of arrays with info for each loan in each industry
    // var indjobs1list = 0;
    //Accomodation and Food Services
    var ind1loanslist = [];
    var ind1loansNamelist = [];
    var ind1jobslist = [];
    var ind1jobssum = [];

    var ind1loansa = [];
    var ind1loansb = [];
    var ind1loansc = [];
    var ind1loansd = [];
    var ind1loanse = [];

    var ind1jobsa = [];
    var ind1jobsb = [];
    var ind1jobsc = [];
    var ind1jobsd = [];
    var ind1jobse = [];

    // Educational Services
    var ind2loanslist = [];
    var ind2loansNamelist = [];
    var ind2jobslist = [];
    var ind2jobssum = [];

    var ind2loansa = [];
    var ind2loansb = [];
    var ind2loansc = [];
    var ind2loansd = [];
    var ind2loanse = [];

    var ind2jobsa = [];
    var ind2jobsb = [];
    var ind2jobsc = [];
    var ind2jobsd = [];
    var ind2jobse = [];

    // Administrative and Support and Waste Management and Remediation Services
    var ind3loanslist = [];
    var ind3loansNamelist = [];
    var ind3jobslist = [];
    var ind3jobssum = [];

    var ind3loansa = [];
    var ind3loansb = [];
    var ind3loansc = [];
    var ind3loansd = [];
    var ind3loanse = [];

    var ind3jobsa = [];
    var ind3jobsb = [];
    var ind3jobsc = [];
    var ind3jobsd = [];
    var ind3jobse = [];

    // Professional, Scientific, and Technical Services
    var ind4loanslist = [];
    var ind4loansNamelist = [];
    var ind4jobslist = [];
    var ind4jobssum = [];

    var ind4loansa = [];
    var ind4loansb = [];
    var ind4loansc = [];
    var ind4loansd = [];
    var ind4loanse = [];

    var ind4jobsa = [];
    var ind4jobsb = [];
    var ind4jobsc = [];
    var ind4jobsd = [];
    var ind4jobse = [];

    // "Manufacturing"
    var ind5loanslist = [];
    var ind5loansNamelist = [];
    var ind5jobslist = [];
    var ind5jobssum = [];

    var ind5loansa = [];
    var ind5loansb = [];
    var ind5loansc = [];
    var ind5loansd = [];
    var ind5loanse = [];

    var ind5jobsa = [];
    var ind5jobsb = [];
    var ind5jobsc = [];
    var ind5jobsd = [];
    var ind5jobse = [];

    // Construction
    var ind6loanslist = [];
    var ind6loansNamelist = [];
    var ind6jobslist = [];
    var ind6jobssum = [];

    var ind6loansa = [];
    var ind6loansb = [];
    var ind6loansc = [];
    var ind6loansd = [];
    var ind6loanse = [];

    var ind6jobsa = [];
    var ind6jobsb = [];
    var ind6jobsc = [];
    var ind6jobsd = [];
    var ind6jobse = [];

    // Health Care and Social Assistance
    var ind7loanslist = [];
    var ind7loansNamelist = [];
    var ind7jobslist = [];
    var ind7jobssum = [];

    var ind7loansa = [];
    var ind7loansb = [];
    var ind7loansc = [];
    var ind7loansd = [];
    var ind7loanse = [];

    var ind7jobsa = [];
    var ind7jobsb = [];
    var ind7jobsc = [];
    var ind7jobsd = [];
    var ind7jobse = [];

    //Wholesale Trade
    var ind8loanslist = [];
    var ind8loansNamelist = [];
    var ind8jobslist = [];
    var ind8jobssum = [];

    var ind8loansa = [];
    var ind8loansb = [];
    var ind8loansc = [];
    var ind8loansd = [];
    var ind8loanse = [];
    
    var ind8jobsa = [];
    var ind8jobsb = [];
    var ind8jobsc = [];
    var ind8jobsd = [];
    var ind8jobse = [];

    // Information
    var ind9loanslist = [];
    var ind9loansNamelist = [];
    var ind9jobslist = [];
    var ind9jobssum = [];

    var ind9loansa = [];
    var ind9loansb = [];
    var ind9loansc = [];
    var ind9loansd = [];
    var ind9loanse = [];

    var ind9jobsa = [];
    var ind9jobsb = [];
    var ind9jobsc = [];
    var ind9jobsd = [];
    var ind9jobse = [];

    // "Finance and Insurance"
    var ind10loanslist = [];
    var ind10loansNamelist = [];
    var ind10jobslist = [];
    var ind10jobssum = [];

    var ind10loansa = [];
    var ind10loansb = [];
    var ind10loansc = [];
    var ind10loansd = [];
    var ind10loanse = [];

    var ind10jobsa = [];
    var ind10jobsb = [];
    var ind10jobsc = [];
    var ind10jobsd = [];
    var ind10jobse = [];


     // "Other Services (except Public Administration)"
     var ind11loanslist = [];
     var ind11loansNamelist = [];
     var ind11jobslist = [];
     var ind11jobssum = [];
 
     var ind11loansa = [];
     var ind11loansb = [];
     var ind11loansc = [];
     var ind11loansd = [];
     var ind11loanse = [];
 
     var ind11jobsa = [];
     var ind11jobsb = [];
     var ind11jobsc = [];
     var ind11jobsd = [];
     var ind11jobse = [];
 
     // "Arts, Entertainment, and Recreation"
     var ind12loanslist = [];
     var ind12loansNamelist = [];
     var ind12jobslist = [];
     var ind12jobssum = [];
 
     var ind12loansa = [];
     var ind12loansb = [];
     var ind12loansc = [];
     var ind12loansd = [];
     var ind12loanse = [];
 
     var ind12jobsa = [];
     var ind12jobsb = [];
     var ind12jobsc = [];
     var ind12jobsd = [];
     var ind12jobse = [];
 
     // "Retail Trade"
     var ind13loanslist = [];
     var ind13loansNamelist = [];
     var ind13jobslist = [];
     var ind13jobssum = [];
 
     var ind13loansa = [];
     var ind13loansb = [];
     var ind13loansc = [];
     var ind13loansd = [];
     var ind13loanse = [];
 
     var ind13jobsa = [];
     var ind13jobsb = [];
     var ind13jobsc = [];
     var ind13jobsd = [];
     var ind13jobse = [];
 
    // "Real Estate Rental and Leasing"
     var ind14loanslist = [];
     var ind14loansNamelist = [];
     var ind14jobslist = [];
     var ind14jobssum = [];
 
     var ind14loansa = [];
     var ind14loansb = [];
     var ind14loansc = [];
     var ind14loansd = [];
     var ind14loanse = [];
 
     var ind14jobsa = [];
     var ind14jobsb = [];
     var ind14jobsc = [];
     var ind14jobsd = [];
     var ind14jobse = [];
 
     // "Public Administration"
     var ind15loanslist = [];
     var ind15loansNamelist = [];
     var ind15jobslist = [];
     var ind15jobssum = [];
 
     var ind15loansa = [];
     var ind15loansb = [];
     var ind15loansc = [];
     var ind15loansd = [];
     var ind15loanse = [];
 
     var ind15jobsa = [];
     var ind15jobsb = [];
     var ind15jobsc = [];
     var ind15jobsd = [];
     var ind15jobse = [];
 
     // "Agriculture, Forestry, Fishing and Hunting",
     var ind16loanslist = [];
     var ind16loansNamelist = [];
     var ind16jobslist = [];
     var ind16jobssum = [];
 
     var ind16loansa = [];
     var ind16loansb = [];
     var ind16loansc = [];
     var ind16loansd = [];
     var ind16loanse = [];
 
     var ind16jobsa = [];
     var ind16jobsb = [];
     var ind16jobsc = [];
     var ind16jobsd = [];
     var ind16jobse = [];
 
     // Health Care and Social Assistance
     var ind17loanslist = [];
     var ind17loansNamelist = [];
     var ind17jobslist = [];
     var ind17jobssum = [];
 
     var ind17loansa = [];
     var ind17loansb = [];
     var ind17loansc = [];
     var ind17loansd = [];
     var ind17loanse = [];
 
     var ind17jobsa = [];
     var ind17jobsb = [];
     var ind17jobsc = [];
     var ind17jobsd = [];
     var ind17jobse = [];
 
     // "Utilities"
     var ind18loanslist = [];
     var ind18loansNamelist = [];
     var ind18jobslist = [];
     var ind18jobssum = [];
 
     var ind18loansa = [];
     var ind18loansb = [];
     var ind18loansc = [];
     var ind18loansd = [];
     var ind18loanse = [];
     
     var ind18jobsa = [];
     var ind18jobsb = [];
     var ind18jobsc = [];
     var ind18jobsd = [];
     var ind18jobse = [];
 
     // "Management of Companies and Enterprises"
     var ind19loanslist = [];
     var ind19loansNamelist = [];
     var ind19jobslist = [];
     var ind19jobssum = [];
 
     var ind19loansa = [];
     var ind19loansb = [];
     var ind19loansc = [];
     var ind19loansd = [];
     var ind19loanse = [];
 
     var ind19jobsa = [];
     var ind19jobsb = [];
     var ind19jobsc = [];
     var ind19jobsd = [];
     var ind19jobse = [];
 
    // "Mining"
     var ind20loanslist = [];
     var ind20loansNamelist = [];
     var ind20jobslist = [];
     var ind20jobssum = [];
 
     var ind20loansa = [];
     var ind20loansb = [];
     var ind20loansc = [];
     var ind20loansd = [];
     var ind20loanse = [];
 
     var ind20jobsa = [];
     var ind20jobsb = [];
     var ind20jobsc = [];
     var ind20jobsd = [];
     var ind20jobse = [];

    var totalJobsAllIndustry = [];

    for (var i=0; i<infos.length; i++) {
        var subArrays = infos[i];
        console.log(subArrays);

            for (var j = 0; j <subArrays.length; j++) {
                
                let loanRangea = "a $5-10 million";
                let loanRangeb = "b $2-5 million";
                let loanRangec = "c $1-2 million";
                let loanRanged = "d $350,000-1 million";
                let loanRangee = "e $150,000-350,000";

                //this line accounts for any NaN values and converts to 0
                subArrays[j].JobsRetained = subArrays[j].JobsRetained || 0; 
                if (subArrays[j].Industry == "Accomodation and Food Services") {
                    var ind1loans = (subArrays[j].LoanRange);
                    ind1loanslist.push(ind1loans);
                    console.log(ind1loans); 
                    if (ind1loans == loanRangea) {
                        ind1loansa.push(ind1loans);
                        ind1jobsa.push(ind1jobs);
                    }
                    else if (ind1loans ==loanRangeb) {
                        ind1loansb.push(ind1loans)
                        ind1jobsb.push(ind1jobs);
                    }
                    else if (ind1loans ==loanRangec) {
                        ind1loansc.push(ind1loans)
                        ind1jobsc.push(ind1jobs);
                    }
                    else if (ind1loans ==loanRanged) {
                        ind1loansd.push(ind1loans)
                        ind1jobsd.push(ind1jobs);
                    }
                    else if (ind1loans ==loanRangee) {
                        ind1loanse.push(ind1loans)
                        ind1jobse.push(ind1jobs);
                    }
                    var ind1loansNames = (subArrays[j].BusinessName)
                    ind1loansNamelist.push(ind1loansNames);
                    var ind1jobs = parseInt(subArrays[j].JobsRetained);
                    ind1jobslist.push(ind1jobs);
                    ind1jobssum =(math.sum(ind1jobslist));
                }
                else if (subArrays[j].Industry == "Educational Services") {
                    var ind2loans = (subArrays[j].LoanRange);
                    ind2loanslist.push(ind2loans);
                    console.log(ind2loans);
                    if (ind2loans == loanRangea) {
                        ind2loansa.push(ind2loans)
                        ind2jobsa.push(ind2jobs);
                    }
                    else if (ind2loans ==loanRangeb) {
                        ind2loansb.push(ind2loans)
                        ind2jobsb.push(ind2jobs);
                    }
                    else if (ind2loans ==loanRangec) {
                        ind2loansc.push(ind2loans)
                        ind2jobsc.push(ind2jobs);
                    }
                    else if (ind2loans ==loanRanged) {
                        ind2loansd.push(ind2loans)
                        ind2jobsd.push(ind2jobs);
                    }
                    else if (ind2loans ==loanRangee) {
                        ind2loanse.push(ind2loans)
                        ind2jobse.push(ind2jobs);
                    }
                     var ind2loansNames = (subArrays[j].BusinessName)
                     ind2loansNamelist.push(ind2loansNames);
                     var ind2jobs = parseInt(subArrays[j].JobsRetained);
                     ind2jobslist.push(ind2jobs);
                     ind2jobssum =(math.sum(ind2jobslist));
                }
                else if (subArrays[j].Industry == "Administrative and Support and Waste Management and Remediation Services") {
                    var ind3loans = (subArrays[j].LoanRange);
                    ind3loanslist.push(ind3loans);
                    console.log(ind3loans);
                    if (ind3loans == loanRangea) {
                        ind3loansa.push(ind3loans)
                        ind3jobsa.push(ind3jobs);
                    }
                    else if (ind3loans ==loanRangeb) {
                        ind3loansb.push(ind3loans)
                        ind3jobsb.push(ind3jobs);
                    }
                    else if (ind3loans ==loanRangec) {
                        ind3loansc.push(ind3loans)
                        ind3jobsc.push(ind3jobs);
                    }
                    else if (ind3loans ==loanRanged) {
                        ind3loansd.push(ind3loans)
                        ind3jobsd.push(ind3jobs);
                    }
                    else if (ind3loans ==loanRangee) {
                        ind3loanse.push(ind3loans)
                        ind3jobse.push(ind3jobs);
                    }
                     var ind3loansNames = (subArrays[j].BusinessName)
                     ind3loansNamelist.push(ind3loansNames);
                     var ind3jobs = parseInt(subArrays[j].JobsRetained);
                     ind3jobslist.push(ind3jobs);
                     ind3jobssum =(math.sum(ind3jobslist));
                }
                else if (subArrays[j].Industry == "Professional, Scientific, and Technical Services") {
                    var ind4loans = (subArrays[j].LoanRange);
                    ind4loanslist.push(ind4loans);
                    console.log(ind4loans);
                    if (ind4loans == loanRangea) {
                        ind4loansa.push(ind4loans)
                        ind4jobsa.push(ind4jobs);
                    }
                    else if (ind4loans ==loanRangeb) {
                        ind4loansb.push(ind4loans)
                        ind4jobsb.push(ind4jobs);
                    }
                    else if (ind4loans ==loanRangec) {
                        ind4loansc.push(ind4loans)
                        ind4jobsc.push(ind4jobs);
                    }
                    else if (ind4loans ==loanRanged) {
                        ind4loansd.push(ind4loans)
                        ind4jobsd.push(ind4jobs);
                    }
                    else if (ind4loans ==loanRangee) {
                        ind4loanse.push(ind4loans)
                        ind4jobse.push(ind4jobs);
                    }
                    var ind4loansNames = (subArrays[j].BusinessName)
                    ind4loansNamelist.push(ind4loansNames);
                    var ind4jobs = parseInt(subArrays[j].JobsRetained);
                     ind4jobslist.push(ind4jobs);
                     ind4jobssum =(math.sum(ind4jobslist));
                }
                else if (subArrays[j].Industry == "Manufacturing") {
                    var ind5loans = (subArrays[j].LoanRange);
                    ind5loanslist.push(ind5loans);
                    console.log(ind5loans);
                    if (ind5loans == loanRangea) {
                        ind5loansa.push(ind5loans)
                        ind5jobsa.push(ind5jobs);
                    }
                    else if (ind5loans ==loanRangeb) {
                        ind5loansb.push(ind5loans)
                        ind5jobsb.push(ind5jobs);
                    }
                    else if (ind5loans ==loanRangec) {
                        ind5loansc.push(ind5loans)
                        ind5jobsc.push(ind5jobs);
                    }
                    else if (ind5loans ==loanRanged) {
                        ind5loansd.push(ind5loans)
                        ind5jobsd.push(ind5jobs);
                    }
                    else if (ind5loans ==loanRangee) {
                        ind5loanse.push(ind5loans)
                        ind5jobse.push(ind5jobs);
                    }
                     var ind5loansNames = (subArrays[j].BusinessName)
                     ind5loansNamelist.push(ind5loansNames);
                     var ind5jobs = parseInt(subArrays[j].JobsRetained);
                     ind5jobslist.push(ind5jobs);
                     ind5jobssum =(math.sum(ind5jobslist));
                }
                else if (subArrays[j].Industry == "Construction") {
                    var ind6loans = (subArrays[j].LoanRange);
                    ind6loanslist.push(ind6loans);
                    console.log(ind6loans);
                    if (ind6loans == loanRangea) {
                        ind6loansa.push(ind6loans)
                        ind6jobsa.push(ind6jobs);
                    }
                    else if (ind6loans ==loanRangeb) {
                        ind6loansb.push(ind6loans)
                        ind6jobsb.push(ind6jobs);
                    }
                    else if (ind6loans ==loanRangec) {
                        ind6loansc.push(ind6loans)
                        ind6jobsc.push(ind6jobs);
                    }
                    else if (ind6loans ==loanRanged) {
                        ind6loansd.push(ind6loans)
                        ind6jobsd.push(ind6jobs);
                    }
                    else if (ind6loans ==loanRangee) {
                        ind6loanse.push(ind6loans)
                        ind6jobse.push(ind6jobs);
                    }
                    var ind6loansNames = (subArrays[j].BusinessName)
                    ind6loansNamelist.push(ind6loansNames);
                    var ind6jobs = parseInt(subArrays[j].JobsRetained);
                     ind6jobslist.push(ind6jobs);
                     ind6jobssum =(math.sum(ind6jobslist));
                }
                else if (subArrays[j].Industry == "Health Care and Social Assistance") {
                    var ind7loans = (subArrays[j].LoanRange);
                    ind7loanslist.push(ind7loans);
                    console.log(ind7loans);
                    if (ind7loans == loanRangea) {
                        ind7loansa.push(ind7loans)
                        ind7jobsa.push(ind7jobs);
                    }
                    else if (ind7loans ==loanRangeb) {
                        ind7loansb.push(ind7loans)
                        ind7jobsb.push(ind7jobs);
                    }
                    else if (ind7loans ==loanRangec) {
                        ind7loansc.push(ind7loans)
                        ind7jobsc.push(ind7jobs);
                    }
                    else if (ind7loans ==loanRanged) {
                        ind7loansd.push(ind7loans)
                        ind7jobsd.push(ind7jobs);
                    }
                    else if (ind7loans ==loanRangee) {
                        ind7loanse.push(ind7loans)
                        ind7jobse.push(ind7jobs);
                    }
                    var ind7loansNames = (subArrays[j].BusinessName)
                    ind7loansNamelist.push(ind7loansNames);
                    var ind7jobs = parseInt(subArrays[j].JobsRetained);
                     ind7jobslist.push(ind7jobs);
                     ind7jobssum =(math.sum(ind7jobslist));
                }
                else if (subArrays[j].Industry == "Wholesale Trade") {
                    var ind8loans = (subArrays[j].LoanRange);
                    ind8loanslist.push(ind8loans);
                    console.log(ind8loans);
                    if (ind8loans == loanRangea) {
                        ind8loansa.push(ind8loans)
                        ind8jobsa.push(ind8jobs);
                    }
                    else if (ind8loans ==loanRangeb) {
                        ind8loansb.push(ind8loans)
                        ind8jobsb.push(ind8jobs);
                    }
                    else if (ind8loans ==loanRangec) {
                        ind8loansc.push(ind8loans)
                        ind8jobsc.push(ind8jobs);
                    }
                    else if (ind8loans ==loanRanged) {
                        ind8loansd.push(ind8loans)
                        ind8jobsd.push(ind8jobs);
                    }
                    else if (ind8loans ==loanRangee) {
                        ind8loanse.push(ind8loans)
                        ind8jobse.push(ind8jobs);
                    }
                    var ind8loansNames = (subArrays[j].BusinessName)
                    ind8loansNamelist.push(ind8loansNames);
                    var ind8jobs = parseInt(subArrays[j].JobsRetained);
                     ind8jobslist.push(ind8jobs);
                     ind8jobssum =(math.sum(ind8jobslist));
                }
                else if (subArrays[j].Industry == "Information") {
                    var ind9loans = (subArrays[j].LoanRange);
                    ind9loanslist.push(ind9loans);
                    console.log(ind9loans);
                    if (ind9loans == loanRangea) {
                        ind9loansa.push(ind9loans)
                        ind9jobsa.push(ind9jobs);
                    }
                    else if (ind9loans ==loanRangeb) {
                        ind9loansb.push(ind9loans)
                        ind9jobsb.push(ind9jobs);
                    }
                    else if (ind9loans ==loanRangec) {
                        ind9loansc.push(ind9loans)
                        ind9jobsc.push(ind9jobs);
                    }
                    else if (ind9loans ==loanRanged) {
                        ind9loansd.push(ind9loans)
                        ind9jobsd.push(ind9jobs);
                    }
                    else if (ind9loans ==loanRangee) {
                        ind9loanse.push(ind9loans)
                        ind9jobse.push(ind9jobs);
                    }
                    var ind9loansNames = (subArrays[j].BusinessName)
                    ind9loansNamelist.push(ind9loansNames);
                    var ind9jobs = parseInt(subArrays[j].JobsRetained);
                     ind9jobslist.push(ind9jobs);
                     ind9jobssum =(math.sum(ind9jobslist));
                }
                else if (subArrays[j].Industry == "Finance and Insurance") {
                    var ind10loans = (subArrays[j].LoanRange);
                    ind10loanslist.push(ind10loans);
                    console.log(ind10loans);
                    if (ind10loans == loanRangea) {
                        ind10loansa.push(ind10loans)
                        ind10jobsa.push(ind10jobs);
                    }
                    else if (ind10loans ==loanRangeb) {
                        ind10loansb.push(ind10loans)
                        ind10jobsb.push(ind10jobs);
                    }
                    else if (ind10loans ==loanRangec) {
                        ind10loansc.push(ind10loans)
                        ind10jobsc.push(ind10jobs);
                    }
                    else if (ind10loans ==loanRanged) {
                        ind10loansd.push(ind10loans)
                        ind10jobsd.push(ind10jobs);
                    }
                    else if (ind10loans ==loanRangee) {
                        ind10loanse.push(ind10loans)
                        ind10jobse.push(ind10jobs);
                    }
                    var ind10loansNames = (subArrays[j].BusinessName)
                    ind10loansNamelist.push(ind10loansNames);
                    var ind10jobs = parseInt(subArrays[j].JobsRetained);
                     ind10jobslist.push(ind10jobs);
                     ind10jobssum =(math.sum(ind10jobslist));
                }
                if (subArrays[j].Industry == "Other Services (except Public Administration)") {
                    var ind11loans = (subArrays[j].LoanRange);
                    ind11loanslist.push(ind11loans);
                    console.log(ind11loans); 
                    if (ind11loans == loanRangea) {
                        ind11loansa.push(ind11loans);
                        ind11jobsa.push(ind11jobs);
                    }
                    else if (ind11loans ==loanRangeb) {
                        ind11loansb.push(ind11loans)
                        ind11jobsb.push(ind11jobs);
                    }
                    else if (ind11loans ==loanRangec) {
                        ind11loansc.push(ind11loans)
                        ind11jobsc.push(ind11jobs);
                    }
                    else if (ind11loans ==loanRanged) {
                        ind11loansd.push(ind11loans)
                        ind11jobsd.push(ind11jobs);
                    }
                    else if (ind11loans ==loanRangee) {
                        ind11loanse.push(ind11loans)
                        ind11jobse.push(ind11jobs);
                    }
                    var ind11loansNames = (subArrays[j].BusinessName)
                    ind11loansNamelist.push(ind11loansNames);
                    var ind11jobs = parseInt(subArrays[j].JobsRetained);
                    ind11jobslist.push(ind11jobs);
                    ind11jobssum =(math.sum(ind11jobslist));
                }
                else if (subArrays[j].Industry == "Arts, Entertainment, and Recreation") {
                    var ind12loans = (subArrays[j].LoanRange);
                    ind12loanslist.push(ind12loans);
                    console.log(ind12loans);
                    if (ind12loans == loanRangea) {
                        ind12loansa.push(ind12loans)
                        ind12jobsa.push(ind12jobs);
                    }
                    else if (ind12loans ==loanRangeb) {
                        ind12loansb.push(ind12loans)
                        ind12jobsb.push(ind12jobs);
                    }
                    else if (ind12loans ==loanRangec) {
                        ind12loansc.push(ind12loans)
                        ind12jobsc.push(ind12jobs);
                    }
                    else if (ind12loans ==loanRanged) {
                        ind12loansd.push(ind12loans)
                        ind12jobsd.push(ind12jobs);
                    }
                    else if (ind12loans ==loanRangee) {
                        ind12loanse.push(ind12loans)
                        ind12jobse.push(ind12jobs);
                    }
                     var ind12loansNames = (subArrays[j].BusinessName)
                     ind12loansNamelist.push(ind12loansNames);
                     var ind12jobs = parseInt(subArrays[j].JobsRetained);
                     ind12jobslist.push(ind12jobs);
                     ind12jobssum =(math.sum(ind12jobslist));
                }
                else if (subArrays[j].Industry == "Retail Trade") {
                    var ind13loans = (subArrays[j].LoanRange);
                    ind13loanslist.push(ind13loans);
                    console.log(ind13loans);
                    if (ind13loans == loanRangea) {
                        ind13loansa.push(ind13loans)
                        ind13jobsa.push(ind13jobs);
                    }
                    else if (ind13loans ==loanRangeb) {
                        ind13loansb.push(ind13loans)
                        ind13jobsb.push(ind13jobs);
                    }
                    else if (ind13loans ==loanRangec) {
                        ind13loansc.push(ind13loans)
                        ind13jobsc.push(ind13jobs);
                    }
                    else if (ind13loans ==loanRanged) {
                        ind13loansd.push(ind13loans)
                        ind13jobsd.push(ind13jobs);
                    }
                    else if (ind13loans ==loanRangee) {
                        ind13loanse.push(ind13loans)
                        ind13jobse.push(ind13jobs);
                    }
                     var ind13loansNames = (subArrays[j].BusinessName)
                     ind13loansNamelist.push(ind13loansNames);
                     var ind13jobs = parseInt(subArrays[j].JobsRetained);
                     ind13jobslist.push(ind13jobs);
                     ind13jobssum =(math.sum(ind13jobslist));
                }
                else if (subArrays[j].Industry == "Real Estate Rental and Leasing") {
                    var ind14loans = (subArrays[j].LoanRange);
                    ind14loanslist.push(ind14loans);
                    console.log(ind14loans);
                    if (ind14loans == loanRangea) {
                        ind14loansa.push(ind14loans)
                        ind14jobsa.push(ind14jobs);
                    }
                    else if (ind14loans ==loanRangeb) {
                        ind14loansb.push(ind14loans)
                        ind14jobsb.push(ind14jobs);
                    }
                    else if (ind14loans ==loanRangec) {
                        ind14loansc.push(ind14loans)
                        ind14jobsc.push(ind14jobs);
                    }
                    else if (ind14loans ==loanRanged) {
                        ind14loansd.push(ind14loans)
                        ind14jobsd.push(ind14jobs);
                    }
                    else if (ind14loans ==loanRangee) {
                        ind14loanse.push(ind14loans)
                        ind14jobse.push(ind14jobs);
                    }
                    var ind14loansNames = (subArrays[j].BusinessName)
                    ind14loansNamelist.push(ind14loansNames);
                    var ind14jobs = parseInt(subArrays[j].JobsRetained);
                     ind14jobslist.push(ind14jobs);
                     ind14jobssum =(math.sum(ind14jobslist));
                }
                else if (subArrays[j].Industry == "Transportation and Warehousing") {
                    var ind15loans = (subArrays[j].LoanRange);
                    ind15loanslist.push(ind15loans);
                    console.log(ind15loans);
                    if (ind15loans == loanRangea) {
                        ind15loansa.push(ind15loans)
                        ind15jobsa.push(ind15jobs);
                    }
                    else if (ind15loans ==loanRangeb) {
                        ind15loansb.push(ind15loans)
                        ind15jobsb.push(ind15jobs);
                    }
                    else if (ind15loans ==loanRangec) {
                        ind15loansc.push(ind15loans)
                        ind15jobsc.push(ind15jobs);
                    }
                    else if (ind15loans ==loanRanged) {
                        ind15loansd.push(ind15loans)
                        ind15jobsd.push(ind15jobs);
                    }
                    else if (ind15loans ==loanRangee) {
                        ind15loanse.push(ind15loans)
                        ind15jobse.push(ind15jobs);
                    }
                     var ind15loansNames = (subArrays[j].BusinessName)
                     ind15loansNamelist.push(ind15loansNames);
                     var ind15jobs = parseInt(subArrays[j].JobsRetained);
                     ind15jobslist.push(ind15jobs);
                     ind15jobssum =(math.sum(ind15jobslist));
                }
                else if (subArrays[j].Industry == "Public Administration") {
                    var ind16loans = (subArrays[j].LoanRange);
                    ind16loanslist.push(ind16loans);
                    console.log(ind16loans);
                    if (ind16loans == loanRangea) {
                        ind16loansa.push(ind16loans)
                        ind16jobsa.push(ind16jobs);
                    }
                    else if (ind16loans ==loanRangeb) {
                        ind16loansb.push(ind16loans)
                        ind16jobsb.push(ind16jobs);
                    }
                    else if (ind16loans ==loanRangec) {
                        ind16loansc.push(ind16loans)
                        ind16jobsc.push(ind16jobs);
                    }
                    else if (ind16loans ==loanRanged) {
                        ind16loansd.push(ind16loans)
                        ind16jobsd.push(ind16jobs);
                    }
                    else if (ind16loans ==loanRangee) {
                        ind16loanse.push(ind16loans)
                        ind16jobse.push(ind16jobs);
                    }
                    var ind16loansNames = (subArrays[j].BusinessName)
                    ind16loansNamelist.push(ind16loansNames);
                    var ind16jobs = parseInt(subArrays[j].JobsRetained);
                     ind16jobslist.push(ind16jobs);
                     ind16jobssum =(math.sum(ind16jobslist));
                }
                else if (subArrays[j].Industry == "Agriculture, Forestry, Fishing and Hunting") {
                    var ind17loans = (subArrays[j].LoanRange);
                    ind17loanslist.push(ind17loans);
                    console.log(ind17loans);
                    if (ind17loans == loanRangea) {
                        ind17loansa.push(ind17loans)
                        ind17jobsa.push(ind17jobs);
                    }
                    else if (ind17loans ==loanRangeb) {
                        ind17loansb.push(ind17loans)
                        ind17jobsb.push(ind17jobs);
                    }
                    else if (ind17loans ==loanRangec) {
                        ind17loansc.push(ind17loans)
                        ind17jobsc.push(ind17jobs);
                    }
                    else if (ind17loans ==loanRanged) {
                        ind17loansd.push(ind17loans)
                        ind17jobsd.push(ind17jobs);
                    }
                    else if (ind17loans ==loanRangee) {
                        ind17loanse.push(ind17loans)
                        ind17jobse.push(ind17jobs);
                    }
                    var ind17loansNames = (subArrays[j].BusinessName)
                    ind17loansNamelist.push(ind17loansNames);
                    var ind17jobs = parseInt(subArrays[j].JobsRetained);
                     ind17jobslist.push(ind17jobs);
                     ind17jobssum =(math.sum(ind17jobslist));
                }
                else if (subArrays[j].Industry == "Utilities") {
                    var ind18loans = (subArrays[j].LoanRange);
                    ind18loanslist.push(ind18loans);
                    console.log(ind18loans);
                    if (ind18loans == loanRangea) {
                        ind18loansa.push(ind18loans)
                        ind18jobsa.push(ind18jobs);
                    }
                    else if (ind18loans ==loanRangeb) {
                        ind18loansb.push(ind18loans)
                        ind18jobsb.push(ind18jobs);
                    }
                    else if (ind18loans ==loanRangec) {
                        ind18loansc.push(ind18loans)
                        ind18jobsc.push(ind18jobs);
                    }
                    else if (ind18loans ==loanRanged) {
                        ind18loansd.push(ind18loans)
                        ind18jobsd.push(ind18jobs);
                    }
                    else if (ind18loans ==loanRangee) {
                        ind18loanse.push(ind18loans)
                        ind18jobse.push(ind18jobs);
                    }
                    var ind18loansNames = (subArrays[j].BusinessName)
                    ind18loansNamelist.push(ind18loansNames);
                    var ind18jobs = parseInt(subArrays[j].JobsRetained);
                     ind18jobslist.push(ind18jobs);
                     ind18jobssum =(math.sum(ind18jobslist));
                }
                else if (subArrays[j].Industry == "Management of Companies and Enterprises") {
                    var ind19loans = (subArrays[j].LoanRange);
                    ind19loanslist.push(ind19loans);
                    console.log(ind19loans);
                    if (ind19loans == loanRangea) {
                        ind19loansa.push(ind19loans)
                        ind19jobsa.push(ind19jobs);
                    }
                    else if (ind19loans ==loanRangeb) {
                        ind19loansb.push(ind19loans)
                        ind19jobsb.push(ind19jobs);
                    }
                    else if (ind19loans ==loanRangec) {
                        ind19loansc.push(ind19loans)
                        ind19jobsc.push(ind19jobs);
                    }
                    else if (ind19loans ==loanRanged) {
                        ind19loansd.push(ind19loans)
                        ind19jobsd.push(ind19jobs);
                    }
                    else if (ind19loans ==loanRangee) {
                        ind19loanse.push(ind19loans)
                        ind19jobse.push(ind19jobs);
                    }
                    var ind19loansNames = (subArrays[j].BusinessName)
                    ind19loansNamelist.push(ind19loansNames);
                    var ind19jobs = parseInt(subArrays[j].JobsRetained);
                     ind19jobslist.push(ind19jobs);
                     ind19jobssum =(math.sum(ind19jobslist));
                }
                else if (subArrays[j].Industry == "Mining") {
                    var ind20loans = (subArrays[j].LoanRange);
                    ind20loanslist.push(ind20loans);
                    console.log(ind20loans);
                    if (ind20loans == loanRangea) {
                        ind20loansa.push(ind20loans)
                        ind20jobsa.push(ind20jobs);
                    }
                    else if (ind20loans ==loanRangeb) {
                        ind20loansb.push(ind20loans)
                        ind20jobsb.push(ind20jobs);
                    }
                    else if (ind20loans ==loanRangec) {
                        ind20loansc.push(ind20loans)
                        ind20jobsc.push(ind20jobs);
                    }
                    else if (ind20loans ==loanRanged) {
                        ind20loansd.push(ind20loans)
                        ind20jobsd.push(ind20jobs);
                    }
                    else if (ind20loans ==loanRangee) {
                        ind20loanse.push(ind20loans)
                        ind20jobse.push(ind20jobs);
                    }
                    var ind20loansNames = (subArrays[j].BusinessName)
                    ind20loansNamelist.push(ind20loansNames);
                    var ind20jobs = parseInt(subArrays[j].JobsRetained);
                     ind20jobslist.push(ind20jobs);
                     ind20jobssum =(math.sum(ind20jobslist));
                }
    }
    }

            console.log(totalJobsAllIndustry);
            
        // //Accomodation and Food Services
            console.log(ind1loanslist)
            console.log(ind1loansNamelist)
            console.log(ind1jobslist)
            console.log(ind1jobssum);

            console.log(ind1loansa)
            console.log(ind1loansb)
            console.log(ind1loansc)
            console.log(ind1loansd)
            console.log(ind1loanse)

            console.log(ind1jobsa)
            console.log(ind1jobsb)
            console.log(ind1jobsc)
            console.log(ind1jobsd)
            console.log(ind1jobse)

        // //Educational Services
          // console.log(ind2loanslist)
            // console.log(ind2loansNamelist)
        //     console.log(ind2jobslist)
        //     console.log(ind2jobssum);

        //     console.log(ind2loansa)
        //     console.log(ind2loansb)
        //     console.log(ind2loansc)
        //     console.log(ind2loansd)
        //     console.log(ind2loanse)

            // console.log(ind2jobsa)
            // console.log(ind2jobsb)
            // console.log(ind2jobsc)
            // console.log(ind2jobsd)
            // console.log(ind2jobse)

        // //Administrative and Support and Waste Management and Remediation Services
        //     console.log(ind3jobslist)
        //     console.log(ind3jobssum);

        //     console.log(ind3loansa)
        //     console.log(ind3loansb)
        //     console.log(ind3loansc)
        //     console.log(ind3loansd)
        //     console.log(ind3loanse)

            // console.log(ind3jobsa)
            // console.log(ind3jobsb)
            // console.log(ind3jobsc)
            // console.log(ind3jobsd)
            // console.log(ind3jobse)

        // // Professional, Scientific, and Technical Services
        //     console.log(ind4jobslist)
        //     console.log(ind4jobssum);

        //     console.log(ind4loansa)
        //     console.log(ind4loansb)
        //     console.log(ind4loansc)
        //     console.log(ind4loansd)
        //     console.log(ind4loanse)

            // console.log(ind4jobsa)
            // console.log(ind4jobsb)
            // console.log(ind4jobsc)
            // console.log(ind4jobsd)
            // console.log(ind4jobse)

        // //Manufacturing
        //     console.log(ind5jobslist)
        //     console.log(ind5jobssum);

        //     console.log(ind5loansa)
        //     console.log(ind5loansb)
        //     console.log(ind5loansc)
        //     console.log(ind5loansd)
        //     console.log(ind5loanse)

        //     console.log(ind5jobsa)
        //     console.log(ind5jobsb)
        //     console.log(ind5jobsc)
        //     console.log(ind5jobsd)
        //     console.log(ind5jobse)
        
        // //Construction
        //     console.log(ind6jobslist)
        //     console.log(ind6jobssum);

        //     console.log(ind6loansa)
        //     console.log(ind6loansb)
        //     console.log(ind6loansc)
        //     console.log(ind6loansd)
        //     console.log(ind6loanse)

        //     console.log(ind6jobsa)
        //     console.log(ind6jobsb)
        //     console.log(ind6jobsc)
        //     console.log(ind6jobsd)
        //     console.log(ind6jobse)

        // //Health Care and Social Assistance
        //     console.log(ind7jobslist)
        //     console.log(ind7jobssum);

        //     console.log(ind7loansa)
        //     console.log(ind7loansb)
        //     console.log(ind7loansc)
        //     console.log(ind7loansd)
        //     console.log(ind7loanse)

        //     console.log(ind7jobsa)
        //     console.log(ind7jobsb)
        //     console.log(ind7jobsc)
        //     console.log(ind7jobsd)
        //     console.log(ind7jobse)
        
        // //Wholesale Trade
        //     console.log(ind8jobslist)
        //     console.log(ind8jobssum);

        //     console.log(ind8loansa)
        //     console.log(ind8loansb)
        //     console.log(ind8loansc)
        //     console.log(ind8loansd)
        //     console.log(ind8loanse)

        //     console.log(ind8jobsa)
        //     console.log(ind8jobsb)
        //     console.log(ind8jobsc)
        //     console.log(ind8jobsd)
        //     console.log(ind8jobse)
        
        // //Information
        //     console.log(ind9jobslist)
        //     console.log(ind9jobssum);

        //     console.log(ind9loansa)
        //     console.log(ind9loansb)
        //     console.log(ind9loansc)
        //     console.log(ind9loansd)
        //     console.log(ind9loanse)

        //     console.log(ind9jobsa)
        //     console.log(ind9jobsb)
        //     console.log(ind9jobsc)
        //     console.log(ind9jobsd)
        //     console.log(ind9jobse)

        // //Finance and Insurance
        //     console.log(ind10jobslist)
        //     console.log(ind10jobssum);

        //     console.log(ind10loansa)
        //     console.log(ind10loansb)
        //     console.log(ind10loansc)
        //     console.log(ind10loansd)
        //     console.log(ind10loanse)

        //     console.log(ind10jobsa)
        //     console.log(ind10jobsb)
        //     console.log(ind10jobsc)
        //     console.log(ind10jobsd)
        //     console.log(ind10jobse)
   



// switch(dataset) {
//     case "ind1":
    // if (selection == "Accomodation and Food Services") {
        var ind1loanslistAll =ind1loanslist
        console.log(ind1loanslistAll);
        var ind1BusinessNameslist = ind1loansNamelist;
        console.log(ind1BusinessNameslist);
        //list of jobs counts for each loan for ind1
        var ind1jobstotallist = ind1jobslist;
        console.log(ind1jobstotallist.length);
        //sum of jobs counts for all loans for ind1
        var ind1jobstotal = ind1jobssum; //sum # jobs for All Loans in Industry
        console.log(ind1jobstotal);
        //array with number of loans for each loan range for ind1
        var ind1loanRanges =  [ind1loansa, ind1loansb, ind1loansc, ind1loansd, ind1loanse];
        var ind1loanRanges_length = ind1loanRanges.map(item => item.length); //number loans each loan range 
        console.log(ind1loanRanges_length);
        //array with list of jobs for each loan range for ind1
        var ind1jobscount = [ind1jobsa, ind1jobsb, ind1jobsc, ind1jobsd, ind1jobse];
        //array with sum of jobs for each range in ind1
        var ind1jobscount_sum = ind1jobscount.map((item) =>math.sum(item)); //sum # Jobs Retained each loan range
        console.log(ind1jobscount_sum);

    // case "ind2":
    // if (selection == "Educational Services") {
        var ind2loanslistAll =ind2loanslist
        var ind2BusinessNameslist = ind2loansNamelist;
        //list of job counts for each loan for ind2
        var ind2jobstotallist = ind2jobslist;
        //sum of jobs counts for all loans for ind2
        var ind2jobstotal = ind2jobssum;
        //array with number of loans for each loan range for ind2
        var ind2loanRanges =  [ind2loansa, ind2loansb, ind2loansc, ind2loansd, ind2loanse];
        var ind2loanRanges_length = ind2loanRanges.map(item => item.length);
        //array with list number of jobs for each loan range for ind2
        var ind2jobscount = [ind2jobsa, ind2jobsb, ind2jobsc, ind2jobsd, ind2jobse];
        var ind2jobscount_sum = ind2jobscount.map((item) =>math.sum(item));

    // case "ind3":
    // if (selection == "Administrative and Support and Waste Management and Remediation Services") {
        var ind3loanslistAll =ind3loanslist
        var ind3BusinessNameslist = ind3loansNamelist;
        //list of job counts for each loan for ind3    
        var ind3jobstotallist = ind3jobslist;
        //sum of jobs counts for all loans for ind3
        var ind3jobstotal = ind3jobssum;
        //array with number of loans for each loan range for ind3
        var ind3loanRanges =  [ind3loansa, ind3loansb, ind3loansc, ind3loansd, ind3loanse];
        var ind3loanRanges_length = ind3loanRanges.map(item => item.length);
        //array with list number of jobs for each loan range for ind3
        var ind3jobscount = [ind3jobsa, ind3jobsb, ind3jobsc, ind3jobsd, ind3jobse];
        var ind3jobscount_sum = ind3jobscount.map((item) =>math.sum(item));


    // case "ind4":
    // if (selection == "Professional, Scientific, and Technical Services") {
        var ind4loanslistAll =ind4loanslist
        var ind4BusinessNameslist = ind4loansNamelist;
        //list of job counts for each loan for ind4   
        var ind4jobstotallist = ind4jobslist;
        //sum of jobs counts for all loans for ind4
        var ind4jobstotal = ind4jobssum;
        //array with number of loans for each loan range for ind4
        var ind4loanRanges =  [ind4loansa, ind4loansb, ind4loansc, ind4loansd, ind4loanse];
        var ind4loanRanges_length = ind4loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind4
        var ind4jobscount = [ind4jobsa, ind4jobsb, ind4jobsc, ind4jobsd, ind4jobse];
        var ind4jobscount_sum = ind4jobscount.map((item) =>math.sum(item));


    // case "ind5":
    // if (selection == "Manufacturing") {
        var ind5loanslistAll =ind5loanslist
        var ind5BusinessNameslist = ind5loansNamelist;
        //list of job counts for each loan for ind5   
        var ind5jobstotallist = ind5jobslist;
        //sum of jobs counts for all loans for ind5
        var ind5jobstotal = ind5jobssum;
        //array with number of loans for each loan range for ind5
        var ind5loanRanges =  [ind5loansa, ind5loansb, ind5loansc, ind5loansd, ind5loanse];
        var ind5loanRanges_length = ind5loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind5
        var ind5jobscount = [ind5jobsa, ind5jobsb, ind5jobsc, ind5jobsd, ind5jobse];
        var ind5jobscount_sum = ind5jobscount.map((item) =>math.sum(item));


         // case "ind6":
        // if (selection == "Construction") {
        var ind6loanslistAll =ind6loanslist
        var ind6BusinessNameslist = ind5loansNamelist;
        //list of job counts for each loan for ind6   
        var ind6jobstotallist = ind6jobslist;
        //sum of jobs counts for all loans for ind6
        var ind6jobstotal = ind6jobssum;
        //array with number of loans for each loan range for ind6
        var ind6loanRanges =  [ind6loansa, ind6loansb, ind6loansc, ind6loansd, ind6loanse];
        var ind6loanRanges_length = ind6loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind6
        var ind6jobscount = [ind6jobsa, ind6jobsb, ind6jobsc, ind6jobsd, ind6jobse];
        var ind6jobscount_sum = ind6jobscount.map((item) =>math.sum(item));

        // case "ind7":
        //if (selection == "Health Care and Social Assistance") {
        var ind7loanslistAll =ind7loanslist
        var ind7BusinessNameslist = ind7loansNamelist;
        //list of job counts for each loan for ind7   
        var ind7jobstotallist = ind7jobslist;
        //sum of jobs counts for all loans for ind7
        var ind7jobstotal = ind7jobssum;
        //array with number of loans for each loan range for ind7
        var ind7loanRanges =  [ind7loansa, ind7loansb, ind7loansc, ind7loansd, ind7loanse];
        var ind7loanRanges_length = ind7loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind7
        var ind7jobscount = [ind7jobsa, ind7jobsb, ind7jobsc, ind7jobsd, ind7jobse];
        var ind7jobscount_sum = ind7jobscount.map((item) =>math.sum(item));
        
                // case "ind8":
        // if (selection == "Wholesale Trade") {
        var ind8loanslistAll =ind8loanslist
        var ind8BusinessNameslist = ind8loansNamelist;
        //list of job counts for each loan for ind8   
        var ind8jobstotallist = ind8jobslist;
        //sum of jobs counts for all loans for ind8
        var ind8jobstotal = ind8jobssum;
        //array with number of loans for each loan range for ind8
        var ind8loanRanges =  [ind8loansa, ind8loansb, ind8loansc, ind8loansd, ind8loanse];
        var ind8loanRanges_length = ind8loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind8
        var ind8jobscount = [ind8jobsa, ind8jobsb, ind8jobsc, ind8jobsd, ind8jobse];
        var ind8jobscount_sum = ind8jobscount.map((item) =>math.sum(item));

                        // case "ind9":
        // if (selection == "Information") {
        var ind9loanslistAll =ind9loanslist
        var ind9BusinessNameslist = ind9loansNamelist;
        //list of job counts for each loan for ind9  
        var ind9jobstotallist = ind9jobslist;
        //sum of jobs counts for all loans for ind9
        var ind9jobstotal = ind9jobssum;
        //array with number of loans for each loan range for ind9
        var ind9loanRanges =  [ind9loansa, ind9loansb, ind9loansc, ind9loansd, ind9loanse];
        var ind9loanRanges_length = ind9loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind9
        var ind9jobscount = [ind9jobsa, ind9jobsb, ind9jobsc, ind9jobsd, ind9jobse];
        var ind9jobscount_sum = ind9jobscount.map((item) =>math.sum(item));

                                // case "ind10":
        // if (selection == "Finance and Insurance") {
        var ind10loanslistAll =ind10loanslist
        var ind10BusinessNameslist = ind10loansNamelist;
        //list of job counts for each loan for ind10   
        var ind10jobstotallist = ind10jobslist;
        //sum of jobs counts for all loans for ind10
        var ind10jobstotal = ind10jobssum;
        //array with number of loans for each loan range for ind10
        var ind10loanRanges =  [ind10loansa, ind10loansb, ind10loansc, ind10loansd, ind9loanse];
        var ind10loanRanges_length = ind10loanRanges.map(item => item.length);
        console.log(ind10loanRanges_length);
        //array with total number of jobs for each loan range for ind10
        var ind10jobscount = [ind10jobsa, ind10jobsb, ind10jobsc, ind10jobsd, ind10jobse];
        var ind10jobscount_sum = ind10jobscount.map((item) =>math.sum(item));


        // if (selection == "Other Services (except Public Administration)") {
        var ind11loanslistAll =ind11loanslist
        var ind11BusinessNameslist = ind11loansNamelist;
        //list of jobs counts for each loan for ind11
        var ind11jobstotallist = ind11jobslist;
        //sum of jobs counts for all loans for ind11
        var ind11jobstotal = ind11jobssum; //sum # jobs for All Loans in Industry
        //array with number of loans for each loan range for ind11
        var ind11loanRanges =  [ind11loansa, ind11loansb, ind11loansc, ind11loansd, ind11loanse];
        var ind11loanRanges_length = ind11loanRanges.map(item => item.length); //number loans each loan range 
        //array with list of jobs for each loan range for ind11
        var ind11jobscount = [ind11jobsa, ind11jobsb, ind11jobsc, ind11jobsd, ind11jobse];
        //array with sum of jobs for each range in ind11
        var ind11jobscount_sum = ind11jobscount.map((item) =>math.sum(item)); //sum # Jobs Retained each loan range

    // case "ind12":
    // if (selection == "Arts, Entertainment, and Recreation") {
        var ind12loanslistAll =ind12loanslist
        var ind12BusinessNameslist = ind12loansNamelist;
        //list of job counts for each loan for ind12
        var ind12jobstotallist = ind12jobslist;
        //sum of jobs counts for all loans for ind12
        var ind12jobstotal = ind12jobssum;
        //array with number of loans for each loan range for ind12
        var ind12loanRanges =  [ind12loansa, ind12loansb, ind12loansc, ind12loansd, ind12loanse];
        var ind12loanRanges_length = ind12loanRanges.map(item => item.length);
        //array with list number of jobs for each loan range for ind12
        var ind12jobscount = [ind12jobsa, ind12jobsb, ind12jobsc, ind12jobsd, ind12jobse];
        var ind12jobscount_sum = ind12jobscount.map((item) =>math.sum(item));

    // case "ind13":
    // if (selection == "Retail Trade") {
        var ind13loanslistAll =ind13loanslist
        var ind13BusinessNameslist = ind13loansNamelist;
        //list of job counts for each loan for ind13    
        var ind13jobstotallist = ind13jobslist;
        //sum of jobs counts for all loans for ind13
        var ind13jobstotal = ind13jobssum;
        //array with number of loans for each loan range for ind13
        var ind13loanRanges =  [ind13loansa, ind13loansb, ind13loansc, ind13loansd, ind13loanse];
        var ind13loanRanges_length = ind13loanRanges.map(item => item.length);
        //array with list number of jobs for each loan range for ind13
        var ind13jobscount = [ind13jobsa, ind13jobsb, ind13jobsc, ind13jobsd, ind13jobse];
        var ind13jobscount_sum = ind13jobscount.map((item) =>math.sum(item));


    // case "ind14":
    // if (selection == "Real Estate Rental and Leasing") {
        var ind14loanslistAll =ind14loanslist
        var ind14BusinessNameslist = ind14loansNamelist;
        //list of job counts for each loan for ind14   
        var ind14jobstotallist = ind14jobslist;
        //sum of jobs counts for all loans for ind14
        var ind14jobstotal = ind14jobssum;
        //array with number of loans for each loan range for ind14
        var ind14loanRanges =  [ind14loansa, ind14loansb, ind14loansc, ind14loansd, ind14loanse];
        var ind14loanRanges_length = ind14loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind14
        var ind14jobscount = [ind14jobsa, ind14jobsb, ind14jobsc, ind14jobsd, ind14jobse];
        var ind14jobscount_sum = ind14jobscount.map((item) =>math.sum(item));


    // case "ind15":
    // if (selection == "Transportation and Warehousing") {
        var ind15loanslistAll =ind15loanslist
        var ind15BusinessNameslist = ind15loansNamelist;
        //list of job counts for each loan for ind15   
        var ind15jobstotallist = ind15jobslist;
        //sum of jobs counts for all loans for ind15
        var ind15jobstotal = ind15jobssum;
        //array with number of loans for each loan range for ind15
        var ind15loanRanges =  [ind15loansa, ind15loansb, ind15loansc, ind15loansd, ind15loanse];
        var ind15loanRanges_length = ind15loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind15
        var ind15jobscount = [ind15jobsa, ind15jobsb, ind15jobsc, ind15jobsd, ind15jobse];
        var ind15jobscount_sum = ind15jobscount.map((item) =>math.sum(item));


         // case "ind16":
        // if (selection == "Public Administration") {
        var ind16loanslistAll =ind16loanslist
        var ind16BusinessNameslist = ind5loansNamelist;
        //list of job counts for each loan for ind16   
        var ind16jobstotallist = ind16jobslist;
        //sum of jobs counts for all loans for ind16
        var ind16jobstotal = ind16jobssum;
        //array with number of loans for each loan range for ind16
        var ind16loanRanges =  [ind16loansa, ind16loansb, ind16loansc, ind16loansd, ind16loanse];
        var ind16loanRanges_length = ind16loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind16
        var ind16jobscount = [ind16jobsa, ind16jobsb, ind16jobsc, ind16jobsd, ind16jobse];
        var ind16jobscount_sum = ind16jobscount.map((item) =>math.sum(item));

        // case "ind17":
        //if (selection == "Agriculture, Forestry, Fishing and Hunting") {
        var ind17loanslistAll =ind17loanslist
        var ind17BusinessNameslist = ind17loansNamelist;
        //list of job counts for each loan for ind17   
        var ind17jobstotallist = ind17jobslist;
        //sum of jobs counts for all loans for ind17
        var ind17jobstotal = ind17jobssum;
        //array with number of loans for each loan range for ind17
        var ind17loanRanges =  [ind17loansa, ind17loansb, ind17loansc, ind17loansd, ind17loanse];
        var ind17loanRanges_length = ind17loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind17
        var ind17jobscount = [ind17jobsa, ind17jobsb, ind17jobsc, ind17jobsd, ind17jobse];
        var ind17jobscount_sum = ind17jobscount.map((item) =>math.sum(item));
        
                // case "ind18":
        // if (selection == "Utilities") {
        var ind18loanslistAll =ind18loanslist
        var ind18BusinessNameslist = ind18loansNamelist;
        //list of job counts for each loan for ind18   
        var ind18jobstotallist = ind18jobslist;
        //sum of jobs counts for all loans for ind18
        var ind18jobstotal = ind18jobssum;
        //array with number of loans for each loan range for ind18
        var ind18loanRanges =  [ind18loansa, ind18loansb, ind18loansc, ind18loansd, ind18loanse];
        var ind18loanRanges_length = ind18loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind18
        var ind18jobscount = [ind18jobsa, ind18jobsb, ind18jobsc, ind18jobsd, ind18jobse];
        var ind18jobscount_sum = ind18jobscount.map((item) =>math.sum(item));

                        // case "ind19":
        // if (selection == "Management of Companies and Enterprises",) {
        var ind19loanslistAll =ind19loanslist
        var ind19BusinessNameslist = ind19loansNamelist;
        //list of job counts for each loan for ind19  
        var ind19jobstotallist = ind19jobslist;
        //sum of jobs counts for all loans for ind19
        var ind19jobstotal = ind19jobssum;
        //array with number of loans for each loan range for ind19
        var ind19loanRanges =  [ind19loansa, ind19loansb, ind19loansc, ind19loansd, ind19loanse];
        var ind19loanRanges_length = ind19loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind19
        var ind19jobscount = [ind19jobsa, ind19jobsb, ind19jobsc, ind19jobsd, ind19jobse];
        var ind19jobscount_sum = ind19jobscount.map((item) =>math.sum(item));

                                // case "ind20":
        // if (selection == "Mining") {
        var ind20loanslistAll =ind20loanslist
        var ind20BusinessNameslist = ind20loansNamelist;
        //list of job counts for each loan for ind20   
        var ind20jobstotallist = ind20jobslist;
        //sum of jobs counts for all loans for ind20
        var ind20jobstotal = ind20jobssum;
        //array with number of loans for each loan range for ind20
        var ind20loanRanges =  [ind20loansa, ind20loansb, ind20loansc, ind20loansd, ind20loanse];
        var ind20loanRanges_length = ind20loanRanges.map(item => item.length);
        console.log(ind20loanRanges_length);
        //array with total number of jobs for each loan range for ind20
        var ind20jobscount = [ind20jobsa, ind20jobsb, ind20jobsc, ind20jobsd, ind20jobse];
        var ind20jobscount_sum = ind20jobscount.map((item) =>math.sum(item));



         //adds all Jobs Retained from Loan range a 
         var indJobsCountRangea = (ind1jobscount_sum[0] + ind2jobscount_sum[0] + ind3jobscount_sum[0] + ind4jobscount_sum[0] + ind5jobscount_sum[0] + ind6jobscount_sum[0] + ind7jobscount_sum[0] + ind8jobscount_sum[0] + ind9jobscount_sum[0] + ind10jobscount_sum[0] + ind11jobscount_sum[0] + ind12jobscount_sum[0] + ind13jobscount_sum[0] + ind14jobscount_sum[0] + ind15jobscount_sum[0] + ind16jobscount_sum[0] + ind17jobscount_sum[0] + ind18jobscount_sum[0] + ind19jobscount_sum[0] + ind20jobscount_sum[0]);
         console.log(indJobsCountRangea);
         //adds all Jobs Retained from Loan range b
         var indJobsCountRangeb = (ind1jobscount_sum[1] + ind2jobscount_sum[1] + ind3jobscount_sum[1] + ind4jobscount_sum[1] + ind5jobscount_sum[1] + ind6jobscount_sum[1] + ind7jobscount_sum[1] + ind8jobscount_sum[1] + ind9jobscount_sum[1] + ind10jobscount_sum[1] + ind11jobscount_sum[1] + ind12jobscount_sum[1] + ind13jobscount_sum[1] + ind14jobscount_sum[1] + ind15jobscount_sum[1] + ind16jobscount_sum[1] + ind17jobscount_sum[1] + ind18jobscount_sum[1] + ind19jobscount_sum[1] + ind20jobscount_sum[1]);
         console.log(indJobsCountRangeb);
         //adds all Jobs Retained from Loan range c
         var indJobsCountRangec = (ind1jobscount_sum[2] + ind2jobscount_sum[2] + ind3jobscount_sum[2] + ind4jobscount_sum[2] + ind5jobscount_sum[2] + ind6jobscount_sum[2] + ind7jobscount_sum[2] + ind8jobscount_sum[2] + ind9jobscount_sum[2] + ind10jobscount_sum[2] + ind11jobscount_sum[2] + ind12jobscount_sum[2] + ind13jobscount_sum[2] + ind14jobscount_sum[2] + ind15jobscount_sum[2] + ind16jobscount_sum[2] + ind17jobscount_sum[2] + ind18jobscount_sum[2] + ind19jobscount_sum[2] + ind20jobscount_sum[2]);
         console.log(indJobsCountRangec);
         //adds all Jobs Retained from Loan range d
         var indJobsCountRanged = (ind1jobscount_sum[3] + ind2jobscount_sum[3] + ind3jobscount_sum[3] + ind4jobscount_sum[3] + ind5jobscount_sum[3] + ind6jobscount_sum[3] + ind7jobscount_sum[3] + ind8jobscount_sum[3] + ind9jobscount_sum[3] + ind10jobscount_sum[3] + ind11jobscount_sum[3] + ind12jobscount_sum[3] + ind13jobscount_sum[3] + ind14jobscount_sum[3] + ind15jobscount_sum[3] + ind16jobscount_sum[3] + ind17jobscount_sum[3] + ind18jobscount_sum[3] + ind19jobscount_sum[3] + ind20jobscount_sum[3]);
         console.log(indJobsCountRanged);
         //adds all Jobs Retained from Loan range e
         var indJobsCountRangee = (ind1jobscount_sum[4] + ind2jobscount_sum[4] + ind3jobscount_sum[4] + ind4jobscount_sum[4] + ind5jobscount_sum[4] + ind6jobscount_sum[4] + ind7jobscount_sum[4] + ind8jobscount_sum[4] + ind9jobscount_sum[4] + ind10jobscount_sum[4] + ind11jobscount_sum[4] + ind12jobscount_sum[4] + ind13jobscount_sum[4] + ind14jobscount_sum[4] + ind15jobscount_sum[4] + ind16jobscount_sum[4] + ind17jobscount_sum[4] + ind18jobscount_sum[4] + ind19jobscount_sum[4] + ind20jobscount_sum[4]);
         console.log(indJobsCountRangee);

        //total # of Jobs ALL
        var indJobsCountRangeAll = (indJobsCountRangea + indJobsCountRangeb + indJobsCountRangec + indJobsCountRanged + indJobsCountRangee)
        console.log(indJobsCountRangeAll);

        var ind1JobsPercent = ((ind1jobstotal/indJobsCountRangeAll)* 100)
        var ind2JobsPercent = ((ind2jobstotal/indJobsCountRangeAll)* 100)
        var ind3JobsPercent = ((ind3jobstotal/indJobsCountRangeAll)* 100)
        var ind4JobsPercent = ((ind4jobstotal/indJobsCountRangeAll)* 100)
        var ind5JobsPercent = ((ind5jobstotal/indJobsCountRangeAll)* 100)
        var ind6JobsPercent = ((ind6jobstotal/indJobsCountRangeAll)* 100)
        var ind7JobsPercent = ((ind7jobstotal/indJobsCountRangeAll)* 100)
        var ind8JobsPercent = ((ind8jobstotal/indJobsCountRangeAll)* 100)
        var ind9JobsPercent = ((ind9jobstotal/indJobsCountRangeAll)* 100)
        var ind10JobsPercent = ((ind10jobstotal/indJobsCountRangeAll)* 100)
        var ind11JobsPercent = ((ind11jobstotal/indJobsCountRangeAll)* 100)
        var ind12JobsPercent = ((ind12jobstotal/indJobsCountRangeAll)* 100)
        var ind13JobsPercent = ((ind13jobstotal/indJobsCountRangeAll)* 100)
        var ind14JobsPercent = ((ind14jobstotal/indJobsCountRangeAll)* 100)
        var ind15JobsPercent = ((ind15jobstotal/indJobsCountRangeAll)* 100)
        var ind16JobsPercent = ((ind16jobstotal/indJobsCountRangeAll)* 100)
        var ind17JobsPercent = ((ind17jobstotal/indJobsCountRangeAll)* 100)
        var ind18JobsPercent = ((ind18jobstotal/indJobsCountRangeAll)* 100)
        var ind19JobsPercent = ((ind19jobstotal/indJobsCountRangeAll)* 100)
        var ind20JobsPercent = ((ind20jobstotal/indJobsCountRangeAll)* 100)

    
        //adds all Loans from Loan range a 
        var indLoansCountRangea = (ind1loanRanges_length[0] + ind2loanRanges_length[0] + ind3loanRanges_length[0] + ind4loanRanges_length[0] + ind5loanRanges_length[0] + ind6loanRanges_length[0] + ind7loanRanges_length[0] + ind8loanRanges_length[0] + ind9loanRanges_length[0] + ind10loanRanges_length[0] + ind11loanRanges_length[0] + ind12loanRanges_length[0] + ind13loanRanges_length[0] + ind14loanRanges_length[0] + ind15loanRanges_length[0] + ind16loanRanges_length[0] + ind17loanRanges_length[0] + ind18loanRanges_length[0] + ind19loanRanges_length[0] + ind20loanRanges_length[0])
        //adds all Loans from Loan range b
        var indLoansCountRangeb = (ind1loanRanges_length[1] + ind2loanRanges_length[1] + ind3loanRanges_length[1] + ind4loanRanges_length[1] + ind5loanRanges_length[1] + ind6loanRanges_length[1] + ind7loanRanges_length[1] + ind8loanRanges_length[1] + ind9loanRanges_length[1] + ind10loanRanges_length[1] + ind11loanRanges_length[1] + ind12loanRanges_length[1] + ind13loanRanges_length[1] + ind14loanRanges_length[1] + ind15loanRanges_length[1] + ind16loanRanges_length[1] + ind17loanRanges_length[1] + ind18loanRanges_length[1] + ind19loanRanges_length[1] + ind20loanRanges_length[1])
        //adds all Loans from Loan range c
        var indLoansCountRangec = (ind1loanRanges_length[2] + ind2loanRanges_length[2] + ind3loanRanges_length[2] + ind4loanRanges_length[2] + ind5loanRanges_length[2] + ind6loanRanges_length[2] + ind7loanRanges_length[2] + ind8loanRanges_length[2] + ind9loanRanges_length[2] + ind10loanRanges_length[2] + ind11loanRanges_length[2] + ind12loanRanges_length[2] + ind13loanRanges_length[2] + ind14loanRanges_length[2] + ind15loanRanges_length[2] + ind16loanRanges_length[2] + ind17loanRanges_length[2] + ind18loanRanges_length[2] + ind19loanRanges_length[2] + ind20loanRanges_length[2])
        //adds all Loans from Loan range d 
        var indLoansCountRanged = (ind1loanRanges_length[3] + ind2loanRanges_length[3] + ind3loanRanges_length[3] + ind4loanRanges_length[3] + ind5loanRanges_length[3] + ind6loanRanges_length[3] + ind7loanRanges_length[3] + ind8loanRanges_length[3] + ind9loanRanges_length[3] + ind10loanRanges_length[3] + ind11loanRanges_length[3] + ind12loanRanges_length[3] + ind13loanRanges_length[3] + ind14loanRanges_length[3] + ind15loanRanges_length[3] + ind16loanRanges_length[3] + ind17loanRanges_length[3] + ind18loanRanges_length[3] + ind19loanRanges_length[3] + ind20loanRanges_length[3])
        //adds all Loans from Loan range e
        var indLoansCountRangee = (ind1loanRanges_length[4] + ind2loanRanges_length[4] + ind3loanRanges_length[4] + ind4loanRanges_length[4] + ind5loanRanges_length[4] + ind6loanRanges_length[4] + ind7loanRanges_length[4] + ind8loanRanges_length[4] + ind9loanRanges_length[4] + ind10loanRanges_length[4] + ind11loanRanges_length[4] + ind12loanRanges_length[4] + ind13loanRanges_length[4] + ind14loanRanges_length[4] + ind15loanRanges_length[4] + ind16loanRanges_length[4] + ind17loanRanges_length[4] + ind18loanRanges_length[4] + ind19loanRanges_length[4] + ind20loanRanges_length[4])

        //total loans
        var indLoansCountRangeTotal = (indLoansCountRangea + indLoansCountRangeb + indLoansCountRangec + indLoansCountRanged + indLoansCountRangee)
        console.log(indLoansCountRangeTotal);
        // a loans percentage
        var loanPercentRangeA = ((indLoansCountRangea/indLoansCountRangeTotal)* 100)
        console.log(loanPercentRangeA)
         // b loans percentage
         var loanPercentRangeB = ((indLoansCountRangeb/indLoansCountRangeTotal)* 100)
         console.log(loanPercentRangeB)
          // c loans percentage
        var loanPercentRangeC = ((indLoansCountRangec/indLoansCountRangeTotal)* 100)
        console.log(loanPercentRangeC)
         // d loans percentage
         var loanPercentRangeD = ((indLoansCountRanged/indLoansCountRangeTotal)* 100)
         console.log(loanPercentRangeD)
          // e loans percentage
        var loanPercentRangeE = ((indLoansCountRangee/indLoansCountRangeTotal)* 100)
        console.log(loanPercentRangeE)
        
        
        ind1loansPercentofTotal = (((ind1loanslistAll.length)/indLoansCountRangeTotal)*100)
        console.log(ind1loansPercentofTotal);
        ind2loansPercentofTotal = (((ind2loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind3loansPercentofTotal = (((ind3loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind4loansPercentofTotal = (((ind4loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind5loansPercentofTotal = (((ind5loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind6loansPercentofTotal = (((ind6loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind7loansPercentofTotal = (((ind7loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind8loansPercentofTotal = (((ind8loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind9loansPercentofTotal = (((ind9loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind10loansPercentofTotal = (((ind10loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind11loansPercentofTotal = (((ind11loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind12loansPercentofTotal = (((ind12loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind13loansPercentofTotal = (((ind13loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind14loansPercentofTotal = (((ind14loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind15loansPercentofTotal = (((ind15loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind16loansPercentofTotal = (((ind16loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind17loansPercentofTotal = (((ind17loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind18loansPercentofTotal = (((ind18loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind19loansPercentofTotal = (((ind19loanslistAll.length)/indLoansCountRangeTotal)*100)
        ind20loansPercentofTotal = (((ind20loanslistAll.length)/indLoansCountRangeTotal)*100)


        var industrylist = industries; // list of ALL industry names in order as shown in log 31 (20)
        var LoanRanges = ["a $5-10 million", "b $2-5 million", "c $1-2 million", "d $350,000-1 million", "e $150,000-350,000"]

        //doughnut jobs retained per Loan Range Totals
        var chart = new CanvasJS.Chart("chartContainer4",{
            theme: "light1",
            exportEnabled: true,
            animationEnabled: true,
            title:{
                text: "# Jobs Retained Per Loan Range All Industry",
                fontFamily: "sans-serif",
                fontSize: 20,
            },
            data: [{
                type: "doughnut",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: [
                    { label: LoanRanges[0], y: indJobsCountRangea},
                    { label: LoanRanges[1], y: indJobsCountRangeb},
                    { label: LoanRanges[2], y: indJobsCountRangec},
                    { label: LoanRanges[3], y: indJobsCountRanged},
                    { label: LoanRanges[4], y: indJobsCountRangee}
                ]
            }]
    });
    chart.render();

    //pie industry // for select industry page // percentages
    var chart = new CanvasJS.Chart("chartContainer5", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "# Loans Per Loan Range All Industry",
            fontFamily: "sans-serif",
            fontSize: 20,
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
                { label: LoanRanges[0], y: indLoansCountRangea},
                { label: LoanRanges[1], y: indLoansCountRangeb},
                { label: LoanRanges[2], y: indLoansCountRangec},
                { label: LoanRanges[3], y: indLoansCountRanged},
                { label: LoanRanges[4], y: indLoansCountRangee},
            ]
        }]
    });
    chart.render();

     //stackedbar3
     var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        theme: "light1",
        title:{
            text: "# of Loans Per Industry Each Range",
            fontFamily: "sans-serif",
            fontSize: 20,
        },
        axisY:{
            labelFontSize: 12,
          },
        axisX:{
            labelFontSize: 12,
            interval: 1,
            reversed:  true
          },
        toolTip: {
            shared: true
        },
        data: [{
            type: "stackedBar",
            name: LoanRanges[0],
            showInLegend: "true",
            dataPoints: [
                { label: industrylist[0], y: ind1loanRanges_length[0]},
                { label: industrylist[1], y: ind2loanRanges_length[0]},
                { label: industrylist[2], y: ind3loanRanges_length[0]},
                { label: industrylist[3], y: ind4loanRanges_length[0]},
                { label: industrylist[4], y: ind5loanRanges_length[0]},
                { label: industrylist[5], y: ind6loanRanges_length[0]},
                { label: industrylist[6], y: ind7loanRanges_length[0]},
                { label: industrylist[7], y: ind8loanRanges_length[0]},
                { label: industrylist[8], y: ind9loanRanges_length[0]},
                { label: industrylist[9], y: ind10loanRanges_length[0]},
                { label: industrylist[10], y: ind11loanRanges_length[0]},
                { label: industrylist[11], y: ind12loanRanges_length[0]},
                { label: industrylist[12], y: ind13loanRanges_length[0]},
                { label: industrylist[13], y: ind14loanRanges_length[0]},
                { label: industrylist[14], y: ind15loanRanges_length[0]},
                { label: industrylist[15], y: ind16loanRanges_length[0]},
                { label: industrylist[16], y: ind17loanRanges_length[0]},
                { label: industrylist[17], y: ind18loanRanges_length[0]},
                { label: industrylist[18], y: ind19loanRanges_length[0]},
                { label: industrylist[19], y: ind20loanRanges_length[0]},
            ]
        },
        {
            type: "stackedBar",
            name: LoanRanges[1],
            showInLegend: "true",
            dataPoints: [
                { label: industrylist[0], y: ind1loanRanges_length[1]},
                { label: industrylist[1], y: ind2loanRanges_length[1]},
                { label: industrylist[2], y: ind3loanRanges_length[1]},
                { label: industrylist[3], y: ind4loanRanges_length[1]},
                { label: industrylist[4], y: ind5loanRanges_length[1]},
                { label: industrylist[5], y: ind6loanRanges_length[1]},
                { label: industrylist[6], y: ind7loanRanges_length[1]},
                { label: industrylist[7], y: ind8loanRanges_length[1]},
                { label: industrylist[8], y: ind9loanRanges_length[1]},
                { label: industrylist[9], y: ind10loanRanges_length[1]},
                { label: industrylist[10], y: ind11loanRanges_length[1]},
                { label: industrylist[11], y: ind12loanRanges_length[1]},
                { label: industrylist[12], y: ind13loanRanges_length[1]},
                { label: industrylist[13], y: ind14loanRanges_length[1]},
                { label: industrylist[14], y: ind15loanRanges_length[1]},
                { label: industrylist[15], y: ind16loanRanges_length[1]},
                { label: industrylist[16], y: ind17loanRanges_length[1]},
                { label: industrylist[17], y: ind18loanRanges_length[1]},
                { label: industrylist[18], y: ind19loanRanges_length[1]},
                { label: industrylist[19], y: ind20loanRanges_length[1]},
            ]
        },
        {
            type: "stackedBar",
            name: LoanRanges[2],
            showInLegend: "true",
            dataPoints: [
                { label: industrylist[0], y: ind1loanRanges_length[2]},
                { label: industrylist[1], y: ind2loanRanges_length[2]},
                { label: industrylist[2], y: ind3loanRanges_length[2]},
                { label: industrylist[3], y: ind4loanRanges_length[2]},
                { label: industrylist[4], y: ind5loanRanges_length[2]},
                { label: industrylist[5], y: ind6loanRanges_length[2]},
                { label: industrylist[6], y: ind7loanRanges_length[2]},
                { label: industrylist[7], y: ind8loanRanges_length[2]},
                { label: industrylist[8], y: ind9loanRanges_length[2]},
                { label: industrylist[9], y: ind10loanRanges_length[2]},
                { label: industrylist[10], y: ind11loanRanges_length[2]},
                { label: industrylist[11], y: ind12loanRanges_length[2]},
                { label: industrylist[12], y: ind13loanRanges_length[2]},
                { label: industrylist[13], y: ind14loanRanges_length[2]},
                { label: industrylist[14], y: ind15loanRanges_length[2]},
                { label: industrylist[15], y: ind16loanRanges_length[2]},
                { label: industrylist[16], y: ind17loanRanges_length[2]},
                { label: industrylist[17], y: ind18loanRanges_length[2]},
                { label: industrylist[18], y: ind19loanRanges_length[2]},
                { label: industrylist[19], y: ind20loanRanges_length[2]},
            ]
        },
        {
            type: "stackedBar",
            name: LoanRanges[3],
            showInLegend: "true",
            dataPoints: [
                { label: industrylist[0], y: ind1loanRanges_length[3]},
                { label: industrylist[1], y: ind2loanRanges_length[3]},
                { label: industrylist[2], y: ind3loanRanges_length[3]},
                { label: industrylist[3], y: ind4loanRanges_length[3]},
                { label: industrylist[4], y: ind5loanRanges_length[3]},
                { label: industrylist[5], y: ind6loanRanges_length[3]},
                { label: industrylist[6], y: ind7loanRanges_length[3]},
                { label: industrylist[7], y: ind8loanRanges_length[3]},
                { label: industrylist[8], y: ind9loanRanges_length[3]},
                { label: industrylist[9], y: ind10loanRanges_length[3]},
                { label: industrylist[10], y: ind11loanRanges_length[3]},
                { label: industrylist[11], y: ind12loanRanges_length[3]},
                { label: industrylist[12], y: ind13loanRanges_length[3]},
                { label: industrylist[13], y: ind14loanRanges_length[3]},
                { label: industrylist[14], y: ind15loanRanges_length[3]},
                { label: industrylist[15], y: ind16loanRanges_length[3]},
                { label: industrylist[16], y: ind17loanRanges_length[3]},
                { label: industrylist[17], y: ind18loanRanges_length[3]},
                { label: industrylist[18], y: ind19loanRanges_length[3]},
                { label: industrylist[19], y: ind20loanRanges_length[3]},
            ]
        },
        {
            type: "stackedBar",
            name: LoanRanges[4],
            showInLegend: "true",
            dataPoints: [
                { label: industrylist[0], y: ind1loanRanges_length[4]},
                { label: industrylist[1], y: ind2loanRanges_length[4]},
                { label: industrylist[2], y: ind3loanRanges_length[4]},
                { label: industrylist[3], y: ind4loanRanges_length[4]},
                { label: industrylist[4], y: ind5loanRanges_length[4]},
                { label: industrylist[5], y: ind6loanRanges_length[4]},
                { label: industrylist[6], y: ind7loanRanges_length[4]},
                { label: industrylist[7], y: ind8loanRanges_length[4]},
                { label: industrylist[8], y: ind9loanRanges_length[4]},
                { label: industrylist[9], y: ind10loanRanges_length[4]},
                { label: industrylist[10], y: ind11loanRanges_length[4]},
                { label: industrylist[11], y: ind12loanRanges_length[4]},
                { label: industrylist[12], y: ind13loanRanges_length[4]},
                { label: industrylist[13], y: ind14loanRanges_length[4]},
                { label: industrylist[14], y: ind15loanRanges_length[4]},
                { label: industrylist[15], y: ind16loanRanges_length[4]},
                { label: industrylist[16], y: ind17loanRanges_length[4]},
                { label: industrylist[17], y: ind18loanRanges_length[4]},
                { label: industrylist[18], y: ind19loanRanges_length[4]},
                { label: industrylist[19], y: ind20loanRanges_length[4]},
            ]
        },
    ]
    });
    chart.render();   

        // stackedbar1
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "# of Loans Per Loan Range",
                fontFamily: "sans-serif",
                fontSize: 20,
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "stackedBar",
                name: industrylist[0],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind1loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind1loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind1loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind1loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind1loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[1],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind2loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind2loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind2loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind2loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind2loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[2],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind3loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind3loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind3loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind3loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind3loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[3],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind4loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind4loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind4loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind4loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind4loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[4],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind5loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind5loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind5loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind5loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind5loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[5],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind6loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind6loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind6loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind6loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind6loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[6],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind7loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind7loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind7loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind7loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind7loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[7],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind8loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind8loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind8loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind8loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind8loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[8],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind9loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind9loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind9loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind9loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind9loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[9],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind10loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind10loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind10loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind10loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind10loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[10],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind11loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind11loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind11loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind11loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind11loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[11],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind12loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind12loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind12loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind12loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind12loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[12],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind13loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind13loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind13loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind13loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind13loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[13],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind14loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind14loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind14loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind14loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind14loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[14],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind15loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind15loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind15loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind15loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind15loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[15],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind16loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind16loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind16loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind16loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind16loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[16],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind17loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind17loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind17loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind17loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind17loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[17],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind18loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind18loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind18loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind18loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind18loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[18],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind19loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind19loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind19loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind19loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind19loanRanges_length[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[19],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind20loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind20loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind20loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind20loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind20loanRanges_length[4]},
                ]
            },
        ]
        });
        chart.render();

        //stacked bar 2
        var chart = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            theme: "light1",
            title:{
                text: "# of Jobs Retained Per Loan Range",
                fontFamily: "sans-serif",
                fontSize: 20,
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "stackedBar",
                name: industrylist[0],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind1jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind1jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind1jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind1jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind1jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[1],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind2jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind2jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind2jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind2jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind2jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[2],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind3jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind3jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind3jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind3jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind3jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[3],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind4jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind4jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind4jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind4jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind4jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[4],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind5jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind5jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind5jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind5jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind5jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[5],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind6jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind6jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind6jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind6jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind6jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[6],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind7jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind7jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind7jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind7jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind7jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[7],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind8jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind8jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind8jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind8jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind8jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[8],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind9jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind9jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind9jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind9jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind9jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[9],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind10jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind10jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind10jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind10jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind10jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[10],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind11jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind11jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind11jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind11jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind11jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[11],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind12jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind12jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind12jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind12jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind12jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[12],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind13jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind13jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind13jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind13jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind13jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[13],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind14jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind14jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind14jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind14jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind14jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[14],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind15jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind15jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind15jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind15jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind15jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[15],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind16jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind16jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind16jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind16jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind16jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[16],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind17jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind17jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind17jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind17jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind17jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[17],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind18jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind18jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind18jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind18jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind18jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[18],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind19jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind19jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind19jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind19jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind19jobscount_sum[4]},
                ]
            },
            {
                type: "stackedBar",
                name: industrylist[19],
                showInLegend: "true",
                dataPoints: [
                    { label: LoanRanges[0], y: ind20jobscount_sum[0]},
                    { label: LoanRanges[1], y: ind20jobscount_sum[1]},
                    { label: LoanRanges[2], y: ind20jobscount_sum[2]},
                    { label: LoanRanges[3], y: ind20jobscount_sum[3]},
                    { label: LoanRanges[4], y: ind20jobscount_sum[4]},
                ]
            },
        ]
        });
        chart.render();
    

        var industryTableData = [
            {"Industry" : (industrylist[0]), "# of Loans" : (ind1loanslistAll.length), "% of Total" : (ind1loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind1jobstotal), "% of Total Jobs" : (ind1JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[1]), "# of Loans" : (ind2loanslistAll.length), "% of Total" : (ind2loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind2jobstotal), "% of Total Jobs" : (ind2JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[2]), "# of Loans" : (ind3loanslistAll.length), "% of Total" : (ind3loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind3jobstotal), "% of Total Jobs" : (ind3JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[3]), "# of Loans" : (ind4loanslistAll.length), "% of Total" : (ind4loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind4jobstotal), "% of Total Jobs" : (ind4JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[4]), "# of Loans" : (ind5loanslistAll.length), "% of Total" : (ind5loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind5jobstotal), "% of Total Jobs" : (ind5JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[5]), "# of Loans" : (ind6loanslistAll.length), "% of Total" : (ind6loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind6jobstotal), "% of Total Jobs" : (ind6JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[6]), "# of Loans" : (ind7loanslistAll.length), "% of Total" : (ind7loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind7jobstotal), "% of Total Jobs" : (ind7JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[7]), "# of Loans" : (ind8loanslistAll.length), "% of Total" : (ind8loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind8jobstotal), "% of Total Jobs" : (ind8JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[8]), "# of Loans" : (ind9loanslistAll.length), "% of Total" : (ind9loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind9jobstotal), "% of Total Jobs" : (ind9JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[9]), "# of Loans" : (ind10loanslistAll.length), "% of Total" : (ind10loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind10jobstotal), "% of Total Jobs" : (ind10JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[10]), "# of Loans" : (ind11loanslistAll.length), "% of Total" : (ind11loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind11jobstotal), "% of Total Jobs" : (ind11JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[11]), "# of Loans" : (ind12loanslistAll.length), "% of Total" : (ind12loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind12jobstotal), "% of Total Jobs" : (ind12JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[12]), "# of Loans" : (ind13loanslistAll.length), "% of Total" : (ind13loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind13jobstotal), "% of Total Jobs" : (ind13JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[13]), "# of Loans" : (ind14loanslistAll.length), "% of Total" : (ind14loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind14jobstotal), "% of Total Jobs" : (ind14JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[14]), "# of Loans" : (ind15loanslistAll.length), "% of Total" : (ind15loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind15jobstotal), "% of Total Jobs" : (ind15JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[15]), "# of Loans" : (ind16loanslistAll.length), "% of Total" : (ind16loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind16jobstotal), "% of Total Jobs" : (ind16JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[16]), "# of Loans" : (ind17loanslistAll.length), "% of Total" : (ind17loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind17jobstotal), "% of Total Jobs" : (ind17JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[17]), "# of Loans" : (ind18loanslistAll.length), "% of Total" : (ind18loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind18jobstotal), "% of Total Jobs" : (ind18JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[18]), "# of Loans" : (ind19loanslistAll.length), "% of Total" : (ind19loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind19jobstotal), "% of Total Jobs" : (ind19JobsPercent.toFixed(2))},
            {"Industry" : (industrylist[19]), "# of Loans" : (ind20loanslistAll.length), "% of Total" : (ind20loansPercentofTotal.toFixed(2)), "# of Jobs" : (ind20jobstotal), "% of Total Jobs" : (ind20JobsPercent.toFixed(2))},

        ]
        function tabulate(industryTableData, columns) {
            var table = d3.select('table')
            // .append('table')
            var thead = table.append('thead')
            var	tbody = table.append('tbody');

            // append the header row
            thead.append('tr')
            .selectAll('th')
            .data(columns).enter()
            .append('th')
                .text(function (column) { return column; });

            // create a row for each object in the data
            var rows = tbody.selectAll('tr')
            .data(industryTableData)
            .enter()
            .append('tr');

            // create a cell in each row for each column
            var cells = rows.selectAll('td')
            .data(function (row) {
                return columns.map(function (column) {
                return {column: column, value: row[column]};
                });
            })
            .enter()
            .append('td')
            .text(function (d) { return d.value; });

        return table;
        }

        // render the tables
        tabulate(industryTableData, ['Industry', '# of Loans', '% of Total', '# of Jobs', '% of Total Jobs']); // 2 column table

});
// "Accomodation and Food Services", 
// "Educational Services", 
// "Administrative and Support and Waste Management and Remediation Services", 
// "Professional, Scientific, and Technical Services", 
// "Manufacturing", 
// "Construction", 
// "Health Care and Social Assistance", 
// "Wholesale Trade", 
// "Information", 
// "Finance and Insurance", 

// "Other Services (except Public Administration)", 
// "Arts, Entertainment, and Recreation", 
// "Retail Trade", 
// "Real Estate Rental and Leasing", 
// "Transportation and Warehousing", 
// "Public Administration", 
// "Agriculture, Forestry, Fishing and Hunting", 
// "Utilities", 
// "Management of Companies and Enterprises", 
// "Mining"
