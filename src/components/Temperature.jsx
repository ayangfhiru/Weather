import { useRef } from "react"
import { temperatureHook } from "../hooks/temperatureHook";

const Temperature = (props) => {
    const { tempToParent } = props;
    const ref = useRef(null)
    const temp = temperatureHook(tempToParent, ref)

    return (
        <label className="absolute top-3 left-7 inline-flex items-center cursor-pointer md:relative md:top-0 md:left-0">
            <input type="checkbox" value="" onClick={temp} className="sr-only peer" />
            <div ref={ref} className="w-16 h-7 rounded-full bg-white/20 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:flex after:justify-center after:items-center after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-7 after:transition-all after:duration-300"></div>
            <span className="hidden ml-1 text-sm font-medium text-white md:inline">Temperature</span>
        </label>
    )
}

export default Temperature