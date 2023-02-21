import { Footer } from '../footer';
import { Header } from '../header';

type TProps = {
  children: React.ReactNode;
  isPageMain?: boolean;
}

export const Page = ({ children, isPageMain }: TProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer isPageMain={isPageMain} />
    </>
  );
}

