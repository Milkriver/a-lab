import { Footer } from '../footer';
import { Header } from '../header';
import styles from './index.module.css';

type TProps = {
  children: React.ReactNode;
  isPageMain?: boolean;
}

export const Page = ({ children, isPageMain }: TProps) => {
  return (
    <>
      <Header />
      <div className={isPageMain ? '' : styles.container}>  {children}</div>
      <Footer isPageMain={isPageMain} />
    </>
  );
}

