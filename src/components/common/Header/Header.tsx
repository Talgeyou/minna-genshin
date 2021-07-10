import styles from "./Header.module.scss";
import { Button, Layout } from "antd";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../util/firebase";
import { selectCurrentUser } from "../../../app/authSlice";
import { useSelector } from "react-redux";

interface Props {
  title?: string;
}

export const Header = ({ title }: Props) => {
  const currentUser = useSelector(selectCurrentUser);

  const handleSignOutButtonClick = () => {
    signOut();
  };

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.account}>
        {currentUser ? (
          <Button danger type={"primary"} onClick={handleSignOutButtonClick}>
            Sign Out
          </Button>
        ) : (
          <div className={styles.buttons}>
            <NavLink to={"/sign-in"}>
              <Button>Sign In</Button>
            </NavLink>
            <NavLink to={"/sign-up"}>
              <Button type={"primary"}>Sign Up</Button>
            </NavLink>
          </div>
        )}
      </div>
    </Layout.Header>
  );
};
