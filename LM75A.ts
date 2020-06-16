/**
* makecode I2C LM75A Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=20 color=#0855AA icon="\uf043" block="心点温度传感器"
namespace LM75A{
    let LM75A_BASE_ADDRESS = 0x48;
    let LM75A_DEGREES_RESOLUTION = 0.125;

    /**
     * 获取温度值
     * @param none
     * @param return tempature
     */
    //% blockId="LM75A_getTemperatureInDegrees" block="获取温度值"
    //% weight=70 blockGap=8
    //% parts=LM75A trackArgs=0
    export function getTemperatureInDegrees():number{
        let real_value = 1000.00;
        pins.i2cWriteNumber(LM75A_BASE_ADDRESS, 0x0, NumberFormat.UInt8LE, false)
        let result = pins.i2cReadNumber(LM75A_BASE_ADDRESS, NumberFormat.UInt16LE, false)
        let lowByte = (result>>8)&0xFF
        let highByte = result&0xFF
        let refactored_value = highByte << 8 | lowByte;
        refactored_value = refactored_value >> 5;
        if (refactored_value & 0x0400){
            refactored_value |= 0xF800;
            refactored_value = ~refactored_value + 1;
            real_value = refactored_value * (-1) * LM75A_DEGREES_RESOLUTION;
        } else{
            real_value = refactored_value * LM75A_DEGREES_RESOLUTION
        }
        return real_value.toFixed(1);
    }
}
