pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.showIcon(IconNames.Yes)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.showIcon(IconNames.Meh)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P11, 1)
        basic.showIcon(IconNames.Surprised)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
        basic.showIcon(IconNames.Heart)
    }
})
