import { useEffect, useState } from "react"

export const temperatureHook = (tempToParent, ref) => {
    const [temp, setTemp] = useState(false);

    const handleTemp = () => {
        setTemp(!temp)
        tempToParent(!temp)
    }

    useEffect(() => {
        tempToParent(temp)
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

    return handleTemp
}