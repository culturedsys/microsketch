input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.clearScreen()
    x = 2
    y = 2
})
function move (axis: string, change: number) {
    led.plot(x, y)
    if (axis == "x") {
        x += change
        x = Math.constrain(x, 0, 4)
    } else if (axis == "y") {
        y += change
        y = Math.constrain(y, 0, 4)
    }
}
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
    led.toggle(x, y)
    basic.pause(500)
    if (input.isGesture(Gesture.TiltLeft)) {
        move("x", -1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        move("x", 1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        move("y", -1)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        move("y", 1)
    }
})
