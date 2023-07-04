$(function () {

  // Gets current date from dayJS and displays it in the currentDay element
  var dateDisplay = $('#currentDay');
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  dateDisplay.text(currentDate);

  // Gets the hour designated for each time block on the schedule and the current hour via dayJS
  var blockEl = $('.time-block');
  var currentHour = dayjs().format('HH');
  var blockHourArray = $('.hour');
  
  // Iterates through blockHourArray for each item in the array
  for( i=0; i<blockHourArray.length; i++) {
    // Assigns the hour value (text content) of each block to blockHour and removes AM or PM
    var blockHour = blockHourArray[i].textContent;
    blockHour = blockHour.substring(0,blockHour.length-2);
    
    // Checks if the hour of the block is less than 6, and adds 12 if true. Makes it compatible with 24hr clock values
    if(blockHour < 6) {
      blockHour = +blockHour + 12;
    }
    
    // Checks if the hour of the block is less than the current hour (in 24hr time) and assigns the appropriate class based on the result
    if(+blockHour < currentHour) {
      blockHourArray[i].parentElement.classList.add("past");
    } else if (+blockHour == currentHour) {
      blockHourArray[i].parentElement.classList.add("present");
    }
    else if (+blockHour > currentHour){
      blockHourArray[i].parentElement.classList.add("future");
    }
  }

  // Function gets the value of each saved item from local storage and sets the appropriate textarea element's value (text) to that saved note item. Runs on page load
  function renderNotes() {
    var note9 = localStorage.getItem("note-9");
    document.getElementById("hour-9").children[1].value = note9;
    var note10 = localStorage.getItem("note-10");
    document.getElementById("hour-10").children[1].value = note10;
    var note11 = localStorage.getItem("note-11");
    document.getElementById("hour-11").children[1].value = note11;
    var note12 = localStorage.getItem("note-12");
    document.getElementById("hour-12").children[1].value = note12;
    var note1 = localStorage.getItem("note-1");
    document.getElementById("hour-1").children[1].value = note1;
    var note2 = localStorage.getItem("note-2");
    document.getElementById("hour-2").children[1].value = note2;
    var note3 = localStorage.getItem("note-3");
    document.getElementById("hour-3").children[1].value = note3;
    var note4 = localStorage.getItem("note-4");
    document.getElementById("hour-4").children[1].value = note4;
    var note5 = localStorage.getItem("note-5");
    document.getElementById("hour-5").children[1].value = note5;
  }

  renderNotes();


  // Function runs once save button is clicked
  function save(event) {
    // Gets id of parent element of clicked button
    var parentId = this.parentElement.getAttribute('id');
    // Targets the previous sibling (textarea element) of the clicked button
    var clickedBlockTextarea = this.previousElementSibling;
    
    // Gets the user-entered text of the text area of the clicked time block
    var textToSave = clickedBlockTextarea.value;
    
    // Saves the notes for the clicked button's text area to local storage based on parent div's id attribute
    switch (parentId) {
      case "hour-9":
        localStorage.setItem("note-9", textToSave);
        break;
      case "hour-10":
        localStorage.setItem("note-10", textToSave);
        break;
      case "hour-11":
        localStorage.setItem("note-11", textToSave);
        break;
      case "hour-12":
        localStorage.setItem("note-12", textToSave);
        break;
      case "hour-1":
        localStorage.setItem("note-1", textToSave);
        break;
      case "hour-2":
        localStorage.setItem("note-2", textToSave);
        break;
      case "hour-3":
        localStorage.setItem("note-3", textToSave);
        break;
      case "hour-4":
        localStorage.setItem("note-4", textToSave);
        break;
      case "hour-5":
        localStorage.setItem("note-5", textToSave);
        break;
    }
  }

  // Listens for clicks on the save button
  blockEl.on('click', '.saveBtn', save);
  
});