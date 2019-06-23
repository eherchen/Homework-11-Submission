// from data.js
var tableData = data;
var table = d3.select("#table-area");
var tbody = table.select("tbody");



// Create empty arrays to store the object values
var datetime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var durationMinutes = [];
var comments = [];

// Reset the arrays back to empty before filtering so the population from previous filter is removed
function tableFilter(arr){
    tbody.html("")
    datetime= []; 
    city= [];
    state= [];
    country= []; 
    shape= []; 
    durationMinutes= []; 
    comments = [];

// Build/Return the arrays by iterating through each object
arr.forEach((row) => {
    // console.log(row);
    Object.entries(row).forEach(([key, value]) => {
        // console.log(`Key: ${key} and Value ${value}`);
        if (key === "datetime") {
            datetime.push(value);
        }
        else if (key === "city") {
            city.push(value);
        }
        else if (key === "state") {
            state.push(value);
        }
        else if (key === "country") {
            country.push(value);
        }
        else if (key === "shape") {
            shape.push(value);
        }
        else if (key === "durationMinutes") {
            durationMinutes.push(value);
        }
        else if (key === "comments") {
            comments.push(value);
        }
    });
});
buildTable(datetime, city, state, country, shape, durationMinutes, comments);
}

// Export the data into the html table element
function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
    var trow;
    for (var i = 0; i < datetime.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(datetime[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(durationMinutes[i]);
      trow.append("td").text(comments[i]);
    }
  }


  var inputField = d3.select("#filter-btn");

  inputField.on("click", function() {
      d3.event.preventDefault();
      var inputValueDate = d3.select("#datetime").property("value");
      var inputValueCity = d3.select("#city").property("value");
      var inputValueState = d3.select("#state").property("value");
      var inputValueCountry = d3.select("#country").property("value");
      var inputValueShape = d3.select("#shape").property("value");
    //   var newText = d3.select("#datetime");
    //   var inputValue = newText.property("value");
    //   console.log(inputValue);
      var filteredTable = tableData.filter(returnRow => returnRow.datetime === inputValueDate ||
        returnRow.city === inputValueCity ||
        returnRow.state === inputValueState ||
        returnRow.country === inputValueCountry ||
        returnRow.shape === inputValueShape        
        );
      tableFilter(filteredTable);
  });
  
  tableFilter(tableData);
  
