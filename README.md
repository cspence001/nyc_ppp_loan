# nyc_ppp_loan

NYC PPP loan project is an application discovering process intended for puposes of extrapolated data review in regards to PPP loan recipients with businesses based in NYC. The application covers 17,550 recipients of PPP loans at or above the amount of $150K as of July 6, 2020.
<br>
About the dataset:<br>
The data was obtained from data.BetaNYC via the Treasury Department and SBA. The source data was used to quantify a breakdown in regards to industry, job retenance, and loan totals in order to qualify and determine efficacy of government loan dispersements in their primary objective to retain jobs and keep businesses afloat during the height of the Covid-19 pandemic during the Spring and Summer of 2020. The original data set can be found <a href="https://data.beta.nyc/dataset/0907b947-a082-46ac-b9f8-d6ef81acae81/resource/84df2d7a-9cf5-49c8-95dd-e300b3bc6b62/download/nycppprecipients.csv">here</a>.

<br>
Techniques and Processes used to extrapolate data fields for relevant display of data:<br>
*Extraction of CSV and transformation of Industry Codes by reference number in datafield labelled NAICS, the first two digits were used to determine accordant industry labels for each loan by notebook process. <a href="https://github.com/cspence001/nyc_ppp_loan/blob/main/project_docs/jupyter/nycppprecipients_ind_grouped.ipynb">[notebook]</a><br> 
*Geocode processing: Conversion of address into location coordinates for the address of the business for each loan for map display. <br><br>
Dashboard Application:<br>
*Process of raw value computation in-script application to process fields for industry chart and table display of loan applicant information. Quantitative data review provided in table display using aggregate computation accordant to each industry. <br>
