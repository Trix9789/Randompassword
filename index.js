let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")

let numCheck = document.getElementById("pass-num")
let capCheck = document.getElementById("pass-cap")


const characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z"]
const characters2 =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"]
const characters3 =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const characters4 =["~","`","!","@","#","$","%","^","&",
"*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



function randomPassword(){
    pass1.textContent = ""
    pass2.textContent = ""
    
    for (let i = 0; i < 10; i++){
        let pasGen1 = Math.floor(Math.random()*characters2.length)
        pass1.textContent +=  characters2[pasGen1]
        let pasGen2 = Math.floor(Math.random()*characters2.length)
        pass2.textContent +=  characters2[pasGen2]
    }

    for (let i=0; i < 1; i++){
        if(capCheck.checked === true){
        let pasGen1 = Math.floor(Math.random()*characters1.length)
        pass1.textContent +=  characters1[pasGen1]
        let pasGen2 = Math.floor(Math.random()*characters1.length)
        pass2.textContent +=  characters1[pasGen2]}
        else i =1;
    }

    for (let i=0; i < 1; i++){
        if (numCheck.checked === true){
        let pasGen1 = Math.floor(Math.random()*characters3.length)
        pass1.textContent +=  characters3[pasGen1]
        let pasGen2 = Math.floor(Math.random()*characters3.length)
        pass2.textContent +=  characters3[pasGen2]}
        else i = 1;
    }

    for (let i=0; i < 1; i++){
      {
        let pasGen1 = Math.floor(Math.random()*characters4.length)
        pass1.textContent +=  characters4[pasGen1]
        let pasGen2 = Math.floor(Math.random()*characters4.length)
        pass2.textContent +=  characters4[pasGen2]}
    }
}
