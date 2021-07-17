import styles from './SignUp.module.scss';
import { Button, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../../app/hooks';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../util/firebase';

export const SignUp = () => {
    const { currentUser } = useAuth(null);

    const onFinish = (values: any) => {
        signUp(values.email, values.password);
    };

    if (currentUser) {
        return <Redirect to={'/'} />;
    }

    return (
        <Form onFinish={onFinish}>
            <Typography.Title className={styles.title}>Sign Up</Typography.Title>
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
            <Form.Item
                name="confirmPassword"
                rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
                <Input
                    type={'password'}
                    placeholder={'Confirm Password'}
                    prefix={<LockOutlined />}
                />
            </Form.Item>
            <Form.Item className={styles.button}>
                <Button type={'primary'} htmlType="submit">
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    );
};
