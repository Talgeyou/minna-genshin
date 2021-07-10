import styles from "./Footer.module.scss";
import { Layout } from "antd";
import React from "react";

export const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      Minna Genshin ©2021 Created by Talge
    </Layout.Footer>
  );
};
