let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (distance > 0 && distance < 70) {
        serial.writeLine("")
        serial.writeNumber(distance)
        serial.writeString("cm")
        if (distance >= 25) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
    basic.pause(50)
})
