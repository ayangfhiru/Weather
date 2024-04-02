const Card = (props) => {
    const { children } = props;

    return (
        <div className="bg-gray-300 box-border py-4 px-3 md:px-7 rounded-lg w-40 h-40 sm:w-44 md:w-64 lg:w-80">
            {children}
        </div>
    )
}

export default Card