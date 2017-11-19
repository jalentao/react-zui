import './index.less'
import React from 'react'
import {Page, List, Tag} from '../../../src'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="头像">
            <Tag>测试标签一</Tag>
            <Tag>测试标签二</Tag>
            <Tag>测试标签三</Tag>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    暂无说明
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Tag} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <div>
            <Tag>测试标签一</Tag>
            <Tag>测试标签二</Tag>
            <Tag>测试标签三</Tag>
        </div>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="css类名">
                    className
                </List.Item>
                <List.Item extra="标签内容">
                    children
                </List.Item>
            </List>
        </Page>
    }
}