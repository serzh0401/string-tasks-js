let now = new Date();
console.log( now );
//alert( now.getDay());

let date = new Date(2012, 0, 13);
console.log(date.getDay());
let arr = [];

function fridayTheThirteenths(start, end) {
for(i = start;i <= end; i ++){
    for(k=0;k <=11; k ++){
        let date = new Date(i, k , 13);
    if(date.getDay() == 5){
        arr.push(date);
    };
    
    };
}
console.log(arr);
}

fridayTheThirteenths(1973 ,2004);


