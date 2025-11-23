let nums = [10, 3, 7, 20, 13, 2];
let square = nums.map(n=>n*n);
let prime = nums.filter(num=>{
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true
});

let sum=nums.reduce((accu,a)=> accu+a
,0);

nums.sort((a,b)=> b-a);

console.log(square);
console.log(prime);
console.log(sum);
console.log(nums);