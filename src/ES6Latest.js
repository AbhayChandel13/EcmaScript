const sum = (a,b,...theArgs)=>{
    let total = 0 ;
    for (const arg of theArgs){
        total += arg;      
    }
   return total;
   
}
console.log(sum(5,10,100,200));
