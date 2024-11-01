import styles from "./page.module.scss";
import Footer from "@/app/templates/Footer";
import Main from '@/app/templates/Main';

export default function Home() {
  return (
    <div className={styles.page}>
        <Main />
        <Footer />
    </div>
  );
}
