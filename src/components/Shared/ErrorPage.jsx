import { useLocation } from "react-router-dom"

const ErrorPage = () => {
    const {state} = useLocation()
    console.log(state)
    return (
        <div>
            <p>Page not found </p>
            {state && <p>{state}</p>}
        </div>
    )
}

export default ErrorPage