## Functions

<dl>
<dt><a href="#add">add(augend, addend)</a> ⇒</dt>
<dd><p>加法</p></dd>
<dt><a href="#compared">compared(vala, valb)</a> ⇒</dt>
<dd><p>判定大小</p></dd>
<dt><a href="#currency">currency(money, [float])</a> ⇒</dt>
<dd></dd>
<dt><a href="#divide">divide(dividend, divisor)</a> ⇒</dt>
<dd><p>除法</p></dd>
<dt><a href="#fixed">fixed(handle, fixedNum)</a> ⇒</dt>
<dd><p>数字字符串 四舍五入</p></dd>
<dt><a href="#getSuffix">getSuffix(string)</a> ⇒</dt>
<dd><p>从文件名中提取后缀名</p></dd>
<dt><a href="#getTotalInResHeader">getTotalInResHeader(response, [defaultValue])</a> ⇒</dt>
<dd><p>从response headers 中取出x-total-count</p></dd>
<dt><a href="#getValue">getValue(target, paths, defaultValue?)</a> ⇒</dt>
<dd><p>安全取值，支持默认值
如果目标值为null|undefined 则返回 defaultValue 或者 undefined</p></dd>
<dt><a href="#gt">gt(vala, valb)</a> ⇒</dt>
<dd><p>大于</p></dd>
<dt><a href="#gte">gte(vala, valb)</a> ⇒</dt>
<dd><p>大于等于</p></dd>
<dt><a href="#isStrNum">isStrNum(testStr)</a> ⇒</dt>
<dd><p>判定字符串是不是 数字字符串 @like &#39;1234&#39;</p></dd>
<dt><a href="#isStrNumEqual">isStrNumEqual(value, other)</a> ⇒</dt>
<dd><p>判定两值相等</p></dd>
<dt><a href="#lt">lt(vala, valb)</a> ⇒</dt>
<dd><p>小于</p></dd>
<dt><a href="#lte">lte(vala, valb)</a> ⇒</dt>
<dd><p>小于等于</p></dd>
<dt><a href="#multiply">multiply(multiplier, multiplicand)</a> ⇒</dt>
<dd><p>乘法</p></dd>
<dt><a href="#pageNoToOffset">pageNoToOffset(pageNo, pageSize)</a> ⇒ <code>number</code></dt>
<dd><p>pageNo 转 offset
pageNo转索引值</p></dd>
<dt><a href="#parseJSONArr">parseJSONArr(jsonArr, [defaultValue])</a> ⇒</dt>
<dd><p>安全解析 JSON数组
如果解析结果不是数组则视为无效，返回defaultValue||[]</p></dd>
<dt><a href="#strMapToObj">strMapToObj(strMap)</a> ⇒</dt>
<dd><p>Map 转 Object</p></dd>
<dt><a href="#subtract">subtract(minuend, subtrahend)</a> ⇒</dt>
<dd><p>减法</p></dd>
<dt><a href="#useApiDownloadFile">useApiDownloadFile(path, name, [downloadGateWay])</a> ⇒</dt>
<dd><p>调用 后台api执行文件下载</p></dd>
</dl>

<a name="add"></a>

## add(augend, addend) ⇒
<p>加法</p>

**Kind**: global function  
**Returns**: <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| augend | <code>string</code> | <p>被加数</p> |
| addend | <code>string</code> | <p>加数</p> |

**Example**  
```js
add('1.1','1.8')// => '2.9'
```
<a name="compared"></a>

## compared(vala, valb) ⇒
<p>判定大小</p>

**Kind**: global function  
**Returns**: <p>-1 | 0 | 1 | NaN</p>  

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
<a name="currency"></a>

## currency(money, [float]) ⇒
**Kind**: global function  
**Returns**: <p>string</p>  

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

## divide(dividend, divisor) ⇒
<p>除法</p>

**Kind**: global function  
**Returns**: <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| dividend | <code>string</code> | <p>被除数</p> |
| divisor | <code>string</code> | <p>除数</p> |

**Example**  
```js
divide('1.21','1.1')// => '1.1'
```
<a name="fixed"></a>

## fixed(handle, fixedNum) ⇒
<p>数字字符串 四舍五入</p>

**Kind**: global function  
**Returns**: <p>string</p>  

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
<a name="getSuffix"></a>

## getSuffix(string) ⇒
<p>从文件名中提取后缀名</p>

**Kind**: global function  
**Returns**: <p>string | undefined</p>  

| Param | Description |
| --- | --- |
| string | <p>fileName - 文件名</p> |

**Example**  
```js
currency('helloWorld.svg')// => 'svg'
```
<a name="getTotalInResHeader"></a>

## getTotalInResHeader(response, [defaultValue]) ⇒
<p>从response headers 中取出x-total-count</p>

**Kind**: global function  
**Returns**: <p>number</p>  

| Param | Type | Default |
| --- | --- | --- |
| response | <code>any</code> |  | 
| [defaultValue] | <code>number</code> | <code>0</code> | 

<a name="getValue"></a>

## getValue(target, paths, defaultValue?) ⇒
<p>安全取值，支持默认值
如果目标值为null|undefined 则返回 defaultValue 或者 undefined</p>

**Kind**: global function  
**Returns**: <p>any</p>  

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

## gt(vala, valb) ⇒
<p>大于</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

<a name="gte"></a>

## gte(vala, valb) ⇒
<p>大于等于</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

<a name="isStrNum"></a>

## isStrNum(testStr) ⇒
<p>判定字符串是不是 数字字符串 @like '1234'</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type |
| --- | --- |
| testStr | <code>string</code> | 

<a name="isStrNumEqual"></a>

## isStrNumEqual(value, other) ⇒
<p>判定两值相等</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>比较值1</p> |
| other | <code>string</code> | <p>比较值2</p> |

**Example**  
```js
isStrNumEqual('1.1','1.10')// => true
```
<a name="lt"></a>

## lt(vala, valb) ⇒
<p>小于</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

<a name="lte"></a>

## lte(vala, valb) ⇒
<p>小于等于</p>

**Kind**: global function  
**Returns**: <p>boolean</p>  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

<a name="multiply"></a>

## multiply(multiplier, multiplicand) ⇒
<p>乘法</p>

**Kind**: global function  
**Returns**: <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>被乘数</p> |
| multiplicand | <code>string</code> | <p>乘数</p> |

**Example**  
```js
multiply('1.1','1.1')// => '1.21'
```
<a name="pageNoToOffset"></a>

## pageNoToOffset(pageNo, pageSize) ⇒ <code>number</code>
<p>pageNo 转 offset
pageNo转索引值</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>offset [0,?] 索引值 默认传回 0</p>  

| Param | Type | Description |
| --- | --- | --- |
| pageNo | <code>number</code> | <p>[1,?] 页码</p> |
| pageSize | <code>number</code> | <p>每页条数 可不传，默认为10</p> |

<a name="parseJSONArr"></a>

## parseJSONArr(jsonArr, [defaultValue]) ⇒
<p>安全解析 JSON数组
如果解析结果不是数组则视为无效，返回defaultValue||[]</p>

**Kind**: global function  
**Returns**: <p>any[]</p>  
**Author**: GM20171202  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| jsonArr | <code>string</code> |  | <p>待解析的JSON数组</p> |
| [defaultValue] | <code>Array.&lt;any&gt;</code> | <code>[]</code> | <p>解析失败的默认值</p> |

<a name="strMapToObj"></a>

## strMapToObj(strMap) ⇒
<p>Map 转 Object</p>

**Kind**: global function  
**Returns**: <p>object</p>  
**Author**: GM20171202  

| Param | Type | Description |
| --- | --- | --- |
| strMap | <code>Map.&lt;string, any&gt;</code> | <p>key string 的 Map</p> |

<a name="subtract"></a>

## subtract(minuend, subtrahend) ⇒
<p>减法</p>

**Kind**: global function  
**Returns**: <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| minuend | <code>string</code> | <p>被减数</p> |
| subtrahend | <code>string</code> | <p>减数</p> |

**Example**  
```js
subtract('2.9','1.1')// => '1.8'
```
<a name="useApiDownloadFile"></a>

## useApiDownloadFile(path, name, [downloadGateWay]) ⇒
<p>调用 后台api执行文件下载</p>

**Kind**: global function  
**Returns**: <p>void</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  |  |
| name | <code>string</code> |  |  |
| [downloadGateWay] | <code>string</code> | <code>&quot;toString(process.env.REACT_APP_API_DJC_GATEWAY)&quot;</code> | <p>如果不传入 则项目需配置 env REACT_APP_API_DJC_GATEWAY</p> |

