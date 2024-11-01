import styles from './heading.module.scss'

const Heading = ({text}: {text: string}) =>{
    return <h2 className={styles.h2}>{text}</h2>
}

export default Heading;