import React from 'react';
import TestButton from "../../product/components/testButton/button";
import TestButtonLoading from "../../product/components/testButton/button-loading";
import ButtonRedirect from "../../product/components/testButton/button-redirect";
import SmartButton from "../../product/components/smartTestButton/smartButton";
import ProductList from "../../product/components/ProductList";
import {LoadingBar} from "react-redux-loading-bar";

const HomePage = () => {
    return (
        <div>
            <p>Homepage</p>

            <TestButton/>

            <TestButtonLoading></TestButtonLoading>

            <ButtonRedirect/>

            <SmartButton/>
            <ProductList/>

            <LoadingBar />
        </div>
    );
};

export default HomePage;
