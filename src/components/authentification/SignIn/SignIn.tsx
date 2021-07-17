import styles from './SignIn.module.scss';
import { Button, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../../app/hooks';
import { signIn } from '../../../util/firebase';
import { Redirect } from 'react-router-dom';

interface Props {}

export const SignIn = (props: Props) => {
    const { currentUser } = useAuth(null);

    const onFinish = (values: any) => {
        signIn(values.email, values.password);
    };

    if (currentUser) {
        return <Redirect to={'/'} />;
    }

    return (
        <Form onFinish={onFinish}>
            <Typography.Title className={styles.title}>Sign In</Typography.Title>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input type={'email'} placeholder={'Email'} prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input type={'password'} placeholder={'Password'} prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item className={styles.button}>
                <Button type={'primary'} htmlType="submit">
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    );
};
