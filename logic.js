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
        console.log(subArrays);

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
        //array with total number of jobs for each loan range for ind10
        var ind10jobscount = [ind10jobsa, ind10jobsb, ind10jobsc, ind10jobsd, ind10jobse];
        var ind10jobscount_sum = ind10jobscount.map((item) =>math.sum(item));


    var industrylist = industries; // list of ALL industry names 
    var LoanRanges = ["a $5-10 million", "b $2-5 million", "c $1-2 million", "d $350,000-1 million", "e $150,000-350,000"]


    //bar
    var bar_chart = [
        {
            y: LoanRanges,
            x: ind1jobscount_sum, //values
            // text: LoanRanges,
            type: "bar",
            orientation: "h"
        }
    ];

    var bar_layout = {
        title: "Jobs Counts per Loan Range",
        xaxis: {title: "Job Count"},
        yaxis: {title: "Loan Range"},
        margin: {t:30, l:100}
    };

    Plotly.newPlot("bar", bar_chart, bar_layout);


     //pie


     //bubble
     var bubble_data = [
        {
            x: ind1loanslistAll,
            y: ind1jobstotallist, 
            text: ind1BusinessNameslist,
            mode: "markers",
            marker: {
                color: ind1loanslistAll, 
                size: ind1jobstotallist,
            }
        }
    ]
    var bubble_layout = {
        xaxis: {title: "Loan Range"},
        //https://plotly.com/javascript/hover-text-and-formatting/
        hovermode: "closest",
    };
    Plotly.newPlot("bubble", bubble_data, bubble_layout);


     //panel

});

function optionChanged(dataset) {
    buildPlot(dataset);
    // buildMetadata(id);
}

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
