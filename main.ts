THK.thk_kyouzai_setup()
basic.forever(function () {
    THK.thk_servo(THK.Servos.Motor1, 5)
    THK.thk_servo(THK.Servos.Motor2, 5)
    if (THK.is_getDigitalSensor(THK.SensorS.P8)) {
        basic.pause(2000)
        THK.thk_servo(THK.Servos.Motor1, -45)
        basic.pause(2000)
    }
})
