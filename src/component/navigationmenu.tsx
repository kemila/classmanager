import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React from 'react';

const { SubMenu } = Menu;

export class NavigationMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>总览概述</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>配置</span>
              </span>
            }
          >
            <Menu.Item key="2">固定配置</Menu.Item>
            <Menu.Item key="3">创建班级</Menu.Item>
            <Menu.Item key="4">创建老师</Menu.Item>
            <Menu.Item key="5">创建学生</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <MailOutlined />
                <span>统计</span>
              </span>
            }
          >
            <Menu.Item key="6">考试</Menu.Item>
            <Menu.Item key="7">班级</Menu.Item>
            <Menu.Item key="8">学生</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}