let deck_id;
let leader = "";
let replace1 = "";
let replace2 = "";
let replace3 = "";
let l = "";
let r1 = "";
let r2 = "";
let r3 = "";
var cards = [];
var codes = [];

var hasWon;
var counter = 0;
var success;
document.addEventListener('DOMContentLoaded', () => {
let button = document.getElementById('guess-button');
let first = document.getElementById('first-button');
let second = document.getElementById('second-button');
let third = document.getElementById('third-button');
canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');

   button.addEventListener('click', (evt) => {
    cards = [];
    codes = [];
    fetchJson();
   
    

    // fetch('https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=52')
    // .then(response => response.json())
    // .then(data => {console.info(data)}); // draws all the cards
});
 
first.addEventListener('click', (evt) => {
    checkLost();
    if (counter == 0){
        alert("Game Over! You Lost!")
    }
    else if (counter != 0){
    checkFirst();
    if(success != true){
        alert ("That move is not possible");
    }
    success = false;
    console.log(codes);
    counter = 0;
}
});
second.addEventListener('click', (evt) => {
    checkLost();
    if (counter == 0){
        alert("Game Over! You Lost!")
    }else if (counter != 0){
    checkSecond();
    if(success != true){
        alert ("That move is not possible");
    }
    success = false;
    console.log(codes);
    counter = 0;
}
});
third.addEventListener('click', (evt) => {
    checkLost();
    if (counter == 0){
        alert("Game Over! You Lost!")
    }else if (counter != 0){
    checkThird();
    if(success != true){
        alert ("That move is not possible");
    }
    success = false;
    console.log(codes);
    counter = 0;
}
});


});
async function checkLost(){
    let i = codes.length-1;
    l = codes[i].substring(0,1);
     r1 = codes[i-1].substring(0,1);
    //check for suits
     leader = codes[i].substring(1)
    replace1 = codes[i-1].substring(1);
     if(leader == (replace1)){
       
     counter += 1;
     }
     else if(l == (r1) && success != true){
       counter += 1;
     }
     l = codes[i].substring(0,1);
     r1 = codes[i-2].substring(0,1);
    leader = codes[i].substring(1)
    replace1 = codes[i-2].substring(1);
     if(leader == (replace1)){
        counter += 1
     }
     else if(l ==(r1) && success != true){
       counter += 1;
     }
     l = codes[i].substring(0,1);
     r1 = codes[i-3].substring(0,1);
    leader = codes[i].substring(1)
    replace1 = codes[i-3].substring(1);
     if(leader == (replace1)){
        counter += 1;
     }
     //check for number
     
     else if(l ==(r1) && success != true){
        counter += 1;
     }
}
async function checkFirst(){
    let i = codes.length-1;
    l = codes[i].substring(0,1);
     r1 = codes[i-1].substring(0,1);
    //check for suits
     leader = codes[i].substring(1)
    replace1 = codes[i-1].substring(1);
     if(leader == (replace1)){
        alert ("Suits");
     codes[i-1] = codes[i];
     codes.pop();
     if(i < 15){    
        ctx.clearRect(i*125,0, 113, 157);
        }else if(i < 30){
           let j = i-15; 
           ctx.clearRect(j*125,157, 113, 157); 
        }else if(i < 45){
           let j = i-30
           ctx.clearRect( j * 125, 314, 113, 157 )
        }else if(i < 60){
           let j = i-45    
           ctx.clearRect( j * 125, 471, 113, 157 )    
           }
           const cardImg = new Image();
        cardImg.src = cards[i]['image'];
        console.log(cards[i]['image']);
        let k = i-1;
        cardImg.addEventListener("load", () => {
            if(k < 15){
            ctx.drawImage(cardImg, k *125, 0, 113, 157);
            }
            else if( i < 30 ){
            let j = k-15;
            ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
            }else if(i < 45){
            let j = k-30
            ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
            }else if(i < 60){
            let j = k-45    
            ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
            }
            // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                // ctx.strokeStyle = 'orange';
                // ctx.lineWidth = 2;
                // ctx.beginPath();
                // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                // ctx.stroke();
            }
            //console.log(cardImg.width + " " + cardImg.height);
        );
        
     success = true;
     }
     //check for number
     else if(l == (r1) && success != true){
        alert ("number");
        codes[i-1] = codes[i];
        codes.pop();
        if(i < 15){    
            ctx.clearRect(i*125,0, 113, 157);
            }else if(i < 30){
               let j = i-15; 
               ctx.clearRect(j*125,157, 113, 157); 
            }else if(i < 45){
               let j = i-30
               ctx.clearRect( j * 125, 314, 113, 157 )
            }else if(i < 60){
               let j = i-45    
               ctx.clearRect( j * 125, 471, 113, 157 )    
               }
               const cardImg = new Image();
        cardImg.src = cards[i]['image'];
        console.log(cards[i]['image']);
        let k = i-1;
        cardImg.addEventListener("load", () => {
            if(k < 15){
            ctx.drawImage(cardImg, k *125, 0, 113, 157);
            }
            else if( i < 30 ){
            let j = k-15;
            ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
            }else if(i < 45){
            let j = k-30
            ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
            }else if(i < 60){
            let j = k-45    
            ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
            }
            // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                // ctx.strokeStyle = 'orange';
                // ctx.lineWidth = 2;
                // ctx.beginPath();
                // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                // ctx.stroke();
            }
            //console.log(cardImg.width + " " + cardImg.height);
        );
        
        success = true;
     }
     if(codes.length < 6){
        hasWon = true;
        alert ("Winner Winner Chicken Dinner!!! You have Won!!");
     }
    
    

}
async function checkSecond(){
    let i = codes.length-1;
    //check for suits
    l = codes[i].substring(0,1);
     r1 = codes[i-2].substring(0,1);
    leader = codes[i].substring(1)
    replace1 = codes[i-2].substring(1);
     if(leader == (replace1)){
        alert ("Suits");
     codes[i-2] = codes[i];
     codes.pop();
     if(i < 15){    
        ctx.clearRect(i*125,0, 113, 157);
        }else if(i < 30){
           let j = i-15; 
           ctx.clearRect(j*125,157, 113, 157); 
        }else if(i < 45){
           let j = i-30
           ctx.clearRect( j * 125, 314, 113, 157 )
        }else if(i < 60){
           let j = i-45    
           ctx.clearRect( j * 125, 471, 113, 157 )    
           }
           const cardImg = new Image();
        cardImg.src = cards[i]['image'];
        console.log(cards[i]['image']);
        let k = i-2;
        cardImg.addEventListener("load", () => {
            if(k < 15){
            ctx.drawImage(cardImg, k *125, 0, 113, 157);
            }
            else if( i < 30 ){
            let j = k-15;
            ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
            }else if(i < 45){
            let j = k-30
            ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
            }else if(i < 60){
            let j = k-45    
            ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
            }
            // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                // ctx.strokeStyle = 'orange';
                // ctx.lineWidth = 2;
                // ctx.beginPath();
                // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                // ctx.stroke();
            }
            //console.log(cardImg.width + " " + cardImg.height);
        );
        
           
     success = true;
     }
     //check for number
     
     else if(l ==(r1) && success != true){
        alert ("number");
        codes[i-2] = codes[i];
        codes.pop();
        if(i < 15){    
            ctx.clearRect(i*125,0, 113, 157);
            }else if(i < 30){
               let j = i-15; 
               ctx.clearRect(j*125,157, 113, 157); 
            }else if(i < 45){
               let j = i-30
               ctx.clearRect( j * 125, 314, 113, 157 )
            }else if(i < 60){
               let j = i-45    
               ctx.clearRect( j * 125, 471, 113, 157 )    
               }
               const cardImg = new Image();
        cardImg.src = cards[i]['image'];
        console.log(cards[i]['image']);
        let k = i-2;
        cardImg.addEventListener("load", () => {
            if(k < 15){
            ctx.drawImage(cardImg, k *125, 0, 113, 157);
            }
            else if( i < 30 ){
            let j = k-15;
            ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
            }else if(i < 45){
            let j = k-30
            ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
            }else if(i < 60){
            let j = k-45    
            ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
            }
            // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                // ctx.strokeStyle = 'orange';
                // ctx.lineWidth = 2;
                // ctx.beginPath();
                // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                // ctx.stroke();
            }
            //console.log(cardImg.width + " " + cardImg.height);
        );
        
        success = true;
     }
     if(codes.length < 6){
        hasWon = true;
        alert ("Winner Winner Chicken Dinner!!! You have Won!!");
     }
}
async function checkThird(){
    let i = codes.length-1;
    //check for suits
    l = codes[i].substring(0,1);
     r1 = codes[i-3].substring(0,1);
    leader = codes[i].substring(1)
    replace1 = codes[i-3].substring(1);
     if(leader == (replace1)){
        alert ("Suits");
     codes[i-3] = codes[i];
     codes.pop();

     if(i < 15){    
     ctx.clearRect(i*125,0, 113, 157);
     }else if(i < 30){
        let j = i-15; 
        ctx.clearRect(j*125,157, 113, 157); 
     }else if(i < 45){
        let j = i-30
        ctx.clearRect( j * 125, 314, 113, 157 )
     }else if(i < 60){
        let j = i-45    
        ctx.clearRect( j * 125, 471, 113, 157 )    
        }
        const cardImg = new Image();
        cardImg.src = cards[i]['image'];
        console.log(cards[i]['image']);
        let k = i-3;
        cardImg.addEventListener("load", () => {
            if(k < 15){
            ctx.drawImage(cardImg, k *125, 0, 113, 157);
            }
            else if( i < 30 ){
            let j = k-15;
            ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
            }else if(i < 45){
            let j = k-30
            ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
            }else if(i < 60){
            let j = k-45    
            ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
            }
            // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                // ctx.strokeStyle = 'orange';
                // ctx.lineWidth = 2;
                // ctx.beginPath();
                // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                // ctx.stroke();
            }
            //console.log(cardImg.width + " " + cardImg.height);
        );
        
    
     success = true;
     }
     //check for number
     
     else if(l ==(r1) && success != true){
        alert ("number");
        codes[i-3] = codes[i];
        codes.pop();
        if(i < 15){    
            ctx.clearRect(i*125,0, 113, 157);
            }else if(i < 30){
               let j = i-15; 
               ctx.clearRect(j*125,157, 113, 157); 
            }else if(i < 45){
               let j = i-30
               ctx.clearRect( j * 125, 314, 113, 157 )
            }else if(i < 60){
               let j = i-45    
               ctx.clearRect( j * 125, 471, 113, 157 )    
               }
               const cardImg = new Image();
               cardImg.src = cards[i]['image'];
               console.log(cards[i]['image']);
               let k = i-3;
               cardImg.addEventListener("load", () => {
                   if(k < 15){
                   ctx.drawImage(cardImg, k *125, 0, 113, 157);
                   }
                   else if( i < 30 ){
                   let j = k-15;
                   ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
                   }else if(i < 45){
                   let j = k-30
                   ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
                   }else if(i < 60){
                   let j = k-45    
                   ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
                   }
                   // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
                       // ctx.strokeStyle = 'orange';
                       // ctx.lineWidth = 2;
                       // ctx.beginPath();
                       // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
                       // ctx.stroke();
                   }
                   //console.log(cardImg.width + " " + cardImg.height);
               );
        success = true;
     }
     if(codes.length < 6){
        hasWon = true;
        alert ("Winner Winner Chicken Dinner!!! You have Won!!");
     }
}
async function fetchJson() {
    let response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let data = await response.json();
    deck_id = data['deck_id'];
    let response1 = await fetch('https://www.deckofcardsapi.com/api/deck/'+deck_id+'/draw/?count=52');
    let data1  = await response1.json();
    cards = data1['cards'];
    for(let i = 0; i < cards.length; i++){
        codes.push(cards[i]['code']);
    }
    console.info(data['remaining']); 
    
    console.info(deck_id);
    console.info(codes);

   
    
     for(let i = 0; i < cards.length; i++){
   
        const cardImg = new Image();
    cardImg.src = cards[i]['image'];
    console.log(cards[i]['image']);
    cardImg.addEventListener("load", () => {
        if(i < 15){
        ctx.drawImage(cardImg, i *125, 0, 113, 157);
        }
        else if( i < 30 ){
        let j = i-15;
        ctx.drawImage(cardImg, j * 125, 157, 113, 157 )
        }else if(i < 45){
        let j = i-30
        ctx.drawImage(cardImg, j * 125, 314, 113, 157 )
        }else if(i < 60){
        let j = i-45    
        ctx.drawImage(cardImg, j * 125, 471, 113, 157 )    
        }
        // if(cards[i]['value'] == topCardValue || cards[i]['suit'] == topCardSuit){
            // ctx.strokeStyle = 'orange';
            // ctx.lineWidth = 2;
            // ctx.beginPath();
            // // ctx.roundRect(10+i*125, 550, 113, 157, 8);
            // ctx.stroke();
        }
        //console.log(cardImg.width + " " + cardImg.height);
    );
    }
    // console.info(codes[0].substring(0, 1));
}
