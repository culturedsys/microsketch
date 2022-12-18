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
    led.plot(x, y)
    basic.pause(500)
    if (input.isGesture(Gesture.TiltLeft)) {
        x += -1
        x = Math.max(x, 0)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        x += 1
        x = Math.min(x, 4)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        y += 1
        y = Math.min(y, 4)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        y += -1
        y = Math.max(y, 0)
    }
})
