import { Layout, Typography } from "antd";
import { Header } from "../common/Header/Header";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div>
      <Header title={"Home"} />
      <Layout.Content className={styles.content}>
        <div className={styles.main}>
          <Typography.Title>
            <span className={styles.title}>Minna Genshin</span>
          </Typography.Title>
          <Typography.Paragraph className={styles.paragraph}>
            This web app is a collection of tools for calculating staff for
            Genshin Impact
          </Typography.Paragraph>
        </div>
      </Layout.Content>
    </div>
  );
};
