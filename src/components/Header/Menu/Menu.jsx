import styles from '../styles.module.scss';

function Menu({content, href}) {
    const { menu, subMenu } = styles;
    return <div className={menu}>{content}</div>;
}

export default Menu;