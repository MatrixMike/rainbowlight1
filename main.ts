let LED_Number = 0
let item = neopixel.create(DigitalPin.P1, 14, NeoPixelMode.RGB)
basic.forever(function () {
    LED_Number = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1000,
    0,
    14
    )
    item.clear()
    item.range(0, LED_Number).showRainbow(1, 180)
    item.show()
})
