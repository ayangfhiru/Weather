import { useEffect, useRef } from "react"
const Humidity = (props) => {
    const { weather } = props;
    const ref = useRef(null);

    useEffect(() => {
        const deg = Math.round((weather.main.humidity * 1.8) + 45);
        const myStyle = `rotate(${deg}deg)`
        ref.current.style.transform = myStyle
        console.log();
    }, [])

    return (
        <>
            <h3 className="text-sm">Humidity</h3>
            <div className="relative m-1 flex justify-center">
                <div className="relative overflow-hidden w-40 h-20 flex justify-center items-end">
                    <div ref={ref} className="absolute top-0 left-0 w-40 h-40 rounded-[50%] box-border border-15 border-solid border-slate-500 border-b-green-400 border-r-green-400"></div>
                    <span className="text-xl font-semibold">{Math.round(weather.main.humidity)}%</span>
                </div>
            </div>
        </>
    )
}

export default Humidity