import{_ as s,c as n,o as a,V as p}from"./chunks/framework.DIPPIwJv.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Utils/obj-fns.md","filePath":"Utils/obj-fns.md"}'),e={name:"Utils/obj-fns.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { isObject } from &#39;../index&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * getCopyJson</span></span>
<span class="line"><span> * @description 获取一个经过反序列化和序列化的神拷贝对象</span></span>
<span class="line"><span> * @param obj </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const getCopyJson = &lt;T extends object&gt;(obj: T): T =&gt; JSON.parse(JSON.stringify(obj)) as T;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * isEqual</span></span>
<span class="line"><span> * @description 判断两个对象是否具有相同的值</span></span>
<span class="line"><span> * @param obj1 </span></span>
<span class="line"><span> * @param obj2 </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isEqual = &lt;T extends object&gt;(obj1: T, obj2: T): boolean =&gt; {</span></span>
<span class="line"><span>  if (obj1 === obj2) return true;</span></span>
<span class="line"><span>  if (typeof obj1 !== typeof obj2) return false;</span></span>
<span class="line"><span>  if (typeof obj1 === &#39;function&#39;) {</span></span>
<span class="line"><span>    throw new Error(&#39;无法比较方法和函数是否相同&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (obj1 !== null &amp;&amp; obj2 !== null) {</span></span>
<span class="line"><span>    const obj1Keys = Object.keys(obj1);</span></span>
<span class="line"><span>    if (obj1Keys.length !== Object.keys(obj2).length) {</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return obj1Keys.every(key =&gt; isEqual((obj1 as any)[key], (obj2 as any)[key]));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * at</span></span>
<span class="line"><span> * @description 获取对象内的属性</span></span>
<span class="line"><span> * @param 目标对象</span></span>
<span class="line"><span> * @param 属性路径</span></span>
<span class="line"><span> * @example</span></span>
<span class="line"><span> * at({ a: { b: { c: 0 }}}, &#39;a.b.c&#39;); // 1;</span></span>
<span class="line"><span> * at({ a: 0 }, &#39;a.b.c&#39;); // undefined;</span></span>
<span class="line"><span> * at(null, &#39;a.b.c&#39;); // null;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const at = (target: Object, path: string) =&gt; {</span></span>
<span class="line"><span>  if (target === undefined || target === null || typeof path !== &#39;string&#39;) { return target; }</span></span>
<span class="line"><span>  const keys = path.split(/[\\[\\]\\.&#39;&quot;]+/).filter(v =&gt; v);</span></span>
<span class="line"><span>  const iterator = keys[Symbol.iterator](); // 通过迭代器 &amp; 递归的方式获取最终结果</span></span>
<span class="line"><span>  const getVal: any = (obj: any) =&gt; {</span></span>
<span class="line"><span>    const { value, done } = iterator.next();</span></span>
<span class="line"><span>    if (done) {</span></span>
<span class="line"><span>      return obj;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      const v = obj[value];</span></span>
<span class="line"><span>      return typeof v === &#39;undefined&#39; ? undefined : getVal(v);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return getVal(target);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * deepAssign</span></span>
<span class="line"><span> * @description 深度assign</span></span>
<span class="line"><span> * @param objs (obj1, obj2...) 任意数量的对象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const deepAssign = &lt;T extends object&gt;(...objs: T[]): T =&gt; {  </span></span>
<span class="line"><span>  const result = {} as T; </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const assign = (obj1: any, obj2: any) =&gt; {  </span></span>
<span class="line"><span>    for (const key in obj2) {  </span></span>
<span class="line"><span>      if (obj2.hasOwnProperty(key)) {  </span></span>
<span class="line"><span>        const v1 = obj1[key];  </span></span>
<span class="line"><span>        const v2 = obj2[key];  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        if (  </span></span>
<span class="line"><span>          v1 !== null &amp;&amp;  </span></span>
<span class="line"><span>          typeof v1 === &#39;object&#39; &amp;&amp;  </span></span>
<span class="line"><span>          v2 !== null &amp;&amp;  </span></span>
<span class="line"><span>          typeof v2 === &#39;object&#39; &amp;&amp;  </span></span>
<span class="line"><span>          !(Array.isArray(v1) !== Array.isArray(v2))  </span></span>
<span class="line"><span>        ) {  </span></span>
<span class="line"><span>          if (!obj1.hasOwnProperty(key)) { // 如果 obj1 中没有该属性，则初始化它  </span></span>
<span class="line"><span>            obj1[key] = Array.isArray(v2) ? [] : {};  </span></span>
<span class="line"><span>          }  </span></span>
<span class="line"><span>          assign(obj1[key], v2);  </span></span>
<span class="line"><span>        } else {  </span></span>
<span class="line"><span>          obj1[key] = v2;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>      }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  };  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  objs.forEach(obj =&gt; assign(result, obj));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return result as T;  </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * removeEmptyProps</span></span>
<span class="line"><span> * @description 去除普通对象中的空值属性</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export function removeEmptyProps(obj: any): Record&lt;string, any&gt; {  </span></span>
<span class="line"><span>  if (!isObject(obj)) { return obj; }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return Object.keys(obj).reduce((acc, key) =&gt; {  </span></span>
<span class="line"><span>    const v = obj[key];  </span></span>
<span class="line"><span>    if (v !== undefined &amp;&amp; v !== null &amp;&amp; v !== &#39;&#39;) {  </span></span>
<span class="line"><span>      acc[key] = v;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return acc;  </span></span>
<span class="line"><span>  }, {} as Record&lt;string, any&gt;); // 显式指定累加器的类型  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),i=[l];function c(t,o,r,b,j,y){return a(),n("div",null,i)}const f=s(e,[["render",c]]);export{d as __pageData,f as default};
