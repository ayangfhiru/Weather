import { useRef } from "react"
import { detailPercent } from "../hooks/todayDetailsHook";
import { twMerge } from "tailwind-merge";

const SemicircularBars = (props) => {
    const { children, data, className } = props;
    const ref = useRef(null)
    const percent = detailPercent(data, ref)

    return (
        <div className="relative overflow-hidden w-full h-[66px] sm:h-[75px] md:h-20 flex justify-center items-end">
            <span ref={ref} className={twMerge('absolute top-0 w-[127px] h-[127px] sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-[50%] box-border border-15 border-solid border-slate-500 border-b-gray-400 border-r-gray-400', className)}></span>
            <div className="flex flex-col items-center">
                <span className="text-xl font-semibold">{percent}%</span>
                {children}
            </div>
        </div>
    )
}

export default SemicircularBars