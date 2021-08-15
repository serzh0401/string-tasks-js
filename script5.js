//let num = 2997;

//let num1= String(num);
//let arr = [];
//for(i = 0;i < num1.length;i ++){
    //arr.push(num1[i].repeat(num1.length - 1));
//};
//console.log(arr);

//function arraySum(array){
//let sum = 0;
//for(k = 0; k < array.length; k ++){
    //let res = Number(array[k]);
    //sum -= res;
    //}
//console.log(sum);
//}
//arraySum(arr);

function ConcatenatedSum(num){
   let num1= String(num);
let arr = [];
for(i = 0;i < num1.length;i ++){
    arr.push(num1[i].repeat(num1.length - 1));
};

    function arraySum(array){
        let sum = 0;
        for(k = 0; k < array.length; k ++){
            let res = Number(array[k]);
         if(num > 0){
            sum += res;
         } 
         else{
            sum -= res;
         }        
            
            }
        console.log(sum);
        }
        arraySum(arr);
        
}


ConcatenatedSum(- 2997);
