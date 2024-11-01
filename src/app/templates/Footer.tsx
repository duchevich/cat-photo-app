import styles from './footer.module.scss'

export default function Footer() {
    console.log(styles)
    return (
        <footer className={styles.footer}>
            <p className={styles.footerCopy}>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
        </footer>
    )
}