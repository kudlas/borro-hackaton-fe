import {getFirebase, useFirebase} from "react-redux-firebase";
import {Creds} from "./types";
import app from "firebase";


export class LoginService {
     public static async postLogin(creds: Creds) {
            const firebase = getFirebase();
            console.log(creds);

            // return await firebase.auth().signOut();

             return firebase.auth().signInWithPopup( new app.auth.GoogleAuthProvider() );

            //return await firebase.auth().signInWithEmailAndPassword(creds.login, creds.password);
    }
};