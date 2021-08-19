var bday = document.querySelector('#birthday');
var luckyNumber = document.querySelector('#lucky-number');
var check = document.querySelector('#check');
var output = document.querySelector('#output')
var sum=0;

//checking valid
function checkValid() {
    if(luckyNumber.value === "" || bday.value === "")
    {
         output.innerText = "please fill all the fields"
    }
    else{
        checkBdayLucky()
        
    }
    
}

//adding each digit of number
function addAllDigit(birthday) {

     for(var i =0;i<birthday.length;i++){
       sum = sum +  parseInt(birthday.charAt(i),10)
        
    }
    return sum
}


//checking lucky or not
function checkBdayLucky() {

    var bdayNumber = bday.value.replaceAll('-','0')
    var addition = addAllDigit(bdayNumber)
   
    if(addition % luckyNumber.value === 0){
        output.innerText = "yupee..your birthday is lucky 🎊 🎉"
    }
    else{
        output.innerText = "sorry..your birthday is NOT lucky 💔"
    }
   
    
}


check.addEventListener('click', checkValid)