$(document).ready(function() {
    // Create variables for the score, wins and lost
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    // Creates an array for the crystal images
    crystals = ['assets/images/emerald.png', 'assets/images/ruby.png', 'assets/images/sapphire.png', 'assets/images/topaz.png'];

    //Create crystals from the array
    function newCrystals () {
      var crystalNumbers = []
        while (crystalNumbers.length < 4){
          var randomNumber = Math.ceil(Math.random()*12)
          var found = false;
          for (var i=0; i< crystalNumbers.length; i++){
            if (crystalNumbers[i] == randomNumber){
                found = true; 
                break
            }
          }
            if (!found)crystalNumbers[crystalNumbers.length] = randomNumber;
        }
          
        for (i = 0; i < crystalNumbers.length; i++) {
          var imageCrystal = $('<img>');
          imageCrystal.attr('data-num', crystalNumbers[i]);
          imageCrystal.attr('src', crystals[i]);
          imageCrystal.attr('alt', 'crystals');
          imageCrystal.addClass('crystalImage')
          $('#crystals').append(imageCrystal);
        }
    }

    //Start a new game
    function startGame() {
        //Start with user's score with a number of 0
        userScore = 0;
        $('#userScore').text(userScore);
        $('#winorLose').empty();
        // Create a random number for the computer
        var computerRandom = Math.floor(Math.random() * 150);
        // Test random number the computer generates
        console.log(computerRandom);
        // Output computer's random number
        $('.value').text(computerRandom);
        $('.crystalImage').on('click', function(event){
         const num = event.currentTarget.dataset.num;
         userScore = userScore + Number(num);
        $('#userScore').text(userScore);
          //Detects if the user won the game
        if (userScore == computerRandom){
          $('#winorLose').text('You won!');
          wins ++;
          $('#win').text(wins);
          $('#crystals').empty();
          setTimeout(function(){startGame();},2000);
          newCrystals();
          //Detects if the user lost the game
        } else if ( userScore > computerRandom){
            $('#winorLose').text('You lost!');
            losses ++;
            $('#loss').text(losses);
            $('#crystals').empty();
            setTimeout(function(){startGame();},2000);
            newCrystals();
           }
        });
    }

    newCrystals();
    startGame();
});