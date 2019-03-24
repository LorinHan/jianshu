import React from 'react';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
// import Detail from './Detail/Detail.js';
import { HashRouter, Route, Link } from 'react-router-dom';
import store from '../store'
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
};
const AsyncDetail = Loadable({
    loader: () => import('./Detail/Detail.js'),
    loading: MyLoadingComponent
});
const AsyncLogin = Loadable({
    loader: () => import('./Login/Login.js'),
    loading: MyLoadingComponent
});

export default class App extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <HashRouter>
                        <div>
                            <Route path='/' component={Header}></Route>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail/:id' exact component={AsyncDetail}></Route>
                            <Route path='/login' exact component={AsyncLogin}></Route>
                        </div>
                    </HashRouter>
                </div>
            </Provider>
        )
    }
}