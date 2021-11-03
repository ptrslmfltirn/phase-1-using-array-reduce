const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function summingFunc(total, num) {
    return total + num
}

let totalBatteries = batteryBatches.reduce(summingFunc)
