function getRandomNumber(){
    return Math.random()
}

function getRandomNumberMax(max){
    return Math.random() * max
}

function getRandomNumberMaxAndMin(max, min){
    return Math.random() * (max - min) + min
}

function getRandomNumberMaxAndMinIncluse(){
    return Math.floor(Math.random() * (max - min) + min)
}