function palindrome(text) {
    text = prompt('Please insert text here');
    endChar = text.length - 1;
    var low = text.toLowerCase();
        if (endChar < 1) {
            console.log('Palindrome')
        } else {
            if (low [0] == low [endChar]) {
                   return palindrome(low.substring(1, endChar))
        }   else{
            console.log('Not a palindrome')
            }
        }  
    }
  palindrome()