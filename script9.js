//Given a mixed array of number and string representations of integers, 
//add up the string integers and subtract this from the total of the non-string integers.
//Return as a number.

let arr = [9, 3, '7', '3'];
let arrResalt = [];
for(i=0;i < arr.length; i ++){
    if(typeof(arr[i]) === 'number'){
        arrResalt.push(arr[i]);
    }
 }
 console.log(arrResalt); 