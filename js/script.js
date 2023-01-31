//playerone codes

let playerone = document.querySelector(".playerone");
let error = document.querySelector(".error");
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebtn = document.querySelector(".playeronebtn");
let gamerone = document.querySelector(".gamerone");
let playeronedgt;



//playertwo codes
let playertwo = document.querySelector(".playertwo");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobtn = document.querySelector(".playertwobtn");
let gamertwo = document.querySelector(".gamertwo");
let whoisWinner = document.querySelector (".whoisWinner");
let chance = document.querySelector(".chance");
let count = 5;

   //playerone conditions
playeronebtn.addEventListener ("click", function(){
  if(playeroneinput.value){
   error.innerHTML ="";
      if(playeroneinput.value-20){
         if( playeroneinput.value >=0 && playeroneinput.value <=10){
              playeronedgt = playeroneinput.value;
              gamertwo.style.display="block"; 
              gamerone.style.display="none"; 
         }
         else {
            error.innerHTML ="Please enter a number between 1 and 10";
            error.style.color = "red";
            error.style.marginTop = "15px";
            error.style.marginBottom = "10px"; 
            error.style.fontWeight = "bold";  
         }
      }
      else {
         error.innerHTML ="Please enter a number!!";
         error.style.color = "red";
         error.style.marginTop = "15px";
         error.style.marginBottom = "10px"; 
         error.style.fontWeight = "bold";
      }
  }
  else {
      error.innerHTML = "Please enter a valid number!!";
      error.style.color = "#FF00FF";
      error.style.marginTop = "15px";
      error.style.marginBottom = "10px"; 
      error.style.fontWeight = "bold";
      
  }
})

//Playertwo-conditions//
playertwobtn.addEventListener("click", function(){
   if(playertwoinput.value){
    error.innerHTML ="";
       if(playertwoinput.value-20){
          if( playertwoinput.value >=0 && playertwoinput.value <=10){
            count--;
            if(count!=0){
               if(playertwoinput.value == playeronedgt){
                  whoisWinner.innerHTML = "congrats player two"; 
                  playertwoinput.style.display = "none";
                  playertwobtn.style.display = "none";                 
               }
               else{
                  chance.innerHTML = "try " + count;
                  chance.style.color="green";
                  chance.style.fontSize="16px"
                  console.log(chance.innerHTML)
               }
            }
            else{
                  whoisWinner.innerHTML ="Congrats Player One!!";
                  chance.innerHTML = "chance" + 0;
                  playertwoinput.style.display = "none";
                  playertwobtn.style.display = "none";
                  
            }
              
          }
          else {
             error.innerHTML ="Please enter a number between 1 and 10";
             error.style.color = "red";
             error.style.marginTop = "15px";
             error.style.marginBottom = "10px"; 
             error.style.fontWeight = "bold";  
          }
       }
       else {
          error.innerHTML ="Please enter a number!!";
          error.style.color = "red";
          error.style.marginTop = "15px";
          error.style.marginBottom = "10px"; 
          error.style.fontWeight = "bold";
       }
   }
   else {
       error.innerHTML = "Please enter a valid number!!";
       error.style.color = "#FF00FF";
       error.style.marginTop = "15px";
       error.style.marginBottom = "10px"; 
       error.style.fontWeight = "bold";
       
   }
 })

