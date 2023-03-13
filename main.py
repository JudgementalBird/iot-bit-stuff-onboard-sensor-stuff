ESP8266_IoT.init_wifi(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)

def on_forever():
    pass
basic.forever(on_forever)
