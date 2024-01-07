




/*get the number of characters*/

function charLength() {
    const charLength = document.getElementById('length').value

    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
console.log();

document.getElementById('length').addEventListener('change', charLength);

let upp_check= document.getElementById("uppercase")
let low_check =document.getElementById("lowercase")
let num_check = document.getElementById("numbers")
let symbol_check =document.getElementById("symbols")
let result = document.getElementById("password__result")
let generate = document.getElementsByClassName("btn")
console.log(generate);
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let num ="1234567890"
let sym ="!@#$%^&*()|~.,/';[]{}-=+_?><"
generate[0].addEventListener("click",e=>{
   
    let res =""

    if (upp_check.checked == true && low_check.checked== true && num_check.checked==false && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        let upp_low = uppercase + lowercase
        for(let i =0;i<charlength;i++){
            res+= upp_low.charAt(Math.random()*upp_low.length)
            console.log(res);
        }
        result.value = res;
    }
    if (upp_check.checked == true && low_check.checked==false && num_check.checked==false && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        for(let i =0;i<charlength;i++){
            res+= uppercase.charAt(Math.random()*uppercase.length)
            console.log(res);

        }
        console.log(res);
        result.value = res;

    }

    if (upp_check.checked == true && low_check.checked== true && num_check.checked==true && symbol_check.checked == false) {
        let  charlength = document.getElementById('length').value
        let upp_num_low =uppercase+lowercase+num
        for(let i =0;i<charlength;i++){
            res+= upp_num_low.charAt(Math.random()*upp_num_low.length)
        }
        console.log(res);
        result.value = res; 
    }

    if (upp_check.checked == true && low_check.checked== true && num_check.checked==true && symbol_check.checked == true) {
        let  charlength = document.getElementById('length').value
        let upp_num_low_sym =uppercase+lowercase+num+sym
        for(let i =0;i<charlength;i++){
            res+= upp_num_low_sym.charAt(Math.random()*upp_num_low_sym.length)
        }
        console.log(res);
        result.value = res; 
    }

    if (upp_check.checked == false && low_check.checked== true && num_check.checked==false && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        
        for(let i =0;i<charlength;i++){
            res+= lowercase.charAt(Math.random()*lowercase.length)
        }
        console.log(res);
        result.value = res;
    }
    
    if (upp_check.checked == false && low_check.checked== false && num_check.checked==true && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        
        for(let i =0;i<charlength;i++){
            res+= num.charAt(Math.random()*num.length)
        }
        console.log(res);
        result.value = res;
    }
    
    if (upp_check.checked == false && low_check.checked== false && num_check.checked==false && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        
        for(let i =0;i<charlength;i++){
            res+= sym.charAt(Math.random()*sym.length)
        }
        console.log(res);
        result.value = res;
    }
    
    if (upp_check.checked == true && low_check.checked== false && num_check.checked==true && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        let upp_num = uppercase + num
        for(let i =0;i<charlength;i++){
            res+= upp_num.charAt(Math.random()*upp_num.length)
        }
        console.log(res);
        result.value = res;
    }

    if (upp_check.checked == true && low_check.checked== false && num_check.checked==false && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let upp_sym = uppercase + sym
        for(let i =0;i<charlength;i++){
            res+= upp_sym.charAt(Math.random()*upp_sym.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == false && low_check.checked== true && num_check.checked==true && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        let low_num = lowercase + num
        for(let i =0;i<charlength;i++){
            res+= low_num.charAt(Math.random()*low_num.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == false && low_check.checked== true && num_check.checked==false && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let low_sym = lowercase + sym
        for(let i =0;i<charlength;i++){
            res+= low_sym.charAt(Math.random()*low_sym.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == false && low_check.checked== false && num_check.checked==true && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let num_sym = num+sym
        for(let i =0;i<charlength;i++){
            res+= num_sym.charAt(Math.random()*num_sym.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == false && low_check.checked== true && num_check.checked==true && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let low_num_sym = num+sym+lowercase
        for(let i =0;i<charlength;i++){
            res+= low_num_sym.charAt(Math.random()*low_num_sym.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == true && low_check.checked== false && num_check.checked==true && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let upp_num_sym = num+sym+uppercase
        for(let i =0;i<charlength;i++){
            res+= upp_num_sym.charAt(Math.random()*upp_num_sym.length)
        }
        console.log(res);
        result.value = res;
    }

    if (upp_check.checked == true && low_check.checked== true && num_check.checked==false && symbol_check.checked == true){
        let  charlength = document.getElementById('length').value
        let upp_low_sym = lowercase+sym+uppercase
        for(let i =0;i<charlength;i++){
            res+= upp_low_sym.charAt(Math.random()*upp_low_sym.length)
        }
        console.log(res);
        result.value = res;
    }







    

})


