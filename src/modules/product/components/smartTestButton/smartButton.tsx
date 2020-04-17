import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {GetProducts} from "../../actions";

export default function SmartButton() {
    const dispatch = useDispatch();
    const handleGetData = () => dispatch(GetProducts());

    return (<Button variant="contained" color="secondary" onClick={() => handleGetData()}>
                Získej data
            </Button>
    );
}