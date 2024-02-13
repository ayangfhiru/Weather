const Sun = (props) => {
    const { weather } = props

    const convertDate = (epoch) => {
        const date = new Date(epoch * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const formatDate = hours >= 12 ? 'PM' : 'AM'
        hours = (hours % 12) || 12
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${formatDate}`;
    }

    const convertSun = (data) => {
        const sun = convertDate(data)
        if (sun != null) return sun
    }

    return (
        <>
            <h3 className="text-sm">Sunrise & Sunset</h3>
            <div className="flex flex-col justify-center px-0 md:px-4">
                <span className="flex items-center gap-3">
                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Sunrise" className="w-14" />
                    <p className="text-xl font-semibold">{convertSun(weather.sys.sunrise)}</p>
                </span>
                <span className="flex items-center gap-3">
                    <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="Sunrise" className="w-14" />
                    <p className="text-xl font-semibold">{convertSun(weather.sys.sunset)}</p>
                </span>
            </div>
        </>
    )
}

export default Sun