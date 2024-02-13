import { useState, useEffect, useRef } from "react"

const Temperature = (props) => {
    const { sendDataToParent } = props;
    const [temp, setTemp] = useState(false)
    const ref = useRef(null)

    const handleTemp = () => {
        setTemp(!temp)
        sendDataToParent(!temp)
    }

    useEffect(() => {
        sendDataToParent(temp)
        ref.current.classList.add("after:content-['C']")
    }, [])

    useEffect(() => {
        if (temp) {
            ref.current.classList.add("after:content-['F']")
            ref.current.classList.remove("after:content-['C']")
        } else {
            ref.current.classList.add("after:content-['C']")
            ref.current.classList.remove("after:content-['F']")
        }
    }, [temp])

    return (
        <label className="absolute top-3 left-7 inline-flex items-center cursor-pointer md:relative md:top-0 md:left-0">
            <input type="checkbox" value="" onClick={handleTemp} className="sr-only peer" />
            <div ref={ref} className="w-16 h-7 rounded-full bg-white/20 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:flex after:justify-center after:items-center after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-7 after:transition-all after:duration-300"></div>
            <span className="hidden ml-1 text-sm font-medium text-white md:inline">Temperature</span>
        </label>
    )
}

export default Temperature