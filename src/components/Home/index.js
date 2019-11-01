import React, { Component } from 'react';
// import http from '../../utils/http';
// import serverList from '../../services/serverList';
import axios from 'axios';
import '../../mock/todolist';

class Home extends Component {
    constructor() {
        super();
        axios
            .get('/postdata1')
            .then(res => {
                console.log(22222);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div>Home</div>;
    }
}

export default Home;
