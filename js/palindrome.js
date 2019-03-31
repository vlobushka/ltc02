var input = prompt('Please enter text');
var pal = input.split('');
var res = pal.reverse();
var str = res.join('');
if (str == input) {
    alert('Palindrome');
} else {
    alert('Not a palindrome');
}