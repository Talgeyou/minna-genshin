import styles from './App.module.scss';
import { Layout } from 'antd';
import { SideBar } from './components/common/SideBar/SideBar';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Footer } from './components/common/Footer/Footer';
import { DamageValueCalculator } from './components/DamageValueCalculator/DamageValueCalculator';
import { SignUp } from './components/authentification/SignUp/SignUp';
import { SignIn } from './components/authentification/SignIn/SignIn';
import { useAuth } from './app/hooks';
import { useEffect } from 'react';
import { MyCharacters } from './components/MyCharacters/MyCharacters';
import { useDispatch } from 'react-redux';
import { setUser } from './app/authSlice';
import firebase from 'firebase';
import { PageLayout } from './components/common/PageLayout/PageLayout';

function App() {
    const pages = [
        { id: 0, name: 'Home', link: '/' },
        { id: 1, name: 'DV Calculator', link: '/dv' },
        { id: 2, name: 'My Characters', link: '/my-characters' },
    ];

    const { currentUser } = useAuth(null as firebase.User | null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(currentUser));
    }, [currentUser, dispatch]);

    return (
        <PageLayout pages={pages}>
            <Switch>
                <Route path={'/my-characters'} component={MyCharacters} />
                <Route exact path={'/dv'}>
                    <DamageValueCalculator />
                </Route>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route exact path={'/sign-in'}>
                    <SignIn />
                </Route>
                <Route exact path={'/sign-up'}>
                    <SignUp />
                </Route>
            </Switch>
        </PageLayout>
    );
}

export default App;
