import { useEffect, useRef } from "react"

const AirQuality = (props) => {
    const { airPollution } = props;

    const ref = useRef(null);
    const indexQuality = {
        1: "Excellent",
        2: "Good",
        3: "Fair",
        4: "Poor",
        5: "Very Poor"
    }

    useEffect(() => {
        const deg = Math.round((airPollution.list[0].components.no * 1.8) + 45);
        const myStyle = `rotate(${deg}deg)`
        ref.current.style.transform = myStyle
    }, [])

    return (
        <>
            <h3 className="text-sm">Air Quality</h3>
            <div className="relative m-1 flex justify-center">
                <div className="relative overflow-hidden w-40 h-20 flex justify-center items-end">
                    <div ref={ref} className="absolute top-0 left-0 w-40 h-40 rounded-[50%] box-border border-15 border-solid border-slate-500 border-b-blue-400 border-r-blue-400"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold">{Math.round(airPollution.list[0].components.no)}%</span>
                        <span className="text-sm">{indexQuality[airPollution.list[0].main.aqi]}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirQuality