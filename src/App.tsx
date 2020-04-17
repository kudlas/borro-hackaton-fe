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

            <ReactReduxFirebaseProvider {...rrfProps}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

                    <TestButton/>
                    <SmartButton/>
                    <ProductList/>

                    <LoginForm></LoginForm>

                </header>
            </div>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
