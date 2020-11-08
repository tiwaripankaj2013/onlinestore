import React from 'react';
import classes from  './NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = ( ) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
        
    </ul>
);

export default NavigationItems;

