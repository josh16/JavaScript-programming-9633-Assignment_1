
// Current index of question we are on
var indexQuestion = 0;

// A clock that goes up by 1 every second
var timer = 0;

// the time we last submitted an answer
var timeLastSubmit = 0;

// Did time expire for current question?
var timeExpired = false;


function loadApplication()
{
	// load the first question into the web page
	loadQuestion(indexQuestion);
	
	
	// do something every time the next button is clicked
	document.________________;
	
	// update the timer every second and check if question has been answered yet
	setInterval(function(){
		timer++;
		checkExpirationTime();
	},1000);
}
function clickNext()
{
	// Get the answer from drop down
	var selectedIndexAnswer = ________________;
	
	// Get the anwer from the array
	var answer = _____________;
	
	// Compare answer.  Only if correct, do you move onto next question
	if(selectedIndexAnswer == answer)
	{
		// do something
	}
	else
	{
		// do something
	}
}
function checkExpirationTime()
{
	// do something
}
function nextQuestion()
{
	// do something
}

function loadQuestion(indexQuestion)
{
	
	// grab the question
	document.getElementById("question").textContent = ___________________;
	
	// build the html string for select menu
	var choices = "";
	
	// do something to create a string of <option>answer</option><option>answer</option><option>answer</option>...
	// and load it into the choices variable
	________________

	// load html string into the choices drop down
	document.getElementById("choices").innerHTML = choices;
}

// When the DOM is ready, run the function loadApplication();
document.addEventListener("DOMContentLoaded",loadApplication);