var losses = 0; wins = 0; tries=0; maxtries=9; input=0; insValid=true;
var choices = ["a", "b", "c", "d","e", "f","g","h","i","j", "k", "l", "m","n","o","p", "q", "r", "s", "t", "u", "v", "w","x","y","z"];
var computerGuess= 0; userChoice = 0;  
var userGuesses = [];
var message; 
var invalidInput;

   


function userinput(event)
{

 computerGuess = choices[Math.floor (Math.random() * choices.length)];
 console.log(computerGuess);

 userChoice= document.getElementById("userInput").value;
 console.log(userChoice);

 input = userChoice;

 console.log(input);


    if (choices.includes(input)) 
    {
        if(input===computerGuess)
        {
            wins++;
            tries++;
            
            var html= 
            input; 
            document.querySelector("#userChoice").innerHTML = html; 
    
            var html=
            computerGuess;
            document.querySelector("#computerChoice").innerHTML = html; 
    
            var html=
            wins;
            document.querySelector("#win").innerHTML = html;
    
            var html=
            tries;
            document.querySelector("#times").innerHTML = html;
    
            userGuesses.push(input);
    
    
        }
        else
        {    
            losses++;
            tries++;
    
            var html= 
            input; 
            document.querySelector("#userChoice").innerHTML = html; 
    
            var html=
            computerGuess;
            document.querySelector("#computerChoice").innerHTML = html; 
    
            var html=
            losses;
            document.querySelector("#lose").innerHTML = html;
    
            var html=
            tries;
            document.querySelector("#times").innerHTML = html;
    
            userGuesses.push(input);
    
            var html=
            userGuesses;
            document.querySelector("#letters").innerHTML = html;
    
           
        }
    
    }
     
      else
    {
    
        message = document.getElementById("errorMessage");
        message.innerHTML ="";
        invalidInput = document.getElementById("userInput").value;
    
        try{
    
            if(invalidInput!="")  throw "";
        }    
    
        catch(err)
        {
            message.innerHTML ="<h3> That key you pressed is not a valid option. Please try again. </h1>" + err;
    
        }
    
        userGuesses.push(input);
    
        var html=
        userGuesses;
        document.querySelector("#letters").innerHTML = html;
    
    
     };


if (tries<= maxtries)

{

}

else{

    if (wins >= losses)
   {

    var html=
    "<h1> CONGRATULATIONS!!! YOU HAVE WON!!!!!!!! </h1>";
    document.querySelector("#endGame").innerHTML = html;
   }
 else
  {
    var html=
    "<h1> BEST LUCK NEXT TIME!!!!!! YOU HAVE LOST!!!!!!!! </h1>";
    document.querySelector("#endGame").innerHTML = html;

 }

}
    



};

                  
     


function restart (event)
{

computerGuess = choices[Math.floor (Math.random() * choices.length)];
console.log(computerGuess);

 var userChoice= document.getElementById("userInput").value;
 console.log(userChoice);     

 document.getElementById("userChoice").value ="";      

};
