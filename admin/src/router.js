import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
//import Login from './component/login';
//import Admin from './component/admin';
// import Home from './component/home';
// import User from './component/user';
import MyNav from './component/myNav';

const Admin = ComponentImport(()=>import("./component/admin"))
const Home = ComponentImport(()=>import("./component/home"))
const Login = ComponentImport(()=>import("./component/login"))
const User = ComponentImport(()=>import("./component/user"))

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
              <Switch>
                <Redirect exact from="/" to="login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path="/admin" render={()=>{
                  return(
                    <Admin>
                      <MyNav></MyNav>
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