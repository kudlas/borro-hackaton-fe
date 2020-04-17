import React from 'react';

import {useSelector} from "react-redux";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import ProductCard from "./card";
import {getProductsSelector} from "../selectors";

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
    const products = useSelector(getProductsSelector)

    return (products) ?
        (<div className={classes.root}> {products.map((i) => {
            return <div className={classes.item} key={i.id}><ProductCard id={i.id} title={i.title} body={i.body}></ProductCard></div>
        })} </div>) :
        <div color={"white"}>Žádná data</div>;
}