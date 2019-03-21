function poem(counter) {
    counter--;
    alert('у попа была собака\n он её любил\n она съела кусок мяса, он её убил\n в землю закопал и надпись написал,\n что');
    if (counter != 0)
        poem(counter);    
}
poem()