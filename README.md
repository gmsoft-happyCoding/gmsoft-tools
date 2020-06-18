# @gmsoft/tools - gmsoft公用方法集
[![NPM](https://img.shields.io/npm/v/@gmsoft/tools.svg)](https://www.npmjs.com/package/@gmsoft/tools)
[![DOWNLOAD](https://img.shields.io/npm/dt/@gmsoft/tools.svg)](https://www.npmjs.com/package/@gmsoft/tools)
## install

```

  yarn add @gmsoft/tools

```

## Api

[Api文档](api.md)  

## 更新日志  

- ### 1.5.1  
  2020-6-18     
  - 🌟 新增 [memo](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#memo)，创建一个会缓存 func 结果的函数
- ### 1.5.0  
  2020-3-19     
  - 🗑  废弃 <s>hash</s> ，请使用 [_.uniqueId](https://www.html.cn/doc/lodash/#_uniqueidprefix)
  - 🗑  废弃 <s>loopCall</s> ，请使用 [_.times](https://www.html.cn/doc/lodash/#_timesn-iteratee_identity)
  - 🗑  废弃 <s>nullArr</s> ，请使用 [_.fill(Array(len),null)](https://www.html.cn/doc/lodash/#_fillarray-value-start0-endarraylength)
- ### 1.3.0  
  2020-3-19     
  - 🌟 新增 [hash](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#hash)，传入参数对象，返回类hash字符串
  - 🌟 新增 [loopCall](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#loopCall)，循环调用数次，func
  - 🌟 新增 [nullArr](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#nullArr)，生成一定长度的，每个子项均为null的数组
- ### 1.2.2  
  2020-3-11     
  - 🐞 修改 [getTopRoot](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#getTopRoot)，默认选中元素改为 #mount-root
- ### 1.2.1  
  2020-3-10     
  - 🌟 新增 [getTopRoot](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#getTopRoot)，顶层窗口引用挂载节点
  - 🐞 修改 [getPopupContainer](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#getPopupContainer)，触碰保底机制时返回 [getTopRoot](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#getTopRoot) 的调用结果
- ### 1.2.0  
  2020-3-9     
  - 🌟 项目迁移到  ```@gmsoft/tools```
  - 🌟 新增 [downloadFileByApi](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#downloadFileByApi)，新增 ```business``` 参数
- ### 1.1.2  
  2020-2-27     
  - 🐞 修复 [currency](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#currency)，修复负数时展示bug
  
- ### 1.1.1  
  2019-11-14      
  - 🌟 新增 [validObjValue](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#validObjValue)，清理掉对象值为null或者undefined的属性
  - 🐞 修复 [getSearch](https://github.com/gmsoft-happyCoding/gmsoft-tools/blob/master/api.md#getSearch)，传入对象的值先做非空过滤，再行转换

- ### 1.1.0  
  2019-10-29      
  - 🗑 废弃 <s>useApiDownloadFile</s> ，请使用 ``` downloadFileByApi ```

## 参考资料

- [lodash](https://github.com/lodash/lodash)  
- [moment](https://github.com/moment/moment)
- [decimal.js](https://github.com/MikeMcl/decimal.js)
- [ua-parser-js](https://github.com/faisalman/ua-parser-js)