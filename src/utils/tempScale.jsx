export const tempScale = (temp, data) => {
    let temperature;
    if (temp == true) {
        temperature = ((data - 273.15) * 9 / 5 + 32).toFixed(2)
    } else {
        temperature = (data - 273.15).toFixed(2)
    }
    return temperature;
}