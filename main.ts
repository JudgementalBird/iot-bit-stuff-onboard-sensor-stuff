basic.showNumber(1)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.showNumber(2)
ESP8266_IoT.connectWifi("Deez", "willwood")
basic.showNumber(3)
ESP8266_IoT.connectThingSpeak()
basic.showNumber(4)
ESP8266_IoT.setData(
"VRKF9D4KWMU0X6MH",
input.temperature(),
input.soundLevel(),
input.lightLevel(),
input.acceleration(Dimension.Strength)
)
basic.showNumber(5)
ESP8266_IoT.uploadData()
basic.showNumber(6)
if (ESP8266_IoT.wifiState(true)) {
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        # . . . #
        . . # . .
        `)
} else {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
basic.forever(function () {
    ESP8266_IoT.setData(
    "VRKF9D4KWMU0X6MH",
    input.temperature(),
    input.soundLevel(),
    input.lightLevel(),
    input.acceleration(Dimension.Strength)
    )
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `)
    ESP8266_IoT.uploadData()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
