function update_s () {
    return Math.random() * 2 - 1;
}

function update_c () {
    return Math.random() * 2 - 1;
}

function getSkewedRandomNumber(x) {
    // Generate a random number between -1 and 1
    const randomValue = Math.random() * 2 - 1; // This gives a value in the range [-1, 1]

    // Define thresholds for skewing
    const lowThreshold = 200; // Adjust this based on what you consider "low"
    const highThreshold = 500; // Adjust this based on what you consider "high"

    // Skew y based on the value of x
    let skewedValue;

    if (x < lowThreshold) {
        // If x is low, skew towards positive
        skewedValue = Math.abs(randomValue); // Ensure y is positive
    } else if (x > highThreshold) {
        // If x is high, skew towards negative
        skewedValue = -Math.abs(randomValue); // Ensure y is negative
    } else {
        // If x is in the mid-range, keep y as is
        skewedValue = randomValue;
    }

    return skewedValue;
}
