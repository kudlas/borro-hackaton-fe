import React from 'react';

import {useSelector} from "react-redux";
import {CircularProgress, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import ProductCard from "./card";
import {getProductsSelector, showLoading} from "../selectors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '800px',
            flexWrap: 'wrap'
        },
        item: {
            flexGrow: 1,
            width: '25%',
            height: '250px',
            margin: '5px'
        }
    }),
);


export default function ProductList() {
    const classes = useStyles();
    const products = useSelector(getProductsSelector);

    return (!!products.length) ?
        (<div className={classes.root}> {products.map((i) => {
            return <div className={classes.item} key={i.id}><ProductCard id={i.id} title={i.title} body={i.body}></ProductCard></div>
        })} </div>) : (<div>nou data</div>);
}
