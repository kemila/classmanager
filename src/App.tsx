import React from 'react';
import './App.css';

// import { webclient } from './server/fetch';
import { NavigationMenu } from './component/navigationmenu';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// async function test() {
//   const aaa = await webclient.get('http://39.100.197.196/api/');
//   console.log('aaa', aaa);
//   // const bbb = await webclient.post('');
// }
// void test();

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <NavigationMenu />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
