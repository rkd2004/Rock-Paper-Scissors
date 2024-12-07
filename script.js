console.log("Hello World");

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
