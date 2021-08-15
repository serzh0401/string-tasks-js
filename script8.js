//A new set can be constructed by determining which members two sets have "in common". 
//The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B. 
//If A ∩ B = ∅, then A and B are said to be disjoint.

let arr1 = [3 , 2];
let arr2 = [2 , 3];
let arrResalt = [];
console.log(arr1.includes(1));

for(i=0;i < arr1.length; i ++){
   if(arr2.includes(arr1[i]) == true){
       arrResalt.push(arr1[i])
   }
}
console.log(arrResalt);