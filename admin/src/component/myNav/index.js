import React,{Component} from 'react'
import  {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'设置',path:'/admin/setting'},
  {name:'用户管理',
   path:'/user',
   children:[
     {name:'用户列表',path:'/user/list'},
     {name:'用户删除',path:'/user/del'},
   ]
  },
]
const {SubMenu} = Menu

class MyNav extends Component{
  jump=(path)=>{
    console.log(this)
    this.props.history.push(path)
  }
  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        // 多级
        return(
          <SubMenu title={item.name} key={index}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item onClick={this.jump.bind(this,item.path)} key={index}>{item.name}</Menu.Item>
      }
      
    }) 
  }
  render(){
    return(
      <div className='login'>
        <Menu  style={{ width: 256 }} mode="vertical" key="">
          {this.renderItem(navData)}
        </Menu>
      </div>

    )
  }
}
export default  withRouter(MyNav)