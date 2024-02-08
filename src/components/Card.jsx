const Card = (props) => {
    const { children } = props;
    
    return (
        <div className="bg-gray-300 w-82 h-40 box-border py-4 px-7 rounded-lg">
            {children}
        </div>
    )
}

export default Card