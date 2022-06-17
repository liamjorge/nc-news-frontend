import styles from "./Header.module.css"

const Header = () => {
    return (
        <nav>
            <h1 className={styles.header}>Daily tech news.</h1>
        </nav>
    )
}

export default Header