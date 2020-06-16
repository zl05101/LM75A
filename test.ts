// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(() => {
    let temp = LM75A.getTemperatureInDegrees()
    basic.pause(1000)
    serial.writeValue("teamp:",10)

})
