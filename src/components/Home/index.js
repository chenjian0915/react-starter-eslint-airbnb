/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 23:38:47
 * @LastEditTime: 2019-08-20 18:14:33
 * @LastEditors: Please set LastEditors
 */
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
