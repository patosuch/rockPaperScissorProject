
// I moved the functions around because this is how I would have created the project 
// the steps were confusing and I didnt like it.
// I would have created the playgame function on top and then the functions inside in 
// after it 


// playgame can perform repeat games over and game 
var playgame = function () {

// (INPUT HERE) User Choice equals users choice after validating it through function
    var userChoice = getUserChoice('paper');
// use var userChoice = prompt ("Pick Rock Paper or Scissors?); <-- CodingWithRob


    //Display the user choice
    console.log(`You threw ${userChoice}`);


// Computer Input after running Computer Choice Function
    var computerChoice = getComputerChoice();

    //Display the computer choice
 console.log(`The computer threw ${computerChoice}`);

    //determine winner function  
 console.log(determineWinner(userChoice,computerChoice));
};


// Validating the user input and converting it to lowercase. making sure it is a 
// correct response when comparing it to the computer response
var getUserChoice = function(userInput) {
    
    // making the user input response to lowercase 
    var userInput = userInput.toLowerCase();

    // if user input is correct, spits out THAT user input response 
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return(userInput);
    }

    //outputs an error message if user input is incorrect
    else  {
        console.log('Error. Please type rock, paper, scissor!');
}
};

// Creates Computer Choice 
// Why does this function not have a parameter? Wouldnt you put 'getRandomNumber' in there?
var getComputerChoice= function() {
    
// Why doesnt we var get RandomNumber? since its inside the function and nowhere else?
// creates a random number multiples it by 3. then round the number down to the closest number
// which would be 0 or 1 or 2
 getRandomNumber = Math.floor(Math.random()*3)

//  return rock if =0
    if (getRandomNumber === 0){
        return 'rock'
    }

// return paper if =1
    else if (getRandomNumber === 1) {
        return 'paper'
    }
//  return scissors if =2
    else if (getRandomNumber === 2 ) {
        return 'scissors'
    }
}

// function compared the user choice with the random computer choice
// and returns with who is the winner 
// dont need to declare the variable userChoice or computerChoice since
// they were declared in the playgame function. 

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return "its a tie";
    }
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!";
        }
        else {
            return "Congratulations, you won!"
        }   
    }

    if (userChoice === 'paper'){
        if (computerChoice === 'scissors') {
            return "Sorry, computer won!";
        } 
        else {
            return "Congratulations, you won!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
            return "Sorry, computer won";
        } 
        else {
            return "Congratulations, you won!";
        }       
    }
    if (userChoice === 'bomb'){
        return "Congratulations, you won!";
    }
};

playgame();



// Another way to do the switches so its more clean. 

// switch (getRandomNumber){
//     case 0:
//         return 'rock';
//     case 1: 
//         return 'paper';
//     case 2:
//         return 'scissors';
