var numWaterBottles = function (numBottles, numExchange) {
    let result = numBottles;

    while (numBottles / numExchange >= 1) {
        result += Math.floor(numBottles / numExchange);
        numBottles =
            Math.floor(numBottles / numExchange) + (numBottles % numExchange);
    }

    return result;
};

console.log(numWaterBottles(10, 4))
