import React from 'react';
import { Card, Alert } from 'antd';
import * as tools from 'gmsoft-tools';

const Common = () => {
  // @ts-ignore
  if (!window.tools) {
    // @ts-ignore
    window.tools = tools;
  }
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="测试" bordered={false} style={{ width: 300 }}>
        <Alert type="warning" message="请使用控制台，访问 window.tools 以测试" />
      </Card>
    </div>
  );
};

export default Common;
