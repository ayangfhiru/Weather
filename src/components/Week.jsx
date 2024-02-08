import { useEffect, useState } from "react";

const Week = (props) => {
    const { temp, forcast } = props;
    const [date, setDate] = useState({});

    const dateToEpoch = () => {
        const dateStart = new Date();
        const epochStart = (dateStart.getTime() / 1000).toFixed();
        const epochEnd = dateStart.setHours(dateStart.getHours() + 19);
        const start = parseInt(epochStart);
        const end = Math.floor(epochEnd / 1000);
        setDate({ start, end });
    }

    const convertTime = (epoch) => {
        const date = new Date(epoch * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const formatDate = hours >= 12 ? 'PM' : 'AM'
        hours = (hours % 12) || 12
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${formatDate}`;
    }

    const convertDay = (epoch) =>{
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const date = new Date(epoch * 1000);
        const day = date.getDay();
        return days[day]
    }

    const setTemperature = (data) => {
        let temperature;
        if (temp == true) {
            temperature = ((data - 273.15) * 9 / 5 + 32).toFixed(2)
        } else {
            temperature = (data - 273.15).toFixed(2)
        }
        return temperature;
    }

    useEffect(() => {
        dateToEpoch()
    }, [])

    return (
        <div className="flex gap-2">
            {
                forcast.list.filter((data) => data.dt >= date.start && data.dt <= date.end)
                    .map((data, i) => {
                        return (
                            <div key={i} className="bg-gray-300 w-40 h-48 box-border p-4 flex flex-col items-center justify-between rounded-lg">
                                <p className="font-semibold">{convertDay(data.dt)}</p>
                                <p className="text-sm">{convertTime(data.dt)}</p>
                                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Sunrise" className="backdrop-blur-sm mx-auto w-4/5 bg-gray-500/50 rounded-3xl" />
                                <p className="text-sm">{setTemperature(data.main.temp)}{temp ? <span>&#8457;</span> : <span>&#8451;</span>}</p>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Week