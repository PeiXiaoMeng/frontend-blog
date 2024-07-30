import{_ as n,c as s,o as a,V as p}from"./chunks/framework.DIPPIwJv.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Utils/typeof.md","filePath":"Utils/typeof.md"}'),l={name:"Utils/typeof.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * typeOf 获取数据类型的字符串</span></span>
<span class="line"><span> * @param data </span></span>
<span class="line"><span> * @returns &#39;String&#39; | &#39;Boolean&#39; | &#39;Object&#39; | &#39;Undefined&#39; | &#39;Null&#39; | &#39;Date&#39; | &#39;Function&#39; | &#39;Array&#39; | &#39;Number&#39; | &#39;Sysmbol&#39;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const typeOf = (data: any) =&gt; Object.prototype.toString.call(data).slice(8, -1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isString </span></span>
<span class="line"><span> * @description 判断是否是字符串</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isString = (val: any) =&gt; typeOf(val) === &#39;String&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isBoolean</span></span>
<span class="line"><span> * @description 判断是否是布尔值</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isBoolean = (val: any) =&gt; typeOf(val) === &#39;Boolean&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isNumber </span></span>
<span class="line"><span> * @description 判断是否是数字</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isNumber = (val: any) =&gt; typeOf(val) === &#39;Number&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isObject </span></span>
<span class="line"><span> * @description 判断是否是对象</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isObject = (val: any) =&gt; typeOf(val) === &#39;Object&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isArray</span></span>
<span class="line"><span> * @description 判断是否是数组</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isArray = (val: any) =&gt; typeOf(val) === &#39;Array&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isUndefined</span></span>
<span class="line"><span> * @description 判断是否是undefined</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isUndefined = (val: any) =&gt; typeOf(val) === &#39;Undefined&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isNull</span></span>
<span class="line"><span> * @description 判断是否是null</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isNull = (val: any) =&gt; typeOf(val) === &#39;Null&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isFunction</span></span>
<span class="line"><span> * @description 判断是否是函数</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isFunction = (val: any) =&gt; typeOf(val) === &#39;Function&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isDate</span></span>
<span class="line"><span> * @description 判断是否是日期</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns Boolean true | false</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isDate = (val: any) =&gt; typeOf(val) === &#39;Date&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isSymbol</span></span>
<span class="line"><span> * @description 判断是否是Symbol</span></span>
<span class="line"><span> * @param val </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isSymbol = (val: any) =&gt; typeOf(val) === &#39;Symbol&#39;;</span></span></code></pre></div>`,1),i=[e];function c(t,o,r,d,u,y){return a(),s("div",null,i)}const m=n(l,[["render",c]]);export{v as __pageData,m as default};
