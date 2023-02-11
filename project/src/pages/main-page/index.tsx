
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from './index.module.css';

export const MainPage = () => {
  const navigate = useNavigate();
  const onAlfaMadePageClick = () => navigate('/made');
  const onDesignClick = () => navigate('/design');
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
        <div className={styles.pageImageWrapper} onClick={onAlfaMadePageClick}>
          <img className={styles.pageImage} src={require('../../assets/Frame_46.jpeg')} alt='Сделано в Альфе' />
        </div>
        <div className={styles.pageImageWrapperRight} onClick={onDesignClick}>
          <img className={styles.pageImage} src={require('../../assets/Frame_45.jpeg')} alt='Свой дизайн' />
        </div>
      </div>
      <Footer isPageMain={true} />
    </div>
  );
}
