import styles from "./Header.module.css"

const Header = () => {
    return (
        <nav>
            <h1 className={styles.header}>NC News</h1>
            <h2>Tagline will go here</h2>
        </nav>
    )
}

export default Header