import Image from 'next/image'
import styles from './main.module.scss'
import Heading from "@/app/components/Heading";
import Form from "@/app/components/Form";
import List from "@/app/components/List";

export default function main() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>CatPhotoApp</h1>
            <section className={styles.section}>
                <Heading text='Cat Photos' />
                <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute
                    cats</a> online!</p>
                <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
                <a href="https://freecatphotoapp.com">
                    <Image
                        className={styles.img}
                        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                        alt="A cute orange cat lying on its back."
                        width={500}
                        height={300}
                    />
                </a>
            </section>
            <section className={styles.section}>
                <Heading text='Cat Lists' />
                <List
                    title='Things cats love:'
                    list={['cat nip', 'laser pointers', 'lasagna']}
                    src='https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
                    alt="A slice of lasagna on a plate."
                    caption={<>Cats <em>love</em> lasagna.</>}
                />
                <List
                    title='Top 3 things cats hate:'
                    list={['flea treatment', 'thunder', 'other cats']}
                    src='https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
                    alt="Five cats looking around a field."
                    caption={<>Cats <strong>hate</strong> other cats.</>}
                />

            </section>
            <section className={styles.section}>
                <Heading text='Cat Form' />
                <Form />
            </section>
        </main>
    )
}