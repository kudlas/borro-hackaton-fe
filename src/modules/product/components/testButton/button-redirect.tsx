import React from 'react';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

const ButtonRedirect = () => {

    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(push('/product/detail'))}>Redirect me</Button>
    );
};

export default ButtonRedirect;
