import styles from './styles.module.scss';

import MyHeader from '@components/Header/Header';
import Banner from '@components/Header/Banner/Banner';
function HomePage() {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <MyHeader />
        <Banner />
      </div>
    </>
  );
}

export default HomePage;
