basic.showIcon(IconNames.Yes)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
    	
    } else {
    	
    }
})
