import styles from "./SideBar.module.scss";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";

type Item = {
  id: number;
  name: string;
  link?: string;
  items?: Array<Item>;
};

interface Props {
  items?: Array<Item>;
}

export const SideBar = ({ items }: Props) => {
  return (
    <Layout.Sider theme="dark">
      <Link to={"/"}>
        <div className={styles.logo}>
          <div className={styles.logo__text}>Minna Genshin</div>
        </div>
      </Link>
      <Menu defaultSelectedKeys={["0"]} theme="dark">
        {items?.map((i: Item) => (
          <Menu.Item key={i.name}>
            <CaretRightOutlined />{" "}
            {i.link ? <Link to={i.link}>{i.name}</Link> : i.name}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};
