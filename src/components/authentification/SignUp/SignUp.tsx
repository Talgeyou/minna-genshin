import styles from "./SignUp.module.scss";
import { Button, Form, Input, Layout, Typography } from "antd";
import { Header } from "../../common/Header/Header";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth, useInput } from "../../../app/hooks";
import { signUp } from "../../../util/firebase";
import { Redirect } from "react-router-dom";

interface Props {}

export const SignUp = (props: Props) => {
  const { currentUser } = useAuth(null);
  const email = useInput("");
  const password = useInput("");

  const handleSignUpButtonClick = () => {
    signUp(email.value, password.value);
  };

  if (currentUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <Header title={"Sign Up"} />
      <Layout.Content className={styles.content}>
        <div className={styles.main}>
          <Form>
            <Typography.Title className={styles.title}>
              Sign Up
            </Typography.Title>
            <Form.Item>
              <Input
                type={"email"}
                placeholder={"Email"}
                prefix={<UserOutlined />}
                {...email}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type={"password"}
                placeholder={"Password"}
                prefix={<LockOutlined />}
                {...password}
              />
            </Form.Item>
            <Form.Item className={styles.button}>
              <Button type={"primary"} onClick={handleSignUpButtonClick}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout.Content>
    </div>
  );
};
