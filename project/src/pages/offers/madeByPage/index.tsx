import { Typography } from "@alfalab/core-components/typography";
import { Link } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from './index.module.css';

const renderCard = (card: {name: string}) => {
    <Typography.Text view='primary-medium'>
                    <Link rel='noopener' to={`/item${card.name}`}>
            <img className={styles.pageImage} src={require('../../../assets/Frame_46.jpeg')} alt='Сделано в Альфе' />

                Рюкзак для умных и свободных
                4999 руб
            </Link>
    </Typography.Text>
}

export const MadeByPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageWrapper}>
      <Typography.Title tag='h1' color="accent" weight="bold">Сделано в А</Typography.Title>
      <Typography.Title tag='h1' view='medium' color="primary" weight="bold">
          Хотим каждую из этих вещей
        </Typography.Title>
        <Typography.Title tag='h1' view='medium' color="primary" weight="bold">
          Себе, родным и друзьям
        </Typography.Title>
      </div>
      <Footer />
    </div>
  );
}
