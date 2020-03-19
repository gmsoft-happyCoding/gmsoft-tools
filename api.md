## Classes

<dl>
<dt><a href="#TreeData">TreeData</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#add">add(augend, addend)</a> ⇒ <code>string</code></dt>
<dd><p>加法</p></dd>
<dt><a href="#biteToKBite">biteToKBite(bite)</a> ⇒ <code>number</code></dt>
<dd><p>字节转千字节 bite -&gt; Kb</p></dd>
<dt><a href="#boolNumToBool">boolNumToBool(boolNum)</a> ⇒ <code>boolean</code></dt>
<dd><p>0|1 转boolean</p></dd>
<dt><a href="#boolStrToBool">boolStrToBool(boolStr)</a> ⇒ <code>boolean</code></dt>
<dd><p>布尔型字符串 转为布尔值 &#39;boolean&#39; -&gt; boolean</p></dd>
<dt><a href="#boolToBoolNum">boolToBoolNum(bool)</a> ⇒ <code>BoolNum</code></dt>
<dd><p>boolean 转 0 | 1</p></dd>
<dt><a href="#boolToBoolStr">boolToBoolStr(bool)</a> ⇒ <code>BoolStr</code></dt>
<dd><p>布尔值转布尔型字符串 boolean -&gt; &#39;boolean&#39;</p></dd>
<dt><a href="#boolToBoolWords">boolToBoolWords(bool)</a> ⇒ <code>string</code></dt>
<dd><p>bool值 转 文字(是|否)</p></dd>
<dt><a href="#compared">compared(vala, valb)</a> ⇒ <code>number</code></dt>
<dd><p>判定大小</p></dd>
<dt><a href="#createFormFields">createFormFields(formFields, [createFormFieldCLI])</a> ⇒ <code>StringObject</code></dt>
<dd><p>表单赋值处理函数
常用于 Form.create() mapPropsToFields 时 将props.formFields 转为 Form需要的Fields对象</p></dd>
<dt><a href="#createTimeStamp">createTimeStamp([date])</a> ⇒ <code>number</code></dt>
<dd><p>创建一个时间戳</p></dd>
<dt><a href="#currency">currency(money, [float], [unit], [unitPosition])</a> ⇒ <code>string</code></dt>
<dd><p>格式化数字或数字字符串为￥开头的货币格式,可指定单位名称以及单位位置</p></dd>
<dt><a href="#divide">divide(dividend, divisor)</a> ⇒ <code>string</code></dt>
<dd><p>除法</p></dd>
<dt><a href="#downloadFileByApi">downloadFileByApi(path, name, downloadGateWay, business?)</a> ⇒ <code>void</code></dt>
<dd><p>调用 后台api执行文件下载</p></dd>
<dt><a href="#fixed">fixed(handle, fixedNum)</a> ⇒ <code>string</code></dt>
<dd><p>数字字符串 四舍五入</p></dd>
<dt><a href="#getNull">getNull()</a> ⇒ <code>null</code></dt>
<dd><p>获得null</p></dd>
<dt><a href="#getPopupContainer">getPopupContainer(triggerNode?)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Select 等Antd组件getPopupContainer 公用方法</p></dd>
<dt><a href="#getSearch">getSearch(params)</a> ⇒ <code>string</code></dt>
<dd><p>传入参数对象，返回search结构的字符串</p></dd>
<dt><a href="#getSuffix">getSuffix(string)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>从文件名中提取后缀名</p></dd>
<dt><a href="#getTopRoot">getTopRoot()</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>顶层窗口引用挂载节点</p></dd>
<dt><a href="#getTotalInResHeader">getTotalInResHeader(response, [defaultValue])</a> ⇒ <code>number</code></dt>
<dd><p>从response headers 中取出x-total-count</p></dd>
<dt><a href="#getValue">getValue(target, paths, defaultValue?)</a> ⇒ <code>any</code></dt>
<dd><p>安全取值，支持默认值
如果目标值为 null|undefined 则返回 defaultValue</p></dd>
<dt><a href="#gt">gt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于</p></dd>
<dt><a href="#gte">gte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于等于</p></dd>
<dt><a href="#hash">hash(params)</a> ⇒ <code>string</code></dt>
<dd><p>传入参数对象，返回类hash字符串</p></dd>
<dt><a href="#isArray">isArray(testData)</a> ⇒ <code>boolean</code></dt>
<dd><p>校验 是不是数组，解决 @types/lodash.d 中 重载被弃用</p></dd>
<dt><a href="#isArrayNumber">isArrayNumber(testArr)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定 是否是 数字 组成的数组</p></dd>
<dt><a href="#isArrayString">isArrayString(testArr)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定 是否是 字符串 组成的数组</p></dd>
<dt><a href="#isBoolean">isBoolean(testData)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否是 布尔类型</p></dd>
<dt><a href="#isEmpty">isEmpty(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定 是否为空</p></dd>
<dt><a href="#isIE">isIE()</a> ⇒ <code>void</code></dt>
<dd><p>判定当前浏览器是否是IE浏览器</p></dd>
<dt><a href="#isNonEmptyStr">isNonEmptyStr(str)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定是不是非空的字符串</p></dd>
<dt><a href="#isOnlyFormFieldChange">isOnlyFormFieldChange(changedFields, itemKey)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定表单是否只有某项变更了值</p></dd>
<dt><a href="#isStrNum">isStrNum(testStr)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定字符串是不是 数字字符串 &#39;1234&#39;</p></dd>
<dt><a href="#isStrNumEqual">isStrNumEqual(value, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判定两值相等</p></dd>
<dt><a href="#loopCall">loopCall(times, cb)</a> ⇒ <code>void</code></dt>
<dd><p>循环调用数次，func</p></dd>
<dt><a href="#lt">lt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于</p></dd>
<dt><a href="#lte">lte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于等于</p></dd>
<dt><a href="#momentToTimestamp">momentToTimestamp(momentObj, [formatType])</a> ⇒ <code>number</code></dt>
<dd><p>moment对象转时间戳</p></dd>
<dt><a href="#multiply">multiply(multiplier, multiplicand)</a> ⇒ <code>string</code></dt>
<dd><p>乘法</p></dd>
<dt><a href="#nullArr">nullArr(len?)</a> ⇒ <code>Array.&lt;Null&gt;</code></dt>
<dd><p>生成一定长度的，每个子项均为null的数组</p></dd>
<dt><a href="#onValidateFieldsChange">onValidateFieldsChange(changedFields, changeCB, [noValidate])</a> ⇒ <code>void</code></dt>
<dd><p>表单变化 当有项目处于验证中时不予通过
常用于 Form.create() onFieldsChange 时</p></dd>
<dt><a href="#pageNoToOffset">pageNoToOffset(pageNo, pageSize)</a> ⇒ <code>number</code></dt>
<dd><p>pageNo转索引值</p></dd>
<dt><a href="#parseJSON">parseJSON(json, defaultValue?)</a> ⇒ <code>any</code></dt>
<dd><p>安全解析JSON</p></dd>
<dt><a href="#parseJSONArr">parseJSONArr(jsonArr, [defaultValue])</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>安全解析 JSON数组
如果解析结果不是数组则视为无效，返回defaultValue||[]</p></dd>
<dt><a href="#parseSearch">parseSearch(searchStr)</a> ⇒ <code>StringObject</code></dt>
<dd><p>解析 search</p></dd>
<dt><a href="#strMapToObj">strMapToObj(strMap)</a> ⇒ <code>object</code></dt>
<dd><p>Map 转 Object</p></dd>
<dt><a href="#subtract">subtract(minuend, subtrahend)</a> ⇒ <code>string</code></dt>
<dd><p>减法</p></dd>
<dt><a href="#timeStampFormat">timeStampFormat(timeStamp, [formatType])</a> ⇒ <code>string</code></dt>
<dd><p>时间戳格式化</p></dd>
<dt><a href="#timeStampToMoment">timeStampToMoment(timeStamp)</a> ⇒ <code>Monent.Moment</code></dt>
<dd><p>时间戳转moment对象</p></dd>
<dt><a href="#trimObjValue">trimObjValue(obj)</a> ⇒ <code>StringObject</code></dt>
<dd><p>移除对象值为string的前后空格，值不是string不作处理</p></dd>
<dt><a href="#validHandle">validHandle(target, validHandle, inValidHandle, [isValid])</a> ⇒ <code>any</code></dt>
<dd><p>值有效无效（满足条件与否）的处理</p></dd>
<dt><a href="#validObjValue">validObjValue(obj)</a> ⇒ <code>Object</code></dt>
<dd><p>清理掉对象值为null或者undefined的属性</p></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callback">callback</a> ⇒ <code>any</code></dt>
<dd><p>回调函数</p></dd>
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
<a name="biteToKBite"></a>

## biteToKBite(bite) ⇒ <code>number</code>
<p>字节转千字节 bite -&gt; Kb</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>KB</p>  

| Param | Type | Description |
| --- | --- | --- |
| bite | <code>number</code> | <p>待转单位的字节数</p> |

<a name="boolNumToBool"></a>

## boolNumToBool(boolNum) ⇒ <code>boolean</code>
<p>0|1 转boolean</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| boolNum | <code>BoolNum</code> | <p>0|1</p> |

**Example**  
```js
boolNumToBool(1)// => true
```
**Example**  
```js
boolNumToBool(0)// => false
```
**Example**  
```js
boolNumToBool(3)// => Error
```
<a name="boolStrToBool"></a>

## boolStrToBool(boolStr) ⇒ <code>boolean</code>
<p>布尔型字符串 转为布尔值 'boolean' -&gt; boolean</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| boolStr | <code>string</code> | 

**Example**  
```js
boolStrToBool('false')// => false
```
**Example**  
```js
boolStrToBool('true')// => true
```
**Example**  
```js
boolStrToBool(false)// => Error
```
<a name="boolToBoolNum"></a>

## boolToBoolNum(bool) ⇒ <code>BoolNum</code>
<p>boolean 转 0 | 1</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bool | <code>boolean</code> | <p>true|false</p> |

**Example**  
```js
boolToBoolNum(true)// => 1
```
**Example**  
```js
boolToBoolNum(false)// => 0
```
**Example**  
```js
boolToBoolNum(3)// => Error
```
<a name="boolToBoolStr"></a>

## boolToBoolStr(bool) ⇒ <code>BoolStr</code>
<p>布尔值转布尔型字符串 boolean -&gt; 'boolean'</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| bool | <code>boolean</code> | 

**Example**  
```js
boolToBoolStr(true)// => 'true'
```
**Example**  
```js
boolToBoolStr(false)// => 'false'
```
**Example**  
```js
boolToBoolStr(undefined)// => Error()
```
<a name="boolToBoolWords"></a>

## boolToBoolWords(bool) ⇒ <code>string</code>
<p>bool值 转 文字(是|否)</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| bool | <code>boolean</code> | 

**Example**  
```js
boolToBoolWords(false)// => '否'
```
**Example**  
```js
boolToBoolWords(true)// => '是'
```
**Example**  
```js
boolToBoolWords(1)// => Error
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

## currency(money, [float], [unit], [unitPosition]) ⇒ <code>string</code>
<p>格式化数字或数字字符串为￥开头的货币格式,可指定单位名称以及单位位置</p>

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| money | <code>string</code> \| <code>number</code> |  | 
| [float] | <code>number</code> | <code>2</code> | 
| [unit] | <code>string</code> | <code>&quot;&#x27;￥&#x27;&quot;</code> | 
| [unitPosition] | <code>&#x27;before&#x27;</code> \| <code>&#x27;after&#x27;</code> | <code>&#x27;before&#x27;</code> | 

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
currency('-20000',3)// => '￥-20,000.000'
```
**Example**  
```js
currency('20000',undefined,'$')// => '$20,000.00'
```
**Example**  
```js
currency('20000',undefined,"元","after",)// => '20,000.00元'
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
<a name="downloadFileByApi"></a>

## downloadFileByApi(path, name, downloadGateWay, business?) ⇒ <code>void</code>
<p>调用 后台api执行文件下载</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| name | <code>string</code> | 
| downloadGateWay | <code>string</code> | 
| business? | <code>string</code> | 

**Example**  
```js
downloadFileByApi('group3/AB/12/34/123456.jpg','123456.jpg','baidu.com','file50m')// => void
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
<a name="getNull"></a>

## getNull() ⇒ <code>null</code>
<p>获得null</p>

**Kind**: global function  
**Example**  
```js
getNull()// => null
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
<a name="getSearch"></a>

## getSearch(params) ⇒ <code>string</code>
<p>传入参数对象，返回search结构的字符串</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| params | <code>StringObject</code> | 

**Example**  
```js
getSearch()// => ''
```
**Example**  
```js
getSearch('string')// => ''
```
**Example**  
```js
getSearch({})// => ''
```
**Example**  
```js
getSearch({name:'kangkang',age:12})// => '?name=kangkang&age=12'
```
**Example**  
```js
getSearch({name:null,age:12})// => '?age=12'
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
<a name="getTopRoot"></a>

## getTopRoot() ⇒ <code>HTMLElement</code>
<p>顶层窗口引用挂载节点</p>

**Kind**: global function  
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
如果目标值为 null|undefined 则返回 defaultValue</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| target | <code>any</code> | 
| paths | <code>any</code> | 
| defaultValue? | <code>any</code> | 

**Example**  
```js
getValue(undefined,'name', null)// => null
```
**Example**  
```js
getValue(null,'name')// => undefined
```
**Example**  
```js
getValue({age:12},'name','zhangsan')// => 'zhangsan'
```
**Example**  
```js
getValue({age:12},'name')// => undefined
```
**Example**  
```js
getValue({age:12},'age',null)// => 12
```
**Example**  
```js
getValue({size:null},'size','12')// => '12'
```
**Example**  
```js
getValue({size:undefined},'size','12')// => '12'
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
<a name="hash"></a>

## hash(params) ⇒ <code>string</code>
<p>传入参数对象，返回类hash字符串</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| params | <code>StringObject</code> | 

**Example**  
```js
hash()// => 'TPCvZq'
```
**Example**  
```js
hash({len:3})// => 'fTb'
```
**Example**  
```js
hash({chars:['A','B','C']})// => 'CBBBBA'
```
**Example**  
```js
hash({chars:['A','B','C'],len:12})// => 'CABABBABBCBA'
```
<a name="isArray"></a>

## isArray(testData) ⇒ <code>boolean</code>
<p>校验 是不是数组，解决 @types/lodash.d 中 重载被弃用</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| testData | <code>any</code> | 

**Example**  
```js
isArray(null);// => false
```
**Example**  
```js
isArray([null]);// => true
```
**Example**  
```js
isArray<T>(array): array is T[];// => true// 注意，此处并未做T的类型校验，仅作类型保护
```
<a name="isArrayNumber"></a>

## isArrayNumber(testArr) ⇒ <code>boolean</code>
<p>判定 是否是 数字 组成的数组</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| testArr | <code>any</code> | 

**Example**  
```js
isArrayNumber([2,1])// => true
```
**Example**  
```js
isArrayNumber(['ssss',2])// => false
```
**Example**  
```js
isArrayNumber(1)// => false
```
**Example**  
```js
isArrayNumber([])// => true
```
<a name="isArrayString"></a>

## isArrayString(testArr) ⇒ <code>boolean</code>
<p>判定 是否是 字符串 组成的数组</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| testArr | <code>any</code> | 

**Example**  
```js
isArrayString(['ssss','sssz'])// => true
```
**Example**  
```js
isArrayString(['ssss',2])// => false
```
**Example**  
```js
isArrayString(1)// => false
```
**Example**  
```js
isArrayString([])// => true
```
<a name="isBoolean"></a>

## isBoolean(testData) ⇒ <code>boolean</code>
<p>判断是否是 布尔类型</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| testData | <code>any</code> | <p>待判断的数据</p> |

**Example**  
```js
isBoolean(1)// => false
```
**Example**  
```js
isBoolean(true)// => true
```
**Example**  
```js
isBoolean(false)// => false
```
<a name="isEmpty"></a>

## isEmpty(val) ⇒ <code>boolean</code>
<p>判定 是否为空</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| val | <code>any</code> | 

**Example**  
```js
isEmpty(undefined)// => true
```
**Example**  
```js
isEmpty(null)// => true
```
**Example**  
```js
isEmpty([])// => true
```
**Example**  
```js
isEmpty({})// => true
```
**Example**  
```js
isEmpty('')// => true
```
**Example**  
```js
isEmpty(NaN)// => true
```
**Example**  
```js
isEmpty(new Map())// => true
```
**Example**  
```js
isEmpty(new Set())// => true
```
**Example**  
```js
isEmpty(0)// => false
```
<a name="isIE"></a>

## isIE() ⇒ <code>void</code>
<p>判定当前浏览器是否是IE浏览器</p>

**Kind**: global function  
**Example**  
```js
isIE()// => false
```
<a name="isNonEmptyStr"></a>

## isNonEmptyStr(str) ⇒ <code>boolean</code>
<p>判定是不是非空的字符串</p>

**Kind**: global function  

| Param |
| --- |
| str | 

**Example**  
```js
isNonEmptyStr(3)// => false
```
**Example**  
```js
isNonEmptyStr()// => false
```
**Example**  
```js
isNonEmptyStr('')// => false
```
**Example**  
```js
isNonEmptyStr('3')// => true
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
<a name="loopCall"></a>

## loopCall(times, cb) ⇒ <code>void</code>
<p>循环调用数次，func</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| times | <code>number</code> | <p>循环调用的次数，如果小于1则一次都不会调用</p> |
| cb | [<code>callback</code>](#callback) | <p>执行调用的回调函数</p> |

**Example**  
```js
loopCall(2,(count)=>{console.log(count)})// 1// 2
```
**Example**  
```js
loopCall(1,(count)=>{console.log(count);return count === 1})// 1
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
<a name="nullArr"></a>

## nullArr(len?) ⇒ <code>Array.&lt;Null&gt;</code>
<p>生成一定长度的，每个子项均为null的数组</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| len? | <code>number</code> | <p>生成的数组的长度</p> |

**Example**  
```js
nullArr()// => []
```
**Example**  
```js
nullArr(2)// => [null,null]
```
**Example**  
```js
nullArr(-1)// => []
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
<a name="parseJSON"></a>

## parseJSON(json, defaultValue?) ⇒ <code>any</code>
<p>安全解析JSON</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | <p>待解析JSON字符串</p> |
| defaultValue? | <code>any</code> | <p>解析失败的默认值 可不传</p> |

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
<a name="parseSearch"></a>

## parseSearch(searchStr) ⇒ <code>StringObject</code>
<p>解析 search</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| searchStr | <code>string</code> | 

**Example**  
```js
parseSearch()// => {}
```
**Example**  
```js
parseSearch('')// => {}
```
**Example**  
```js
parseSearch('?name=kangkang&age=12')// => {name: "kangkang", age: "12"}
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
<a name="trimObjValue"></a>

## trimObjValue(obj) ⇒ <code>StringObject</code>
<p>移除对象值为string的前后空格，值不是string不作处理</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>StringObject</code> | 

**Example**  
```js
trimObjValue({name:'kk ',age:12})// => {name:'kk',age:12}
```
<a name="validHandle"></a>

## validHandle(target, validHandle, inValidHandle, [isValid]) ⇒ <code>any</code>
<p>值有效无效（满足条件与否）的处理</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>any</code> | <p>待判定的值</p> |
| validHandle | <code>ValueHandle</code> | <p>判定有效时调用的 函数|函数[]</p> |
| inValidHandle | <code>ValueHandle</code> | <p>判定无效时调用的 函数|函数[]</p> |
| [isValid] | <code>function</code> | <p>是否有效 的判定函数，=&gt; true 有效 ，=&gt; false 无效</p> |

**Example**  
```js
import {toString,isArray,reduce} from lodash;validHandle([1,2,3], [val => reduce(val, (sum,val) => (sum + val), 0), toString], ()=> '0', isArray);// => '6'validHandle('string', [val => reduce(val, (sum,val) => (sum + val), 0), toString], ()=> '0', isArray);// => '0'
```
<a name="validObjValue"></a>

## validObjValue(obj) ⇒ <code>Object</code>
<p>清理掉对象值为null或者undefined的属性</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

**Example**  
```js
validObjValue({name:null,age:12})// => {age:12}
```
<a name="callback"></a>

## callback ⇒ <code>any</code>
<p>回调函数</p>

**Kind**: global typedef  
**Returns**: <code>any</code> - <ul>
<li>若返回 true 则执行 break，不再循环</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | <p>当前是第几次</p> |

