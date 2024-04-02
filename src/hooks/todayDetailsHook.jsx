import { useEffect } from "react";

export const detailPercent = (data, ref) => {

    useEffect(() => {
        const deg = Math.round((data * 1.8) + 45);
        const myStyle = `rotate(${deg}deg)`
        ref.current.style.transform = myStyle
    }, [])

    return data
}