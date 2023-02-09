import { Link } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from './index.module.css';

export const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
        <div className={styles.pageImageWrapper}>
          <img className={styles.pageImage} src={require('../../../assets/Frame_46.jpeg')} alt='Сделано в Альфе' />
        </div>
        <div className={styles.pageImageWrapperRight}>
          <Link to='made'></Link>
          <img className={styles.pageImage} src={require('../../../assets/Frame_45.jpeg')} alt='Свой дизайн' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
