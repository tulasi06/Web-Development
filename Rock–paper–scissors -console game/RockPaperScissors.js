//Rock–paper–scissors
//rock beats scissors
//scissors beat paper
//paper beats rock
// three ways : user choice, computer makes choice, a compare function determine who wins

var userChoice = prompt("please choose one out of rock, paper or scissors");

var computerChoice = Math.random()
if(computerChoice<=0.34)
{
	computerChoice = "rock";
}
else if(computerChoice <= 0.67)
{
	computerChoice = "paper";
}
else
{
	computerChoice = "scissors"
}
console.log("computer choice is: " + computerChoice);

var choice1 = userChoice;
var choice2 = computerChoice;

var compare = function(choice1, choice2)
{
	if(choice1 === choice2)
	{
		console.log("the game is a tie");
	}
	else if (choice1 === "rock")
	{

		if(choice2 === "scissors")
		{
			console.log("rock wins");
		}
		else
		{
			console.log("paper wins");
		}
	}


		else if(choice1 === "scissors")
		{

			if (choice2 === "paper") 
			{

				console.log("scissors wins");
			}
			else
			{
				console.log("rock wins");
			}
		}
		else if (choice1 === "paper") 
		{
			if (choice2 === "rock") 
			{
				console.log("paper wins");
			}
			else
			{
				console.log("scissors wins");
			}

		}
	
};	
compare(userChoice, computerChoice);