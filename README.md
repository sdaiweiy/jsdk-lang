## 项目简介

JSDK的初衷是设计一整套统一的JS API的规范体系，通过提供统一的方法接口，可以适配各种第三方库的调用。

初期规划包括：Lang(语言包),Utils(工具包),Dom(Dom工具包),Collection(集合包),Net(网络包),UI(UI 组件包),Widget(常见页面模板包)等等。
初期规划的基础包由自己实现，后续规划的Charts(图表包),Map(地图包)等都是以统一的API的调用方式去逐一适配主流的库。


主要是由以下原因，促使作者着手于进行JSDK的开发：
- 可以实现作者想法的JS库有很多，但都较为零散，并且各种库的使用方式和风格又不太统一，如果可以提供统一的API调用则会大大降低使用成本。
- JQuery或者Lodash之类的工具库，太过于精简。面向业务开发的过程中会有很多通用方法也可以囊括进去。（基于此类库进行开发也是一种选择）
- 作者曾经写过一套UI框架，但一直不成体系，想借此机会重新将原有的UI框架重构与整合。
- 未来如果有可能笔者更希望JSDK 是一套API的规范体系，针对不同相同功能使用方式不同的库进行一个抽象。比如提供JSDK-Map的API,保证相同的调用方式，根据不同的配置可以无缝集成百度地图、腾讯地图等等。

## JSDK-Lang

JSDK-Lang是整个JSDK体系中基础语言包。主要是对原生JS的方法的二次封装和扩展，使开发者不需要考虑部分方法在不同浏览器下的兼容问题。
同时在尽量保证使用一致性的前提下，增加了作者认为原生JS方法中不足的工具类。

比如之前的写法是"abc".substr(...),现在的写法是IString.substr("abc",...)。
这样的好处是代码可读性增强，不会出现类似因为原生方法不足导致部分代码是原生的写法，部分代码是第三方库的写法。

## 模块说明

| 模块名 |  描述 |
|---------|-------------|
| IArray | 扩展原生数组操作对应的工具类 |
| IBoolean | 扩展原生Bollean操作对应的工具类,比如类型判定，对象转boolean等 |
| IDate | 扩展原生Date操作对应的工具类,常用的了Format和parse的函数都包括在内 |
| IFunction | 提供函数柯里化、延迟、空函数、函数节流、bind等工具函数 |
| INumber | 扩展原生数值操作对应的工具类 |
| IObject | 包括对undefined等类型判定、循环、equals、extend、序列化、反序列化等工具方法 |
| IString | 扩展原生字符串操作的工具类 |
| IStringEscape | 包括对字符串的各种转义、编码的工具类 |


## 使用方法

（未来会加上自定义打包的功能）
- 通过下载dist目录下的jsdk.lang.es3.js/jsdk.lang.es5.js(ES3和ES5分别对应支持ECMA3和ECMA5的浏览器)，以src的方式引入项目中
```javascript
console.log(IArray.isArray([])); // -> true
```
- 如果是基于Node的开发用户
```bash
  npm i jsdk-lang --save
```

```javascript
import IArray from "../src/IArray";
console.log(IArray.isArray([])); // -> true
```
## 帮助文档
因为github比较卡，因此将文档放到了国内的码云上
点击[帮助文档](http://wdai.gitee.io/jsdk-lang)查看。
