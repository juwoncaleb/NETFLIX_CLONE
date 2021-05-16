import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'
import App from './app';
import Globalstyles from "../src/global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";


render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}> 
            <App /> ,
            <Globalstyles />
        </FirebaseContext.Provider>


    </React.StrictMode>,
    document.getElementById('root')
);

