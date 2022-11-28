function countDown(num) {
    myInterval = setInterval(function() {
        num -= 1;
        if (num === 0) {
            console.log("DONE!");
            clearInterval(myInterval);
        }
        else {
            console.log(num);
        }
    }, 1000);
}

function randomGame() {
    let counter = 0;

    myInterval = setInterval(function() {
        let random = Math.random() //Math.random() randomly selects a number between 0 and 1
        counter += 1;
        if (random > 0.75) {
            console.log(random);
            console.log(`It took us ${counter} tries to get a number greater than 0.75.`);
            clearInterval(myInterval);
        }
        else {
            console.log(random);
        }

    }, 1000)

}

// Function calls to test
// countDown(10);
// randomGame();