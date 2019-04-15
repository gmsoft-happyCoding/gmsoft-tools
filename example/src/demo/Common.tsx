import React from 'react';
import { Card } from 'antd';
import { add } from 'gmsoft-tools';

const Common = () => {
  console.log('>>>>');
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="通用测试" bordered={false} style={{ width: 300 }}>
        <p>{add('0.1', '0.2')}</p>
      </Card>
    </div>
  );
};

export default Common;
