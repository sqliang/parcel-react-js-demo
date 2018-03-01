import React, {Component} from 'react';

import {Button} from 'antd';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button type="primary">antd</Button>
                <span>hello,sqliang</span>
                <Button type="danger">danger</Button>
            </div>
        );
    }
}