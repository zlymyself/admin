import React,{Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
class Home extends Component{
    constructor(){
        super()
        this.state={
            option:{
                // title : {
                //     text: '某站点用户访问来源',
                //     subtext: '纯属虚构',
                //     x:'center'
                // },
                // tooltip : {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                // },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                // },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            
        }
    }
    componentDidMount(){
        this.$axios.post('/yapi/getPieData')
        .then((data)=>{
            console.log(data)
            let option = JSON.parse(JSON.stringify(this.state.option))
            option.series[0].data=data.data.data
            this.setState({option})
        })
    }
    render(){
        return(
          <Card className="home">
              <ReactEcharts option={this.state.option}></ReactEcharts>
              <ReactEcharts option={{
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }}></ReactEcharts>
          </Card>
        )
    }
}
export default Home