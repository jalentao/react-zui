import './index.less'
import React from 'react'
import {Page, List, Tabs} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="标签页">
            <Tabs active="1">
                <Tabs.TabPane name="项目管理">
                    <div style={{margin: '50px auto', textAlign: 'center'}}>
                        项目管理内容...
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane name="服务管理">
                    <div style={{margin: '50px auto', textAlign: 'center'}}>
                        服务管理内容...
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane name="需求管理">
                    <div style={{margin: '50px auto', textAlign: 'center'}}>
                        需求管理内容...
                    </div>
                </Tabs.TabPane>
            </Tabs>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Tabs} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Tabs>
            <Tabs.TabPane name="项目管理">
                <div style={}>项目管理内容...</div>
            </Tabs.TabPane>
            <Tabs.TabPane name="服务管理">
                服务管理内容...
            </Tabs.TabPane>
            <Tabs.TabPane name="需求管理">
                需求管理内容...
            </Tabs.TabPane>
        </Tabs>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="当前激活的tab index">
                    active
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="index改变时的回调事件">
                    onChange(active)
                </List.Item>
            </List>
        </Page>
    }
}