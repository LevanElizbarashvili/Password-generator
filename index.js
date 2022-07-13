const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// randomizer function

function digitRandomizer() {
    let randomDigit = Math.floor(Math.random()*91 + 1)
    return randomDigit
}

// for loop till 15 with random index

function assambler() {
    for ( let i = 0; i < 14; i++) {
         let pswrd1 = "" += characters[randomDigit]
    }
    return pswrd1
}

// concatenate return of loop

// how to do it twice???

console.log(assambler())
