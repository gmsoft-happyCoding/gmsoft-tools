import React from 'react';
import { Card } from 'antd';
import { fixed } from 'gmsoft-tools';

const Common = () => {
  console.log('>>>>');
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="通用测试" bordered={false} style={{ width: 300 }}>
        <p>{fixed('0.1', '0')}</p>
      </Card>
    </div>
  );
};

export default Common;
