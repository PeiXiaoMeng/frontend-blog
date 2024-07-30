import{_ as s,c as n,o as a,V as p}from"./chunks/framework.Bc5RvaJQ.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Leetcode/code1.md","filePath":"Leetcode/code1.md"}'),e={name:"Leetcode/code1.md"},l=p(`<h3 id="提供了一个数组结构的-data-要求实现一个-query-方法-返回一个新的数组-query-方法内部有-过滤、排序、分组等操作-并且支持链式调用-调用最终的-execute-方法返回结果" tabindex="-1">提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组等操作，并且支持链式调用，调用最终的 execute 方法返回结果 <a class="header-anchor" href="#提供了一个数组结构的-data-要求实现一个-query-方法-返回一个新的数组-query-方法内部有-过滤、排序、分组等操作-并且支持链式调用-调用最终的-execute-方法返回结果" aria-label="Permalink to &quot;提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组等操作，并且支持链式调用，调用最终的 execute 方法返回结果&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Query&lt;T&gt; {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  result: T[] | Map&lt;any, T[]&gt; = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(list: T[]) {</span></span>
<span class="line"><span>    this.result = list;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  filter(condition: (item: T) =&gt; boolean) {</span></span>
<span class="line"><span>    if (Array.isArray(this.result)) {</span></span>
<span class="line"><span>      this.result = this.result.filter(condition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sort(condition: (a: T, b: T) =&gt; number) {</span></span>
<span class="line"><span>    if (Array.isArray(this.result)) {</span></span>
<span class="line"><span>      this.result = this.result.sort(condition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  groupBy(key: keyof T) {</span></span>
<span class="line"><span>    if (Array.isArray(this.result)) {</span></span>
<span class="line"><span>      const groups: any = new Map();</span></span>
<span class="line"><span>      this.result.forEach((item: T) =&gt; {</span></span>
<span class="line"><span>        const group = item[key];</span></span>
<span class="line"><span>        if (groups.has(group)) {</span></span>
<span class="line"><span>          groups.get(group).push(item);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          groups.set(group, [item]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      this.result = groups;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  execute(): Map&lt;any, T[]&gt;  | T[] {</span></span>
<span class="line"><span>    return this.result;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const query = &lt;T&gt;(data: T[] | undefined) =&gt; new Query&lt;T&gt;(data || [])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const a = query([{ age: 35, gender: &#39;male&#39; }, { age: 25, gender: &#39;female&#39; }, { age: 40, gender: &#39;male&#39; }])</span></span>
<span class="line"><span>//   .filter((x: any) =&gt; x.age &gt; 30)</span></span>
<span class="line"><span>//   .sort((a: any, b: any) =&gt; a.age - b.age)</span></span>
<span class="line"><span>//   .groupBy(&#39;gender&#39;)</span></span>
<span class="line"><span>//   .execute()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// console.log(a)</span></span></code></pre></div>`,2),t=[l];function i(c,r,o,u,d,g){return a(),n("div",null,t)}const _=s(e,[["render",i]]);export{y as __pageData,_ as default};
