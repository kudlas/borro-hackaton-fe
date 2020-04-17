import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

interface ProductData {
    id: number,
    title: string,
    body: string
}
// https://material-ui.com/components/cards/
export default function ProductCard(data: ProductData) {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {data.title}
                </Typography>

                <Typography>
                    {data.body}
                </Typography>
            </CardContent>
        </Card>
    );
}