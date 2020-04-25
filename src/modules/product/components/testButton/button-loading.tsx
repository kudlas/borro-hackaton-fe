import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "react-redux-loading-bar";

// https://reactjs.org/docs/hooks-intro.html
export default function TestButtonLoading() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const click = () => {

        if(loading) {
            dispatch(showLoading());
        } else {
            dispatch(hideLoading());
        }

        setLoading(!loading);
    };

    return (<Button variant="contained" color="primary" onClick={click}>
                loading: {loading ? "jo" : "ne"}
            </Button>
    );
}
