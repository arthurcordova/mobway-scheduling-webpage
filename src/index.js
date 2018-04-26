import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';//index.js
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent'
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';
import Scheduling from './components/Scheduling';
import Physician from './components/Physician';
import './styles/index.css';

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
                            <Route path="/:id/edit" component={NoteEdit} exact={true} />
                            <Route path="/scheduling" component={Scheduling} exact={true} />
                            <Route path="/physician" component={Physician} exact={true} />
                            <Route path="/noteDetail/:id" component={NoteDetail} exact={true} />
                            <Route path="/" component={App} exact={true}/>
                        </AuthenticatedComponent>
                    </Switch>
                </div>        
            </LoadingComponent>    
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
