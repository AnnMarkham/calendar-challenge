


//get current date
var today = moment().format("dddd, MMMM Do - YYYY [time is] h:m a ");


//add current today to currentDay id in html 
$("#currentDay").text(today);


schedule = JSON.parse(localStorage.getItem("schedule"));
if (!schedule) {
  schedule = [];
};


for (i = 0; i < 9; i++) {

  var timeRow = $("<div>").addClass("row row" + i);
  $(".container").append(timeRow);

  var hourCol = $("<div>").addClass("col col-2 hour").attr("id", "hour" + i);

  var textCol = $("<textArea>").addClass("col col-9").attr("id", "text" + i);

  var saveCol = $("<div>").addClass("col col-1 saveBtn").attr("id", "save" + i);

  $(".row" + i).append(hourCol, textCol, saveCol);

  var saveIcon = $("<i>").addClass("far fa-save fa-4x");
  $("#save" + i).append(saveIcon);



  //color based on time
  var hourText = moment(9 + i, "HH").format("ha");
  $("#hour" + i).text(hourText);

  if (moment(9 + i, "HH").isBefore(moment())) {
    $("#text" + i).addClass("past");
  }
  else if (moment(9 + i, "HH").isAfter(moment())) {
    $("#text" + i).addClass("future");
  }
  else {
    $("#text" + i).addClass("present");
  }

  $("#text" + i).text(schedule[i]);
};


//save button function
$(".saveBtn").on("click", function () {
  schedule = []
  for (i = 0; i < 9; i++) {
    schedule.push($("#text" + i).val());
  }

  localStorage.setItem("schedule", JSON.stringify(schedule));
});

// save function
var saveAppts = function () {
  schedule = []
  for (i = 0; i < 9; i++) {
    schedule.push($("#text" + i).val());
  }
  localStorage.setItem("schedule", JSON.stringify(schedule));
}
