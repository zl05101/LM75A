let temp = LM75A.getTemperatureInDegrees()
basic.pause(1000)
serial.writeValue("teamp:",10)
