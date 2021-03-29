// function buildPlot(industryType) {
//     //need for panel metadata
//     d3.csv("data/output/nycppprecipients_ind.csv").then((data)=>{


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

    for (var i=0; i<infos.length; i++) {
        var subArrays = infos[i];
        //console.log(subArrays);

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
            }
        }
    }

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
        console.log(ind1jobstotallist);
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
    


        //adds all Jobs Retained from Loan range a 
        var indJobsCountRangea = (ind1jobscount_sum[0] + ind2jobscount_sum[0] + ind3jobscount_sum[0] + ind4jobscount_sum[0] + ind5jobscount_sum[0] + ind6jobscount_sum[0] + ind7jobscount_sum[0] + ind8jobscount_sum[0] + ind9jobscount_sum[0] + ind10jobscount_sum[0]);
        console.log(indJobsCountRangea);
        //adds all Jobs Retained from Loan range b
        var indJobsCountRangeb = (ind1jobscount_sum[1] + ind2jobscount_sum[1] + ind3jobscount_sum[1] + ind4jobscount_sum[1] + ind5jobscount_sum[1] + ind6jobscount_sum[1] + ind7jobscount_sum[1] + ind8jobscount_sum[1] + ind9jobscount_sum[1] + ind10jobscount_sum[1]);
        console.log(indJobsCountRangeb);
        //adds all Jobs Retained from Loan range c
        var indJobsCountRangec = (ind1jobscount_sum[2] + ind2jobscount_sum[2] + ind3jobscount_sum[2] + ind4jobscount_sum[2] + ind5jobscount_sum[2] + ind6jobscount_sum[2] + ind7jobscount_sum[2] + ind8jobscount_sum[2] + ind9jobscount_sum[2] + ind10jobscount_sum[2]);
        console.log(indJobsCountRangec);
        //adds all Jobs Retained from Loan range d
        var indJobsCountRanged = (ind1jobscount_sum[3] + ind2jobscount_sum[3] + ind3jobscount_sum[3] + ind4jobscount_sum[3] + ind5jobscount_sum[3] + ind6jobscount_sum[3] + ind7jobscount_sum[3] + ind8jobscount_sum[3] + ind9jobscount_sum[3] + ind10jobscount_sum[3]);
        console.log(indJobsCountRanged);
        //adds all Jobs Retained from Loan range e
        var indJobsCountRangee = (ind1jobscount_sum[4] + ind2jobscount_sum[4] + ind3jobscount_sum[4] + ind4jobscount_sum[4] + ind5jobscount_sum[4] + ind6jobscount_sum[4] + ind7jobscount_sum[4] + ind8jobscount_sum[4] + ind9jobscount_sum[4] + ind10jobscount_sum[4]);
        console.log(indJobsCountRangee);

        //total # of Jobs ALL
        var indJobsCountRangeAll = (indJobsCountRangea + indJobsCountRangeb + indJobsCountRangec + indJobsCountRanged + indJobsCountRangee)
        console.log(indJobsCountRangeAll);

        //adds all Loans from Loan range a 
        var indLoansCountRangea = (ind1loanRanges_length[0] + ind2loanRanges_length[0] + ind3loanRanges_length[0] + ind4loanRanges_length[0] + ind5loanRanges_length[0] + ind6loanRanges_length[0] + ind7loanRanges_length[0] + ind8loanRanges_length[0] + ind9loanRanges_length[0] + ind10loanRanges_length[0])
        //adds all Loans from Loan range b
        var indLoansCountRangeb = (ind1loanRanges_length[1] + ind2loanRanges_length[1] + ind3loanRanges_length[1] + ind4loanRanges_length[1] + ind5loanRanges_length[1] + ind6loanRanges_length[1] + ind7loanRanges_length[1] + ind8loanRanges_length[1] + ind9loanRanges_length[1] + ind10loanRanges_length[1])
        //adds all Loans from Loan range c
        var indLoansCountRangec = (ind1loanRanges_length[2] + ind2loanRanges_length[2] + ind3loanRanges_length[2] + ind4loanRanges_length[2] + ind5loanRanges_length[2] + ind6loanRanges_length[2] + ind7loanRanges_length[2] + ind8loanRanges_length[2] + ind9loanRanges_length[2] + ind10loanRanges_length[2])
        //adds all Loans from Loan range d 
        var indLoansCountRanged = (ind1loanRanges_length[3] + ind2loanRanges_length[3] + ind3loanRanges_length[3] + ind4loanRanges_length[3] + ind5loanRanges_length[3] + ind6loanRanges_length[3] + ind7loanRanges_length[3] + ind8loanRanges_length[3] + ind9loanRanges_length[3] + ind10loanRanges_length[3])
        //adds all Loans from Loan range e
        var indLoansCountRangee = (ind1loanRanges_length[4] + ind2loanRanges_length[4] + ind3loanRanges_length[4] + ind4loanRanges_length[4] + ind5loanRanges_length[4] + ind6loanRanges_length[4] + ind7loanRanges_length[4] + ind8loanRanges_length[4] + ind9loanRanges_length[4] + ind10loanRanges_length[4])

        //total loans
        var indLoansCountRangeTotal = (indLoansCountRangea + indLoansCountRangeb + indLoansCountRangec + indLoansCountRanged + indLoansCountRangee)
        console.log(indLoansCountRangeTotal);

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
            {"Industry" : (industrylist[0]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind1loanRanges_length[0]), "% of Loans Industry" : (ind1LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind1LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[0]), "% of Jobs Retained Industry" : (ind1JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind1loanRanges_length[1]), "% of Loans Industry" : (ind1LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind1LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[1]), "% of Jobs Retained Industry" : (ind1JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind1loanRanges_length[2]), "% of Loans Industry" : (ind1LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind1LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[2]), "% of Jobs Retained Industry" : (ind1JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind1loanRanges_length[3]), "% of Loans Industry" : (ind1LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind1LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[3]), "% of Jobs Retained Industry" : (ind1JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind1loanRanges_length[4]), "% of Loans Industry" : (ind1LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind1LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind1LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind1jobscount_sum[4]), "% of Jobs Retained Industry" : (ind1JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind1JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind1JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[1]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind2loanRanges_length[0]), "% of Loans Industry" : (ind2LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind2LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[0]), "% of Jobs Retained Industry" : (ind2JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind2loanRanges_length[1]), "% of Loans Industry" : (ind2LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind2LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[1]), "% of Jobs Retained Industry" : (ind2JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind2loanRanges_length[2]), "% of Loans Industry" : (ind2LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind2LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[2]), "% of Jobs Retained Industry" : (ind2JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind2loanRanges_length[3]), "% of Loans Industry" : (ind2LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind2LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[3]), "% of Jobs Retained Industry" : (ind2JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind2loanRanges_length[4]), "% of Loans Industry" : (ind2LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind2LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind2LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind2jobscount_sum[4]), "% of Jobs Retained Industry" : (ind2JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind2JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind2JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[2]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind3loanRanges_length[0]), "% of Loans Industry" : (ind3LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind3LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[0]), "% of Jobs Retained Industry" : (ind3JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind3loanRanges_length[1]), "% of Loans Industry" : (ind3LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind3LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[1]), "% of Jobs Retained Industry" : (ind3JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind3loanRanges_length[2]), "% of Loans Industry" : (ind3LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind3LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[2]), "% of Jobs Retained Industry" : (ind3JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind3loanRanges_length[3]), "% of Loans Industry" : (ind3LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind3LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[3]), "% of Jobs Retained Industry" : (ind3JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind3loanRanges_length[4]), "% of Loans Industry" : (ind3LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind3LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind3LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind3jobscount_sum[4]), "% of Jobs Retained Industry" : (ind3JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind3JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind3JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[3]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind4loanRanges_length[0]), "% of Loans Industry" : (ind4LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind4LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[0]), "% of Jobs Retained Industry" : (ind4JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind4loanRanges_length[1]), "% of Loans Industry" : (ind4LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind4LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[1]), "% of Jobs Retained Industry" : (ind4JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind4loanRanges_length[2]), "% of Loans Industry" : (ind4LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind4LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[2]), "% of Jobs Retained Industry" : (ind4JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind4loanRanges_length[3]), "% of Loans Industry" : (ind4LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind4LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[3]), "% of Jobs Retained Industry" : (ind4JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind4loanRanges_length[4]), "% of Loans Industry" : (ind4LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind4LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind4LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind4jobscount_sum[4]), "% of Jobs Retained Industry" : (ind4JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind4JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind4JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[4]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind5loanRanges_length[0]), "% of Loans Industry" : (ind5LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind5LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[0]), "% of Jobs Retained Industry" : (ind5JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind5loanRanges_length[1]), "% of Loans Industry" : (ind5LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind5LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[1]), "% of Jobs Retained Industry" : (ind5JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind5loanRanges_length[2]), "% of Loans Industry" : (ind5LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind5LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[2]), "% of Jobs Retained Industry" : (ind5JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind5loanRanges_length[3]), "% of Loans Industry" : (ind5LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind5LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[3]), "% of Jobs Retained Industry" : (ind5JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind5loanRanges_length[4]), "% of Loans Industry" : (ind5LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind5LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind5LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind5jobscount_sum[4]), "% of Jobs Retained Industry" : (ind5JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind5JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind5JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[5]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind6loanRanges_length[0]), "% of Loans Industry" : (ind6LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind6LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[0]), "% of Jobs Retained Industry" : (ind6JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind6loanRanges_length[1]), "% of Loans Industry" : (ind6LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind6LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[1]), "% of Jobs Retained Industry" : (ind6JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind6loanRanges_length[2]), "% of Loans Industry" : (ind6LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind6LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[2]), "% of Jobs Retained Industry" : (ind6JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind6loanRanges_length[3]), "% of Loans Industry" : (ind6LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind6LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[3]), "% of Jobs Retained Industry" : (ind6JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind6loanRanges_length[4]), "% of Loans Industry" : (ind6LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind6LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind6LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind6jobscount_sum[4]), "% of Jobs Retained Industry" : (ind6JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind6JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind6JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[6]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind7loanRanges_length[0]), "% of Loans Industry" : (ind7LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind7LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[0]), "% of Jobs Retained Industry" : (ind7JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind7loanRanges_length[1]), "% of Loans Industry" : (ind7LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind7LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[1]), "% of Jobs Retained Industry" : (ind7JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind7loanRanges_length[2]), "% of Loans Industry" : (ind7LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind7LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[2]), "% of Jobs Retained Industry" : (ind7JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind7loanRanges_length[3]), "% of Loans Industry" : (ind7LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind7LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[3]), "% of Jobs Retained Industry" : (ind7JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind7loanRanges_length[4]), "% of Loans Industry" : (ind7LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind7LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind7LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind7jobscount_sum[4]), "% of Jobs Retained Industry" : (ind7JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind7JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind7JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[7]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind8loanRanges_length[0]), "% of Loans Industry" : (ind8LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind8LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[0]), "% of Jobs Retained Industry" : (ind8JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind8loanRanges_length[1]), "% of Loans Industry" : (ind8LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind8LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[1]), "% of Jobs Retained Industry" : (ind8JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind8loanRanges_length[2]), "% of Loans Industry" : (ind8LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind8LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[2]), "% of Jobs Retained Industry" : (ind8JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind8loanRanges_length[3]), "% of Loans Industry" : (ind8LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind8LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[3]), "% of Jobs Retained Industry" : (ind8JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind8loanRanges_length[4]), "% of Loans Industry" : (ind8LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind8LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind8LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind8jobscount_sum[4]), "% of Jobs Retained Industry" : (ind8JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind8JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind8JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[8]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind9loanRanges_length[0]), "% of Loans Industry" : (ind9LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind9LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[0]), "% of Jobs Retained Industry" : (ind9JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind9loanRanges_length[1]), "% of Loans Industry" : (ind9LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind9LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[1]), "% of Jobs Retained Industry" : (ind9JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind9loanRanges_length[2]), "% of Loans Industry" : (ind9LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind9LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[2]), "% of Jobs Retained Industry" : (ind9JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind9loanRanges_length[3]), "% of Loans Industry" : (ind9LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind9LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[3]), "% of Jobs Retained Industry" : (ind9JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind9loanRanges_length[4]), "% of Loans Industry" : (ind9LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind9LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind9LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind9jobscount_sum[4]), "% of Jobs Retained Industry" : (ind9JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind9JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind9JobPercentEofAllLoans.toFixed(2))},
            {"Industry" : (industrylist[9]), "Loan Range" : (LoanRanges[0]), "# of Loans" : (ind10loanRanges_length[0]), "% of Loans Industry" : (ind10LoanPercentA.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentAofAllinA.toFixed(2)), "% of All Loans": (ind10LoanPercentAofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[0]), "% of Jobs Retained Industry" : (ind10JobPercentA.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentAofAllinA.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentAofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[1]), "# of Loans" : (ind10loanRanges_length[1]), "% of Loans Industry" : (ind10LoanPercentB.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentBofAllinB.toFixed(2)), "% of All Loans": (ind10LoanPercentBofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[1]), "% of Jobs Retained Industry" : (ind10JobPercentB.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentBofAllinB.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentBofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[2]), "# of Loans" : (ind10loanRanges_length[2]), "% of Loans Industry" : (ind10LoanPercentC.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentCofAllinC.toFixed(2)), "% of All Loans": (ind10LoanPercentCofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[2]), "% of Jobs Retained Industry" : (ind10JobPercentC.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentCofAllinC.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentCofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[3]), "# of Loans" : (ind10loanRanges_length[3]), "% of Loans Industry" : (ind10LoanPercentD.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentDofAllinD.toFixed(2)), "% of All Loans": (ind10LoanPercentDofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[3]), "% of Jobs Retained Industry" : (ind10JobPercentD.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentDofAllinD.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentDofAllLoans.toFixed(2))},
            {"Industry" : " ", "Loan Range" : (LoanRanges[4]), "# of Loans" : (ind10loanRanges_length[4]), "% of Loans Industry" : (ind10LoanPercentE.toFixed(2)), "% of Loan Range All Industry in Range" : (ind10LoanPercentEofAllinE.toFixed(2)), "% of All Loans": (ind10LoanPercentEofAllLoans.toFixed(2)), "# of Jobs Retained": (ind10jobscount_sum[4]), "% of Jobs Retained Industry" : (ind10JobPercentE.toFixed(2)), "% of Jobs Retained All Industry in Range" : (ind10JobPercentEofAllinE.toFixed(2)), "% of All Jobs Retained" : (ind10JobPercentEofAllLoans.toFixed(2))},
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
        tabulate(ind1TableData, ["Industry", "Loan Range", "# of Loans", "% of Loans Industry", "% of Loan Range All Industry in Range", "% of All Loans", "# of Jobs Retained", "% of Jobs Retained Industry", "% of Jobs Retained All Industry in Range", "% of All Jobs Retained"]); // 2 column table
    
});
