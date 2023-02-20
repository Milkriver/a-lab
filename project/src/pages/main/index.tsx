
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/page";
import styles from './index.module.css';

export const Main = () => {
  const navigate = useNavigate();
  const onAlfaMadePageClick = () => navigate('/made');
  const onDesignClick = () => navigate('/design');
  return (
    <Page>
      <div className={styles.pageWrapper}>
        <div className={styles.pageImageWrapper} onClick={onAlfaMadePageClick}>
          <img className={styles.pageImage} src={require('../../assets/Frame_46.jpeg')} alt='Сделано в Альфе' />
        </div>
        <div className={styles.pageImageWrapperRight} onClick={onDesignClick}>
          <img className={styles.pageImage} src={require('../../assets/Frame_45.jpeg')} alt='Свой дизайн' />
        </div>
      </div>
    </Page>
  );
}
