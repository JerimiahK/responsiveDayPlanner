//shorthand for $(document).reeady()
$(function () {
  //adds an event listener to the start button to save the users input in the text area, and save it in local storage.
  const saveButton = $(".saveBtn");
  saveButton.on("click", function () {
    const userInput = $(this).siblings(".description").val();
    const blockTime = $(this).parent().attr("id");
    console.log(blockTime);
    console.log(userInput);

    localStorage.setItem(blockTime, userInput);
  });

  // gets the current hour in a 24 hour format
  // puts the "time-block" classes into a variable called timeBlock
  const currentTime = dayjs().hour();
  const timeBlock = $(".time-block");
  timeBlock.each(function () {
    //loops through each timeBlock
    let rowTime = $(this).attr("id"); // gets the id from each "time-block" using the .each method.
    if (currentTime > rowTime) {
      // changes class to "past" and removes the "future" and "present" classes from the time-blocks when the current time is greater then the row time.
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentTime == rowTime) {
      // changes class to "present" and removes the classes for "past" and "future" when the current time is equal to the row time.
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      // changes the class to "future" and removes the classes "past" and "present" from the time-blocks when the current time is less than the row time.
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // gets items from local storage by getting the ID of the time-block and class of the text-area and setting the local storage's value for each text area.
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // adds the current day to the header of the page.
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd, MMMM D"));
});
