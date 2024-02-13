const Card = (props) => {
    const { children } = props;
    
    return (
        <div className="bg-gray-300 w-48 h-40 box-border py-4 px-3 rounded-lg md:w-82 md:px-7">
            {children}
        </div>
    )
}

export default Card