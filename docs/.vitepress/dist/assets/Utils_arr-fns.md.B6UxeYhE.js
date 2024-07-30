import{_ as s,c as n,o as a,V as p}from"./chunks/framework.DIPPIwJv.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Utils/arr-fns.md","filePath":"Utils/arr-fns.md"}'),e={name:"Utils/arr-fns.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * range</span></span>
<span class="line"><span> * @description 生成数字范围数组</span></span>
<span class="line"><span> * @param start 起始值</span></span>
<span class="line"><span> * @param end 结束值</span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const range = (start: number = 0, end: number = 0) =&gt; {</span></span>
<span class="line"><span>  return Array.from({ length: end - start + 1 }).map((v, i) =&gt; i + start);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * flat</span></span>
<span class="line"><span> * @description 扁平化二维数组</span></span>
<span class="line"><span> * @param arr </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const flat = (arr: any[]) =&gt; {</span></span>
<span class="line"><span>  return Array.prototype.concat(...arr);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),l=[t];function r(c,i,o,_,d,m){return a(),n("div",null,l)}const h=s(e,[["render",r]]);export{f as __pageData,h as default};
