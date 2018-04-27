import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';
import App from './core/components/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './core/services/reducers';//index.js
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './core/components/Login';
import Header from './core/components/Header';
import LoadingComponent from './core/components/LoadingComponent';
import AuthenticatedComponent from './core/components/AuthenticatedComponent'
import Physician from './core/components/Physician';
import './assets/styles/index.css';

//create redux store -> reducers -> actions - actionsType | applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>                    
                    <Switch>                        
                        <Route path="/Login" component={Login} exact={true}/>
                        <Redirect from="/logout" to="/login" />
                        <AuthenticatedComponent>
                            <Header />                                                        
                            <Route path="/physician" component={Physician} exact={true} />                            
                            <Route path="/" component={App} exact={true}/>
                        </AuthenticatedComponent>
                    </Switch>
                </div>        
            </LoadingComponent>    
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
