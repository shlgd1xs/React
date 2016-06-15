import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { Router, Route, IndexRoute, Link, hashHistory,browserHistory } from 'react-router';
// import { Store } from './redux';
// import * as Routes from './routes';


// const history = syncHistoryWithStore(hashHistory, Store);
//html5 mode
//const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component{
    constructor(){
        super();
        this.state={
          msg:""
        }
    }
    handleChange(event){
      this.setState({msg:event.target.value})
    }
    render() {
        return (
            <div>
              <h1>{this.state.msg}</h1>
              <input type="text" value={this.state.msg} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
