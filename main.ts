input.onButtonPressed(Button.A, function () {
    while (true) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        basic.pause(5000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(5000)
        ContinuousServo.turn_off_motor(DigitalPin.P1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(5000)
    }
})
basic.forever(function () {
	
})
