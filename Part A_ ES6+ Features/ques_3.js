function sumAll(...num){
    let Sum=0;
    for(let i of num){
        Sum += i;
    }
    console.log(Sum);
}
sumAll(1,2,3,4);