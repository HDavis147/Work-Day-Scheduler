// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var dateDisplay = $('#currentDay');
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  dateDisplay.text(currentDate);


  var blockEl = $('.time-block');
  var currentHour = dayjs().format('HH');
  var blockHourArray = $('.hour');
  
  // Iterates through blockHourArray for each item in the array. 
  for( i=0; i<blockHourArray.length; i++) {
    // Assigns the hour value (text content) of each block to blockHour and removes AM or PM
    var blockHour = blockHourArray[i].textContent;
    blockHour = blockHour.substring(0,blockHour.length-2);
    
    // Checks if the hour of the block is less than 6, and adds 12 if true. Makes it compatible with 24hr clock values
    if(blockHour < 6) {
      blockHour = +blockHour + 12;
    }
    
    // Checks if the hour of the block is less than the current hour (in 24hr time) and assigns the appropriate class based on the result
    if(blockHour < currentHour) {
      blockHourArray[i].parentElement.classList.add("past");
    } else if (blockHour == currentHour) {
      blockHourArray[i].parentElement.classList.add("present");
    }
    else if (blockHour > currentHour){
      blockHourArray[i].parentElement.classList.add("future");
    }
  }


  // Function runs once save button is clicked
  function save(event) {
    console.log("ayo");
  }

  // Listens for clicks on the save button
  blockEl.on('click', '.saveBtn', save);
  
});


// **WHEN I open the planner
// **THEN the current day is displayed at the top of the calendar
// **WHEN I scroll down
// **THEN I am presented with time blocks for standard business hours of 9am to 5pm
// **WHEN I view the time blocks for that day
// **THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist