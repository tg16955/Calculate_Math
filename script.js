// Assigning pointers of input fields
var input01 = document.getElementById('input_01');
var input02 = document.getElementById('input_02');
var input03 = document.getElementById('input_03');
var input04 = document.getElementById('input_04');
var input05 = document.getElementById('input_05');
var input06 = document.getElementById('input_06');

// Div block for error
var error_div = document.getElementById('error');

// Div block for resultant table
var table = document.getElementById('summary');

// Resultant table's result fields
var no_of_values = document.getElementById('no_of_values');
var sum = document.getElementById('sum');
var average = document.getElementById('average');
var range = document.getElementById('range');
var low = document.getElementById('lowest');
var high = document.getElementById('highest');
var median = document.getElementById('median');

var len;

// Function to validate the input and display the output
function validate() {
    var value_array = [];

    // Check for empty input fields
    if (input01.value == "" || input02.value == "" || input03.value == "" || input04.value == "" || input05.value == "" || input06.value == "") {
        // Display error block div
        error_div.style.display = "block";
        // Hide resultant table
        table.style.display = "none";
    }
    // Check for negative values in the input fields
    else if (input01.value < 0 || input02.value < 0 || input03.value < 0 || input04.value < 0 || input05.value < 0 || input06.value < 0) {
        // Display error block div
        error_div.style.display = "block";
        // Hide resultant table
        table.style.display = "none";
    } else {
        // Hide the error div block
        error_div.style.display = "none";
        
        // Creating input value array using push() method.
        value_array.push(input01.value);
        value_array.push(input02.value);
        value_array.push(input03.value);
        value_array.push(input04.value);
        value_array.push(input05.value);
        value_array.push(input06.value);

        // Assigning array length to a variable
        len = value_array.length;

        // Converting string values of the array to integer values
        for (var i = 0; i < len; i++)
            value_array[i] = parseInt(value_array[i]);

        // Sorting the array
        value_array.sort();

        no_of_values.innerHTML = value_array.length;
        // Sum of values
        sum.innerHTML = value_array.reduce((a, b) => a + b, 0);
        // Average of values
        average.innerHTML = (value_array.reduce((a, b) => a + b, 0) / value_array.length).toFixed(2);
        // Lowest element of array
        low.innerHTML = value_array[0];
        // Highest element of array
        high.innerHTML = value_array[len - 1];
        // Range of array
        range.innerHTML = value_array[len - 1] - value_array[0];

        // Finding median value
        const mid = Math.ceil(len / 2);
        const median_value = len % 2 == 0 ? (value_array[mid] + value_array[mid - 1]) / 2 : value_array[mid - 1];
        median.innerHTML = median_value.toFixed(2);
        table.style.display = "block";
    }
}
