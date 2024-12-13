import BoxIcon from './Boxicon/Boxicon';
import Menu from './Menu/menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import logo from '@icons/images/Logo-retina.png';
function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox,container} =
    styles;

  return (
   <div className={container}>
     <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.tpye} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '153px',
            height: '53px',
          }}
        />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.tpye} href={item.href} />;
          })}
        </div>
      </div>
    </div>
   </div>
  );
}

export default MyHeader;
