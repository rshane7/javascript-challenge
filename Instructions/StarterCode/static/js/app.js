//  UFO Sightings - app.py that will pull in the dataset from data.js file.
//  The dataset variable will then be filtered by date then presents the result set of recrods in a html table.

//  data.js file dataset loads into variable
var tblData = data;

//  Rubric
//  ✓ Event handler calls a function to filter the data    
//  Select the button that will filter the data
//  Defines function to run when button is Filter Table button is clicked
var fltrdbutton = d3.select("#filter-btn");
fltrdbutton.on("click", function() {

//  Rubric 
//  ✓ Prevents the page from reloading using D3
//  Prevent page refreshing
d3.event.preventDefault();

//  Rubric 
//  ✓ Clears table before rendering again
//  Ensure table is truncated of any data loaded previously
var tblTruncate = d3.selectAll("#tbl>tbody>tr");
tblTruncate.html(" ");
console.log(tblTruncate);
 
//  Rubric
//  ✓ Successfully grabs in the inputvalue  
//  Select the value for the datetime field 
var dateValue = d3.select("#datetime");
console.log(dateValue);

//  Rubric
//  ✓ Successfully grabs in the inputvalue
//  Extracts the date portion of the datetime field
var date = dateValue.property("value");
console.log(date);

//  Rubric
//  ✓ Correctly uses the filter method to get the new table data based off the given input
//  ✓ Table rerenders with filtered data
//  Filter the data to keep only records for the chosen date 
var fltrdData = tblData.filter(tblData => tblData.datetime === date);
console.log(fltrdData);

//  Selects the body of the table  // Append rows to fill filtered data field
var tbody= d3.select("tbody");

//  Append rows to fill filtered data field
fltrdData.forEach(ufoSighting => {
    var row = tbody.append("tr"); 
    Object.entries(ufoSighting).forEach(([key,value])=> {
    var cell = row.append("td");
    cell.text(value);
         })   
    })
});
