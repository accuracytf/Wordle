var activeRow = 1;
var activeSquare = 1;

var rightWord = "RIGHT"
var wrongsChars = [];
const correctWord = rightWord.split("");
console.log(correctWord);


const correctWordMap = new Map();
for(let i = 0; i <= 4; i++){
    
    correctWordMap.set(correctWord[i], 1)
}


const guessedWordMap = new Map();






function Key(letter){
    console.log(activeSquare);
    const rowElement = document.getElementById("row" + activeRow);

    for(const child of rowElement.children){
        let i = parseInt(child.id)
        if(i==activeSquare){
            child.innerHTML = (letter.toString()); 
            
        }
        
    }

    
    if(activeSquare<5)
        activeSquare++;
    console.log(activeSquare);
    activeCheck(false);
}

function Delete(){
    console.log(activeSquare);
    const rowElement = document.getElementById("row" + activeRow);

    for(const child of rowElement.children){
        let i = parseInt(child.id)
        if(i==activeSquare){
            child.innerHTML= "";
        }
    }
    
    activeSquare--;
    if(activeSquare<1)
        activeSquare = 1;
    activeCheck(false);
}
function Enter(){
    
    console.log(activeRow);
    var rowElement = document.getElementById("row" + activeRow);
    var guess = "";
    for(const child of rowElement.children){
        guess += child.innerHTML;
    }
    
    if(guess.length == 5){
        guessSplit = guess.split("");
        console.log(guessSplit);
        for(let i = 1;i <= 5;i++){
            var yellow=false;
            if(guessSplit[i-1] == correctWord[i-1]){
                let element = document.getElementById(i + "-" + activeRow);
                element.style.backgroundColor = "green";
            }
            else{
                for(let j = 1;j <= 5;j++){
                    if(guessSplit[i-1]==correctWord[j-1]){
                        yellow=true;
                    }      
                }
                let element = document.getElementById(i + "-" + activeRow);
                if(yellow){
                    element.style.backgroundColor = "orange";
                }
                else{
                    element.style.backgroundColor = "gray";
                    wrongsChars.push(guessSplit[i-1]);
                    console.log(wrongsChars);
                }
                    
            }
        
              
        }
        if(guess==rightWord){
            console.log("rätt");
        }
        activeCheck(true);
        activeRow++; 
        activeSquare = 1;
        activeCheck(false); 
    }
        
    wrongsChars.forEach(char => {
        const el = document.getElementById(char);
        console.log(el);
        el.style.backgroundColor = "gray";
    });
    

}

function activeCheck(newRow){
    for(let i = 1;i <= 5;i++){
        let element = document.getElementById(i + "-" + activeRow);
        if(i==activeSquare && newRow == false){
            element.style.border = "2px solid white";
        }
        else
            element.style.border = "2px solid grey";
    }
}

