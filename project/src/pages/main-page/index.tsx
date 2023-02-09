
import { Link } from "@alfalab/core-components/link";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from './index.module.css';

export const MainPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
        <div className={styles.pageImageWrapper}>
          <Link href={'/made'}>
            <img className={styles.pageImage} src={require('../../assets/Frame_46.jpeg')} alt='Сделано в Альфе' />
          </Link>
        </div>
        <div className={styles.pageImageWrapperRight}>

          <img className={styles.pageImage} src={require('../../assets/Frame_45.jpeg')} alt='Свой дизайн' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
