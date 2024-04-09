let num = prompt('Введіть число')
let getArea = (r) => {
    if(num === '' || num === null){
        console.log('Будь ласка, введіть радіус!')
    }
    else if(Number.isFinite(+num) === true){
        console.log(Math.PI * r**2)
    }
    else{
        console.log('Повинно бути числове значення.')
    }
}
getArea(num)