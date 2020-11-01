import React from 'react';
import classes from './BuildControl.module.css';
const BuildControl  = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} 
        onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More}  disabled={props.disabled} onClick={props.added}>More</button>
    </div>
);


export default BuildControl