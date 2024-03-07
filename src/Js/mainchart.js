function updateDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var dateString = day + ' . ' + month + ' . ' + year;
    var timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById("currentDate").innerHTML = dateString;
    document.getElementById("currentTime").innerHTML = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial update




function ApplyColorToProfitAndGain() {
    var TDsProfit = document.querySelectorAll('td:nth-child(9)'); // Select the 9th column (Profit)
    var TDsGain = document.querySelectorAll('td:nth-child(11)'); // Select the 11th column (Gain)

    // Apply color for Profit
    for (var i = 0; i < TDsProfit.length; i++) {
        var temp = TDsProfit[i];
        var profit = parseFloat(temp.textContent.replace(/,/g, '')); // Remove commas and parse as float
        if (profit > 0) {
            temp.classList.add("positive");
        } else if (profit < 0) {
            temp.classList.add("negative");
        }
    }

    // Apply color for Gain
    for (var j = 0; j < TDsGain.length; j++) {
        var tempGain = TDsGain[j];
        var gain = parseFloat(tempGain.textContent.replace(/,/g, '')); // Remove commas and parse as float
        if (gain > 0) {
            tempGain.classList.add("positive");
        } else if (gain < 0) {
            tempGain.classList.add("negative");
        }
    }
}

// Call the function to apply colors to both Profit and Gain columns
ApplyColorToProfitAndGain();




function ApplyColorToTotalGrowth() {
    var TDs = document.querySelectorAll('.trader-dashboard-content-right-data > p:nth-child(3)'); 
    // Select the 3rd paragraph in each .trader-dashboard-content-right-data
    for (var i = 0; i < TDs.length; i++) {
        var temp = TDs[i];
        var growth = parseFloat(temp.textContent.replace(/,/g, '')); 
        // Remove commas and parse as float
        if (growth > 0) {
            temp.classList.add("positive-growth");
        } else if (growth < 0) {
            temp.classList.add("negative-growth");
        }
    }
}

ApplyColorToTotalGrowth();




function ApplyColorToForexMarket() {
    var percentages = document.querySelectorAll('.content-forex-market-left .percentage p'); // Select all percentage elements
    var values = document.querySelectorAll('.content-forex-market-left .value p'); // Select all value elements

    for (var i = 0; i < percentages.length; i++) {
        var percentage = parseFloat(percentages[i].textContent); // Get the percentage value as float
        var value = values[i].textContent.trim(); // Get the value and trim any leading/trailing spaces
        var lastDigit = value[value.length - 1]; // Get the last digit of the value

        // Apply color to the percentage
        if (percentage > 0) {
            percentages[i].classList.add("forex-market-green-percentage");
        } else if (percentage < 0) {
            percentages[i].classList.add("font-red-color-percentage");
        }

        // Apply color to the last digit of the value
        if (percentage > 0) {
            values[i].innerHTML = value.substring(0, value.length - 1) + '<span class="forex-market-green">' + lastDigit + '</span>';
        } else if (percentage < 0) {
            values[i].innerHTML = value.substring(0, value.length - 1) + '<span class="font-red-color">' + lastDigit + '</span>';
        }
    }
}

ApplyColorToForexMarket();



function initializeClickEvent() {
    // Select all elements with IDs starting with "clickable"
    var elements = document.querySelectorAll("[id^='clickable']");
    
    // Loop through each element
    elements.forEach(function(element) {
        // Add a click event listener to each element
        element.addEventListener("click", function() {
            // Remove the "clicked" class from all elements
            elements.forEach(function(el) {
                el.classList.remove("clicked");
            });
            // Add the "clicked" class to the clicked element
            element.classList.add("clicked");
        });
    });
}

// Call the initializeClickEvent function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeClickEvent);




// function initializeClickLabelEvent() {
//     // Select all elements with IDs starting with "wrapper"
//     var wrappers = document.querySelectorAll("[id^='wrapper']");
    
//     // Loop through each wrapper
//     wrappers.forEach(function(wrapper) {
//         // Add a click event listener to each wrapper
//         wrapper.addEventListener("click", function() {
//             // Remove the "clicked" class from all wrappers
//             wrappers.forEach(function(w) {
//                 w.classList.remove("clicked-label");
//             });
//             // Add the "clicked" class to the clicked wrapper
//             wrapper.classList.add("clicked-label");
//         });
//     });
// }

// // Call the initializeClickEvent function when the DOM content is loaded
// document.addEventListener("DOMContentLoaded", initializeClickLabelEvent);