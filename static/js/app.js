// from data.js
var tableData = data;
var table = d3.select("#table-area");
var tbody = table.select("tbody");
// YOUR CODE HERE!
// Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, 
// and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.

// Create empty arrays to store the object values
var datetime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var durationMinutes = [];
var comments = [];


function tableFilter(arr){
    tbody.html("")
    datetime= []; 
    city= [];
    state= [];
    country= []; 
    shape= []; 
    durationMinutes= []; 
    comments = [];

// Iterate through each object
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

switch (inputField) {
case "dataset1":
    inputField.on("click", function() {
        d3.event.preventDefault();
        var newText = d3.select("#datetime");
        var inputValue = newText.property("value");
        // alert('you clicked me');
        console.log(inputValue);
        var filteredTable = tableData.filter(returnRow => returnRow.datetime === inputValue);
        tableFilter(filteredTable);
    });
    break;
case "dataset2":
    inputField.on("click", function() {
        d3.event.preventDefault();
        var newText = d3.select("#datetime");
        var inputValue = newText.property("value");
        // alert('you clicked me');
        console.log(inputValue);
        var filteredTable = tableData.filter(returnRow => returnRow.city === inputValue);
        tableFilter(filteredTable);
    });
    break;
}


tableFilter(tableData);

