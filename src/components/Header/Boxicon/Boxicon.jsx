import styles from '../styles.module.scss';
import facebook from '@icons/svgs/facebook.svg';
import instagram from '@icons/svgs/instagram.svg';
import youtube from '@icons/svgs/youtobe.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return facebook;
            case 'ins':
                return instagram;
            case 'ytb':
                return youtube;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;