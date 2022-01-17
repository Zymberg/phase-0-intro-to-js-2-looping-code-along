// // Code your solutions in this file


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


let names = ["Guadalupe", "Ollie", "Aki"]
let events = "surprise"
    
function writeCards(names, events){
    let output = []
    for (let i = 0; i < names.length; i++){
        output.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return output
}

function countDown(){
    let count = 11
    while (count > 0){
        count--;
       console.log(count); 
       
    } 
}
