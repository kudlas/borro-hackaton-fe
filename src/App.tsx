import React from 'react';
import {Provider} from "react-redux";
import firebase from "firebase/app";
import 'firebase/auth';

import store from "./store";
import logo from './logo.svg';
import './App.css';
import TestButton from "./modules/product/components/testButton/button";
import SmartButton from "./modules/product/components/smartTestButton/smartButton";
import ProductList from "./modules/product/components/ProductList";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {fbConfig, rrfConfig} from "./Config";
import LoginForm from "./modules/login/components/loginForm";
import TestButtonLoading from "./modules/product/components/testButton/button-loading";
import {LoadingBar} from "react-redux-loading-bar";
import Loading from "./modules/loading/components/loading";
import ButtonRedirect from "./modules/product/components/testButton/button-redirect";
import {ConnectedRouter} from "connected-react-router";
import history from "./modules/router/history";


firebase.initializeApp(fbConfig);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
            <ReactReduxFirebaseProvider {...rrfProps}>
            <div className="App">
                <Loading />


                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                    </p>

                    <TestButton/>

                    <TestButtonLoading></TestButtonLoading>

                    <ButtonRedirect/>

                    <SmartButton/>
                    <ProductList/>

                    <LoadingBar />

                </header>
            </div>
            </ReactReduxFirebaseProvider>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
