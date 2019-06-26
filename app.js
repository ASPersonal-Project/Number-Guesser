let min = 1 ,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessesBtn = document.querySelector('#guess-btn'),
        guessesInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

        minNum.textContent = min;
        maxNum.textContent = max;

        guessesBtn.addEventListener('click',function(){
            let guess = parseInt(guessesInput.value);

            if(isNaN(guess) || guess < min || guess > max){
                setMessage(`Please enter a number between ${min} and ${max}`,'red');
  
            }
            if(guess === winningNum){

                gameOver(true, `${winningNum} is correct, YOU WIN!`);
                // guessesInput.disabled = true;

                // guessesInput.style.borderColor = 'green';

                // setMessage(`${winningNum} is correct, YOU WIN!`,'green');
            }else{
                guessesLeft -=1;

                if(guessesLeft === 0){
                    gameOver(false,`Game over , you lost.The correct number was ${winningNum}`);

                // guessesInput.disabled = true;

                // guessesInput.style.borderColor = 'red';

                // setMessage(`Game over , you lost.The correct number was ${winningNum}`,'red');


                }else{
                    guessesInput.style.borderColor = 'red';

                    guessesInput.value = '';

                    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

                }

                
            }

        });

        function gameOver(won,msg){

            let color;
            won === true ? color = 'green' : color = 'red';

            guessesInput.disabled = true;

            guessesInput.style.borderColor = 'green';

            setMessage(msg);

        }

        function setMessage(msg,color){
            message.style.color = color;
            message.textContent = msg;
        }
        

