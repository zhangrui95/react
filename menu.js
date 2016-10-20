import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import ModuleAnimate from './animate/ModuleAnimate';
const data = [
    {className:'fa fa-fw fa-home',name:'home',key:'demo1'},
    {className:'fa fa-fw fa-heart',name:'Favs',key:'demo2'},
    {className:'fa fa-fw fa-folder',name:'Files',key:'demo3'},
    {className:'fa fa-fw fa-tachometer',name:'Stats',key:'demo4'},
];
const pathState = [
    'M300-10c0,0,70,164,70,410c0,232-70,410-70,410',
    'M300-10C300-10,230,154,230,400c0,232,70,410,70,410'
];
    render(<ModuleAnimate data={data} pathState={pathState}/>,document.getElementById('menu'));
