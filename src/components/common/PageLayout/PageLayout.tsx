import styles from './PageLayout.module.scss';
import { Layout } from 'antd';
import React from 'react';
import { SideBar } from '../SideBar/SideBar';
import { Header } from '../Header/Header';

type Page = {
    id: number;
    name: string;
    link?: string;
    pages?: Array<Page>;
};

interface Props {
    children?: React.ReactNode;
    pages?: Array<Page>;
}

export const PageLayout = ({ children, pages }: Props) => {
    return (
        <Layout className={styles.page}>
            <SideBar items={pages} />
            <Layout>
                <Header title={'My Characters'} />
                <Layout.Content className={styles.content}>
                    <div className={styles.main}>{children}</div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
