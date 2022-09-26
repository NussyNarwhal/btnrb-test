pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(200)
        basic.showIcon(IconNames.Surprised)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
    }
})
