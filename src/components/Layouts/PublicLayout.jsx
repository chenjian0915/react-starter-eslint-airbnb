import React from 'react';
import { Route } from 'react-router-dom';

import './PublicLayout.css';

export default class PublicLayout extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;

        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Route {...rest} render={props => <Component {...props} />} />;
    }
}
