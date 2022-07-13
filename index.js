const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = document.getElementById("password-el");
let password2 = document.getElementById("password-ell");

function passwordGenerator() {
  password1.innerHTML = "";
  password2.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    let randomDigit = Math.floor(Math.random() * 90) + 1;
    password1.textContent += characters[randomDigit];
  }
  for (let j = 0; j < 15; j++) {
    let randomDigit2 = Math.floor(Math.random() * 90) + 1;
    password2.textContent += characters[randomDigit2];
  }
}



