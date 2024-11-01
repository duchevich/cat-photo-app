import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerCopy}>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
        </footer>
    )
}

export default Footer;