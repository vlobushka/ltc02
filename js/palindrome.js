var input = prompt('Please enter text');
var low = input.toLowerCase();
var pal = low.split('');
var res = pal.reverse();
var str = res.join('');
if (str == low) {
    console.log ('Palindrome');
} else {
    console.log('Not a palindrome');
}

