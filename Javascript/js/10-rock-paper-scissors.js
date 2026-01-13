 // const score={
        //     Wins:0,
        //     Loss:0,
        //     Tie:0
        // };
     
        
            console.log(localStorage.getItem('score'));
            //store local data into constant value.
            const scoreValue=localStorage.getItem('score');
          // console.log(`parse=+${JSON.parse()`);
          //change the getlocaldata to js object
           const jsonvalue=JSON.parse(scoreValue);
           console.log(jsonvalue);
           //shortcut way
           //user the default operator for checking if the score is null then assign the default value.
           let score=jsonvalue || {
                Wins:0,
                Loss:0,
                Tie:0
            };
          
            //simple way to check null value
          //  if(!score){
          //   score={
          //       Wins:0,
          //       Loss:0,
          //       Tie:0
          //   };
          //  }


         // document.querySelector('.js-score').innerHTML=`wins:${score.Wins} , Loss:${score.Loss} , Tie:${score.Tie}`;
         ///call the updateScore function here
           //console.log(updateScore());
            
                    
         function playGame(playerMove){
            const computerChoice=pickComputerMove();
            let result='';
            console.log(`"User choice = "+ ${playerMove}`);
            
            if(playerMove === 'scissors'){
                if(computerChoice === 'scissors'){
                    result='Tie';
                    //console.log(result);
                }
                else if(computerChoice === 'rock'){
                    result='You Lose';
                }
                else if(computerChoice === 'paper'){
                    result='You Win';
                }
                
            }  
            
            else if(playerMove === 'rock'){
                if(computerChoice === 'rock'){
                    result='Tie';
                }
                if(computerChoice === 'paper'){
                    result='You Lose';
                }
                else if(computerChoice === 'scissors'){
                    result='You Win';
                }
               
            }
            else if(playerMove === 'paper'){
                if(computerChoice === 'paper'){
                    result='Tie';
                }
                else if(computerChoice === 'scissors'){
                    result='You Lose';
                }
                else if(computerChoice === 'rock'){
                    result='You Win';
                }
                
            
            }

            //calculation the result
            if(result==='You Win'){
                score.Wins++;
            }
            else if(result === 'You Lose'){
                score.Loss++;
            }
            else{
                score.Tie++;
            }

            localStorage.setItem('score',JSON.stringify(score));
            //call the update the score inside the play game function for view the updated score
            updateScore();
            //display the result using alert
            document.querySelector('.js-result').innerHTML=result;
            document.querySelector('.js-moves').innerHTML=` You
                <img src="projectimages/${playerMove}-emoji.png" 
                class="move-icon">
                <img src="projectimages/${computerChoice}-emoji.png" 
                class="move-icon">
                Computer`;
    
              
           // console.log('move ='+playerMove);
            console.log(score.Wins);
            console.log(score.Loss);
            console.log(score.Tie);
            alert(`You picked ${playerMove},
                computer picked ${computerChoice}, 
                ${result},
                wins:${score.Wins} , Loss:${score.Loss} , Tie:${score.Tie}`); 

          //  alert(`You picked Rock, computer picked ${computerChoice}, ${result}`);

              
             // console.log(playerMove); 
            
            //console.log(result);
        }

            //call the update the function for update the score
        function updateScore(){
            document.querySelector('.js-score').innerHTML=`wins:${score.Wins} , Loss:${score.Loss} , Tie:${score.Tie}`;
            console.log(`update score= + ${score.Wins}`);
            console.log(`update score= + ${score.Loss}`);
            console.log(`update score= + ${score.Tie}`);
        }
        
        
       


        function pickComputerMove(){
             const randomNumber = Math.random();
                 let computerChoice='';
                    console.log(randomNumber);
                if(randomNumber >=0 && randomNumber<(1 / 3)){
                    computerChoice='rock';
                }
                else if(randomNumber >= (1/3) && randomNumber<(2/3)){
                    computerChoice='paper';
                }else if(randomNumber >= (2/3) && randomNumber<1){
                    computerChoice='scissors';
                }
                console.log(`"Computer choice = "+${computerChoice}`);
            return computerChoice;    
        }


        //parameters

       


