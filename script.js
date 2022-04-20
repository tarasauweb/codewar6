function openOrSenior(data) {
    let open = 'Open'
    let senior = 'Senior'
    let newArr = []

    data.forEach( (item)=>{ 
        if(item[0]>=55 && item[1] > 7 ){
            
            return newArr.push(senior)
        }
        else if(item[0]<55 || item[1] <= 7){
            return newArr.push(open)
        }
        else {
            return false
        }
    })
    return newArr
    
}


openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])



// senior  должен быть не моложе 55 лет и иметь гандикап больше 7. 
// В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.