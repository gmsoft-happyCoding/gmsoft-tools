## Classes

<dl>
<dt><a href="#TreeData">TreeData</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#add">add(augend, addend)</a> ⇒ <code>string</code></dt>
<dd><p>加法</p></dd>
<dt><a href="#compared">compared(vala, valb)</a> ⇒ <code>number</code></dt>
<dd><p>判定大小</p></dd>
<dt><a href="#createFormFields">createFormFields(formFields, [createFormFieldCLI])</a> ⇒ <code>StringObject</code></dt>
<dd><p>表单赋值处理函数
常用于 Form.create() mapPropsToFields 时 将props.formFields 转为 Form需要的Fields对象</p></dd>
<dt><a href="#createTimeStamp">createTimeStamp([date])</a> ⇒ <code>number</code></dt>
<dd><p>创建一个时间戳</p></dd>
<dt><a href="#currency">currency(money, [float])</a> ⇒ <code>string</code></dt>
<dd><p>格式化数字或数字字符串为￥开头的货币格式</p></dd>
<dt><a href="#divide">divide(dividend, divisor)</a> ⇒ <code>string</code></dt>
<dd><p>除法</p></dd>
<dt><a href="#fixed">fixed(handle, fixedNum)</a> ⇒ <code>string</code></dt>
<dd><p>数字字符串 四舍五入</p></dd>
<dt><a href="#getPopupContainer">getPopupContainer(triggerNode?)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Select 等Antd组件getPopupContainer 公用方法</p></dd>
<dt><a href="#getSuffix">getSuffix(string)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>从文件名中提取后缀名</p></dd>
<dt><a href="#getTotalInResHeader">getTotalInResHeader(response, [defaultValue])</a> ⇒ <code>number</code></dt>
<dd><p>从response headers 中取出x-total-count</p></dd>
<dt><a href="#getValue">getValue(target, paths, defaultValue?)</a> ⇒ <code>any</code></dt>
<dd><p>安全取值，支持默认值
如果目标值为null|undefined 则返回 defaultValue 或者 undefined</p></dd>
<dt><a href="#gt">gt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于</p></dd>
<dt><a href="#gte">gte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于等于</p></dd>
<dt><a href="#isIE">isIE()</a> ⇒ <code>void</code></dt>
<dd><p>判定当前浏览器是否是IE浏览器</p></dd>
<dt><a href="#isOnlyFormFieldChange">isOnlyFormFieldChange(changedFields, itemKey)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定表单是否只有某项变更了值</p></dd>
<dt><a href="#isStrNum">isStrNum(testStr)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定字符串是不是 数字字符串 &#39;1234&#39;</p></dd>
<dt><a href="#isStrNumEqual">isStrNumEqual(value, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定两值相等</p></dd>
<dt><a href="#lt">lt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于</p></dd>
<dt><a href="#lte">lte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于等于</p></dd>
<dt><a href="#momentToTimestamp">momentToTimestamp(momentObj, [formatType])</a> ⇒ <code>number</code></dt>
<dd><p>moment对象转时间戳</p></dd>
<dt><a href="#multiply">multiply(multiplier, multiplicand)</a> ⇒ <code>string</code></dt>
<dd><p>乘法</p></dd>
<dt><a href="#onValidateFieldsChange">onValidateFieldsChange(changedFields, changeCB, [noValidate])</a> ⇒ <code>void</code></dt>
<dd><p>表单变化 当有项目处于验证中时不予通过
常用于 Form.create() onFieldsChange 时</p></dd>
<dt><a href="#pageNoToOffset">pageNoToOffset(pageNo, pageSize)</a> ⇒ <code>number</code></dt>
<dd><p>pageNo转索引值</p></dd>
<dt><a href="#parseJSONArr">parseJSONArr(jsonArr, [defaultValue])</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>安全解析 JSON数组
如果解析结果不是数组则视为无效，返回defaultValue||[]</p></dd>
<dt><a href="#strMapToObj">strMapToObj(strMap)</a> ⇒ <code>object</code></dt>
<dd><p>Map 转 Object</p></dd>
<dt><a href="#subtract">subtract(minuend, subtrahend)</a> ⇒ <code>string</code></dt>
<dd><p>减法</p></dd>
<dt><a href="#timeStampFormat">timeStampFormat(timeStamp, [formatType])</a> ⇒ <code>string</code></dt>
<dd><p>时间戳格式化</p></dd>
<dt><a href="#timeStampToMoment">timeStampToMoment(timeStamp)</a> ⇒ <code>Monent.Moment</code></dt>
<dd><p>时间戳转moment对象</p></dd>
<dt><a href="#useApiDownloadFile">useApiDownloadFile(path, name, [downloadGateWay])</a> ⇒ <code>void</code></dt>
<dd><p>调用 后台api执行文件下载</p></dd>
</dl>

<a name="TreeData"></a>

## TreeData
**Kind**: global class  
<a name="new_TreeData_new"></a>

### new TreeData()
<p>将一维数组组装为多维数组及对应的 Map 结构</p>

**Example**  
```js
new TreeData([]).init()// => {treeData:[],treeMap:Map}
```
<a name="add"></a>

## add(augend, addend) ⇒ <code>string</code>
<p>加法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| augend | <code>string</code> | <p>被加数</p> |
| addend | <code>string</code> | <p>加数</p> |

**Example**  
```js
add('1.1','1.8')// => '2.9'
```
<a name="compared"></a>

## compared(vala, valb) ⇒ <code>number</code>
<p>判定大小</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>} -1|0|1|NaN</p>  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
compared('1.0','1.1')// => -1
```
**Example**  
```js
compared('1.1','1.1')// => 0
```
**Example**  
```js
compared('1.2','1.1')// => 1
```
**Example**  
```js
compared(NaN,'1.1')// => NaN
```
<a name="createFormFields"></a>

## createFormFields(formFields, [createFormFieldCLI]) ⇒ <code>StringObject</code>
<p>表单赋值处理函数
常用于 Form.create() mapPropsToFields 时 将props.formFields 转为 Form需要的Fields对象</p>

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| formFields | <code>StringObject</code> |  | 
| [createFormFieldCLI] | <code>any</code> | <code>Form.createFormField</code> | 

**Example**  
```js
Form.create({ mapPropsToFields(props: Props) {   return createFormField(props.formFields); }, // ...})
```
<a name="createTimeStamp"></a>

## createTimeStamp([date]) ⇒ <code>number</code>
<p>创建一个时间戳</p>

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | <p>需要转换的Date对象 默认取当前时间</p> |

**Example**  
```js
createTimeStamp()// => 1555402982554
```
**Example**  
```js
createTimeStamp(new Date('2012-12-24 12:33:14'))// => 1356323594000
```
<a name="currency"></a>

## currency(money, [float]) ⇒ <code>string</code>
<p>格式化数字或数字字符串为￥开头的货币格式</p>

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| money | <code>string</code> \| <code>number</code> |  | 
| [float] | <code>number</code> | <code>2</code> | 

**Example**  
```js
currency(20000)// => '￥20,000.00'
```
**Example**  
```js
currency('20000',3)// => '￥20,000.000'
```
**Example**  
```js
currency(null)// => undefined
```
**Example**  
```js
currency(undefined)// => undefined
```
**Example**  
```js
currency(NaN)// => undefined
```
**Example**  
```js
currency('')// => undefined
```
<a name="divide"></a>

## divide(dividend, divisor) ⇒ <code>string</code>
<p>除法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dividend | <code>string</code> | <p>被除数</p> |
| divisor | <code>string</code> | <p>除数</p> |

**Example**  
```js
divide('1.21','1.1')// => '1.1'
```
<a name="fixed"></a>

## fixed(handle, fixedNum) ⇒ <code>string</code>
<p>数字字符串 四舍五入</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>string</code> | <p>待处理值</p> |
| fixedNum | <code>number</code> | <p>保留位数</p> |

**Example**  
```js
fixed('3.456',2)// => '3.46'
```
**Example**  
```js
fixed('3.456',5)// => '3.45600'
```
<a name="getPopupContainer"></a>

## getPopupContainer(triggerNode?) ⇒ <code>HTMLElement</code>
<p>Select 等Antd组件getPopupContainer 公用方法</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| triggerNode? | <code>Element</code> | 

**Example**  
```js
<Select getPopupContainer={getPopupContainer} {...otherProps} />
```
<a name="getSuffix"></a>

## getSuffix(string) ⇒ <code>string</code> \| <code>undefined</code>
<p>从文件名中提取后缀名</p>

**Kind**: global function  

| Param | Description |
| --- | --- |
| string | <p>fileName - 文件名</p> |

**Example**  
```js
currency('helloWorld.svg')// => 'svg'
```
<a name="getTotalInResHeader"></a>

## getTotalInResHeader(response, [defaultValue]) ⇒ <code>number</code>
<p>从response headers 中取出x-total-count</p>

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| response | <code>any</code> |  | 
| [defaultValue] | <code>number</code> | <code>0</code> | 

**Example**  
```js
getTotalInResHeader(response)// => '20'
```
<a name="getValue"></a>

## getValue(target, paths, defaultValue?) ⇒ <code>any</code>
<p>安全取值，支持默认值
如果目标值为null|undefined 则返回 defaultValue 或者 undefined</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| target | <code>any</code> | 
| paths | <code>any</code> | 
| defaultValue? | <code>any</code> | 

**Example**  
```js
// returns nullgetValue(undefined,'name', null)
```
**Example**  
```js
// returns undefinedgetValue(null,'name')
```
**Example**  
```js
// returns 'zhangsan'getValue({age:12},'name','zhangsan')
```
**Example**  
```js
// returns undefinedgetValue({age:12},'name')
```
**Example**  
```js
// returns 12getValue({age:12},'age',null)
```
<a name="gt"></a>

## gt(vala, valb) ⇒ <code>boolean</code>
<p>字符串数字 大于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
gt('1.2','1.1')// => true
```
**Example**  
```js
gt('1.2','1.3')// => false
```
<a name="gte"></a>

## gte(vala, valb) ⇒ <code>boolean</code>
<p>字符串数字 大于等于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
gte('1.2','1.2')// => true
```
**Example**  
```js
gte('1.2','1.3')// => false
```
<a name="isIE"></a>

## isIE() ⇒ <code>void</code>
<p>判定当前浏览器是否是IE浏览器</p>

**Kind**: global function  
**Example**  
```js
isIE()// => false
```
<a name="isOnlyFormFieldChange"></a>

## isOnlyFormFieldChange(changedFields, itemKey) ⇒ <code>boolean</code>
<p>判定表单是否只有某项变更了值</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| changedFields | <code>StringObject</code> | <p>表单值对象</p> |
| itemKey | <code>string</code> | <p>需鉴定的子项的key</p> |

**Example**  
```js
isOnlyFormFieldChange({name:{}, age:{}})// => false
```
<a name="isStrNum"></a>

## isStrNum(testStr) ⇒ <code>boolean</code>
<p>判定字符串是不是 数字字符串 '1234'</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| testStr | <code>string</code> | 

**Example**  
```js
isStrNum('122.22')// => true
```
**Example**  
```js
isStrNum('122.A')// => false
```
<a name="isStrNumEqual"></a>

## isStrNumEqual(value, other) ⇒ <code>boolean</code>
<p>判定两值相等</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>比较值1</p> |
| other | <code>string</code> | <p>比较值2</p> |

**Example**  
```js
isStrNumEqual('1.1','1.10')// => true
```
**Example**  
```js
isStrNumEqual('1.1','1.11')// => false
```
<a name="lt"></a>

## lt(vala, valb) ⇒ <code>boolean</code>
<p>小于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
lt('1.1','1.0')// => false
```
**Example**  
```js
lt('1.1','1.1')// => false
```
**Example**  
```js
lt('1.1','1.2')// => true
```
<a name="lte"></a>

## lte(vala, valb) ⇒ <code>boolean</code>
<p>小于等于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
lte('1.1','1.0')// => false
```
**Example**  
```js
lte('1.1','1.1')// => true
```
**Example**  
```js
lte('1.1','1.2')// => true
```
<a name="momentToTimestamp"></a>

## momentToTimestamp(momentObj, [formatType]) ⇒ <code>number</code>
<p>moment对象转时间戳</p>

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| momentObj | <code>Monent.Moment</code> |  | <p>待转换的moment对象</p> |
| [formatType] | <code>string</code> | <code>&quot;&#x27;YYYY-MM-DD&#x27;&quot;</code> | <p>format 模板 默认'YYYY-MM-DD'即去掉时分秒精度</p> |

**Example**  
```js
timeStampToDate(moment())// => 1555344000000
```
**Example**  
```js
timeStampToDate(moment(),"YYYY-MM-DD hh:mm:ss")// => 1555360961000
```
<a name="multiply"></a>

## multiply(multiplier, multiplicand) ⇒ <code>string</code>
<p>乘法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>被乘数</p> |
| multiplicand | <code>string</code> | <p>乘数</p> |

**Example**  
```js
multiply('1.1','1.1')// => '1.21'
```
<a name="onValidateFieldsChange"></a>

## onValidateFieldsChange(changedFields, changeCB, [noValidate]) ⇒ <code>void</code>
<p>表单变化 当有项目处于验证中时不予通过
常用于 Form.create() onFieldsChange 时</p>

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| changedFields | <code>StringObject</code> |  | <p>表单变化的值</p> |
| changeCB | <code>ChangeFieldsCallBack</code> |  | <p>表单变化回调函数</p> |
| [noValidate] | <code>boolean</code> | <code>false</code> | <p>默认false 是否关闭验证拦截</p> |

**Example**  
```js
Form.create({ // ..., onFieldsChange(props, changedFields) {  onValidateFieldsChange(changedFields, props.actions.formFieldsChange); },});
```
<a name="pageNoToOffset"></a>

## pageNoToOffset(pageNo, pageSize) ⇒ <code>number</code>
<p>pageNo转索引值</p>

**Kind**: global function  
**Returns**: <code>number</code> - <ul>
<li>offset 索引值 默认传回 0</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| pageNo | <code>number</code> | <p>页码</p> |
| pageSize | <code>number</code> | <p>每页条数 可不传，默认为10</p> |

**Example**  
```js
pageNoToOffset(1,15)// => '0'
```
**Example**  
```js
pageNoToOffset(16,10)// => '150'
```
<a name="parseJSONArr"></a>

## parseJSONArr(jsonArr, [defaultValue]) ⇒ <code>Array.&lt;any&gt;</code>
<p>安全解析 JSON数组
如果解析结果不是数组则视为无效，返回defaultValue||[]</p>

**Kind**: global function  
**Author**: GM20171202  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| jsonArr | <code>string</code> |  | <p>待解析的JSON数组</p> |
| [defaultValue] | <code>Array.&lt;any&gt;</code> | <code>[]</code> | <p>解析失败的默认值</p> |

**Example**  
```js
parseJSONArr("[12,31,3231]")// => [12,31,3231]
```
**Example**  
```js
parseJSONArr("{}")// => []
```
<a name="strMapToObj"></a>

## strMapToObj(strMap) ⇒ <code>object</code>
<p>Map 转 Object</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| strMap | <code>Map.&lt;string, any&gt;</code> | <p>key string 的 Map</p> |

**Example**  
```js
strMapToObj(new Map([['name', '张三'],['title', 'Author']]))// => {name:'张三',title:'Author'}
```
<a name="subtract"></a>

## subtract(minuend, subtrahend) ⇒ <code>string</code>
<p>减法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| minuend | <code>string</code> | <p>被减数</p> |
| subtrahend | <code>string</code> | <p>减数</p> |

**Example**  
```js
subtract('2.9','1.1')// => '1.8'
```
<a name="timeStampFormat"></a>

## timeStampFormat(timeStamp, [formatType]) ⇒ <code>string</code>
<p>时间戳格式化</p>

**Kind**: global function  
**See**: http://momentjs.cn/docs/#/parsing/string-format/  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timeStamp | <code>number</code> |  |  |
| [formatType] | <code>string</code> | <code>&quot;&#x27;YYYY-MM-DD&#x27;&quot;</code> | <p>format 模板 默认'YYYY-MM-DD'</p> |

**Example**  
```js
timeStampToDate(1555402982554)// => '2019-04-16'
```
**Example**  
```js
timeStampToDate(1555402982554,"YYYY年MM月DD日")// => '2019年04月16日'
```
**Example**  
```js
timeStampToDate(1555403211557,"YYYY-MM-DD hh:mm:ss")// => '"2019-04-16 04:26:51"'
```
<a name="timeStampToMoment"></a>

## timeStampToMoment(timeStamp) ⇒ <code>Monent.Moment</code>
<p>时间戳转moment对象</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| timeStamp | <code>number</code> | 

**Example**  
```js
timeStampToMoment(1555344000000)// => momentObj
```
<a name="useApiDownloadFile"></a>

## useApiDownloadFile(path, name, [downloadGateWay]) ⇒ <code>void</code>
<p>调用 后台api执行文件下载</p>

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  |  |
| name | <code>string</code> |  |  |
| [downloadGateWay] | <code>string</code> | <code>&quot;toString(process.env.REACT_APP_API_DJC_GATEWAY)&quot;</code> | <p>如果不传入 则项目需配置 process.env.REACT_APP_API_DJC_GATEWAY</p> |

**Example**  
```js
useApiDownloadFile('group3/AB/12/34/123456.jpg','123456.jpg')// => void
```
