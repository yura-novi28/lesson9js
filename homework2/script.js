let num = prompt('Введіть число')
function getSqrt(num){
    if(num === '' || num === null){
        console.log('Будь ласка, введіть число!')
    }
    else if(Number.isFinite(+num) === true){
        if(num > 0){
            console.log(Math.sqrt(+num))
        }
        else{
            console.log('Введіть додатнє число.')
        }
    }
    else{
        console.log('Повинно бути числове значення.')
    }
}
getSqrt(num)