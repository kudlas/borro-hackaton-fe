import React from 'react';
import {useSelector} from "react-redux";
import {isLoading} from "../selectors";
import {createStyles, LinearProgress, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        blankLoading: {
            height: "4px"
        },
    }));

function Loading() {

    const classes = useStyles();
    const loading = useSelector(isLoading);

    if(loading)
        return (
            <LinearProgress variant="query" />
        );
    else
        return <div className={classes.blankLoading}></div>;
}

export default Loading;
