function counter(){
    let count =0;
    return function (){
        count +=1;
        return count;
    }
}

let c=counter();
console.log(c());
console.log(c());
console.log(c());