//dragon -slayer game
//It will take 4 hits to slay the dragon, and if you miss even one hit, the dragon will defeat you!

// to count how many hits 
var hits = Math.floor(Math.random() * 2);

// to continue slaying //to begin the slaying 
var slaying = true;

//to count the damages in one round 
var damageThisRound = Math.floor(Math.random() * 5 + 1);

//for total damage
var totalDamage = 0;

while(slaying)
{
	if(hits)
	{
		console.log("Congratualations, you hit the dragon.");
		totalDamage += damageThisRound
		if(totalDamage >= 4)
		{
			console.log("you slew the dragon. you win");
			slaying = false;
		}
		else
		{
			var hits = Math.floor(Math.random() * 2);
		}
	}
	else
	{
		console.log("Dragon defeated you");

	}
	slaying = false
}