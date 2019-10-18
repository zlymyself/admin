import React,{Component,Fragment} from 'react'
import  {withRouter} from 'react-router-dom'
import {Card,Button} from 'antd'
import {connect} from 'react-redux'
import './index.less'
class Token extends Component{
    jump=(path)=>{
        console.log(this,"jump")
        this.props.history.push(path)
    }
    render(){
        console.log(this,'model')
        return(
            <Fragment>
                <div className="token-modal">
                    <Card title="token 缺失">
                        token 缺失或失效,请重新登录<br/>
                        <Button onClick={this.jump.bind(this,'/login')}>登录</Button>
                    </Card>
                </div>
            </Fragment>
        )
    }
}
let TokenModal = withRouter(Token)
export default connect(state=>state)(TokenModal)