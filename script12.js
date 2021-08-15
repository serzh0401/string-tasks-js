let ob = {
'James': ['Jacob', 'Bill', 'Lucas'],
'Johnny': ['David', 'Kyle', 'Lucas'],
'Peter': ['Lucy', 'Kyle']
};

let a =  ['Jacob', 'Bill', 'Lucas'];
let d = ['Lucas', 'Bill'];
let c = ['Lucas', 'Bill'];
console.log(c == d);

//var arr1 = [1, 2, {prop : 'test'}];
//var arr2 = [1, 2, {prop : 'test'}];
 
if(JSON.stringify(c) === JSON.stringify(d)){
    console.log("f");
}


//let a1 = [1,2,3];
//let a2 = [2,1,3];
//console.log(deepEquals(d , c));//false

console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));
let arr = Object.entries(ob);

var array3 = a.filter(function(obj) { return d.indexOf(obj) >= 0; });
console.log(array3);

for(i = 0;i < arr.length;i ++){
    let arrRes = arr[i][1];
    console.log(arrRes);
   let arr10 = arrRes.filter(function(obj) { return d.indexOf(obj) >= 0; });
console.log(arr10);

if(JSON.stringify(arr10) === JSON.stringify(d)){
  console.log(arr[i][0]);
   break;

}
else{
 let arr10 = [];
 continue;
};
}


function killer(suspectInfo, dead) {
    //your code here...
  }