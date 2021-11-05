input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.playTone(880, music.beat(BeatFraction.Breve))
    music.playTone(784, music.beat(BeatFraction.Breve))
    music.playTone(698, music.beat(BeatFraction.Breve))
    music.playTone(659, music.beat(BeatFraction.Breve))
    music.playTone(622, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(131, music.beat(BeatFraction.Breve))
})
