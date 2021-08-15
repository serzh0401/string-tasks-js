//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'

function solution(str){
  let arr = [];
  for(i = 0; i < str.length;i ++){
      arr.push(str[i]);      
  }
  arr.reverse();
  let strResalt = arr.join('');
  console.log(strResalt);
}
solution("hello");