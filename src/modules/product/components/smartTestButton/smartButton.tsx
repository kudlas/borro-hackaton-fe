import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {GetProducts} from "../../actions";
import {showLoading} from "react-redux-loading-bar";

export default function SmartButton() {
    const dispatch = useDispatch();
    const handleGetData = () => {
        dispatch(GetProducts());
        dispatch(showLoading());
    };

    return (<Button variant="contained" color="secondary" onClick={() => handleGetData()}>
                Získej data
            </Button>
    );
}
