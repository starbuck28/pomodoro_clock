// JavaScript Document

//Initial break length in minutes
var breakLength = 5;
//Initial session length in minutes
var sessionLength = 25;


function addTime(time) {
	if (time === 60) {
		return time;
		}
	return time + 1;
	}

function subtractTime(time) {
	if (time === 1) {
		return time;
		}
	return time - 1;
	}






























/*//Adds 1 minute to length to max of 60 min
function addParameter(time) {
  if (time === 60) {
    return time;
  }
  return time = time + 1;
}

//Subtracts 1 minute from length to min of 1 min
function subtractParameter(time) {
  if(time === 1) {
    return time;
  }
  return time = time - 1;
}



//When break subtract button clicked
$("#break-subtract").click(function() {
    //Break length decreases by 1 until min of 1
    subtractParameter(breakLength);
  //Break length updated on screen
    $("#break-length").html('<p id="break-length" class="length">' + breakLength + '</p>');
  console.log(breakLength);
  //Timer is set to mirror session length
  console.log("subtract");
});

//When break add button clicked
$("#break-add").click(function() {
  //Break length increases by 1 to max of 60
    addParameter(breakLength);
  //Break length updated on screen
    $("#break-length").html('<p id="break-length" class="length">' + breakLength + '</p>');
  console.log(breakLength);
  console.log("add");
});

//When clock toggled
$(".clock").click(function() {
  //Timer starts or stops
  
  console.log("clock");
});

//When session subtract button clicked
$("#session-subtract").click(function() {
    //Break length decreases by 1 until min of 1
    subtractParameter(sessionLength);
  //Break length updated on screen
    $("#session-length").html('<p id="session-length" class="length">' + sessionLength + '</p>');
  console.log(sessionLength);
  //Timer is set to mirror session length
  console.log("subtract");
});
*/