let prohibist = ["cho","chó","ngu","ga","gà"];
let ck = 0
function checkNatureLanguage(language){
    
    let arrayCheck = language.split(" ")
    for(var i = 0; i < arrayCheck.length ; i++){
        for(var j = 0; j < prohibist.length ;j++){
            if(arrayCheck[i] === prohibist[j]){
                ck = 1
            }
        }
    }
    return ck
}

module.exports = {checkNatureLanguage}