const Visibility = (props) => {
    const { weather } = props;
    return (
        <>
            <h3 className="text-sm">Visibility</h3>
            <div className="flex flex-col mt-3 gap-y-5">
                <h1 className="text-5xl font-semibold">{(weather.visibility / 1000).toFixed(1)}<span className="text-base align-bottom">km</span></h1>
                <span className="text-sm"></span>
            </div>
        </>
    )
}

export default Visibility