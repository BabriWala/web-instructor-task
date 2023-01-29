function rotateLeft(array, integer){
    let newArray = [];
    for(i=integer; i<array.length; i++){
        if(i== (array.length-1)){
            newArray.push(array[i])
        }else{
        newArray.push(array[i])
        }
    }
    for(i=0; i<integer; i++){
        newArray.push(array[i])
    }
    return console.log(newArray);
}

rotateLeft([1, 2, 3, 4, 5], 3)
