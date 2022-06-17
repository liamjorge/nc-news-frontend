const ErrorComponent = (props) => {
    const { errorMessage } = props;
    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorComponent