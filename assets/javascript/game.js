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

 userChoice = userChoice.toLowerCase();
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

            endGame(event);   
    
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
            
            endGame(event);   

           
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

        endGame(event);              
     };
};

                  
 function endGame(event)
 {
    if (tries >= maxtries)
    {
        if (wins >= losses)
       {
        console.log("IF statement inside endGame function"); 

         var message="CONGRATULATIONS!!! YOU HAVE WON!!!!!!!! "
         var html=
         `<h1> ${message} </h1>
         <img src= "../images/winner.gif" class="img-fluid" alt="winner gif">`;
          document.querySelector("#endGame").innerHTML = html;
          setTimeout(function(){
              restart();         
           },4000);
       }
        else
       {
        
        var message = "BEST LUCK NEXT TIME!!!!!! YOU HAVE LOST!!!!!!!!"
        var html=
       `<h1> ${message} </h1>
       <img src= "../images/lost.gif" class="img-fluid" alt="lost gif">`;
        document.querySelector("#endGame").innerHTML = html;
        setTimeout(function(){
            restart();         
         },4000);
        }
    }
     else{
        console.log("ELSE statement inside endGame function"); 
    };   
 };  


function restart (event)
{
    location.reload();
};
