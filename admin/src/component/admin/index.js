import React,{Component} from 'react'
import MyNav from '../myNav'
import TokenMoDal from '../modal'
import './index.less';
class Admin extends Component{
    render(){
        return(
            <div className="admin">
                <TokenMoDal></TokenMoDal>
                <div className="admin-nav">
                <MyNav></MyNav>
                </div>
                <div className="admin-content">
                  <div>
                      头部
                  </div>
                  <div>
                      {this.props.children}
                  </div>
                  <div>
                      尾部
                  </div>
                </div>
            </div>
        )
    }
}
export default Admin