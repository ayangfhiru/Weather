const Wind = (props) => {
    const { weather } = props;

    const windDirection = (data) => {
        let windAngel = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const deg = data + 22.5;
        let res;
        if (deg < 0) {
            res = 360 - Math.abs(deg) % 360;
        } else {
            res = deg % 360;
        }
        const angel = parseInt(res / 45);
        return windAngel[angel];
    }

    return (
        <>
            <h3 className="text-sm">Wind Status</h3>
            <div className="flex flex-col mt-3 gap-y-5">
                <h1 className="text-5xl font-semibold">{weather.wind.speed}<span className="text-base align-bottom">m/s</span></h1>
                <span className="text-sm">{windDirection(weather.wind.deg)}</span>
            </div>
        </>
    )
}

export default Wind