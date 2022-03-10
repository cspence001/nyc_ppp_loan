// function buildPlot(industryType) {
//     //need for panel metadata
//     d3.csv("data/output/nycppprecipients_ind.csv").then((data)=>{


    d3.csv("/static/data/output/nycppprecipients_ind.csv").then((data)=> {

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

        for (var i=0; i <groupArrays.length; i++) { 

        industries.push(groupArrays[i].industry);
        infos.push(groupArrays[i].info);

        };


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

    // "Transportation and Warehousing"
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

    // "Public Administration"
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

    // "Agriculture, Forestry, Fishing and Hunting"
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

    for (var i=0; i<infos.length; i++) {
        var subArrays = infos[i];
            for (var j = 0; j <subArrays.length; j++) {   
                let loanRangea = "a $5-10 million";
                let loanRangeb = "b $2-5 million";
                let loanRangec = "c $1-2 million";
                let loanRanged = "d $350,000-1 million";
                let loanRangee = "e $150,000-350,000";
                //this line accounts for any NaN values and converts to 0
                subArrays[j].JobsRetained = subArrays[j].JobsRetained || 0; {
                if (subArrays[j].Industry == "Accomodation and Food Services") {
                    var ind1loans = (subArrays[j].LoanRange);
                    ind1loanslist.push(ind1loans);
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
                else if (subArrays[j].Industry == "Other Services (except Public Administration)") {
                    var ind11loans = (subArrays[j].LoanRange);
                    ind11loanslist.push(ind11loans);
                    if (ind11loans == loanRangea) {
                        ind11loansa.push(ind11loans)
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
    }

       



// switch(dataset) {
//     case "ind1":
    // if (selection == "Accomodation and Food Services") {
        var ind1loanslistAll =ind1loanslist
        var ind1BusinessNameslist = ind1loansNamelist;
        //list of jobs counts for each loan for ind1
        var ind1jobstotallist = ind1jobslist;
        //sum of jobs counts for all loans for ind1
        var ind1jobstotal = ind1jobssum; //sum # jobs for All Loans in Industry
        //array with number of loans for each loan range for ind1
        var ind1loanRanges =  [ind1loansa, ind1loansb, ind1loansc, ind1loansd, ind1loanse];
        var ind1loanRanges_length = ind1loanRanges.map(item => item.length); //number loans each loan range 
        //array with list of jobs for each loan range for ind1
        var ind1jobscount = [ind1jobsa, ind1jobsb, ind1jobsc, ind1jobsd, ind1jobse];
        //array with sum of jobs for each range in ind1
        var ind1jobscount_sum = ind1jobscount.map((item) =>math.sum(item)); //sum # Jobs Retained each loan range

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
        var ind10loanRanges =  [ind10loansa, ind10loansb, ind10loansc, ind10loansd, ind10loanse];
        var ind10loanRanges_length = ind10loanRanges.map(item => item.length);
        //array with total number of jobs for each loan range for ind10
        var ind10jobscount = [ind10jobsa, ind10jobsb, ind10jobsc, ind10jobsd, ind10jobse];
        var ind10jobscount_sum = ind10jobscount.map((item) =>math.sum(item));

                                // case "ind11":
        // if (selection == "Other Services (except Public Administration)") {
            var ind11loanslistAll =ind11loanslist
            var ind11BusinessNameslist = ind11loansNamelist;
            //list of job counts for each loan for ind11   
            var ind11jobstotallist = ind11jobslist;
            //sum of jobs counts for all loans for ind11
            var ind11jobstotal = ind11jobssum;
            //array with number of loans for each loan range for ind11
            var ind11loanRanges =  [ind11loansa, ind11loansb, ind11loansc, ind11loansd, ind11loanse];
            var ind11loanRanges_length = ind11loanRanges.map(item => item.length);
            //array with total number of jobs for each loan range for ind11
            var ind11jobscount = [ind11jobsa, ind11jobsb, ind11jobsc, ind11jobsd, ind11jobse];
            var ind11jobscount_sum = ind11jobscount.map((item) =>math.sum(item));

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
            //array with total number of jobs for each loan range for ind12
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
            //array with total number of jobs for each loan range for ind13
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
            var ind16BusinessNameslist = ind16loansNamelist;
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
        // if (selection == "Agriculture, Forestry, Fishing and Hunting") {
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
        // if (selection == "Management of Companies and Enterprises") {
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
            //array with total number of jobs for each loan range for ind20
            var ind20jobscount = [ind20jobsa, ind20jobsb, ind20jobsc, ind20jobsd, ind20jobse];
            var ind20jobscount_sum = ind20jobscount.map((item) =>math.sum(item));
    

        // # jobs retained by # of loans by industry per range
        //ind1
        ind1loanRangeaJobsAvg = (ind1jobscount_sum[0]/ind1loanRanges_length[0])
        ind1loanRangebJobsAvg = (ind1jobscount_sum[1]/ind1loanRanges_length[1])
        ind1loanRangecJobsAvg = (ind1jobscount_sum[2]/ind1loanRanges_length[2])
        ind1loanRangedJobsAvg = (ind1jobscount_sum[3]/ind1loanRanges_length[3])
        ind1loanRangeeJobsAvg = (ind1jobscount_sum[4]/ind1loanRanges_length[4])
        //ind2
        ind2loanRangeaJobsAvg = (ind2jobscount_sum[0]/ind2loanRanges_length[0])
        ind2loanRangebJobsAvg = (ind2jobscount_sum[1]/ind2loanRanges_length[1])
        ind2loanRangecJobsAvg = (ind2jobscount_sum[2]/ind2loanRanges_length[2])
        ind2loanRangedJobsAvg = (ind2jobscount_sum[3]/ind2loanRanges_length[3])
        ind2loanRangeeJobsAvg = (ind2jobscount_sum[4]/ind2loanRanges_length[4])
        //ind3
        ind3loanRangeaJobsAvg = (ind3jobscount_sum[0]/ind3loanRanges_length[0])
        ind3loanRangebJobsAvg = (ind3jobscount_sum[1]/ind3loanRanges_length[1])
        ind3loanRangecJobsAvg = (ind3jobscount_sum[2]/ind3loanRanges_length[2])
        ind3loanRangedJobsAvg = (ind3jobscount_sum[3]/ind3loanRanges_length[3])
        ind3loanRangeeJobsAvg = (ind3jobscount_sum[4]/ind3loanRanges_length[4])
        //ind4
        ind4loanRangeaJobsAvg = (ind4jobscount_sum[0]/ind4loanRanges_length[0])
        ind4loanRangebJobsAvg = (ind4jobscount_sum[1]/ind4loanRanges_length[1])
        ind4loanRangecJobsAvg = (ind4jobscount_sum[2]/ind4loanRanges_length[2])
        ind4loanRangedJobsAvg = (ind4jobscount_sum[3]/ind4loanRanges_length[3])
        ind4loanRangeeJobsAvg = (ind4jobscount_sum[4]/ind4loanRanges_length[4])
        //ind5
        ind5loanRangeaJobsAvg = (ind5jobscount_sum[0]/ind5loanRanges_length[0])
        ind5loanRangebJobsAvg = (ind5jobscount_sum[1]/ind5loanRanges_length[1])
        ind5loanRangecJobsAvg = (ind5jobscount_sum[2]/ind5loanRanges_length[2])
        ind5loanRangedJobsAvg = (ind5jobscount_sum[3]/ind5loanRanges_length[3])
        ind5loanRangeeJobsAvg = (ind5jobscount_sum[4]/ind5loanRanges_length[4])
        //ind6
        ind6loanRangeaJobsAvg = (ind6jobscount_sum[0]/ind6loanRanges_length[0])
        ind6loanRangebJobsAvg = (ind6jobscount_sum[1]/ind6loanRanges_length[1])
        ind6loanRangecJobsAvg = (ind6jobscount_sum[2]/ind6loanRanges_length[2])
        ind6loanRangedJobsAvg = (ind6jobscount_sum[3]/ind6loanRanges_length[3])
        ind6loanRangeeJobsAvg = (ind6jobscount_sum[4]/ind6loanRanges_length[4])
        //ind7
        ind7loanRangeaJobsAvg = (ind7jobscount_sum[0]/ind7loanRanges_length[0])
        ind7loanRangebJobsAvg = (ind7jobscount_sum[1]/ind7loanRanges_length[1])
        ind7loanRangecJobsAvg = (ind7jobscount_sum[2]/ind7loanRanges_length[2])
        ind7loanRangedJobsAvg = (ind7jobscount_sum[3]/ind7loanRanges_length[3])
        ind7loanRangeeJobsAvg = (ind7jobscount_sum[4]/ind7loanRanges_length[4])
        //ind8
        ind8loanRangeaJobsAvg = (ind8jobscount_sum[0]/ind8loanRanges_length[0])
        ind8loanRangebJobsAvg = (ind8jobscount_sum[1]/ind8loanRanges_length[1])
        ind8loanRangecJobsAvg = (ind8jobscount_sum[2]/ind8loanRanges_length[2])
        ind8loanRangedJobsAvg = (ind8jobscount_sum[3]/ind8loanRanges_length[3])
        ind8loanRangeeJobsAvg = (ind8jobscount_sum[4]/ind8loanRanges_length[4])
        //ind9
        ind9loanRangeaJobsAvg = (ind9jobscount_sum[0]/ind9loanRanges_length[0])
        ind9loanRangebJobsAvg = (ind9jobscount_sum[1]/ind9loanRanges_length[1])
        ind9loanRangecJobsAvg = (ind9jobscount_sum[2]/ind9loanRanges_length[2])
        ind9loanRangedJobsAvg = (ind9jobscount_sum[3]/ind9loanRanges_length[3])
        ind9loanRangeeJobsAvg = (ind9jobscount_sum[4]/ind9loanRanges_length[4])
        //ind10
        ind10loanRangeaJobsAvg = (ind10jobscount_sum[0]/ind10loanRanges_length[0])
        ind10loanRangebJobsAvg = (ind10jobscount_sum[1]/ind10loanRanges_length[1])
        ind10loanRangecJobsAvg = (ind10jobscount_sum[2]/ind10loanRanges_length[2])
        ind10loanRangedJobsAvg = (ind10jobscount_sum[3]/ind10loanRanges_length[3])
        ind10loanRangeeJobsAvg = (ind10jobscount_sum[4]/ind10loanRanges_length[4])
        //ind11
        ind11loanRangeaJobsAvg = (ind11jobscount_sum[0]/ind11loanRanges_length[0])
        ind11loanRangebJobsAvg = (ind11jobscount_sum[1]/ind11loanRanges_length[1])
        ind11loanRangecJobsAvg = (ind11jobscount_sum[2]/ind11loanRanges_length[2])
        ind11loanRangedJobsAvg = (ind11jobscount_sum[3]/ind11loanRanges_length[3])
        ind11loanRangeeJobsAvg = (ind11jobscount_sum[4]/ind11loanRanges_length[4])
        //ind12
        ind12loanRangeaJobsAvg = (ind12jobscount_sum[0]/ind12loanRanges_length[0])
        ind12loanRangebJobsAvg = (ind12jobscount_sum[1]/ind12loanRanges_length[1])
        ind12loanRangecJobsAvg = (ind12jobscount_sum[2]/ind12loanRanges_length[2])
        ind12loanRangedJobsAvg = (ind12jobscount_sum[3]/ind12loanRanges_length[3])
        ind12loanRangeeJobsAvg = (ind12jobscount_sum[4]/ind12loanRanges_length[4])
        //ind13
        ind13loanRangeaJobsAvg = (ind13jobscount_sum[0]/ind13loanRanges_length[0])
        ind13loanRangebJobsAvg = (ind13jobscount_sum[1]/ind13loanRanges_length[1])
        ind13loanRangecJobsAvg = (ind13jobscount_sum[2]/ind13loanRanges_length[2])
        ind13loanRangedJobsAvg = (ind13jobscount_sum[3]/ind13loanRanges_length[3])
        ind13loanRangeeJobsAvg = (ind13jobscount_sum[4]/ind13loanRanges_length[4])
        //ind14
        ind14loanRangeaJobsAvg = (ind14jobscount_sum[0]/ind14loanRanges_length[0])
        ind14loanRangebJobsAvg = (ind14jobscount_sum[1]/ind14loanRanges_length[1])
        ind14loanRangecJobsAvg = (ind14jobscount_sum[2]/ind14loanRanges_length[2])
        ind14loanRangedJobsAvg = (ind14jobscount_sum[3]/ind14loanRanges_length[3])
        ind14loanRangeeJobsAvg = (ind14jobscount_sum[4]/ind14loanRanges_length[4])
        //ind15
        ind15loanRangeaJobsAvg = (ind15jobscount_sum[0]/ind15loanRanges_length[0])
        ind15loanRangebJobsAvg = (ind15jobscount_sum[1]/ind15loanRanges_length[1])
        ind15loanRangecJobsAvg = (ind15jobscount_sum[2]/ind15loanRanges_length[2])
        ind15loanRangedJobsAvg = (ind15jobscount_sum[3]/ind15loanRanges_length[3])
        ind15loanRangeeJobsAvg = (ind15jobscount_sum[4]/ind15loanRanges_length[4])
        //ind16
        ind16loanRangeaJobsAvg = (ind16jobscount_sum[0]/ind16loanRanges_length[0])
        ind16loanRangebJobsAvg = (ind16jobscount_sum[1]/ind16loanRanges_length[1])
        ind16loanRangecJobsAvg = (ind16jobscount_sum[2]/ind16loanRanges_length[2])
        ind16loanRangedJobsAvg = (ind16jobscount_sum[3]/ind16loanRanges_length[3])
        ind16loanRangeeJobsAvg = (ind16jobscount_sum[4]/ind16loanRanges_length[4])      
        //ind17
        ind17loanRangeaJobsAvg = (ind17jobscount_sum[0]/ind17loanRanges_length[0])
        ind17loanRangebJobsAvg = (ind17jobscount_sum[1]/ind17loanRanges_length[1])
        ind17loanRangecJobsAvg = (ind17jobscount_sum[2]/ind17loanRanges_length[2])
        ind17loanRangedJobsAvg = (ind17jobscount_sum[3]/ind17loanRanges_length[3])
        ind17loanRangeeJobsAvg = (ind17jobscount_sum[4]/ind17loanRanges_length[4])      
        //ind18
        ind18loanRangeaJobsAvg = (ind18jobscount_sum[0]/ind18loanRanges_length[0])
        ind18loanRangebJobsAvg = (ind18jobscount_sum[1]/ind18loanRanges_length[1])
        ind18loanRangecJobsAvg = (ind18jobscount_sum[2]/ind18loanRanges_length[2])
        ind18loanRangedJobsAvg = (ind18jobscount_sum[3]/ind18loanRanges_length[3])
        ind18loanRangeeJobsAvg = (ind18jobscount_sum[4]/ind18loanRanges_length[4])      
        //ind19
        ind19loanRangeaJobsAvg = (ind19jobscount_sum[0]/ind19loanRanges_length[0])
        ind19loanRangebJobsAvg = (ind19jobscount_sum[1]/ind19loanRanges_length[1])
        ind19loanRangecJobsAvg = (ind19jobscount_sum[2]/ind19loanRanges_length[2])
        ind19loanRangedJobsAvg = (ind19jobscount_sum[3]/ind19loanRanges_length[3])
        ind19loanRangeeJobsAvg = (ind19jobscount_sum[4]/ind19loanRanges_length[4])      
        //ind20
        ind20loanRangeaJobsAvg = (ind20jobscount_sum[0]/ind20loanRanges_length[0])
        ind20loanRangebJobsAvg = (ind20jobscount_sum[1]/ind20loanRanges_length[1])
        ind20loanRangecJobsAvg = (ind20jobscount_sum[2]/ind20loanRanges_length[2])
        ind20loanRangedJobsAvg = (ind20jobscount_sum[3]/ind20loanRanges_length[3])
        ind20loanRangeeJobsAvg = (ind20jobscount_sum[4]/ind20loanRanges_length[4])      


        //adds all Jobs Retained from Loan range a 
        var indJobsCountRangea = (ind1jobscount_sum[0] + ind2jobscount_sum[0] + ind3jobscount_sum[0] + ind4jobscount_sum[0] + ind5jobscount_sum[0] + ind6jobscount_sum[0] + ind7jobscount_sum[0] + ind8jobscount_sum[0] + ind9jobscount_sum[0] + ind10jobscount_sum[0] + ind11jobscount_sum[0] + ind12jobscount_sum[0] + ind13jobscount_sum[0] + ind14jobscount_sum[0] + ind15jobscount_sum[0] + ind16jobscount_sum[0] + ind17jobscount_sum[0] + ind18jobscount_sum[0] + ind19jobscount_sum[0] + ind20jobscount_sum[0]);
        //adds all Jobs Retained from Loan range b
        var indJobsCountRangeb = (ind1jobscount_sum[1] + ind2jobscount_sum[1] + ind3jobscount_sum[1] + ind4jobscount_sum[1] + ind5jobscount_sum[1] + ind6jobscount_sum[1] + ind7jobscount_sum[1] + ind8jobscount_sum[1] + ind9jobscount_sum[1] + ind10jobscount_sum[1] + ind11jobscount_sum[1] + ind12jobscount_sum[1] + ind13jobscount_sum[1] + ind14jobscount_sum[1] + ind15jobscount_sum[1] + ind16jobscount_sum[1] + ind17jobscount_sum[1] + ind18jobscount_sum[1] + ind19jobscount_sum[1] + ind20jobscount_sum[1]);
        //adds all Jobs Retained from Loan range c
        var indJobsCountRangec = (ind1jobscount_sum[2] + ind2jobscount_sum[2] + ind3jobscount_sum[2] + ind4jobscount_sum[2] + ind5jobscount_sum[2] + ind6jobscount_sum[2] + ind7jobscount_sum[2] + ind8jobscount_sum[2] + ind9jobscount_sum[2] + ind10jobscount_sum[2] + ind11jobscount_sum[2] + ind12jobscount_sum[2] + ind13jobscount_sum[2] + ind14jobscount_sum[2] + ind15jobscount_sum[2] + ind16jobscount_sum[2] + ind17jobscount_sum[2] + ind18jobscount_sum[2] + ind19jobscount_sum[2] + ind20jobscount_sum[2]);
        //adds all Jobs Retained from Loan range d
        var indJobsCountRanged = (ind1jobscount_sum[3] + ind2jobscount_sum[3] + ind3jobscount_sum[3] + ind4jobscount_sum[3] + ind5jobscount_sum[3] + ind6jobscount_sum[3] + ind7jobscount_sum[3] + ind8jobscount_sum[3] + ind9jobscount_sum[3] + ind10jobscount_sum[3] + ind11jobscount_sum[3] + ind12jobscount_sum[3] + ind13jobscount_sum[3] + ind14jobscount_sum[3] + ind15jobscount_sum[3] + ind16jobscount_sum[3] + ind17jobscount_sum[3] + ind18jobscount_sum[3] + ind19jobscount_sum[3] + ind20jobscount_sum[3]);
        //adds all Jobs Retained from Loan range e
        var indJobsCountRangee = (ind1jobscount_sum[4] + ind2jobscount_sum[4] + ind3jobscount_sum[4] + ind4jobscount_sum[4] + ind5jobscount_sum[4] + ind6jobscount_sum[4] + ind7jobscount_sum[4] + ind8jobscount_sum[4] + ind9jobscount_sum[4] + ind10jobscount_sum[4] + ind11jobscount_sum[4] + ind12jobscount_sum[4] + ind13jobscount_sum[4] + ind14jobscount_sum[4] + ind15jobscount_sum[4] + ind16jobscount_sum[4] + ind17jobscount_sum[4] + ind18jobscount_sum[4] + ind19jobscount_sum[4] + ind20jobscount_sum[4]);

        //total # of Jobs ALL
        var indJobsCountRangeAll = (indJobsCountRangea + indJobsCountRangeb + indJobsCountRangec + indJobsCountRanged + indJobsCountRangee)

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

        //industry2 RangeA chart percentages
        // percent of loans industry2 range a out of all loans industry 1# 
        var ind1LoanPercentA = (((ind1loanRanges_length[0])/ind1jobstotallist.length)* 100)
        // percent of loans industry2 loan range a of all loans range a
        var ind1LoanPercentAofAllinA = (((ind1loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry2loanrangeA
        var ind1LoanPercentAofAllLoans = (((ind1loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range a out of all jobs industry 1# 
        var ind1JobPercentA = (((ind1jobscount_sum[0])/ind1jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind1JobPercentAofAllinA = (((ind1jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry2jobsrangeA
        var ind1JobPercentAofAllLoans = (((ind1jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry2 RangeB chart percentages
        // percent of loans industry2 range b out of all loans industry 1# 
        var ind1LoanPercentB = (((ind1loanRanges_length[1])/ind1jobstotallist.length)* 100)
        // percent of loans industry2 loan range b of all loans range b
        var ind1LoanPercentBofAllinB = (((ind1loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry2loanrangeB
        var ind1LoanPercentBofAllLoans = (((ind1loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range b out of all jobs industry 1# 
        var ind1JobPercentB = (((ind1jobscount_sum[1])/ind1jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind1JobPercentBofAllinB = (((ind1jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry2jobsrangeB
        var ind1JobPercentBofAllLoans = (((ind1jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry2 RangeC chart percentages
        // percent of loans industry2 range c out of all loans industry 1# 
        var ind1LoanPercentC = (((ind1loanRanges_length[2])/ind1jobstotallist.length)* 100)
        // percent of loans industry2 loan range c of all loans range c
        var ind1LoanPercentCofAllinC = (((ind1loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry2loanrangeC
        var ind1LoanPercentCofAllLoans = (((ind1loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range c out of all jobs industry 1# 
        var ind1JobPercentC = (((ind1jobscount_sum[2])/ind1jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind1JobPercentCofAllinC = (((ind1jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry2jobsrangeC
        var ind1JobPercentCofAllLoans = (((ind1jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry2 RangeD chart percentages
        // percent of loans industry2 range d out of all loans industry 1# 
        var ind1LoanPercentD = (((ind1loanRanges_length[3])/ind1jobstotallist.length)* 100)
        // percent of loans industry2 loan range d of all loans range d
        var ind1LoanPercentDofAllinD = (((ind1loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry2loanrangeD
        var ind1LoanPercentDofAllLoans = (((ind1loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range d out of all jobs industry 1# 
        var ind1JobPercentD = (((ind1jobscount_sum[3])/ind1jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind1JobPercentDofAllinD = (((ind1jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry2jobsrangeD
        var ind1JobPercentDofAllLoans = (((ind1jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry2 RangeE chart percentages
        // percent of loans industry2 range e out of all loans industry 1# 
        var ind1LoanPercentE = (((ind1loanRanges_length[4])/ind1jobstotallist.length)* 100)
        // percent of loans industry2 loan range e of all loans range e
        var ind1LoanPercentEofAllinE = (((ind1loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry2loanrangeE
        var ind1LoanPercentEofAllLoans = (((ind1loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range e out of all jobs industry 1# 
        var ind1JobPercentE = (((ind1jobscount_sum[4])/ind1jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind1JobPercentEofAllinE = (((ind1jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry2jobsrangeE
        var ind1JobPercentEofAllLoans = (((ind1jobscount_sum[4])/indJobsCountRangeAll)* 100);

        //
        //industry2 RangeA chart percentages
        // percent of loans industry2 range a out of all loans industry 2# 
        var ind2LoanPercentA = (((ind2loanRanges_length[0])/ind2jobstotallist.length)* 100)
        // percent of loans industry2 loan range a of all loans range a
        var ind2LoanPercentAofAllinA = (((ind2loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry2loanrangeA
        var ind2LoanPercentAofAllLoans = (((ind2loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range a out of all jobs industry 2# 
        var ind2JobPercentA = (((ind2jobscount_sum[0])/ind2jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind2JobPercentAofAllinA = (((ind2jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry2jobsrangeA
        var ind2JobPercentAofAllLoans = (((ind2jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry2 RangeB chart percentages
        // percent of loans industry2 range b out of all loans industry 2# 
        var ind2LoanPercentB = (((ind2loanRanges_length[1])/ind2jobstotallist.length)* 100)
        // percent of loans industry2 loan range b of all loans range b
        var ind2LoanPercentBofAllinB = (((ind2loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry2loanrangeB
        var ind2LoanPercentBofAllLoans = (((ind2loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range b out of all jobs industry 2# 
        var ind2JobPercentB = (((ind2jobscount_sum[1])/ind2jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind2JobPercentBofAllinB = (((ind2jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry2jobsrangeB
        var ind2JobPercentBofAllLoans = (((ind2jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry2 RangeC chart percentages
        // percent of loans industry2 range c out of all loans industry 1# 
        var ind2LoanPercentC = (((ind2loanRanges_length[2])/ind2jobstotallist.length)* 100)
        // percent of loans industry2 loan range c of all loans range c
        var ind2LoanPercentCofAllinC = (((ind2loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry2loanrangeC
        var ind2LoanPercentCofAllLoans = (((ind2loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range c out of all jobs industry 1# 
        var ind2JobPercentC = (((ind2jobscount_sum[2])/ind2jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind2JobPercentCofAllinC = (((ind2jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry2jobsrangeC
        var ind2JobPercentCofAllLoans = (((ind2jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry2 RangeD chart percentages
        // percent of loans industry2 range d out of all loans industry 1# 
        var ind2LoanPercentD = (((ind2loanRanges_length[3])/ind2jobstotallist.length)* 100)
        // percent of loans industry2 loan range d of all loans range d
        var ind2LoanPercentDofAllinD = (((ind2loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry2loanrangeD
        var ind2LoanPercentDofAllLoans = (((ind2loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range d out of all jobs industry 1# 
        var ind2JobPercentD = (((ind2jobscount_sum[3])/ind2jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind2JobPercentDofAllinD = (((ind2jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry2jobsrangeD
        var ind2JobPercentDofAllLoans = (((ind2jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry2 RangeE chart percentages
        // percent of loans industry2 range e out of all loans industry 1# 
        var ind2LoanPercentE = (((ind2loanRanges_length[4])/ind2jobstotallist.length)* 100)
        // percent of loans industry2 loan range e of all loans range e
        var ind2LoanPercentEofAllinE = (((ind2loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry2loanrangeE
        var ind2LoanPercentEofAllLoans = (((ind2loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry2 range e out of all jobs industry 1# 
        var ind2JobPercentE = (((ind2jobscount_sum[4])/ind2jobstotal)* 100)
        // percent of jobs industry2 out of all jobs in loan range
        var ind2JobPercentEofAllinE = (((ind2jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry2jobsrangeE
        var ind2JobPercentEofAllLoans = (((ind2jobscount_sum[4])/indJobsCountRangeAll)* 100);

         //
        //industry3 RangeA chart percentages
        // percent of loans industry3 range a out of all loans industry 3# 
        var ind3LoanPercentA = (((ind3loanRanges_length[0])/ind3jobstotallist.length)* 100)
        // percent of loans industry3 loan range a of all loans range a
        var ind3LoanPercentAofAllinA = (((ind3loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry3loanrangeA
        var ind3LoanPercentAofAllLoans = (((ind3loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry3 range a out of all jobs industry 2# 
        var ind3JobPercentA = (((ind3jobscount_sum[0])/ind3jobstotal)* 100)
        // percent of jobs industry3 out of all jobs in loan range
        var ind3JobPercentAofAllinA = (((ind3jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry3jobsrangeA
        var ind3JobPercentAofAllLoans = (((ind3jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry3 RangeB chart percentages
        // percent of loans industry3 range b out of all loans industry 2# 
        var ind3LoanPercentB = (((ind3loanRanges_length[1])/ind3jobstotallist.length)* 100)
        // percent of loans industry3 loan range b of all loans range b
        var ind3LoanPercentBofAllinB = (((ind3loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry3loanrangeB
        var ind3LoanPercentBofAllLoans = (((ind3loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry3 range b out of all jobs industry 2# 
        var ind3JobPercentB = (((ind3jobscount_sum[1])/ind3jobstotal)* 100)
        // percent of jobs industry3 out of all jobs in loan range
        var ind3JobPercentBofAllinB = (((ind3jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry3jobsrangeB
        var ind3JobPercentBofAllLoans = (((ind3jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry3 RangeC chart percentages
        // percent of loans industry3 range c out of all loans industry 1# 
        var ind3LoanPercentC = (((ind3loanRanges_length[2])/ind3jobstotallist.length)* 100)
        // percent of loans industry3 loan range c of all loans range c
        var ind3LoanPercentCofAllinC = (((ind3loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry3loanrangeC
        var ind3LoanPercentCofAllLoans = (((ind3loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry3 range c out of all jobs industry 1# 
        var ind3JobPercentC = (((ind3jobscount_sum[2])/ind3jobstotal)* 100)
        // percent of jobs industry3 out of all jobs in loan range
        var ind3JobPercentCofAllinC = (((ind3jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry3jobsrangeC
        var ind3JobPercentCofAllLoans = (((ind3jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry3 RangeD chart percentages
        // percent of loans industry3 range d out of all loans industry 3# 
        var ind3LoanPercentD = (((ind3loanRanges_length[3])/ind3jobstotallist.length)* 100)
        // percent of loans industry3 loan range d of all loans range d
        var ind3LoanPercentDofAllinD = (((ind3loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry3loanrangeD
        var ind3LoanPercentDofAllLoans = (((ind3loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry3 range d out of all jobs industry 3# 
        var ind3JobPercentD = (((ind3jobscount_sum[3])/ind3jobstotal)* 100)
        // percent of jobs industry3 out of all jobs in loan range
        var ind3JobPercentDofAllinD = (((ind3jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry3jobsrangeD
        var ind3JobPercentDofAllLoans = (((ind3jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry3 RangeE chart percentages
        // percent of loans industry3 range e out of all loans industry 3# 
        var ind3LoanPercentE = (((ind3loanRanges_length[4])/ind3jobstotallist.length)* 100)
        // percent of loans industry3 loan range e of all loans range e
        var ind3LoanPercentEofAllinE = (((ind3loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry3loanrangeE
        var ind3LoanPercentEofAllLoans = (((ind3loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry3 range e out of all jobs industry 3# 
        var ind3JobPercentE = (((ind3jobscount_sum[4])/ind3jobstotal)* 100)
        // percent of jobs industry3 out of all jobs in loan range
        var ind3JobPercentEofAllinE = (((ind3jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry3jobsrangeE
        var ind3JobPercentEofAllLoans = (((ind3jobscount_sum[4])/indJobsCountRangeAll)* 100);


           //
        //industry4 RangeA chart percentages
        // percent of loans industry4 range a out of all loans industry4
        var ind4LoanPercentA = (((ind4loanRanges_length[0])/ind4jobstotallist.length)* 100)
        // percent of loans industry4 loan range a of all loans range a
        var ind4LoanPercentAofAllinA = (((ind4loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry4loanrangeA
        var ind4LoanPercentAofAllLoans = (((ind4loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry4 range a out of all jobs industry4
        var ind4JobPercentA = (((ind4jobscount_sum[0])/ind4jobstotal)* 100)
        // percent of jobs industry4 out of all jobs in loan range
        var ind4JobPercentAofAllinA = (((ind4jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry4jobsrangeA
        var ind4JobPercentAofAllLoans = (((ind4jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry4 RangeB chart percentages
        // percent of loans industry4 range b out of all loans industry4
        var ind4LoanPercentB = (((ind4loanRanges_length[1])/ind4jobstotallist.length)* 100)
        // percent of loans industry4 loan range b of all loans range b
        var ind4LoanPercentBofAllinB = (((ind4loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry4loanrangeB
        var ind4LoanPercentBofAllLoans = (((ind4loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry4 range b out of all jobs industry4
        var ind4JobPercentB = (((ind4jobscount_sum[1])/ind4jobstotal)* 100)
        // percent of jobs industry4 out of all jobs in loan range
        var ind4JobPercentBofAllinB = (((ind4jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry4jobsrangeB
        var ind4JobPercentBofAllLoans = (((ind4jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry4 RangeC chart percentages
        // percent of loans industry4 range c out of all loans industry4
        var ind4LoanPercentC = (((ind4loanRanges_length[2])/ind4jobstotallist.length)* 100)
        // percent of loans industry4 loan range c of all loans range c
        var ind4LoanPercentCofAllinC = (((ind4loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry4loanrangeC
        var ind4LoanPercentCofAllLoans = (((ind4loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry4 range c out of all jobs industry4
        var ind4JobPercentC = (((ind4jobscount_sum[2])/ind4jobstotal)* 100)
        // percent of jobs industry4 out of all jobs in loan range
        var ind4JobPercentCofAllinC = (((ind4jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry4jobsrangeC
        var ind4JobPercentCofAllLoans = (((ind4jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry4 RangeD chart percentages
        // percent of loans industry4 range d out of all loans industry4
        var ind4LoanPercentD = (((ind4loanRanges_length[3])/ind4jobstotallist.length)* 100)
        // percent of loans industry4 loan range d of all loans range d
        var ind4LoanPercentDofAllinD = (((ind4loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry4loanrangeD
        var ind4LoanPercentDofAllLoans = (((ind4loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry4 range d out of all jobs industry4
        var ind4JobPercentD = (((ind4jobscount_sum[3])/ind4jobstotal)* 100)
        // percent of jobs industry4 out of all jobs in loan range
        var ind4JobPercentDofAllinD = (((ind4jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry4jobsrangeD
        var ind4JobPercentDofAllLoans = (((ind4jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry4 RangeE chart percentages
        // percent of loans industry4 range e out of all loans industry4 
        var ind4LoanPercentE = (((ind4loanRanges_length[4])/ind4jobstotallist.length)* 100)
        // percent of loans industry4 loan range e of all loans range e
        var ind4LoanPercentEofAllinE = (((ind4loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry4loanrangeE
        var ind4LoanPercentEofAllLoans = (((ind4loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry4 range e out of all jobs industry4
        var ind4JobPercentE = (((ind4jobscount_sum[4])/ind4jobstotal)* 100)
        // percent of jobs industry4 out of all jobs in loan range
        var ind4JobPercentEofAllinE = (((ind4jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry4jobsrangeE
        var ind4JobPercentEofAllLoans = (((ind4jobscount_sum[4])/indJobsCountRangeAll)* 100);


              //
        //industry5 RangeA chart percentages
        // percent of loans industry5 range a out of all loans industry5
        var ind5LoanPercentA = (((ind5loanRanges_length[0])/ind5jobstotallist.length)* 100)
        // percent of loans industry5 loan range a of all loans range a
        var ind5LoanPercentAofAllinA = (((ind5loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry5loanrangeA
        var ind5LoanPercentAofAllLoans = (((ind5loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry5 range a out of all jobs industry5
        var ind5JobPercentA = (((ind5jobscount_sum[0])/ind5jobstotal)* 100)
        // percent of jobs industry5 out of all jobs in loan range
        var ind5JobPercentAofAllinA = (((ind5jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry5jobsrangeA
        var ind5JobPercentAofAllLoans = (((ind5jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry5 RangeB chart percentages
        // percent of loans industry5 range b out of all loans industry5
        var ind5LoanPercentB = (((ind5loanRanges_length[1])/ind5jobstotallist.length)* 100)
        // percent of loans industry5 loan range b of all loans range b
        var ind5LoanPercentBofAllinB = (((ind5loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry5loanrangeB
        var ind5LoanPercentBofAllLoans = (((ind5loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry5 range b out of all jobs industry5
        var ind5JobPercentB = (((ind5jobscount_sum[1])/ind5jobstotal)* 100)
        // percent of jobs industry5 out of all jobs in loan range
        var ind5JobPercentBofAllinB = (((ind5jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry5jobsrangeB
        var ind5JobPercentBofAllLoans = (((ind5jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry5 RangeC chart percentages
        // percent of loans industry5 range c out of all loans industry5
        var ind5LoanPercentC = (((ind5loanRanges_length[2])/ind5jobstotallist.length)* 100)
        // percent of loans industry5 loan range c of all loans range c
        var ind5LoanPercentCofAllinC = (((ind5loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry5loanrangeC
        var ind5LoanPercentCofAllLoans = (((ind5loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry5 range c out of all jobs industry5
        var ind5JobPercentC = (((ind5jobscount_sum[2])/ind5jobstotal)* 100)
        // percent of jobs industry5 out of all jobs in loan range
        var ind5JobPercentCofAllinC = (((ind5jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry5jobsrangeC
        var ind5JobPercentCofAllLoans = (((ind5jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry5 RangeD chart percentages
        // percent of loans industry5 range d out of all loans industry5
        var ind5LoanPercentD = (((ind5loanRanges_length[3])/ind5jobstotallist.length)* 100)
        // percent of loans industry5 loan range d of all loans range d
        var ind5LoanPercentDofAllinD = (((ind5loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry5loanrangeD
        var ind5LoanPercentDofAllLoans = (((ind5loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry5 range d out of all jobs industry5
        var ind5JobPercentD = (((ind5jobscount_sum[3])/ind5jobstotal)* 100)
        // percent of jobs industry5 out of all jobs in loan range
        var ind5JobPercentDofAllinD = (((ind5jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry5jobsrangeD
        var ind5JobPercentDofAllLoans = (((ind5jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry5 RangeE chart percentages
        // percent of loans industry5 range e out of all loans industry5 
        var ind5LoanPercentE = (((ind5loanRanges_length[4])/ind5jobstotallist.length)* 100)
        // percent of loans industry5 loan range e of all loans range e
        var ind5LoanPercentEofAllinE = (((ind5loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry5loanrangeE
        var ind5LoanPercentEofAllLoans = (((ind5loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry5 range e out of all jobs industry5
        var ind5JobPercentE = (((ind5jobscount_sum[4])/ind5jobstotal)* 100)
        // percent of jobs industry5 out of all jobs in loan range
        var ind5JobPercentEofAllinE = (((ind5jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry5jobsrangeE
        var ind5JobPercentEofAllLoans = (((ind5jobscount_sum[4])/indJobsCountRangeAll)* 100);


                  //
        //industry6 RangeA chart percentages
        // percent of loans industry6 range a out of all loans industry6
        var ind6LoanPercentA = (((ind6loanRanges_length[0])/ind6jobstotallist.length)* 100)
        // percent of loans industry6 loan range a of all loans range a
        var ind6LoanPercentAofAllinA = (((ind6loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry6loanrangeA
        var ind6LoanPercentAofAllLoans = (((ind6loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry6 range a out of all jobs industry6
        var ind6JobPercentA = (((ind6jobscount_sum[0])/ind6jobstotal)* 100)
        // percent of jobs industry6 out of all jobs in loan range
        var ind6JobPercentAofAllinA = (((ind6jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry6jobsrangeA
        var ind6JobPercentAofAllLoans = (((ind6jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry6 RangeB chart percentages
        // percent of loans industry6 range b out of all loans industry6
        var ind6LoanPercentB = (((ind6loanRanges_length[1])/ind6jobstotallist.length)* 100)
        // percent of loans industry6 loan range b of all loans range b
        var ind6LoanPercentBofAllinB = (((ind6loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry6loanrangeB
        var ind6LoanPercentBofAllLoans = (((ind6loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry6 range b out of all jobs industry6
        var ind6JobPercentB = (((ind6jobscount_sum[1])/ind6jobstotal)* 100)
        // percent of jobs industry6 out of all jobs in loan range
        var ind6JobPercentBofAllinB = (((ind6jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry6jobsrangeB
        var ind6JobPercentBofAllLoans = (((ind6jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry6 RangeC chart percentages
        // percent of loans industry6 range c out of all loans industry6
        var ind6LoanPercentC = (((ind6loanRanges_length[2])/ind6jobstotallist.length)* 100)
        // percent of loans industry6 loan range c of all loans range c
        var ind6LoanPercentCofAllinC = (((ind6loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry6loanrangeC
        var ind6LoanPercentCofAllLoans = (((ind6loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry6 range c out of all jobs industry6
        var ind6JobPercentC = (((ind6jobscount_sum[2])/ind6jobstotal)* 100)
        // percent of jobs industry6 out of all jobs in loan range
        var ind6JobPercentCofAllinC = (((ind6jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry6jobsrangeC
        var ind6JobPercentCofAllLoans = (((ind6jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry6 RangeD chart percentages
        // percent of loans industry6 range d out of all loans industry6
        var ind6LoanPercentD = (((ind6loanRanges_length[3])/ind6jobstotallist.length)* 100)
        // percent of loans industry6 loan range d of all loans range d
        var ind6LoanPercentDofAllinD = (((ind6loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry6loanrangeD
        var ind6LoanPercentDofAllLoans = (((ind6loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry6 range d out of all jobs industry6
        var ind6JobPercentD = (((ind6jobscount_sum[3])/ind6jobstotal)* 100)
        // percent of jobs industry6 out of all jobs in loan range
        var ind6JobPercentDofAllinD = (((ind6jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry6jobsrangeD
        var ind6JobPercentDofAllLoans = (((ind6jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry6 RangeE chart percentages
        // percent of loans industry6 range e out of all loans industry6 
        var ind6LoanPercentE = (((ind6loanRanges_length[4])/ind6jobstotallist.length)* 100)
        // percent of loans industry6 loan range e of all loans range e
        var ind6LoanPercentEofAllinE = (((ind6loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry6loanrangeE
        var ind6LoanPercentEofAllLoans = (((ind6loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry6 range e out of all jobs industry6
        var ind6JobPercentE = (((ind6jobscount_sum[4])/ind6jobstotal)* 100)
        // percent of jobs industry6 out of all jobs in loan range
        var ind6JobPercentEofAllinE = (((ind6jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry6jobsrangeE
        var ind6JobPercentEofAllLoans = (((ind6jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry7 RangeA chart percentages
        // percent of loans industry7 range a out of all loans industry7
        var ind7LoanPercentA = (((ind7loanRanges_length[0])/ind7jobstotallist.length)* 100)
        // percent of loans industry7 loan range a of all loans range a
        var ind7LoanPercentAofAllinA = (((ind7loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry7loanrangeA
        var ind7LoanPercentAofAllLoans = (((ind7loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry7 range a out of all jobs industry7
        var ind7JobPercentA = (((ind7jobscount_sum[0])/ind7jobstotal)* 100)
        // percent of jobs industry7 out of all jobs in loan range
        var ind7JobPercentAofAllinA = (((ind7jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry7jobsrangeA
        var ind7JobPercentAofAllLoans = (((ind7jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry7 RangeB chart percentages
        // percent of loans industry7 range b out of all loans industry7
        var ind7LoanPercentB = (((ind7loanRanges_length[1])/ind7jobstotallist.length)* 100)
        // percent of loans industry7 loan range b of all loans range b
        var ind7LoanPercentBofAllinB = (((ind7loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry7loanrangeB
        var ind7LoanPercentBofAllLoans = (((ind7loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry7 range b out of all jobs industry7
        var ind7JobPercentB = (((ind7jobscount_sum[1])/ind7jobstotal)* 100)
        // percent of jobs industry7 out of all jobs in loan range
        var ind7JobPercentBofAllinB = (((ind7jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry7jobsrangeB
        var ind7JobPercentBofAllLoans = (((ind7jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry7 RangeC chart percentages
        // percent of loans industry7 range c out of all loans industry7
        var ind7LoanPercentC = (((ind7loanRanges_length[2])/ind7jobstotallist.length)* 100)
        // percent of loans industry7 loan range c of all loans range c
        var ind7LoanPercentCofAllinC = (((ind7loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry7loanrangeC
        var ind7LoanPercentCofAllLoans = (((ind7loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry7 range c out of all jobs industry7
        var ind7JobPercentC = (((ind7jobscount_sum[2])/ind7jobstotal)* 100)
        // percent of jobs industry7 out of all jobs in loan range
        var ind7JobPercentCofAllinC = (((ind7jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry7jobsrangeC
        var ind7JobPercentCofAllLoans = (((ind7jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry7 RangeD chart percentages
        // percent of loans industry7 range d out of all loans industry7
        var ind7LoanPercentD = (((ind7loanRanges_length[3])/ind7jobstotallist.length)* 100)
        // percent of loans industry7 loan range d of all loans range d
        var ind7LoanPercentDofAllinD = (((ind7loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry7loanrangeD
        var ind7LoanPercentDofAllLoans = (((ind7loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry7 range d out of all jobs industry7
        var ind7JobPercentD = (((ind7jobscount_sum[3])/ind7jobstotal)* 100)
        // percent of jobs industry7 out of all jobs in loan range
        var ind7JobPercentDofAllinD = (((ind7jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry7jobsrangeD
        var ind7JobPercentDofAllLoans = (((ind7jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry7 RangeE chart percentages
        // percent of loans industry7 range e out of all loans industry7 
        var ind7LoanPercentE = (((ind7loanRanges_length[4])/ind7jobstotallist.length)* 100)
        // percent of loans industry7 loan range e of all loans range e
        var ind7LoanPercentEofAllinE = (((ind7loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry7loanrangeE
        var ind7LoanPercentEofAllLoans = (((ind7loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry7 range e out of all jobs industry7
        var ind7JobPercentE = (((ind7jobscount_sum[4])/ind7jobstotal)* 100)
        // percent of jobs industry7 out of all jobs in loan range
        var ind7JobPercentEofAllinE = (((ind7jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry7jobsrangeE
        var ind7JobPercentEofAllLoans = (((ind7jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry8 RangeA chart percentages
        // percent of loans industry8 range a out of all loans industry8
        var ind8LoanPercentA = (((ind8loanRanges_length[0])/ind8jobstotallist.length)* 100)
        // percent of loans industry8 loan range a of all loans range a
        var ind8LoanPercentAofAllinA = (((ind8loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry8loanrangeA
        var ind8LoanPercentAofAllLoans = (((ind8loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry8 range a out of all jobs industry8
        var ind8JobPercentA = (((ind8jobscount_sum[0])/ind8jobstotal)* 100)
        // percent of jobs industry8 out of all jobs in loan range
        var ind8JobPercentAofAllinA = (((ind8jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry8jobsrangeA
        var ind8JobPercentAofAllLoans = (((ind8jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry8 RangeB chart percentages
        // percent of loans industry8 range b out of all loans industry8
        var ind8LoanPercentB = (((ind8loanRanges_length[1])/ind8jobstotallist.length)* 100)
        // percent of loans industry8 loan range b of all loans range b
        var ind8LoanPercentBofAllinB = (((ind8loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry8loanrangeB
        var ind8LoanPercentBofAllLoans = (((ind8loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry8 range b out of all jobs industry8
        var ind8JobPercentB = (((ind8jobscount_sum[1])/ind8jobstotal)* 100)
        // percent of jobs industry8 out of all jobs in loan range
        var ind8JobPercentBofAllinB = (((ind8jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry8jobsrangeB
        var ind8JobPercentBofAllLoans = (((ind8jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry8 RangeC chart percentages
        // percent of loans industry8 range c out of all loans industry8
        var ind8LoanPercentC = (((ind8loanRanges_length[2])/ind8jobstotallist.length)* 100)
        // percent of loans industry8 loan range c of all loans range c
        var ind8LoanPercentCofAllinC = (((ind8loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry8loanrangeC
        var ind8LoanPercentCofAllLoans = (((ind8loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry8 range c out of all jobs industry8
        var ind8JobPercentC = (((ind8jobscount_sum[2])/ind8jobstotal)* 100)
        // percent of jobs industry8 out of all jobs in loan range
        var ind8JobPercentCofAllinC = (((ind8jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry8jobsrangeC
        var ind8JobPercentCofAllLoans = (((ind8jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry8 RangeD chart percentages
        // percent of loans industry8 range d out of all loans industry8
        var ind8LoanPercentD = (((ind8loanRanges_length[3])/ind8jobstotallist.length)* 100)
        // percent of loans industry8 loan range d of all loans range d
        var ind8LoanPercentDofAllinD = (((ind8loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry8loanrangeD
        var ind8LoanPercentDofAllLoans = (((ind8loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry8 range d out of all jobs industry8
        var ind8JobPercentD = (((ind8jobscount_sum[3])/ind8jobstotal)* 100)
        // percent of jobs industry8 out of all jobs in loan range
        var ind8JobPercentDofAllinD = (((ind8jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry8jobsrangeD
        var ind8JobPercentDofAllLoans = (((ind8jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry8 RangeE chart percentages
        // percent of loans industry8 range e out of all loans industry8 
        var ind8LoanPercentE = (((ind8loanRanges_length[4])/ind8jobstotallist.length)* 100)
        // percent of loans industry8 loan range e of all loans range e
        var ind8LoanPercentEofAllinE = (((ind8loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry8loanrangeE
        var ind8LoanPercentEofAllLoans = (((ind8loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry8 range e out of all jobs industry8
        var ind8JobPercentE = (((ind8jobscount_sum[4])/ind8jobstotal)* 100)
        // percent of jobs industry8 out of all jobs in loan range
        var ind8JobPercentEofAllinE = (((ind8jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry8jobsrangeE
        var ind8JobPercentEofAllLoans = (((ind8jobscount_sum[4])/indJobsCountRangeAll)* 100);


                       //
        //industry9 RangeA chart percentages
        // percent of loans industry9 range a out of all loans industry9
        var ind9LoanPercentA = (((ind9loanRanges_length[0])/ind9jobstotallist.length)* 100)
        // percent of loans industry9 loan range a of all loans range a
        var ind9LoanPercentAofAllinA = (((ind9loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry9loanrangeA
        var ind9LoanPercentAofAllLoans = (((ind9loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry9 range a out of all jobs industry9
        var ind9JobPercentA = (((ind9jobscount_sum[0])/ind9jobstotal)* 100)
        // percent of jobs industry9 out of all jobs in loan range
        var ind9JobPercentAofAllinA = (((ind9jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry9jobsrangeA
        var ind9JobPercentAofAllLoans = (((ind9jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry9 RangeB chart percentages
        // percent of loans industry9 range b out of all loans industry9
        var ind9LoanPercentB = (((ind9loanRanges_length[1])/ind9jobstotallist.length)* 100)
        // percent of loans industry9 loan range b of all loans range b
        var ind9LoanPercentBofAllinB = (((ind9loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry9loanrangeB
        var ind9LoanPercentBofAllLoans = (((ind9loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry9 range b out of all jobs industry9
        var ind9JobPercentB = (((ind9jobscount_sum[1])/ind9jobstotal)* 100)
        // percent of jobs industry9 out of all jobs in loan range
        var ind9JobPercentBofAllinB = (((ind9jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry9jobsrangeB
        var ind9JobPercentBofAllLoans = (((ind9jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry9 RangeC chart percentages
        // percent of loans industry9 range c out of all loans industry9
        var ind9LoanPercentC = (((ind9loanRanges_length[2])/ind9jobstotallist.length)* 100)
        // percent of loans industry9 loan range c of all loans range c
        var ind9LoanPercentCofAllinC = (((ind9loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry9loanrangeC
        var ind9LoanPercentCofAllLoans = (((ind9loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry9 range c out of all jobs industry9
        var ind9JobPercentC = (((ind9jobscount_sum[2])/ind9jobstotal)* 100)
        // percent of jobs industry9 out of all jobs in loan range
        var ind9JobPercentCofAllinC = (((ind9jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry9jobsrangeC
        var ind9JobPercentCofAllLoans = (((ind9jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry9 RangeD chart percentages
        // percent of loans industry9 range d out of all loans industry9
        var ind9LoanPercentD = (((ind9loanRanges_length[3])/ind9jobstotallist.length)* 100)
        // percent of loans industry9 loan range d of all loans range d
        var ind9LoanPercentDofAllinD = (((ind9loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry9loanrangeD
        var ind9LoanPercentDofAllLoans = (((ind9loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry9 range d out of all jobs industry9
        var ind9JobPercentD = (((ind9jobscount_sum[3])/ind9jobstotal)* 100)
        // percent of jobs industry9 out of all jobs in loan range
        var ind9JobPercentDofAllinD = (((ind9jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry9jobsrangeD
        var ind9JobPercentDofAllLoans = (((ind9jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry9 RangeE chart percentages
        // percent of loans industry9 range e out of all loans industry9 
        var ind9LoanPercentE = (((ind9loanRanges_length[4])/ind9jobstotallist.length)* 100)
        // percent of loans industry9 loan range e of all loans range e
        var ind9LoanPercentEofAllinE = (((ind9loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry9loanrangeE
        var ind9LoanPercentEofAllLoans = (((ind9loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry9 range e out of all jobs industry9
        var ind9JobPercentE = (((ind9jobscount_sum[4])/ind9jobstotal)* 100)
        // percent of jobs industry9 out of all jobs in loan range
        var ind9JobPercentEofAllinE = (((ind9jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry9jobsrangeE
        var ind9JobPercentEofAllLoans = (((ind9jobscount_sum[4])/indJobsCountRangeAll)* 100);


                       //
        //industry10 RangeA chart percentages
        // percent of loans industry10 range a out of all loans industry10
        var ind10LoanPercentA = (((ind10loanRanges_length[0])/ind10jobstotallist.length)* 100)
        // percent of loans industry10 loan range a of all loans range a
        var ind10LoanPercentAofAllinA = (((ind10loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry10loanrangeA
        var ind10LoanPercentAofAllLoans = (((ind10loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range a out of all jobs industry10
        var ind10JobPercentA = (((ind10jobscount_sum[0])/ind10jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind10JobPercentAofAllinA = (((ind10jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry10jobsrangeA
        var ind10JobPercentAofAllLoans = (((ind10jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry10 RangeB chart percentages
        // percent of loans industry10 range b out of all loans industry10
        var ind10LoanPercentB = (((ind10loanRanges_length[1])/ind10jobstotallist.length)* 100)
        // percent of loans industry10 loan range b of all loans range b
        var ind10LoanPercentBofAllinB = (((ind10loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry10loanrangeB
        var ind10LoanPercentBofAllLoans = (((ind10loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range b out of all jobs industry10
        var ind10JobPercentB = (((ind10jobscount_sum[1])/ind10jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind10JobPercentBofAllinB = (((ind10jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry10jobsrangeB
        var ind10JobPercentBofAllLoans = (((ind10jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry10 RangeC chart percentages
        // percent of loans industry10 range c out of all loans industry10
        var ind10LoanPercentC = (((ind10loanRanges_length[2])/ind10jobstotallist.length)* 100)
        // percent of loans industry10 loan range c of all loans range c
        var ind10LoanPercentCofAllinC = (((ind10loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry10loanrangeC
        var ind10LoanPercentCofAllLoans = (((ind10loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range c out of all jobs industry10
        var ind10JobPercentC = (((ind10jobscount_sum[2])/ind10jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind10JobPercentCofAllinC = (((ind10jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry10jobsrangeC
        var ind10JobPercentCofAllLoans = (((ind10jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry10 RangeD chart percentages
        // percent of loans industry10 range d out of all loans industry10
        var ind10LoanPercentD = (((ind10loanRanges_length[3])/ind10jobstotallist.length)* 100)
        // percent of loans industry10 loan range d of all loans range d
        var ind10LoanPercentDofAllinD = (((ind10loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry10loanrangeD
        var ind10LoanPercentDofAllLoans = (((ind10loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range d out of all jobs industry10
        var ind10JobPercentD = (((ind10jobscount_sum[3])/ind10jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind10JobPercentDofAllinD = (((ind10jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry10jobsrangeD
        var ind10JobPercentDofAllLoans = (((ind10jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry10 RangeE chart percentages
        // percent of loans industry10 range e out of all loans industry10 
        var ind10LoanPercentE = (((ind10loanRanges_length[4])/ind10jobstotallist.length)* 100)
        // percent of loans industry10 loan range e of all loans range e
        var ind10LoanPercentEofAllinE = (((ind10loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry10loanrangeE
        var ind10LoanPercentEofAllLoans = (((ind10loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range e out of all jobs industry10
        var ind10JobPercentE = (((ind10jobscount_sum[4])/ind10jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind10JobPercentEofAllinE = (((ind10jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry10jobsrangeE
        var ind10JobPercentEofAllLoans = (((ind10jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry11 RangeA chart percentages
        // percent of loans industry11 range a out of all loans industry11
        var ind11LoanPercentA = (((ind11loanRanges_length[0])/ind11jobstotallist.length)* 100)
        // percent of loans industry11 loan range a of all loans range a
        var ind11LoanPercentAofAllinA = (((ind11loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry11loanrangeA
        var ind11LoanPercentAofAllLoans = (((ind11loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry11 range a out of all jobs industry11
        var ind11JobPercentA = (((ind11jobscount_sum[0])/ind11jobstotal)* 100)
        // percent of jobs industry11 out of all jobs in loan range
        var ind11JobPercentAofAllinA = (((ind11jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry11jobsrangeA
        var ind11JobPercentAofAllLoans = (((ind11jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry11 RangeB chart percentages
        // percent of loans industry11 range b out of all loans industry11
        var ind11LoanPercentB = (((ind11loanRanges_length[1])/ind11jobstotallist.length)* 100)
        // percent of loans industry11 loan range b of all loans range b
        var ind11LoanPercentBofAllinB = (((ind11loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry11loanrangeB
        var ind11LoanPercentBofAllLoans = (((ind11loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry11 range b out of all jobs industry11
        var ind11JobPercentB = (((ind11jobscount_sum[1])/ind11jobstotal)* 100)
        // percent of jobs industry11 out of all jobs in loan range
        var ind11JobPercentBofAllinB = (((ind11jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry11jobsrangeB
        var ind11JobPercentBofAllLoans = (((ind11jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry11 RangeC chart percentages
        // percent of loans industry11 range c out of all loans industry11
        var ind11LoanPercentC = (((ind11loanRanges_length[2]) / ind11jobstotallist.length) * 100)
        // percent of loans industry11 loan range c of all loans range c
        var ind11LoanPercentCofAllinC = (((ind11loanRanges_length[2]) / indLoansCountRangec) * 100);
        //percentage of all loans for industry11loanrangeC
        var ind11LoanPercentCofAllLoans = (((ind11loanRanges_length[2]) / indLoansCountRangeTotal) * 100);
        // percent of jobs industry11 range c out of all jobs industry11
        var ind11JobPercentC = (((ind11jobscount_sum[2]) / ind11jobstotal) * 100)
        // percent of jobs industry11 out of all jobs in loan range
        var ind11JobPercentCofAllinC = (((ind11jobscount_sum[2]) / indJobsCountRangec) * 100);
        //percentage of all jobs for industry11jobsrangeC
        var ind11JobPercentCofAllLoans = (((ind11jobscount_sum[2]) / indJobsCountRangeAll) * 100);

        //industry11 RangeD chart percentages
        // percent of loans industry11 range d out of all loans industry11
        var ind11LoanPercentD = (((ind11loanRanges_length[3])/ind11jobstotallist.length)* 100)
        // percent of loans industry11 loan range d of all loans range d
        var ind11LoanPercentDofAllinD = (((ind11loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry11loanrangeD
        var ind11LoanPercentDofAllLoans = (((ind11loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry11 range d out of all jobs industry11
        var ind11JobPercentD = (((ind11jobscount_sum[3])/ind11jobstotal)* 100)
        // percent of jobs industry11 out of all jobs in loan range
        var ind11JobPercentDofAllinD = (((ind11jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry11jobsrangeD
        var ind11JobPercentDofAllLoans = (((ind11jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry11 RangeE chart percentages
        // percent of loans industry11 range e out of all loans industry11 
        var ind11LoanPercentE = (((ind11loanRanges_length[4])/ind11jobstotallist.length)* 100)
        // percent of loans industry11 loan range e of all loans range e
        var ind11LoanPercentEofAllinE = (((ind11loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry11loanrangeE
        var ind11LoanPercentEofAllLoans = (((ind11loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry11 range e out of all jobs industry11
        var ind11JobPercentE = (((ind11jobscount_sum[4])/ind11jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind11JobPercentEofAllinE = (((ind11jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry11jobsrangeE
        var ind11JobPercentEofAllLoans = (((ind11jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry12 RangeA chart percentages
        // percent of loans industry10 range a out of all loans industry12
        var ind12LoanPercentA = (((ind12loanRanges_length[0])/ind12jobstotallist.length)* 100)
        // percent of loans industry12 loan range a of all loans range a
        var ind12LoanPercentAofAllinA = (((ind12loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry12loanrangeA
        var ind12LoanPercentAofAllLoans = (((ind12loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry12 range a out of all jobs industry12
        var ind12JobPercentA = (((ind12jobscount_sum[0])/ind12jobstotal)* 100)
        // percent of jobs industry12 out of all jobs in loan range
        var ind12JobPercentAofAllinA = (((ind12jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry12jobsrangeA
        var ind12JobPercentAofAllLoans = (((ind12jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry12 RangeB chart percentages
        // percent of loans industry12 range b out of all loans industry12
        var ind12LoanPercentB = (((ind12loanRanges_length[1])/ind12jobstotallist.length)* 100)
        // percent of loans industry10 loan range b of all loans range b
        var ind12LoanPercentBofAllinB = (((ind12loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry12loanrangeB
        var ind12LoanPercentBofAllLoans = (((ind12loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry12 range b out of all jobs industry12
        var ind12JobPercentB = (((ind12jobscount_sum[1])/ind12jobstotal)* 100)
        // percent of jobs industry12 out of all jobs in loan range
        var ind12JobPercentBofAllinB = (((ind12jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry12jobsrangeB
        var ind12JobPercentBofAllLoans = (((ind12jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry12 RangeC chart percentages
        // percent of loans industry12 range c out of all loans industry12
        var ind12LoanPercentC = (((ind12loanRanges_length[2])/ind12jobstotallist.length)* 100)
        // percent of loans industry12 loan range c of all loans range c
        var ind12LoanPercentCofAllinC = (((ind12loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry12loanrangeC
        var ind12LoanPercentCofAllLoans = (((ind12loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry12 range c out of all jobs industry12
        var ind12JobPercentC = (((ind12jobscount_sum[2])/ind12jobstotal)* 100)
        // percent of jobs industry12 out of all jobs in loan range
        var ind12JobPercentCofAllinC = (((ind12jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry12jobsrangeC
        var ind12JobPercentCofAllLoans = (((ind12jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry12 RangeD chart percentages
        // percent of loans industry12 range d out of all loans industry12
        var ind12LoanPercentD = (((ind12loanRanges_length[3])/ind12jobstotallist.length)* 100)
        // percent of loans industry12 loan range d of all loans range d
        var ind12LoanPercentDofAllinD = (((ind12loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry12loanrangeD
        var ind12LoanPercentDofAllLoans = (((ind12loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10 range d out of all jobs industry12
        var ind12JobPercentD = (((ind12jobscount_sum[3])/ind12jobstotal)* 100)
        // percent of jobs industry12 out of all jobs in loan range
        var ind12JobPercentDofAllinD = (((ind12jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry12jobsrangeD
        var ind12JobPercentDofAllLoans = (((ind12jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry12 RangeE chart percentages
        // percent of loans industry12 range e out of all loans industry12
        var ind12LoanPercentE = (((ind12loanRanges_length[4])/ind12jobstotallist.length)* 100)
        // percent of loans industry12 loan range e of all loans range e
        var ind12LoanPercentEofAllinE = (((ind12loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry12loanrangeE
        var ind12LoanPercentEofAllLoans = (((ind12loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry12 range e out of all jobs industry12
        var ind12JobPercentE = (((ind12jobscount_sum[4])/ind12jobstotal)* 100)
        // percent of jobs industry12 out of all jobs in loan range
        var ind12JobPercentEofAllinE = (((ind12jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry12jobsrangeE
        var ind12JobPercentEofAllLoans = (((ind12jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry13 RangeA chart percentages
        // percent of loans industry13 range a out of all loans industry13
        var ind13LoanPercentA = (((ind13loanRanges_length[0])/ind13jobstotallist.length)* 100)
        // percent of loans industry13 loan range a of all loans range a
        var ind13LoanPercentAofAllinA = (((ind13loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry13loanrangeA
        var ind13LoanPercentAofAllLoans = (((ind13loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry13 range a out of all jobs industry13
        var ind13JobPercentA = (((ind13jobscount_sum[0])/ind13jobstotal)* 100)
        // percent of jobs industry13 out of all jobs in loan range
        var ind13JobPercentAofAllinA = (((ind13jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry13jobsrangeA
        var ind13JobPercentAofAllLoans = (((ind13jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry13 RangeB chart percentages
        // percent of loans industry13 range b out of all loans industry13
        var ind13LoanPercentB = (((ind13loanRanges_length[1])/ind13jobstotallist.length)* 100)
        // percent of loans industry13 loan range b of all loans range b
        var ind13LoanPercentBofAllinB = (((ind13loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry13loanrangeB
        var ind13LoanPercentBofAllLoans = (((ind13loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry13 range b out of all jobs industry13
        var ind13JobPercentB = (((ind13jobscount_sum[1])/ind13jobstotal)* 100)
        // percent of jobs industry13 out of all jobs in loan range
        var ind13JobPercentBofAllinB = (((ind13jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry13jobsrangeB
        var ind13JobPercentBofAllLoans = (((ind13jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry13 RangeC chart percentages
        // percent of loans industry13 range c out of all loans industry13
        var ind13LoanPercentC = (((ind13loanRanges_length[2])/ind13jobstotallist.length)* 100)
        // percent of loans industry13 loan range c of all loans range c
        var ind13LoanPercentCofAllinC = (((ind13loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry13loanrangeC
        var ind13LoanPercentCofAllLoans = (((ind13loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry13 range c out of all jobs industry13
        var ind13JobPercentC = (((ind13jobscount_sum[2])/ind13jobstotal)* 100)
        // percent of jobs industry13 out of all jobs in loan range
        var ind13JobPercentCofAllinC = (((ind13jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry13jobsrangeC
        var ind13JobPercentCofAllLoans = (((ind13jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry13 RangeD chart percentages
        // percent of loans industry13 range d out of all loans industry13
        var ind13LoanPercentD = (((ind13loanRanges_length[3])/ind13jobstotallist.length)* 100)
        // percent of loans industry13 loan range d of all loans range d
        var ind13LoanPercentDofAllinD = (((ind13loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry13loanrangeD
        var ind13LoanPercentDofAllLoans = (((ind13loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry13 range d out of all jobs industry13
        var ind13JobPercentD = (((ind13jobscount_sum[3])/ind13jobstotal)* 100)
        // percent of jobs industry13 out of all jobs in loan range
        var ind13JobPercentDofAllinD = (((ind13jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry13jobsrangeD
        var ind13JobPercentDofAllLoans = (((ind13jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry13 RangeE chart percentages
        // percent of loans industry13 range e out of all loans industry13 
        var ind13LoanPercentE = (((ind13loanRanges_length[4])/ind13jobstotallist.length)* 100)
        // percent of loans industry13 loan range e of all loans range e
        var ind13LoanPercentEofAllinE = (((ind13loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry13loanrangeE
        var ind13LoanPercentEofAllLoans = (((ind10loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry13 range e out of all jobs industry13
        var ind13JobPercentE = (((ind13jobscount_sum[4])/ind13jobstotal)* 100)
        // percent of jobs industry13 out of all jobs in loan range
        var ind13JobPercentEofAllinE = (((ind13jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry13jobsrangeE
        var ind13JobPercentEofAllLoans = (((ind13jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry14 RangeA chart percentages
        // percent of loans industry14 range a out of all loans industry14
        var ind14LoanPercentA = (((ind14loanRanges_length[0])/ind14jobstotallist.length)* 100)
        // percent of loans industry14 loan range a of all loans range a
        var ind14LoanPercentAofAllinA = (((ind14loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry14loanrangeA
        var ind14LoanPercentAofAllLoans = (((ind14loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry14 range a out of all jobs industry14
        var ind14JobPercentA = (((ind14jobscount_sum[0])/ind10jobstotal)* 100)
        // percent of jobs industry14 out of all jobs in loan range
        var ind14JobPercentAofAllinA = (((ind14jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry14jobsrangeA
        var ind14JobPercentAofAllLoans = (((ind14jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry14 RangeB chart percentages
        // percent of loans industry14 range b out of all loans industry14
        var ind14LoanPercentB = (((ind14loanRanges_length[1])/ind14jobstotallist.length)* 100)
        // percent of loans industry14 loan range b of all loans range b
        var ind14LoanPercentBofAllinB = (((ind14loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry14loanrangeB
        var ind14LoanPercentBofAllLoans = (((ind14loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry14 range b out of all jobs industry14
        var ind14JobPercentB = (((ind14jobscount_sum[1])/ind14jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind14JobPercentBofAllinB = (((ind14jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry14jobsrangeB
        var ind14JobPercentBofAllLoans = (((ind14jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry14 RangeC chart percentages
        // percent of loans industry14 range c out of all loans industry14
        var ind14LoanPercentC = (((ind14loanRanges_length[2])/ind14jobstotallist.length)* 100)
        // percent of loans industry14 loan range c of all loans range c
        var ind14LoanPercentCofAllinC = (((ind14loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry14loanrangeC
        var ind14LoanPercentCofAllLoans = (((ind14loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry14 range c out of all jobs industry14
        var ind14JobPercentC = (((ind14jobscount_sum[2])/ind14jobstotal)* 100)
        // percent of jobs industry14 out of all jobs in loan range
        var ind14JobPercentCofAllinC = (((ind14jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry14jobsrangeC
        var ind14JobPercentCofAllLoans = (((ind14jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry14 RangeD chart percentages
        // percent of loans industry14 range d out of all loans industry14
        var ind14LoanPercentD = (((ind14loanRanges_length[3])/ind14jobstotallist.length)* 100)
        // percent of loans industry14 loan range d of all loans range d
        var ind14LoanPercentDofAllinD = (((ind14loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry14loanrangeD
        var ind14LoanPercentDofAllLoans = (((ind14loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry14 range d out of all jobs industry14
        var ind14JobPercentD = (((ind14jobscount_sum[3])/ind14jobstotal)* 100)
        // percent of jobs industry14 out of all jobs in loan range
        var ind14JobPercentDofAllinD = (((ind14jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry14jobsrangeD
        var ind14JobPercentDofAllLoans = (((ind14jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry14 RangeE chart percentages
        // percent of loans industry14 range e out of all loans industry14 
        var ind14LoanPercentE = (((ind14loanRanges_length[4])/ind14jobstotallist.length)* 100)
        // percent of loans industry14 loan range e of all loans range e
        var ind14LoanPercentEofAllinE = (((ind14loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry14loanrangeE
        var ind14LoanPercentEofAllLoans = (((ind14loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry10=4 range e out of all jobs industry14
        var ind14JobPercentE = (((ind14jobscount_sum[4])/ind14jobstotal)* 100)
        // percent of jobs industry14 out of all jobs in loan range
        var ind14JobPercentEofAllinE = (((ind14jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry14jobsrangeE
        var ind14JobPercentEofAllLoans = (((ind14jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry15 RangeA chart percentages
        // percent of loans industry15 range a out of all loans industry15
        var ind15LoanPercentA = (((ind15loanRanges_length[0])/ind15jobstotallist.length)* 100)
        // percent of loans industry15 loan range a of all loans range a
        var ind15LoanPercentAofAllinA = (((ind15loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry15loanrangeA
        var ind15LoanPercentAofAllLoans = (((ind15loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry15 range a out of all jobs industry15
        var ind15JobPercentA = (((ind15jobscount_sum[0])/ind15jobstotal)* 100)
        // percent of jobs industry15 out of all jobs in loan range
        var ind15JobPercentAofAllinA = (((ind15jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry10=5jobsrangeA
        var ind15JobPercentAofAllLoans = (((ind15jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry15 RangeB chart percentages
        // percent of loans industry15 range b out of all loans industry15
        var ind15LoanPercentB = (((ind15loanRanges_length[1])/ind15jobstotallist.length)* 100)
        // percent of loans industry15 loan range b of all loans range b
        var ind15LoanPercentBofAllinB = (((ind15loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry15loanrangeB
        var ind15LoanPercentBofAllLoans = (((ind15loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry15 range b out of all jobs industry15
        var ind15JobPercentB = (((ind15jobscount_sum[1])/ind15jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind15JobPercentBofAllinB = (((ind15jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry15jobsrangeB
        var ind15JobPercentBofAllLoans = (((ind15jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry15 RangeC chart percentages
        // percent of loans industry15 range c out of all loans industry15
        var ind15LoanPercentC = (((ind15loanRanges_length[2])/ind15jobstotallist.length)* 100)
        // percent of loans industry15 loan range c of all loans range c
        var ind15LoanPercentCofAllinC = (((ind15loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry15loanrangeC
        var ind15LoanPercentCofAllLoans = (((ind15loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry15 range c out of all jobs industry15
        var ind15JobPercentC = (((ind15jobscount_sum[2])/ind15jobstotal)* 100)
        // percent of jobs industry10 out of all jobs in loan range
        var ind15JobPercentCofAllinC = (((ind15jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry15jobsrangeC
        var ind15JobPercentCofAllLoans = (((ind15jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry15 RangeD chart percentages
        // percent of loans industry15 range d out of all loans industry15
        var ind15LoanPercentD = (((ind15loanRanges_length[3])/ind15jobstotallist.length)* 100)
        // percent of loans industry15 loan range d of all loans range d
        var ind15LoanPercentDofAllinD = (((ind15loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry15loanrangeD
        var ind15LoanPercentDofAllLoans = (((ind15loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry15 range d out of all jobs industry15
        var ind15JobPercentD = (((ind15jobscount_sum[3])/ind15jobstotal)* 100)
        // percent of jobs industry15 out of all jobs in loan range
        var ind15JobPercentDofAllinD = (((ind15jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry15jobsrangeD
        var ind15JobPercentDofAllLoans = (((ind15jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry15 RangeE chart percentages
        // percent of loans industry15 range e out of all loans industry15 
        var ind15LoanPercentE = (((ind15loanRanges_length[4])/ind15jobstotallist.length)* 100)
        // percent of loans industry15 loan range e of all loans range e
        var ind15LoanPercentEofAllinE = (((ind15loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry15loanrangeE
        var ind15LoanPercentEofAllLoans = (((ind15loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry15 range e out of all jobs industry15
        var ind15JobPercentE = (((ind15jobscount_sum[4])/ind15jobstotal)* 100)
        // percent of jobs industry15 out of all jobs in loan range
        var ind15JobPercentEofAllinE = (((ind15jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry15jobsrangeE
        var ind15JobPercentEofAllLoans = (((ind15jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry16 RangeA chart percentages
        // percent of loans industry16 range a out of all loans industry16
        var ind16LoanPercentA = (((ind16loanRanges_length[0])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range a of all loans range a
        var ind16LoanPercentAofAllinA = (((ind16loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry16loanrangeA
        var ind16LoanPercentAofAllLoans = (((ind16loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range a out of all jobs industry16
        var ind16JobPercentA = (((ind16jobscount_sum[0])/ind16jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind16JobPercentAofAllinA = (((ind16jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry16jobsrangeA
        var ind16JobPercentAofAllLoans = (((ind16jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry16 RangeB chart percentages
        // percent of loans industry16 range b out of all loans industry16
        var ind16LoanPercentB = (((ind16loanRanges_length[1])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range b of all loans range b
        var ind16LoanPercentBofAllinB = (((ind16loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry16loanrangeB
        var ind16LoanPercentBofAllLoans = (((ind16loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range b out of all jobs industry16
        var ind16JobPercentB = (((ind16jobscount_sum[1])/ind16jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind16JobPercentBofAllinB = (((ind16jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry16jobsrangeB
        var ind16JobPercentBofAllLoans = (((ind16jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry16 RangeC chart percentages
        // percent of loans industry16 range c out of all loans industry16
        var ind16LoanPercentC = (((ind16loanRanges_length[2])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range c of all loans range c
        var ind16LoanPercentCofAllinC = (((ind16loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry16loanrangeC
        var ind16LoanPercentCofAllLoans = (((ind16loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range c out of all jobs industry16
        var ind16JobPercentC = (((ind16jobscount_sum[2])/ind16jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind16JobPercentCofAllinC = (((ind16jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry16jobsrangeC
        var ind16JobPercentCofAllLoans = (((ind16jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry16 RangeD chart percentages
        // percent of loans industry16 range d out of all loans industry16
        var ind16LoanPercentD = (((ind16loanRanges_length[3])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range d of all loans range d
        var ind16LoanPercentDofAllinD = (((ind16loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry16loanrangeD
        var ind16LoanPercentDofAllLoans = (((ind16loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range d out of all jobs industry16
        var ind16JobPercentD = (((ind16jobscount_sum[3])/ind16jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind16JobPercentDofAllinD = (((ind16jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry16jobsrangeD
        var ind16JobPercentDofAllLoans = (((ind16jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry16 RangeE chart percentages
        // percent of loans industry16 range e out of all loans industry16
        var ind16LoanPercentE = (((ind16loanRanges_length[4])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range e of all loans range e
        var ind16LoanPercentEofAllinE = (((ind16loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry16loanrangeE
        var ind16LoanPercentEofAllLoans = (((ind16loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range e out of all jobs industry16
        var ind16JobPercentE = (((ind16jobscount_sum[4])/ind16jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind16JobPercentEofAllinE = (((ind16jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry16jobsrangeE
        var ind16JobPercentEofAllLoans = (((ind16jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry17 RangeA chart percentages
        // percent of loans industry17 range a out of all loans industry17
        var ind17LoanPercentA = (((ind17loanRanges_length[0])/ind17jobstotallist.length)* 100)
        // percent of loans industry17 loan range a of all loans range a
        var ind17LoanPercentAofAllinA = (((ind17loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry17loanrangeA
        var ind17LoanPercentAofAllLoans = (((ind17loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry17 range a out of all jobs industry17
        var ind17JobPercentA = (((ind17jobscount_sum[0])/ind17jobstotal)* 100)
        // percent of jobs industry17 out of all jobs in loan range
        var ind17JobPercentAofAllinA = (((ind17jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry17jobsrangeA
        var ind17JobPercentAofAllLoans = (((ind17jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry17 RangeB chart percentages
        // percent of loans industry17 range b out of all loans industry17
        var ind17LoanPercentB = (((ind17loanRanges_length[1])/ind16jobstotallist.length)* 100)
        // percent of loans industry16 loan range b of all loans range b
        var ind17LoanPercentBofAllinB = (((ind17loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry16loanrangeB
        var ind17LoanPercentBofAllLoans = (((ind17loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry16 range b out of all jobs industry17
        var ind17JobPercentB = (((ind17jobscount_sum[1])/ind17jobstotal)* 100)
        // percent of jobs industry16 out of all jobs in loan range
        var ind17JobPercentBofAllinB = (((ind17jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry16jobsrangeB
        var ind17JobPercentBofAllLoans = (((ind17jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry17 RangeC chart percentages
        // percent of loans industry17 range c out of all loans industry17
        var ind17LoanPercentC = (((ind17loanRanges_length[2])/ind17jobstotallist.length)* 100)
        // percent of loans industry17 loan range c of all loans range c
        var ind17LoanPercentCofAllinC = (((ind17loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry17loanrangeC
        var ind17LoanPercentCofAllLoans = (((ind17loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry17 range c out of all jobs industry17
        var ind17JobPercentC = (((ind17jobscount_sum[2])/ind17jobstotal)* 100)
        // percent of jobs industry17 out of all jobs in loan range
        var ind17JobPercentCofAllinC = (((ind17jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry17jobsrangeC
        var ind17JobPercentCofAllLoans = (((ind17jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry17 RangeD chart percentages
        // percent of loans industry17 range d out of all loans industry17
        var ind17LoanPercentD = (((ind17loanRanges_length[3])/ind17jobstotallist.length)* 100)
        // percent of loans industry17 loan range d of all loans range d
        var ind17LoanPercentDofAllinD = (((ind17loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry17loanrangeD
        var ind17LoanPercentDofAllLoans = (((ind17loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry17 range d out of all jobs industry17
        var ind17JobPercentD = (((ind17jobscount_sum[3])/ind17jobstotal)* 100)
        // percent of jobs industry17 out of all jobs in loan range
        var ind17JobPercentDofAllinD = (((ind17jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry17jobsrangeD
        var ind17JobPercentDofAllLoans = (((ind17jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry17 RangeE chart percentages
        // percent of loans industry17 range e out of all loans industry17
        var ind17LoanPercentE = (((ind17loanRanges_length[4])/ind17jobstotallist.length)* 100)
        // percent of loans industry17 loan range e of all loans range e
        var ind17LoanPercentEofAllinE = (((ind17loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry17loanrangeE
        var ind17LoanPercentEofAllLoans = (((ind17loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry17 range e out of all jobs industry17
        var ind17JobPercentE = (((ind17jobscount_sum[4])/ind17jobstotal)* 100)
        // percent of jobs industry17 out of all jobs in loan range
        var ind17JobPercentEofAllinE = (((ind17jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry17jobsrangeE
        var ind17JobPercentEofAllLoans = (((ind17jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry18 RangeA chart percentages
        // percent of loans industry18 range a out of all loans industry18
        var ind18LoanPercentA = (((ind18loanRanges_length[0])/ind18jobstotallist.length)* 100)
        // percent of loans industry18 loan range a of all loans range a
        var ind18LoanPercentAofAllinA = (((ind1loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry18loanrangeA
        var ind18LoanPercentAofAllLoans = (((ind18loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry18 range a out of all jobs industry18
        var ind18JobPercentA = (((ind18jobscount_sum[0])/ind18jobstotal)* 100)
        // percent of jobs industry18 out of all jobs in loan range
        var ind18JobPercentAofAllinA = (((ind18jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry18jobsrangeA
        var ind18JobPercentAofAllLoans = (((ind18jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry18 RangeB chart percentages
        // percent of loans industry18 range b out of all loans industry18
        var ind18LoanPercentB = (((ind18loanRanges_length[1])/ind18jobstotallist.length)* 100)
        // percent of loans industry18 loan range b of all loans range b
        var ind18LoanPercentBofAllinB = (((ind18loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry18loanrangeB
        var ind18LoanPercentBofAllLoans = (((ind18loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry18 range b out of all jobs industry18
        var ind18JobPercentB = (((ind18jobscount_sum[1])/ind18jobstotal)* 100)
        // percent of jobs industry18 out of all jobs in loan range
        var ind18JobPercentBofAllinB = (((ind18jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry18jobsrangeB
        var ind18JobPercentBofAllLoans = (((ind18jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry18 RangeC chart percentages
        // percent of loans industry18 range c out of all loans industry18
        var ind18LoanPercentC = (((ind18loanRanges_length[2])/ind18jobstotallist.length)* 100)
        // percent of loans industry18 loan range c of all loans range c
        var ind18LoanPercentCofAllinC = (((ind18loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry18loanrangeC
        var ind18LoanPercentCofAllLoans = (((ind18loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry18 range c out of all jobs industry18
        var ind18JobPercentC = (((ind18jobscount_sum[2])/ind18jobstotal)* 100)
        // percent of jobs industry18 out of all jobs in loan range
        var ind18JobPercentCofAllinC = (((ind18jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry18jobsrangeC
        var ind18JobPercentCofAllLoans = (((ind18jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry18 RangeD chart percentages
        // percent of loans industry18 range d out of all loans industry18
        var ind18LoanPercentD = (((ind18loanRanges_length[3])/ind18jobstotallist.length)* 100)
        // percent of loans industry18 loan range d of all loans range d
        var ind18LoanPercentDofAllinD = (((ind18loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry18loanrangeD
        var ind18LoanPercentDofAllLoans = (((ind18loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry18 range d out of all jobs industry18
        var ind18JobPercentD = (((ind18jobscount_sum[3])/ind18jobstotal)* 100)
        // percent of jobs industry18 out of all jobs in loan range
        var ind18JobPercentDofAllinD = (((ind18jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry18jobsrangeD
        var ind18JobPercentDofAllLoans = (((ind18jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry18 RangeE chart percentages
        // percent of loans industry18 range e out of all loans industry18
        var ind18LoanPercentE = (((ind18loanRanges_length[4])/ind18jobstotallist.length)* 100)
        // percent of loans industry18 loan range e of all loans range e
        var ind18LoanPercentEofAllinE = (((ind18loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry18loanrangeE
        var ind18LoanPercentEofAllLoans = (((ind18loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry18 range e out of all jobs industry18
        var ind18JobPercentE = (((ind18jobscount_sum[4])/ind18jobstotal)* 100)
        // percent of jobs industry18 out of all jobs in loan range
        var ind18JobPercentEofAllinE = (((ind18jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry18jobsrangeE
        var ind18JobPercentEofAllLoans = (((ind18jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry19 RangeA chart percentages
        // percent of loans industry19 range a out of all loans industry19
        var ind19LoanPercentA = (((ind19loanRanges_length[0])/ind19jobstotallist.length)* 100)
        // percent of loans industry19 loan range a of all loans range a
        var ind19LoanPercentAofAllinA = (((ind19loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry19loanrangeA
        var ind19LoanPercentAofAllLoans = (((ind19loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry19 range a out of all jobs industry19
        var ind19JobPercentA = (((ind19jobscount_sum[0])/ind19jobstotal)* 100)
        // percent of jobs industry19 out of all jobs in loan range
        var ind19JobPercentAofAllinA = (((ind19jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry19jobsrangeA
        var ind19JobPercentAofAllLoans = (((ind19jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry19 RangeB chart percentages
        // percent of loans industry19 range b out of all loans industry19
        var ind19LoanPercentB = (((ind19loanRanges_length[1])/ind19jobstotallist.length)* 100)
        // percent of loans industry19 loan range b of all loans range b
        var ind19LoanPercentBofAllinB = (((ind19loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry19loanrangeB
        var ind19LoanPercentBofAllLoans = (((ind19loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry19 range b out of all jobs industry19
        var ind19JobPercentB = (((ind19jobscount_sum[1])/ind19jobstotal)* 100)
        // percent of jobs industry19 out of all jobs in loan range
        var ind19JobPercentBofAllinB = (((ind19jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry19jobsrangeB
        var ind19JobPercentBofAllLoans = (((ind19jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry19 RangeC chart percentages
        // percent of loans industry19 range c out of all loans industry19
        var ind19LoanPercentC = (((ind19loanRanges_length[2])/ind19jobstotallist.length)* 100)
        // percent of loans industry19 loan range c of all loans range c
        var ind19LoanPercentCofAllinC = (((ind19loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry19loanrangeC
        var ind19LoanPercentCofAllLoans = (((ind19loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry19 range c out of all jobs industry1
        var ind19JobPercentC = (((ind19jobscount_sum[2])/ind19jobstotal)* 100)
        // percent of jobs industry19 out of all jobs in loan range
        var ind19JobPercentCofAllinC = (((ind19jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry19jobsrangeC
        var ind19JobPercentCofAllLoans = (((ind19jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry19 RangeD chart percentages
        // percent of loans industry19 range d out of all loans industry19
        var ind19LoanPercentD = (((ind19loanRanges_length[3])/ind19jobstotallist.length)* 100)
        // percent of loans industry19 loan range d of all loans range d
        var ind19LoanPercentDofAllinD = (((ind19loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry19loanrangeD
        var ind19LoanPercentDofAllLoans = (((ind19loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry19 range d out of all jobs industry19
        var ind19JobPercentD = (((ind19jobscount_sum[3])/ind19jobstotal)* 100)
        // percent of jobs industry19 out of all jobs in loan range
        var ind19JobPercentDofAllinD = (((ind19jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry19jobsrangeD
        var ind19JobPercentDofAllLoans = (((ind19jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry19 RangeE chart percentages
        // percent of loans industry19 range e out of all loans industry19
        var ind19LoanPercentE = (((ind19loanRanges_length[4])/ind19jobstotallist.length)* 100)
        // percent of loans industry19 loan range e of all loans range e
        var ind19LoanPercentEofAllinE = (((ind19loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry19loanrangeE
        var ind19LoanPercentEofAllLoans = (((ind19loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry19 range e out of all jobs industry19
        var ind19JobPercentE = (((ind19jobscount_sum[4])/ind19jobstotal)* 100)
        // percent of jobs industry19 out of all jobs in loan range
        var ind19JobPercentEofAllinE = (((ind19jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry19jobsrangeE
        var ind19JobPercentEofAllLoans = (((ind19jobscount_sum[4])/indJobsCountRangeAll)* 100);

                       //
        //industry20 RangeA chart percentages
        // percent of loans industry20 range a out of all loans industry20
        var ind20LoanPercentA = (((ind20loanRanges_length[0])/ind20jobstotallist.length)* 100)
        // percent of loans industry20 loan range a of all loans range a
        var ind20LoanPercentAofAllinA = (((ind20loanRanges_length[0])/indLoansCountRangea)* 100); 
        //percentage of all loans for industry20loanrangeA
        var ind20LoanPercentAofAllLoans = (((ind20loanRanges_length[0])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry20 range a out of all jobs industry20
        var ind20JobPercentA = (((ind20jobscount_sum[0])/ind20jobstotal)* 100)
        // percent of jobs industry20 out of all jobs in loan range
        var ind20JobPercentAofAllinA = (((ind20jobscount_sum[0])/indJobsCountRangea)* 100); 
        //percentage of all jobs for industry20jobsrangeA
        var ind20JobPercentAofAllLoans = (((ind20jobscount_sum[0])/indJobsCountRangeAll)* 100);

        //industry20 RangeB chart percentages
        // percent of loans industry20 range b out of all loans industry20
        var ind20LoanPercentB = (((ind20loanRanges_length[1])/ind20jobstotallist.length)* 100)
        // percent of loans industry20 loan range b of all loans range b
        var ind20LoanPercentBofAllinB = (((ind20loanRanges_length[1])/indLoansCountRangeb)* 100); 
        //percentage of all loans for industry20loanrangeB
        var ind20LoanPercentBofAllLoans = (((ind20loanRanges_length[1])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry20 range b out of all jobs industry20
        var ind20JobPercentB = (((ind20jobscount_sum[1])/ind20jobstotal)* 100)
        // percent of jobs industry20 out of all jobs in loan range
        var ind20JobPercentBofAllinB = (((ind20jobscount_sum[1])/indJobsCountRangeb)* 100); 
        //percentage of all jobs for industry20jobsrangeB
        var ind20JobPercentBofAllLoans = (((ind20jobscount_sum[1])/indJobsCountRangeAll)* 100);

        //industry20 RangeC chart percentages
        // percent of loans industry20 range c out of all loans industry20
        var ind20LoanPercentC = (((ind20loanRanges_length[2])/ind20jobstotallist.length)* 100)
        // percent of loans industry20 loan range c of all loans range c
        var ind20LoanPercentCofAllinC = (((ind20loanRanges_length[2])/indLoansCountRangec)* 100); 
        //percentage of all loans for industry20loanrangeC
        var ind20LoanPercentCofAllLoans = (((ind20loanRanges_length[2])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry20 range c out of all jobs industry20
        var ind20JobPercentC = (((ind20jobscount_sum[2])/ind20jobstotal)* 100)
        // percent of jobs industry20 out of all jobs in loan range
        var ind20JobPercentCofAllinC = (((ind20jobscount_sum[2])/indJobsCountRangec)* 100); 
        //percentage of all jobs for industry20jobsrangeC
        var ind20JobPercentCofAllLoans = (((ind20jobscount_sum[2])/indJobsCountRangeAll)* 100);

        //industry20 RangeD chart percentages
        // percent of loans industry20 range d out of all loans industry20
        var ind20LoanPercentD = (((ind20loanRanges_length[3])/ind20jobstotallist.length)* 100)
        // percent of loans industry20 loan range d of all loans range d
        var ind20LoanPercentDofAllinD = (((ind20loanRanges_length[3])/indLoansCountRanged)* 100); 
        //percentage of all loans for industry20loanrangeD
        var ind20LoanPercentDofAllLoans = (((ind20loanRanges_length[3])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry20 range d out of all jobs industry20
        var ind20JobPercentD = (((ind20jobscount_sum[3])/ind20jobstotal)* 100)
        // percent of jobs industry20 out of all jobs in loan range
        var ind20JobPercentDofAllinD = (((ind20jobscount_sum[3])/indJobsCountRanged)* 100); 
        //percentage of all jobs for industry20jobsrangeD
        var ind20JobPercentDofAllLoans = (((ind20jobscount_sum[3])/indJobsCountRangeAll)* 100);

        //industry20 RangeE chart percentages
        // percent of loans industry20 range e out of all loans industry20
        var ind20LoanPercentE = (((ind20loanRanges_length[4])/ind20jobstotallist.length)* 100)
        // percent of loans industry20 loan range e of all loans range e
        var ind20LoanPercentEofAllinE = (((ind20loanRanges_length[4])/indLoansCountRangee)* 100); 
        //percentage of all loans for industry20loanrangeE
        var ind20LoanPercentEofAllLoans = (((ind20loanRanges_length[4])/indLoansCountRangeTotal)* 100);
        // percent of jobs industry20 range e out of all jobs industry20
        var ind20JobPercentE = (((ind20jobscount_sum[4])/ind20jobstotal)* 100)
        // percent of jobs industry20 out of all jobs in loan range
        var ind20JobPercentEofAllinE = (((ind20jobscount_sum[4])/indJobsCountRangee)* 100); 
        //percentage of all jobs for industry20jobsrangeE
        var ind20JobPercentEofAllLoans = (((ind20jobscount_sum[4])/indJobsCountRangeAll)* 100);

        var industrylist = industries; // list of ALL industry names in order as shown in log 31
        var LoanRanges = ["a $5-10 million", "b $2-5 million", "c $1-2 million", "d $350,000-1 million", "e $150,000-350,000"]
    
       
        var jobsData = {
            "ind1": [
                { label: LoanRanges[0], y: ind1jobscount_sum[0]},
                { label: LoanRanges[1], y: ind1jobscount_sum[1]},
                { label: LoanRanges[2], y: ind1jobscount_sum[2]},
                { label: LoanRanges[3], y: ind1jobscount_sum[3]},
                { label: LoanRanges[4], y: ind1jobscount_sum[4]}
            ],
            "ind2": [
                { label: LoanRanges[0], y: ind2jobscount_sum[0]},
                { label: LoanRanges[1], y: ind2jobscount_sum[1]},
                { label: LoanRanges[2], y: ind2jobscount_sum[2]},
                { label: LoanRanges[3], y: ind2jobscount_sum[3]},
                { label: LoanRanges[4], y: ind2jobscount_sum[4]}
            ],
            "ind3": [
                { label: LoanRanges[0], y: ind3jobscount_sum[0]},
                { label: LoanRanges[1], y: ind3jobscount_sum[1]},
                { label: LoanRanges[2], y: ind3jobscount_sum[2]},
                { label: LoanRanges[3], y: ind3jobscount_sum[3]},
                { label: LoanRanges[4], y: ind3jobscount_sum[4]}
            ],
            "ind4": [
                { label: LoanRanges[0], y: ind4jobscount_sum[0]},
                { label: LoanRanges[1], y: ind4jobscount_sum[1]},
                { label: LoanRanges[2], y: ind4jobscount_sum[2]},
                { label: LoanRanges[3], y: ind4jobscount_sum[3]},
                { label: LoanRanges[4], y: ind4jobscount_sum[4]}
            ],
            "ind5": [
                { label: LoanRanges[0], y: ind5jobscount_sum[0]},
                { label: LoanRanges[1], y: ind5jobscount_sum[1]},
                { label: LoanRanges[2], y: ind5jobscount_sum[2]},
                { label: LoanRanges[3], y: ind5jobscount_sum[3]},
                { label: LoanRanges[4], y: ind5jobscount_sum[4]}
            ],
            "ind6": [
                { label: LoanRanges[0], y: ind6jobscount_sum[0]},
                { label: LoanRanges[1], y: ind6jobscount_sum[1]},
                { label: LoanRanges[2], y: ind6jobscount_sum[2]},
                { label: LoanRanges[3], y: ind6jobscount_sum[3]},
                { label: LoanRanges[4], y: ind6jobscount_sum[4]}
            ],
            "ind7": [
                { label: LoanRanges[0], y: ind7jobscount_sum[0]},
                { label: LoanRanges[1], y: ind7jobscount_sum[1]},
                { label: LoanRanges[2], y: ind7jobscount_sum[2]},
                { label: LoanRanges[3], y: ind7jobscount_sum[3]},
                { label: LoanRanges[4], y: ind7jobscount_sum[4]}
            ],
            "ind8": [
                { label: LoanRanges[0], y: ind8jobscount_sum[0]},
                { label: LoanRanges[1], y: ind8jobscount_sum[1]},
                { label: LoanRanges[2], y: ind8jobscount_sum[2]},
                { label: LoanRanges[3], y: ind8jobscount_sum[3]},
                { label: LoanRanges[4], y: ind8jobscount_sum[4]}
            ],
            "ind9": [
                { label: LoanRanges[0], y: ind9jobscount_sum[0]},
                { label: LoanRanges[1], y: ind9jobscount_sum[1]},
                { label: LoanRanges[2], y: ind9jobscount_sum[2]},
                { label: LoanRanges[3], y: ind9jobscount_sum[3]},
                { label: LoanRanges[4], y: ind9jobscount_sum[4]}
            ],
            "ind10": [
                { label: LoanRanges[0], y: ind10jobscount_sum[0]},
                { label: LoanRanges[1], y: ind10jobscount_sum[1]},
                { label: LoanRanges[2], y: ind10jobscount_sum[2]},
                { label: LoanRanges[3], y: ind10jobscount_sum[3]},
                { label: LoanRanges[4], y: ind10jobscount_sum[4]}
            ],
            "ind11": [
                { label: LoanRanges[0], y: ind11jobscount_sum[0]},
                { label: LoanRanges[1], y: ind11jobscount_sum[1]},
                { label: LoanRanges[2], y: ind11jobscount_sum[2]},
                { label: LoanRanges[3], y: ind11jobscount_sum[3]},
                { label: LoanRanges[4], y: ind11jobscount_sum[4]}
            ],
            "ind12": [
                { label: LoanRanges[0], y: ind12jobscount_sum[0]},
                { label: LoanRanges[1], y: ind12jobscount_sum[1]},
                { label: LoanRanges[2], y: ind12jobscount_sum[2]},
                { label: LoanRanges[3], y: ind12jobscount_sum[3]},
                { label: LoanRanges[4], y: ind12jobscount_sum[4]}
            ],
            "ind13": [
                { label: LoanRanges[0], y: ind13jobscount_sum[0]},
                { label: LoanRanges[1], y: ind13jobscount_sum[1]},
                { label: LoanRanges[2], y: ind13jobscount_sum[2]},
                { label: LoanRanges[3], y: ind13jobscount_sum[3]},
                { label: LoanRanges[4], y: ind13jobscount_sum[4]}
            ],
            "ind14": [
                { label: LoanRanges[0], y: ind14jobscount_sum[0]},
                { label: LoanRanges[1], y: ind14jobscount_sum[1]},
                { label: LoanRanges[2], y: ind14jobscount_sum[2]},
                { label: LoanRanges[3], y: ind14jobscount_sum[3]},
                { label: LoanRanges[4], y: ind14jobscount_sum[4]}
            ],
            "ind15": [
                { label: LoanRanges[0], y: ind15jobscount_sum[0]},
                { label: LoanRanges[1], y: ind15jobscount_sum[1]},
                { label: LoanRanges[2], y: ind15jobscount_sum[2]},
                { label: LoanRanges[3], y: ind15jobscount_sum[3]},
                { label: LoanRanges[4], y: ind15jobscount_sum[4]}
            ],
            "ind16": [
                { label: LoanRanges[0], y: ind16jobscount_sum[0]},
                { label: LoanRanges[1], y: ind16jobscount_sum[1]},
                { label: LoanRanges[2], y: ind16jobscount_sum[2]},
                { label: LoanRanges[3], y: ind16jobscount_sum[3]},
                { label: LoanRanges[4], y: ind16jobscount_sum[4]}
            ],
            "ind17": [
                { label: LoanRanges[0], y: ind17jobscount_sum[0]},
                { label: LoanRanges[1], y: ind17jobscount_sum[1]},
                { label: LoanRanges[2], y: ind17jobscount_sum[2]},
                { label: LoanRanges[3], y: ind17jobscount_sum[3]},
                { label: LoanRanges[4], y: ind17jobscount_sum[4]}
            ],
            "ind18": [
                { label: LoanRanges[0], y: ind18jobscount_sum[0]},
                { label: LoanRanges[1], y: ind18jobscount_sum[1]},
                { label: LoanRanges[2], y: ind18jobscount_sum[2]},
                { label: LoanRanges[3], y: ind18jobscount_sum[3]},
                { label: LoanRanges[4], y: ind18jobscount_sum[4]}
            ],
            "ind19": [
                { label: LoanRanges[0], y: ind19jobscount_sum[0]},
                { label: LoanRanges[1], y: ind19jobscount_sum[1]},
                { label: LoanRanges[2], y: ind19jobscount_sum[2]},
                { label: LoanRanges[3], y: ind19jobscount_sum[3]},
                { label: LoanRanges[4], y: ind19jobscount_sum[4]}
            ],
            "ind20": [
                { label: LoanRanges[0], y: ind20jobscount_sum[0]},
                { label: LoanRanges[1], y: ind20jobscount_sum[1]},
                { label: LoanRanges[2], y: ind20jobscount_sum[2]},
                { label: LoanRanges[3], y: ind20jobscount_sum[3]},
                { label: LoanRanges[4], y: ind20jobscount_sum[4]}
            ],
            }
        
        
            var dataPoints = [];
            var chart = new CanvasJS.Chart("chartContainer4", {
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "# of Jobs Retained",
                    fontFamily:"sans-serif",
                    fontSize: 20
                },
                data: [{
                    type: "doughnut",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}",
                    showInLegend: true,
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}",
                    dataPoints: dataPoints   
                }]
            });
            // chart.render();
    
            $( ".dropdown" ).change(function() {
                chart.options.data[0].dataPoints = [];
            var e = document.getElementById("selDataset");
                var selected = e.options[e.selectedIndex].value;
            dps = jobsData[selected];
            for(var i in dps) {
                var xVal = dps[i].label;
                chart.options.data[0].dataPoints.push({x:(xVal), y: dps[i].y});
            }
            chart.render();
        });

            var loanData = {
                "ind1": [
                    { label: LoanRanges[0], y: ind1loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind1loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind1loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind1loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind1loanRanges_length[4]},
                ],
                "ind2": [
                    { label: LoanRanges[0], y: ind2loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind2loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind2loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind2loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind2loanRanges_length[4]},
                ],
                "ind3": [
                    { label: LoanRanges[0], y: ind3loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind3loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind3loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind3loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind3loanRanges_length[4]},
                ],
                "ind4": [
                    { label: LoanRanges[0], y: ind4loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind4loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind4loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind4loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind4loanRanges_length[4]},
                ],
                "ind5": [
                    { label: LoanRanges[0], y: ind5loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind5loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind5loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind5loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind5loanRanges_length[4]},
                ],
                "ind6": [
                    { label: LoanRanges[0], y: ind6loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind6loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind6loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind6loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind6loanRanges_length[4]},
                ],
                "ind7": [
                    { label: LoanRanges[0], y: ind7loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind7loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind7loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind7loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind7loanRanges_length[4]},
                ],
                "ind8": [
                    { label: LoanRanges[0], y: ind8loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind8loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind8loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind8loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind8loanRanges_length[4]},
                ],
                "ind9": [
                    { label: LoanRanges[0], y: ind9loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind9loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind9loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind9loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind9loanRanges_length[4]},
                ],
                "ind10": [
                    { label: LoanRanges[0], y: ind10loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind10loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind10loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind10loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind10loanRanges_length[4]},
                ],
                "ind11": [
                    { label: LoanRanges[0], y: ind11loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind11loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind11loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind11loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind11loanRanges_length[4]},
                ],
                "ind12": [
                    { label: LoanRanges[0], y: ind12loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind12loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind12loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind12loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind12loanRanges_length[4]},
                ],
                "ind13": [
                    { label: LoanRanges[0], y: ind13loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind13loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind13loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind13loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind13loanRanges_length[4]},
                ],
                "ind14": [
                    { label: LoanRanges[0], y: ind14loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind14loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind14loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind14loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind14loanRanges_length[4]},
                ],
                "ind15": [
                    { label: LoanRanges[0], y: ind15loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind15loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind15loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind15loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind15loanRanges_length[4]},
                ],
                "ind16": [
                    { label: LoanRanges[0], y: ind16loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind16loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind16loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind16loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind16loanRanges_length[4]},
                ],
                "ind17": [
                    { label: LoanRanges[0], y: ind17loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind17loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind17loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind17loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind17loanRanges_length[4]},
                ],
                "ind18": [
                    { label: LoanRanges[0], y: ind18loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind18loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind18loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind18loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind18loanRanges_length[4]},
                ],
                "ind19": [
                    { label: LoanRanges[0], y: ind19loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind19loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind19loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind19loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind19loanRanges_length[4]},
                ],
                "ind20": [
                    { label: LoanRanges[0], y: ind20loanRanges_length[0]},
                    { label: LoanRanges[1], y: ind20loanRanges_length[1]},
                    { label: LoanRanges[2], y: ind20loanRanges_length[2]},
                    { label: LoanRanges[3], y: ind20loanRanges_length[3]},
                    { label: LoanRanges[4], y: ind20loanRanges_length[4]},
                ],
                }
    
            var dataPoints2 = [];
            var chart2 = new CanvasJS.Chart("chartContainer6", {
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "# of Loans",
                    fontFamily:"sans-serif",
                    fontSize: 20
                },
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}",
                    showInLegend: true,
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}",
                    dataPoints: dataPoints2   
                }]
            });
            // chart2.render();
    
            $( ".dropdown" ).change(function() {
                chart2.options.data[0].dataPoints = [];
            var e = document.getElementById("selDataset");
                var selected = e.options[e.selectedIndex].value;
            dps = loanData[selected];
            for(var i in dps) {
                var xVal = dps[i].label;
                chart2.options.data[0].dataPoints.push({x:(xVal), y: dps[i].y});
            }
        chart2.render();
    });     
    //current code both charts render with one dropdown box
    //possible split option to compare industry to industry with second dropdown option 
    // copy paste of line 1050 to 1082  with chart3 and chart4 options linked to dropdown2



    var dataPoints3 = [];
            var chart3 = new CanvasJS.Chart("chartContainer8", {
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "# of Jobs Retained",
                    fontFamily:"sans-serif",
                    fontSize: 20
                },
                data: [{
                    type: "doughnut",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}",
                    showInLegend: true,
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}",
                    dataPoints: dataPoints3   
                }]
            });
            // chart2.render();

            $( ".dropdown" ).change(function() {
                chart3.options.data[0].dataPoints = [];
            var e = document.getElementById("selDataset2");
                var selected = e.options[e.selectedIndex].value;
            dps = jobsData[selected];
            for(var i in dps) {
                var xVal = dps[i].label;
                chart3.options.data[0].dataPoints.push({x:(xVal), y: dps[i].y});
            }
        chart3.render();
        });


            var dataPoints4 = [];
            var chart4 = new CanvasJS.Chart("chartContainer10", {
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "# of Loans",
                    fontFamily:"sans-serif",
                    fontSize: 20
                },
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}",
                    showInLegend: true,
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}",
                    dataPoints: dataPoints4   
                }]
            });
            // chart2.render();

            $( ".dropdown" ).change(function() {
                chart4.options.data[0].dataPoints = [];
            var e = document.getElementById("selDataset2");
                var selected = e.options[e.selectedIndex].value;
            dps = loanData[selected];
            for(var i in dps) {
                var xVal = dps[i].label;
                chart4.options.data[0].dataPoints.push({x:(xVal), y: dps[i].y});
            }
            chart4.render();
        });

        
        var ind1TableData = [
            {"Industry" : (industrylist[0]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind1loanRanges_length[0]), "% of Loans Industry" : (ind1LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind1LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[0]), "% of Jobs Retained Industry" : (ind1JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind1loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind1loanRanges_length[1]), "% of Loans Industry" : (ind1LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind1LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[1]), "% of Jobs Retained Industry" : (ind1JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind1loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind1loanRanges_length[2]), "% of Loans Industry" : (ind1LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind1LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[2]), "% of Jobs Retained Industry" : (ind1JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind1loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind1loanRanges_length[3]), "% of Loans Industry" : (ind1LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind1LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[3]), "% of Jobs Retained Industry" : (ind1JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind1loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind1loanRanges_length[4]), "% of Loans Industry" : (ind1LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind1LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[4]), "% of Jobs Retained Industry" : (ind1JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind1loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[1]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind2loanRanges_length[0]), "% of Loans Industry" : (ind2LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind2LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[0]), "% of Jobs Retained Industry" : (ind2JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind2loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind2loanRanges_length[1]), "% of Loans Industry" : (ind2LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind2LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[1]), "% of Jobs Retained Industry" : (ind2JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind2loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind2loanRanges_length[2]), "% of Loans Industry" : (ind2LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind2LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[2]), "% of Jobs Retained Industry" : (ind2JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind2loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind2loanRanges_length[3]), "% of Loans Industry" : (ind2LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind2LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[3]), "% of Jobs Retained Industry" : (ind2JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind2loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind2loanRanges_length[4]), "% of Loans Industry" : (ind2LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind2LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[4]), "% of Jobs Retained Industry" : (ind2JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind2loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[2]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind3loanRanges_length[0]), "% of Loans Industry" : (ind3LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind3LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[0]), "% of Jobs Retained Industry" : (ind3JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind3loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind3loanRanges_length[1]), "% of Loans Industry" : (ind3LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind3LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[1]), "% of Jobs Retained Industry" : (ind3JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind3loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind3loanRanges_length[2]), "% of Loans Industry" : (ind3LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind3LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[2]), "% of Jobs Retained Industry" : (ind3JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind3loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind3loanRanges_length[3]), "% of Loans Industry" : (ind3LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind3LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[3]), "% of Jobs Retained Industry" : (ind3JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind3loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind3loanRanges_length[4]), "% of Loans Industry" : (ind3LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind3LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[4]), "% of Jobs Retained Industry" : (ind3JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind3loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[3]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind4loanRanges_length[0]), "% of Loans Industry" : (ind4LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind4LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[0]), "% of Jobs Retained Industry" : (ind4JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind4loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind4loanRanges_length[1]), "% of Loans Industry" : (ind4LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind4LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[1]), "% of Jobs Retained Industry" : (ind4JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind4loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind4loanRanges_length[2]), "% of Loans Industry" : (ind4LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind4LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[2]), "% of Jobs Retained Industry" : (ind4JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind4loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind4loanRanges_length[3]), "% of Loans Industry" : (ind4LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind4LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[3]), "% of Jobs Retained Industry" : (ind4JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind4loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind4loanRanges_length[4]), "% of Loans Industry" : (ind4LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind4LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[4]), "% of Jobs Retained Industry" : (ind4JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind4loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[4]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind5loanRanges_length[0]), "% of Loans Industry" : (ind5LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind5LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[0]), "% of Jobs Retained Industry" : (ind5JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind5loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind5loanRanges_length[1]), "% of Loans Industry" : (ind5LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind5LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[1]), "% of Jobs Retained Industry" : (ind5JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind5loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind5loanRanges_length[2]), "% of Loans Industry" : (ind5LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind5LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[2]), "% of Jobs Retained Industry" : (ind5JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind5loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind5loanRanges_length[3]), "% of Loans Industry" : (ind5LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind5LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[3]), "% of Jobs Retained Industry" : (ind5JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind5loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind5loanRanges_length[4]), "% of Loans Industry" : (ind5LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind5LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[4]), "% of Jobs Retained Industry" : (ind5JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind5loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[5]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind6loanRanges_length[0]), "% of Loans Industry" : (ind6LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind6LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[0]), "% of Jobs Retained Industry" : (ind6JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind6loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind6loanRanges_length[1]), "% of Loans Industry" : (ind6LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind6LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[1]), "% of Jobs Retained Industry" : (ind6JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind6loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind6loanRanges_length[2]), "% of Loans Industry" : (ind6LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind6LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[2]), "% of Jobs Retained Industry" : (ind6JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind6loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind6loanRanges_length[3]), "% of Loans Industry" : (ind6LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind6LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[3]), "% of Jobs Retained Industry" : (ind6JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind6loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind6loanRanges_length[4]), "% of Loans Industry" : (ind6LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind6LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[4]), "% of Jobs Retained Industry" : (ind6JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind6loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[6]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind7loanRanges_length[0]), "% of Loans Industry" : (ind7LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind7LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[0]), "% of Jobs Retained Industry" : (ind7JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind7loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind7loanRanges_length[1]), "% of Loans Industry" : (ind7LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind7LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[1]), "% of Jobs Retained Industry" : (ind7JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind7loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind7loanRanges_length[2]), "% of Loans Industry" : (ind7LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind7LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[2]), "% of Jobs Retained Industry" : (ind7JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind7loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind7loanRanges_length[3]), "% of Loans Industry" : (ind7LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind7LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[3]), "% of Jobs Retained Industry" : (ind7JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind7loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind7loanRanges_length[4]), "% of Loans Industry" : (ind7LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind7LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[4]), "% of Jobs Retained Industry" : (ind7JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind7loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[7]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind8loanRanges_length[0]), "% of Loans Industry" : (ind8LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind8LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[0]), "% of Jobs Retained Industry" : (ind8JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind8loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind8loanRanges_length[1]), "% of Loans Industry" : (ind8LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind8LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[1]), "% of Jobs Retained Industry" : (ind8JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind8loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind8loanRanges_length[2]), "% of Loans Industry" : (ind8LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind8LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[2]), "% of Jobs Retained Industry" : (ind8JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind8loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind8loanRanges_length[3]), "% of Loans Industry" : (ind8LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind8LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[3]), "% of Jobs Retained Industry" : (ind8JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind8loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind8loanRanges_length[4]), "% of Loans Industry" : (ind8LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind8LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[4]), "% of Jobs Retained Industry" : (ind8JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind8loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[8]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind9loanRanges_length[0]), "% of Loans Industry" : (ind9LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind9LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[0]), "% of Jobs Retained Industry" : (ind9JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind9loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind9loanRanges_length[1]), "% of Loans Industry" : (ind9LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind9LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[1]), "% of Jobs Retained Industry" : (ind9JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind9loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind9loanRanges_length[2]), "% of Loans Industry" : (ind9LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind9LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[2]), "% of Jobs Retained Industry" : (ind9JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind9loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind9loanRanges_length[3]), "% of Loans Industry" : (ind9LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind9LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[3]), "% of Jobs Retained Industry" : (ind9JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind9loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind9loanRanges_length[4]), "% of Loans Industry" : (ind9LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind9LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[4]), "% of Jobs Retained Industry" : (ind9JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind9loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[9]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind10loanRanges_length[0]), "% of Loans Industry" : (ind10LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind10LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[0]), "% of Jobs Retained Industry" : (ind10JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind10loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind10loanRanges_length[1]), "% of Loans Industry" : (ind10LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind10LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[1]), "% of Jobs Retained Industry" : (ind10JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentBofAllLoans.toFixed(2)),  "Avg # of Jobs Retained per Loan" : (ind10loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind10loanRanges_length[2]), "% of Loans Industry" : (ind10LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind10LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[2]), "% of Jobs Retained Industry" : (ind10JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind10loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind10loanRanges_length[3]), "% of Loans Industry" : (ind10LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind10LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[3]), "% of Jobs Retained Industry" : (ind10JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind10loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind10loanRanges_length[4]), "% of Loans Industry" : (ind10LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind10LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[4]), "% of Jobs Retained Industry" : (ind10JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind10loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[10]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind11loanRanges_length[0]), "% of Loans Industry" : (ind11LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind11LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind11LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind11jobscount_sum[0]), "% of Jobs Retained Industry" : (ind11JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind11JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind11JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind11loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind11loanRanges_length[1]), "% of Loans Industry" : (ind11LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind11LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind11LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind11jobscount_sum[1]), "% of Jobs Retained Industry" : (ind11JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind11JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind11JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind11loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind11loanRanges_length[2]), "% of Loans Industry" : (ind11LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind11LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind11LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind11jobscount_sum[2]), "% of Jobs Retained Industry" : (ind11JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind11JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind11JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind11loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind11loanRanges_length[3]), "% of Loans Industry" : (ind11LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind11LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind11LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind11jobscount_sum[3]), "% of Jobs Retained Industry" : (ind11JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind11JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind11JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind11loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind11loanRanges_length[4]), "% of Loans Industry" : (ind11LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind11LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind11LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind11jobscount_sum[4]), "% of Jobs Retained Industry" : (ind11JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind11JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind11JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind11loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[11]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind12loanRanges_length[0]), "% of Loans Industry" : (ind12LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind12LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind12LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind12jobscount_sum[0]), "% of Jobs Retained Industry" : (ind12JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind12JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind12JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind12loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind12loanRanges_length[1]), "% of Loans Industry" : (ind12LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind12LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind12LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind12jobscount_sum[1]), "% of Jobs Retained Industry" : (ind12JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind12JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind12JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind12loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind12loanRanges_length[2]), "% of Loans Industry" : (ind12LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind12LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind12LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind12jobscount_sum[2]), "% of Jobs Retained Industry" : (ind12JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind12JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind12JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind12loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind12loanRanges_length[3]), "% of Loans Industry" : (ind12LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind12LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind12LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind12jobscount_sum[3]), "% of Jobs Retained Industry" : (ind12JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind12JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind12JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind12loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind12loanRanges_length[4]), "% of Loans Industry" : (ind12LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind12LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind12LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind12jobscount_sum[4]), "% of Jobs Retained Industry" : (ind12JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind12JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind12JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind12loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[12]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind13loanRanges_length[0]), "% of Loans Industry" : (ind13LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind13LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind13LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind13jobscount_sum[0]), "% of Jobs Retained Industry" : (ind13JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind13JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind13JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind13loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind13loanRanges_length[1]), "% of Loans Industry" : (ind13LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind13LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind13LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind13jobscount_sum[1]), "% of Jobs Retained Industry" : (ind13JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind13JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind13JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind13loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind13loanRanges_length[2]), "% of Loans Industry" : (ind13LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind13LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind13LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind13jobscount_sum[2]), "% of Jobs Retained Industry" : (ind13JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind13JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind13JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind13loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind13loanRanges_length[3]), "% of Loans Industry" : (ind13LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind13LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind13LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind13jobscount_sum[3]), "% of Jobs Retained Industry" : (ind13JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind13JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind13JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind13loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind13loanRanges_length[4]), "% of Loans Industry" : (ind13LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind13LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind13LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind13jobscount_sum[4]), "% of Jobs Retained Industry" : (ind13JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind13JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind13JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind13loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[13]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind14loanRanges_length[0]), "% of Loans Industry" : (ind14LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind14LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind14LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind14jobscount_sum[0]), "% of Jobs Retained Industry" : (ind14JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind14JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind14JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind14loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind14loanRanges_length[1]), "% of Loans Industry" : (ind14LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind14LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind14LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind14jobscount_sum[1]), "% of Jobs Retained Industry" : (ind14JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind14JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind14JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind14loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind14loanRanges_length[2]), "% of Loans Industry" : (ind14LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind14LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind14LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind14jobscount_sum[2]), "% of Jobs Retained Industry" : (ind14JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind14JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind14JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind14loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind14loanRanges_length[3]), "% of Loans Industry" : (ind14LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind14LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind14LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind14jobscount_sum[3]), "% of Jobs Retained Industry" : (ind14JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind14JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind14JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind14loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind14loanRanges_length[4]), "% of Loans Industry" : (ind14LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind14LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind14LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind14jobscount_sum[4]), "% of Jobs Retained Industry" : (ind14JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind14JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind14JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind14loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[14]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind15loanRanges_length[0]), "% of Loans Industry" : (ind15LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind15LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind15LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind15jobscount_sum[0]), "% of Jobs Retained Industry" : (ind15JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind15JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind15JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind15loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind15loanRanges_length[1]), "% of Loans Industry" : (ind15LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind15LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind15LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind15jobscount_sum[1]), "% of Jobs Retained Industry" : (ind15JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind15JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind15JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind15loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind15loanRanges_length[2]), "% of Loans Industry" : (ind15LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind15LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind15LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind15jobscount_sum[2]), "% of Jobs Retained Industry" : (ind15JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind15JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind15JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind15loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind15loanRanges_length[3]), "% of Loans Industry" : (ind15LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind15LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind15LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind15jobscount_sum[3]), "% of Jobs Retained Industry" : (ind15JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind15JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind15JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind15loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind15loanRanges_length[4]), "% of Loans Industry" : (ind15LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind15LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind15LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind15jobscount_sum[4]), "% of Jobs Retained Industry" : (ind15JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind15JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind15JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind15loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[15]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind16loanRanges_length[0]), "% of Loans Industry" : (ind16LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind16LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind16LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind16jobscount_sum[0]), "% of Jobs Retained Industry" : (ind16JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind16JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind16JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind16loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind16loanRanges_length[1]), "% of Loans Industry" : (ind16LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind16LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind16LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind16jobscount_sum[1]), "% of Jobs Retained Industry" : (ind16JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind16JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind16JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind16loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind16loanRanges_length[2]), "% of Loans Industry" : (ind16LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind16LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind16LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind16jobscount_sum[2]), "% of Jobs Retained Industry" : (ind16JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind16JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind16JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind16loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind16loanRanges_length[3]), "% of Loans Industry" : (ind16LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind16LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind16LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind16jobscount_sum[3]), "% of Jobs Retained Industry" : (ind16JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind16JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind16JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind16loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind16loanRanges_length[4]), "% of Loans Industry" : (ind16LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind16LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind16LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind16jobscount_sum[4]), "% of Jobs Retained Industry" : (ind16JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind16JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind16JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind16loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[16]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind17loanRanges_length[0]), "% of Loans Industry" : (ind17LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind17LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind17LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind17jobscount_sum[0]), "% of Jobs Retained Industry" : (ind17JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind17JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind17JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind17loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind17loanRanges_length[1]), "% of Loans Industry" : (ind17LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind17LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind17LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind17jobscount_sum[1]), "% of Jobs Retained Industry" : (ind17JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind17JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind17JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind17loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind17loanRanges_length[2]), "% of Loans Industry" : (ind17LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind17LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind17LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind17jobscount_sum[2]), "% of Jobs Retained Industry" : (ind17JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind17JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind17JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind17loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind17loanRanges_length[3]), "% of Loans Industry" : (ind17LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind17LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind17LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind17jobscount_sum[3]), "% of Jobs Retained Industry" : (ind17JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind17JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind17JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind17loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind17loanRanges_length[4]), "% of Loans Industry" : (ind17LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind17LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind17LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind17jobscount_sum[4]), "% of Jobs Retained Industry" : (ind17JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind17JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind17JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind17loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[17]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind18loanRanges_length[0]), "% of Loans Industry" : (ind18LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind18LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind18LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind18jobscount_sum[0]), "% of Jobs Retained Industry" : (ind18JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind18JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind18JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind18loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind18loanRanges_length[1]), "% of Loans Industry" : (ind18LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind18LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind18LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind18jobscount_sum[1]), "% of Jobs Retained Industry" : (ind18JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind18JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind18JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind18loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind18loanRanges_length[2]), "% of Loans Industry" : (ind18LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind18LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind18LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind18jobscount_sum[2]), "% of Jobs Retained Industry" : (ind18JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind18JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind18JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind18loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind18loanRanges_length[3]), "% of Loans Industry" : (ind18LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind18LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind18LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind18jobscount_sum[3]), "% of Jobs Retained Industry" : (ind18JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind18JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind18JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind18loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind18loanRanges_length[4]), "% of Loans Industry" : (ind18LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind18LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind18LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind18jobscount_sum[4]), "% of Jobs Retained Industry" : (ind18JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind18JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind18JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind18loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[18]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind19loanRanges_length[0]), "% of Loans Industry" : (ind19LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind19LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind19LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind19jobscount_sum[0]), "% of Jobs Retained Industry" : (ind19JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind19JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind19JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind19loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind19loanRanges_length[1]), "% of Loans Industry" : (ind19LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind19LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind19LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind19jobscount_sum[1]), "% of Jobs Retained Industry" : (ind19JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind19JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind19JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind19loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind19loanRanges_length[2]), "% of Loans Industry" : (ind19LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind19LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind19LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind19jobscount_sum[2]), "% of Jobs Retained Industry" : (ind19JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind19JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind19JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind19loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind19loanRanges_length[3]), "% of Loans Industry" : (ind19LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind19LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind19LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind19jobscount_sum[3]), "% of Jobs Retained Industry" : (ind19JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind19JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind19JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind19loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind19loanRanges_length[4]), "% of Loans Industry" : (ind19LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind19LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind19LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind19jobscount_sum[4]), "% of Jobs Retained Industry" : (ind19JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind19JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind19JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind19loanRangeeJobsAvg.toFixed(2))},
            {"Industry" : (industrylist[19]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind20loanRanges_length[0]), "% of Loans Industry" : (ind20LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind20LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind20LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind20jobscount_sum[0]), "% of Jobs Retained Industry" : (ind20JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind20JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind20JobPercentAofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind20loanRangeaJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind20loanRanges_length[1]), "% of Loans Industry" : (ind20LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind20LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind20LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind20jobscount_sum[1]), "% of Jobs Retained Industry" : (ind20JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind20JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind20JobPercentBofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind20loanRangebJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind20loanRanges_length[2]), "% of Loans Industry" : (ind20LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind20LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind20LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind20jobscount_sum[2]), "% of Jobs Retained Industry" : (ind20JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind20JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind20JobPercentCofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind20loanRangecJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind20loanRanges_length[3]), "% of Loans Industry" : (ind20LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind20LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind20LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind20jobscount_sum[3]), "% of Jobs Retained Industry" : (ind20JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind20JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind20JobPercentDofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind20loanRangedJobsAvg.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind20loanRanges_length[4]), "% of Loans Industry" : (ind20LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind20LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind20LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind20jobscount_sum[4]), "% of Jobs Retained Industry" : (ind20JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind20JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind20JobPercentEofAllLoans.toFixed(2)), "Avg # of Jobs Retained per Loan" : (ind20loanRangeeJobsAvg.toFixed(2))},
        ]

        
        // var ind1TableData = [
        //     {"Industry" : (industrylist[0]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind1loanRanges_length[0]), "% of Loans Industry" : (ind1LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind1LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[0]), "% of Jobs Retained Industry" : (ind1JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentAofAllLoans.toFixed(2))}
        // ]

        function tabulate(ind1TableData, columns) {
            var table = d3.select('table').append('table')
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
            .data(ind1TableData)
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

        //render the tables
        tabulate(ind1TableData, ["Industry", "Loan Range", "# of Loans", "% of Loans Industry", "% of Loan Range All Industry in Range", "% of All Loans", "# of Jobs Retained", "% of Jobs Retained Industry", "% of Jobs Retained All Industry in Range", "% of All Jobs Retained", "Avg # of Jobs Retained per Loan"]); // 11 column table
    
});
