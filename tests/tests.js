//Test Suite for Pomodoro Clock

QUnit.module("Adding and Subtracting Numbers", function() {
  QUnit.test("returns same time if it is 60, otherwise returns time + 1 minute", function(			  assert) {
	  assert.equal(addTime(60), 60, "number can only be sixty or less");
	  assert.equal(addTime(1), 2, "1 minute added to time" );
	  });	
  QUnit.test("returns same time if it is 1 minute, otherwise returns time - 1 minute", function(assert) {
	  assert.equal(subtractTime(1), 1, "number can only be 1 or more");
	  assert.equal(subtractTime(60), 59, "1 minute subtracted from time");
	  });
});



//Start w/ simple countdown timer
	//Convert seconds to milliseconds
	//Start timer to count down from specific number
	//Stop timer
	//Clear timer
	

//Add ability to choose number to count down from
	//If session length changed while timer running
	//Timer stops

//Add in set interval to repeat countdown

//Add in ability to set interval time to repeat countdown
	//If break length changed while timer running
	//Timer keeps running
	//Interval changes







