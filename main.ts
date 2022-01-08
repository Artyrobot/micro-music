input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 999; index++) {
        music.playTone(220, music.beat(BeatFraction.Breve))
        music.playTone(220, music.beat(BeatFraction.Double))
        music.playMelody("C D E F G A B C5 ", 200)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 999; index++) {
        for (let index = 0; index < 999; index++) {
            music.playTone(880, music.beat(BeatFraction.Breve))
            music.playTone(784, music.beat(BeatFraction.Breve))
            music.playTone(698, music.beat(BeatFraction.Breve))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.playTone(622, music.beat(BeatFraction.Breve))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.playTone(698, music.beat(BeatFraction.Breve))
            music.playTone(784, music.beat(BeatFraction.Breve))
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("- - - - - - C5 C5 ", 199998)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 999; index++) {
        music.playTone(880, music.beat(BeatFraction.Double))
        music.playTone(784, music.beat(BeatFraction.Double))
        music.playTone(698, music.beat(BeatFraction.Double))
        music.playTone(659, music.beat(BeatFraction.Double))
        music.playTone(622, music.beat(BeatFraction.Double))
        music.playTone(659, music.beat(BeatFraction.Double))
        music.playTone(698, music.beat(BeatFraction.Double))
        music.playTone(784, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 999; index++) {
        music.playTone(784, music.beat(BeatFraction.Breve))
        music.playTone(698, music.beat(BeatFraction.Breve))
        music.playTone(659, music.beat(BeatFraction.Breve))
        music.playTone(622, music.beat(BeatFraction.Breve))
        music.playTone(659, music.beat(BeatFraction.Breve))
        music.playTone(698, music.beat(BeatFraction.Breve))
        music.playTone(784, music.beat(BeatFraction.Breve))
        music.playTone(880, music.beat(BeatFraction.Breve))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    led.stopAnimation()
    music.setVolume(0)
    basic.pause(30000)
    music.setVolume(128)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 999; index++) {
        basic.showString("High a 4 beat")
        basic.pause(1000)
        basic.showString("High g 4 beat")
        basic.pause(1000)
        basic.showString("High f 4 beat")
        basic.pause(1000)
        basic.showString("High e 4 beat")
        basic.pause(1000)
        basic.showString("High d# 4 beat")
        basic.pause(1000)
        basic.showString("High e 4 beat")
        basic.pause(1000)
        basic.showString("High f 4 beat")
        basic.pause(1000)
        basic.showString("High g 4 beat")
        basic.pause(1000)
        basic.showString("reapeat forever")
        basic.pause(1000)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setVolume(0)
})
basic.pause(1000)
basic.showString("IT'S")
basic.pause(100)
basic.showString("MUSIC")
basic.pause(100)
basic.showString("TIME!")
