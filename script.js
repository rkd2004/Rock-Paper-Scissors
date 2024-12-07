

humanScore=0;
computerScore=0;

function getComputerChoice()
{
	
	let op = Math.floor(Math.random() * 3);

	if (op==0)
		return "Rock";

	else if(op==1)
		return "Paper";
	else 
		return "Scissors";
}

function getHumanChoice()
{
	
	let choice=prompt("Enter your choice:");
	return choice;
}




function playRound(humanChoice,computerChoice)
{
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	if (humanChoice=='rock')
	{
		if (computerChoice=='rock')
			console.log("It's a tie! You both played Rock!");
		
		else if (computerChoice=='paper')
		{
			console.log("You lose! Paper beats Rock!");
			computerScore++;
		}
		
		else if (computerChoice=='scissors')
		{
			console.log("You win! Rock beats Scissors!");
			humanScore++;
		}
			
	}
	
	else if (humanChoice=='paper')
	{
		if (computerChoice=='rock')
		{
			console.log("You win! Paper beats Rock!");
			humanScore++;
		}
		
		else if (computerChoice=='paper')
			console.log("It's a tie! You both played Rock!");
		
		else if (computerChoice=='scissors')
		{
			console.log("You lose! Scissors beat Paper! You both played Rock!");
			computerScore++;
		}
			
	}
	
	else
	{
		if (computerChoice=='rock')
		{
			console.log("You lose! Rock beats Scissors!");
			computerScore++;
		}
		
		else if (computerChoice=='paper')
		{
			console.log("You win! Scissors beat Paper!");
			humanScore++;
		}
		
		else if (computerChoice=='scissors')
			console.log("It's a tie!");
	}
}


function playGame()
{
	for (i=0;i<5;i++)
	{
	const humanChoice = getHumanChoice();
	const computerChoice = getComputerChoice();
	playRound(humanChoice,computerChoice);
	}
	
	if (humanScore>computerScore)
		console.log("Result: You won!");
		
	else if (humanScore==computerScore)
		console.log("Result: It's a tie!");
		
	else
		console.log("Result: You lose!");
}


playGame();
