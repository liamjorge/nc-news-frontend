import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
    return (
        <div className={styles['spinner-container']}>
            <span className={styles['loading-spinner']} />
        </div>
    )
}

export default LoadingSpinner