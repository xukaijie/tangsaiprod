import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect ,hashHistory,browserHistory} from 'react-router';
import route from './router.jsx';
import {Provider} from 'react-redux';
import store from './redux/store/store.jsx'



class Title extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <Provider store={store}>
            {route}
            </Provider>
        )
    }
}

ReactDOM.render(
    <Title/>,
    document.getElementById('init')
)
