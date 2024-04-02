import SemicircularBars from "./semicircularBars"

const Bar = (props) => {
    const { name, data, status, className } = props
    return (
        <>
            <h3 className="text-sm">{name}</h3>
            <div className="relative m-1 flex justify-center">
                <SemicircularBars data={data} className={className} >
                    {
                        status ?
                            <span className="text-sm">{status}</span>
                            : ""
                    }
                </SemicircularBars>
            </div>
        </>
    )
}

export default Bar