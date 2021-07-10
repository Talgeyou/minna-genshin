import { Layout, Typography } from 'antd';
import { Header } from '../common/Header/Header';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div>
            <Typography.Title className={styles.title}>
                <span className={styles.title__text}>Minna Genshin</span>
            </Typography.Title>
            <Typography.Paragraph className={styles.paragraph}>
                This web app is a collection of tools for calculating staff for Genshin Impact
            </Typography.Paragraph>
        </div>
    );
};
