//Oh no! The number has been mixed up with the text. 
//Your goal is to retreive the number from the text, 
//can you return the number back to it's original state?//

  let str = "a1b2c4";
    str.includes('1');
let arrNumber = [];
let arrString = [];
  let arr = ['0' , '1' ,'2' ,'3' , '4' , '5' , '6' , '7' , '8', '9'];
  console.log(arr.indexOf(2));
  for(i =0;i < arr.length; i ++){
    if(str.includes(arr[i]) == true){
      arrNumber.push(arr[i]);
      //et res = str.replace(arr[i] , "");

      continue;
      
    }
  };
  console.log(arrNumber);
  console.log(str);
  let str1 = str;
  for(k=0;k < str.length; k ++){
    arrString.push(str[k])
  }
  console.log(arrString);
