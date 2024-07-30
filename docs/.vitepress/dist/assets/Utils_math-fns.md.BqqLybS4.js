import{_ as n,c as s,o as a,V as p}from"./chunks/framework.DIPPIwJv.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Utils/math-fns.md","filePath":"Utils/math-fns.md"}'),l={name:"Utils/math-fns.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 精确加法运算</span></span>
<span class="line"><span> * @param num1 </span></span>
<span class="line"><span> * @param num2 </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const add = (num1: number | string, num2: number | string) =&gt; {</span></span>
<span class="line"><span>  let r1: number, r2: number, m: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r1 = num1.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r1 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r2 = num2.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r2 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span>  return Math.round(Number(num1) * m + Number(num2) * m) / m;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 精确减法运算</span></span>
<span class="line"><span> * @param num1 </span></span>
<span class="line"><span> * @param num2 </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const sub = (num1: number | string, num2: number | string) =&gt; {</span></span>
<span class="line"><span>  let r1: number, r2: number, m: number, n: number;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r1 = num1.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r1 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r2 = num2.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r2 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span>  n = (r1 &gt;= r2) ? r1 : r2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return Number((Math.round(Number(num1) * m - Number(num2) * m) / m).toFixed(n));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 精确乘法运算</span></span>
<span class="line"><span> * @param num1 </span></span>
<span class="line"><span> * @param num2 </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const mul = (num1: number | string, num2: number | string) =&gt; {</span></span>
<span class="line"><span>  let m = 0, s1: string, s2: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    s1 = num1.toString();</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    s1 = &#39;&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    s2 = num2.toString();</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    s2 = &#39;&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  try { m += s1.split(&#39;.&#39;)[1].length; } catch (e) { }</span></span>
<span class="line"><span>  try { m += s2.split(&#39;.&#39;)[1].length; } catch (e) { }</span></span>
<span class="line"><span>  return Number(s1.replace(&#39;.&#39;, &#39;&#39;)) * Number(s2.replace(&#39;.&#39;, &#39;&#39;)) / Math.pow(10, m);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 精确除法运算</span></span>
<span class="line"><span> * @param num1 </span></span>
<span class="line"><span> * @param num2 </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const div = (num1: number | string, num2: number | string) =&gt; {</span></span>
<span class="line"><span>  let t1 = 0, t2 = 0, r1: number, r2: number;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    t1 = num1.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    t1 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    t2 = num2.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    t2 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r1 = Number(num1.toString().replace(&#39;.&#39;, &#39;&#39;));</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r1 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    r2 = Number(num2.toString().replace(&#39;.&#39;, &#39;&#39;));</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    r2 = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return mul((r1 / r2), Math.pow(10, t2 - t1));</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),c=[e];function i(t,r,m,u,o,h){return a(),s("div",null,c)}const d=n(l,[["render",i]]);export{b as __pageData,d as default};
