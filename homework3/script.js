MyMath = {}
let check = 0;
function checked(...abs){
    check = 0;
    loop1: for(let i = 0; i < abs.length; i++){
        if(Number.isFinite(abs[i]) === true){
            check = true;        
        }
        else if(abs[i] === undefined){
            check = 0;
        }
        else{
            check = false;
            break loop1;
        }
    }
    return check;
}
MyMath.PI = console.log(3.141592653589793238462643)
MyMath.pow = function(num, deg){
    checked(num, deg)
    if(check === true){
        console.log(num**deg)
    }
    else if(check === false){
        console.log('Повинно бути числове значення')
    }
    else{
        console.log('Будь ласка, введіть числа')
    }
}
MyMath.abs = function(num){
    checked(num)
    if(check === true){
        if(num > 0){
            console.log(num)
        }
        else{
            console.log(-num)
        }
    }
    else if(check === false){
        console.log('Повинно бути числове значення')
    }
    else{
        console.log('Будь ласка, введіть число')
    }
}
MyMath.max = function(num1, num2, ...num){
    checked(num1, num2)
    if(check === true){
        let max;
        if(num1 > num2){
            max = num1
        }
        else{
            max = num2
        }
        loop1: for(let i = 0; i < num.length; i++){
            checked(num[i])
            if(check === true){
                if(max < num[i]){
                    max = num[i]
                }
            }
            else if(check === false){
                max = 'Повинно бути числове значення'
                break loop1;
            }
        }
        console.log(max)
    }
    else if(check === false){
        console.log('Повинно бути числове значення')
    }
    else{
        console.log('Будь ласка, введіть числа')
    }
    
}
MyMath.min = function(num1, num2, ...num){
    checked(num1, num2)
    if(check === true){
        let min;
        if(num1 < num2){
            mi = num1
        }
        else{
            min = num2
        }
        loop1: for(let i = 0; i < num.length; i++){
            checked(num[i])
            if(check === true){
                if(min > num[i]){
                    min = num[i]
                }
            }
            else if(check === false){
                min = 'Повинно бути числове значення'
                break loop1;
            }
        }
        console.log(min)
    }
    else if(check === false){
        console.log('Повинно бути числове значення')
    }
    else{
        console.log('Будь ласка, введіть числа')
    }
    
}

MyMath.PI
MyMath.pow(5, 3)
MyMath.abs(-3.3)
MyMath.max(3, 2, 5, 2)
MyMath.min(3, 2, -5, 30)
