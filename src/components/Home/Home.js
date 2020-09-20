import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ToolBar from '../ToolBar/ToolBar';
import DataAnalysis from '../DataAnalysis/DataAnalysis';
import HeatMap from '../HeatMaps/HeatMaps';
import Directory from '../Directory/Directory';
import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 'maps'
        };
    }

    changePage = (page) => {
        this.setState({
            currentPage: page
        });
    }

    render() {
        const { currentPage } = this.state;
        return (
            <div className='container'>
                <ToolBar changePage={this.changePage} currentPage={currentPage}/>
                <Route exact path='/' render={props =>  (
                    <Redirect props={props} to='/maps' />
                )} />
                <Route exact path='/maps' render={props =>  (
                    <HeatMap props={props} />
                )} />
                <Route exact path='/dataAnalysis' render={props =>  (
                    <DataAnalysis props={props} />
                )} />
                <Route exact path='/directory' render={props =>  (
                    <Directory props={props} />
                )} />
            </div>
        );
    }
}

export default Home;