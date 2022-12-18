input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    x = 2
    y = 2
})
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
    led.toggle(x, y)
    basic.pause(500)
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(x, y)
        x += -1
        x = Math.max(x, 0)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(x, y)
        x += 1
        x = Math.min(x, 4)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        led.plot(x, y)
        y += 1
        y = Math.min(y, 4)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        led.plot(x, y)
        y += -1
        y = Math.max(y, 0)
    }
})
