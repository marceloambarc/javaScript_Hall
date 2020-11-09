function createSmartphone(smartphoneModel, screenSize, batteryCapacity) {
    return {
        smartphoneModel,
        screenSize,
        batteryCapacity,
        dial() {
            console.log("Calling...")
        }
    }
}

const smartphone1 = createSmartphone('Zenphone', 5.5, 5000);
console.log(smartphone1);