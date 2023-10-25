function breakingRecords(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let mostPointsBroken = 0;
    let leastPointsBroken = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            // updating highestScore
            highestScore = scores[i];
            mostPointsBroken++;
        } else if (scores[i] < lowestScore) {
            // updatingLowest
            lowestScore = scores[i];
            leastPointsBroken++;
        }
    }

    return [mostPointsBroken, leastPointsBroken];
}

// Test case
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const result = breakingRecords(scores);
console.log(result);  // Output: [2, 4]
