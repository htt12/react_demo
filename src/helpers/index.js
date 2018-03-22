export function genRandomColor(){
    return `rgb  c(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}


export function genRandomPosition(){
    return {
        top: `${randomNumber(100)}%`,
        left: `${randomNumber(100)}%`,    
    }
}

function randomNumber(max){
    return Math.floor(Math.random() * (max+1));
}

