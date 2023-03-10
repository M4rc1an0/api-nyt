
export const Row = ({active = false}) => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="9" height="9" fill={active ? "#5062F0" : "#D0D3E2"} />
            <rect y="10" width="9" height="9" fill={active ? "#5062F0" : "#D0D3E2"} />
            <rect x="10" y="10" width="9" height="9" fill={active ? "#5062F0" : "#D0D3E2"} />
            <rect x="10" width="9" height="9" fill={active ? "#5062F0" : "#D0D3E2"} />
        </svg>
    )
}
