import Image from 'next/image'
import styles from './list.module.scss'
import {JSX} from "react";

interface ListProps {
    title: string
    list: string[]
    src: string
    alt: string
    caption: JSX.Element
}

const List = (props: ListProps) => {
    return (
        <div  className={styles.list}>
            <h3 className={styles.h3}>{props.title}</h3>
            <ul className={styles.ul}>
                {props.list.map((item, index) => (
                    <li  key={index}>{item}</li>
                ))}
            </ul>
            <figure>
                <Image
                    className={styles.img}
                    src={props.src}
                    alt={props.alt}
                    width={500}
                    height={300}
                />
                <figcaption>{props.caption}</figcaption>
            </figure>
        </div>
    )
}

export default List;