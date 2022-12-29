input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (led_status == 0) {
        led_status = 1
    } else {
        led_status = 0
    }
})
let mic = 0
let led_status = 0
let strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
led_status = 1
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
for (let x = 0; x <= -4; x++) {
    for (let y = 0; y <= -4; y++) {
        led.unplot(Math.abs(x), Math.abs(y))
        basic.pause(100)
    }
}
basic.forever(function () {
    mic = input.soundLevel()
})
basic.forever(function () {
    basic.showString("" + (mic))
})
control.inBackground(function () {
    while (led_status == 1) {
        for (let index = 0; index <= mic / 255 * 26; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        }
        strip.show()
        basic.pause(100)
        strip.clear()
    }
})
