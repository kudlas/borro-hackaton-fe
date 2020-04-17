import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {Login} from "../actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                color: 'white'
            },
        },
    }),
);

export default function LoginForm() {
    const classes = useStyles();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const methods = {login: setLogin, password: setPassword};
    const dispatch = useDispatch();

    const handleChange = (e) => {
        methods[e.target.id](e.target.value);
    };

    const handleSubmit = (e) => {
        if(!(login && password)) {
            // dispatch snackbar
            return;
        }
        e.preventDefault();
        dispatch(Login({login, password}));
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label="Login" id="login" type="email" required onChange={handleChange}/>
                <TextField label="Password" id="password" type="password" required onChange={handleChange}/>
                <Button onClick={handleSubmit}>Login</Button>
            </form>
        </div>
    );
}
