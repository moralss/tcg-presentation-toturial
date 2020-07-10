function sayHello (name) {
    var message = "hello to "
    return message + name ;    
}

function showMeHighest(firstNumber , secondNumber){
    if(firstNumber > secondNumber){
        return firstNumber;
    } 
    
    if(secondNumber > firstNumber){
        return secondNumber;
    }
}

function checkIfEqual(firstNumber , secondNumber){
if(firstNumber === secondNumber){
    return true;
}else{
    return false;
}
}

console.log(checkIfEqual(1 , 10))
// sayHello("Moral")
// console.log(showMeHighest(60 , 42))

