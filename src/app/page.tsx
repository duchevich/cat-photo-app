import styles from "./page.module.scss";
import Footer from "@/app/components/Footer";
import Main from '@/app/components/Main';

export default function Home() {
  return (
    <div className={styles.page}>
        <Main />
        <Footer />
    </div>
  );
}
