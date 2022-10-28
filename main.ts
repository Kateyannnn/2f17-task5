input.onButtonPressed(Button.A, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            basic.pause(200)
            x_value += 1
        }
        x_value = 0
        y_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            basic.pause(200)
            x_value += 1
        }
        y_value += 1
        x_value += -1
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            basic.pause(200)
            x_value += -1
        }
        y_value += 1
        x_value += 1
    }
})
let y_value = 0
let x_value = 0
basic.showString("2F17 Kate")
basic.forever(function () {
	
})
