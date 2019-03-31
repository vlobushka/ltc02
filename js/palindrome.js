var input = prompt('Please enter text');
var pal = input.split('');
var res = pal.reverse();
var str = res.join('');
if (str == input) {
    console.log ('Palindrome');
} else {
    console.log('Not a palindrome');
}