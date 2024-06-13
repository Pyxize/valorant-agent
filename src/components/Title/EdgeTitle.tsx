type EdgeTitleProps = {
    title: string,
}


export const EdgeTitle = ({title}: EdgeTitleProps) => {
    return(
        <div className="flex items-center justify-center mb-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H8V8H0V0Z" fill="#FF4654"/>
            </svg>
            <h3 className="uppercase font-medium text-white ml-2">{title}</h3>
        </div>
    )
}