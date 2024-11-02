import styles from "./error.module.scss";

const Error = ({ message = '' } : { message: string | undefined}) => {
  return (
      <div className={styles.error}>{ message }</div>
  )
}

export default Error;