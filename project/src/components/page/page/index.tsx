import { Footer } from '../footer';
import { Header } from '../header';

type TProps = {
  children: React.ReactNode;
}

export const Page = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

