import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import DetailPage from "../product/pages/detail";
import ListPage from "../product/pages/list";
import HomePage from "../home/pages/home";

const routeList = [
    {url: "/", exact: true, component: (<HomePage/>)},
    {url: "/product/detail", component: (<DetailPage/>)},
    {url: "/product/listing", component: (<ListPage/>)},
];

const Routes = () => {
    return (
        <Switch>
            {routeList.map( (data, i) =>
                <Route key={i} path={data.url} {...('exact' in data) ? {exact:true} : {}}>
                    {data.component}
                </Route>
            )}

        </Switch>
    );
};

export default Routes;
