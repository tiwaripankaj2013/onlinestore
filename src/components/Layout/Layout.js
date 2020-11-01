import React from 'react';
import classes from './Layout.css';
const Layout = (props) => (
    <>
        <div>tolbar sidebar backdrop</div>
        <main className={classes.content}>{props.children} sadjfsjafjsda</main>
    </>
);

export default Layout;
