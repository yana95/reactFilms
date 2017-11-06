import React from 'react';
import { connect } from 'react-redux'
import Header from './../header/Header';
import Films from './../films/Films';

const MainPage = (props) => (
    <div>
        <Header {...props} />
        <Films {...props}/>
    </div>
);

export default MainPage;