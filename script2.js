//Palindrome strings

function isPalindrome(line) {    
        let arr = [];
        for(i = 0; i < line.length;i ++){
            arr.push(line[i]);      
        }
        arr.reverse();
        let strResalt = arr.join('');
        console.log(strResalt);
        if(line == strResalt){
            console.log(true)
        }
        else{
            console.log(false)
        }
      }      
      isPalindrome("racecar");
