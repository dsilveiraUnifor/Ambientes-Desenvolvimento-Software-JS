let divisor;

function teste(a, b) {
    let n = 1;
    while(a > n && b > n) {
        if ((a % n == 0) && (b % n == 0)) {
            divisor = n;
        }
        n++;
    }

    console.log("Maior divisor : ", divisor);
}

teste(40, 60);