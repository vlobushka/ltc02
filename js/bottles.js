function bottles(counter) {
    counter--;
	nextBottle= counter - 1;
    if (counter > 1) {
console.log(counter + ' bottles of beer on the wall,' + counter + ' bottles of beer.\nTake one down, pass it around,' + nextBottle + 'bottles of beer on the wall...');
bottles(counter)
    }
    else  {
        console.log('1 bottle of beer on the wall, 1 bottle of beer.\nTake it down, pass it around, no bottles of beer on the wall.\n')
    };    
}
bottles(99)
