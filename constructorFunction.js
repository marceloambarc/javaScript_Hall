function Smartphone(smartphoneModel, screenSize, batteryCapacity) {
    this.smartphoneModel = smartphoneModel,
    this.screenSize = screenSize,
    this.batteryCapacity = batteryCapacity,
    this.dial = function() {
        console.log("Calling...")
    }
}

const smartphone = new Smartphone('ASUS', 5.5, 5000);
console.log(smartphone);