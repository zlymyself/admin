import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import MyNav from './component/myNav';
import Login from './component/login';
import Admin from './component/admin';
import Home from './component/home';
import User from './component/user';
// import Mynav from './component/myNav';

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
              <MyNav></MyNav>
              <Switch>
                <Redirect exact from="/" to="login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path="/admin" render={()=>{
                  return(
                    <Admin>
                      <Route path='/admin/home' component={Home}></Route>
                      <Route path='/admin/user' component={User}></Route>
                    </Admin>
                  )
                }}></Route>
              </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter;