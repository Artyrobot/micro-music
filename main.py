def on_button_pressed_a():
    for index in range(999):
        for index2 in range(999):
            music.play_tone(880, music.beat(BeatFraction.BREVE))
            music.play_tone(784, music.beat(BeatFraction.BREVE))
            music.play_tone(698, music.beat(BeatFraction.BREVE))
            music.play_tone(659, music.beat(BeatFraction.BREVE))
            music.play_tone(622, music.beat(BeatFraction.BREVE))
            music.play_tone(659, music.beat(BeatFraction.BREVE))
            music.play_tone(698, music.beat(BeatFraction.BREVE))
            music.play_tone(784, music.beat(BeatFraction.BREVE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for index3 in range(999):
        music.play_tone(880, music.beat(BeatFraction.DOUBLE))
        music.play_tone(784, music.beat(BeatFraction.DOUBLE))
        music.play_tone(698, music.beat(BeatFraction.DOUBLE))
        music.play_tone(659, music.beat(BeatFraction.DOUBLE))
        music.play_tone(622, music.beat(BeatFraction.DOUBLE))
        music.play_tone(659, music.beat(BeatFraction.DOUBLE))
        music.play_tone(698, music.beat(BeatFraction.DOUBLE))
        music.play_tone(784, music.beat(BeatFraction.DOUBLE))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for index4 in range(999):
        music.play_tone(784, music.beat(BeatFraction.BREVE))
        music.play_tone(698, music.beat(BeatFraction.BREVE))
        music.play_tone(659, music.beat(BeatFraction.BREVE))
        music.play_tone(622, music.beat(BeatFraction.BREVE))
        music.play_tone(659, music.beat(BeatFraction.BREVE))
        music.play_tone(698, music.beat(BeatFraction.BREVE))
        music.play_tone(784, music.beat(BeatFraction.BREVE))
        music.play_tone(880, music.beat(BeatFraction.BREVE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    for index5 in range(999):
        basic.show_string("High a 4 beat")
        basic.pause(1000)
        basic.show_string("High g 4 beat")
        basic.pause(1000)
        basic.show_string("High f 4 beat")
        basic.pause(1000)
        basic.show_string("High e 4 beat")
        basic.pause(1000)
        basic.show_string("High d# 4 beat")
        basic.pause(1000)
        basic.show_string("High e 4 beat")
        basic.pause(1000)
        basic.show_string("High f 4 beat")
        basic.pause(1000)
        basic.show_string("High g 4 beat")
        basic.pause(1000)
        basic.show_string("reapeat forever")
        basic.pause(1000)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    led.stop_animation()
    music.set_volume(0)
    basic.pause(30000)
    music.set_volume(200)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_logo_pressed():
    music.set_volume(0)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

basic.pause(1000)
basic.show_string("IT'S")
basic.pause(100)
basic.show_string("MUSIC")
basic.pause(100)
basic.show_string("TIME!")