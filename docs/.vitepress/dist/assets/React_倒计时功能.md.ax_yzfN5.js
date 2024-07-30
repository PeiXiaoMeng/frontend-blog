import{_ as n,c as s,o as a,V as p}from"./chunks/framework.Bc5RvaJQ.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"React/倒计时功能.md","filePath":"React/倒计时功能.md"}'),e={name:"React/倒计时功能.md"},l=p(`<h3 id="实现一个倒计时抢券组件-页面加载时从-10s-开始倒计时-倒计时结束之后点击按钮请求接口进行抢券-同时更新文案" tabindex="-1">实现一个倒计时抢券组件，页面加载时从 10s 开始倒计时，倒计时结束之后点击按钮请求接口进行抢券，同时更新文案 <a class="header-anchor" href="#实现一个倒计时抢券组件-页面加载时从-10s-开始倒计时-倒计时结束之后点击按钮请求接口进行抢券-同时更新文案" aria-label="Permalink to &quot;实现一个倒计时抢券组件，页面加载时从 10s 开始倒计时，倒计时结束之后点击按钮请求接口进行抢券，同时更新文案&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { useEffect, useState } from &quot;react&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Props = {</span></span>
<span class="line"><span>  countDownTime?: number // 倒计时时间</span></span>
<span class="line"><span>  countDownFunc?: any // 倒计时回掉</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const CountDown = ({</span></span>
<span class="line"><span>  countDownTime,</span></span>
<span class="line"><span>  countDownFunc,</span></span>
<span class="line"><span>}: Props) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const [countTime, setCountTime] = useState(countDownTime || 10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    let timer: NodeJS.Timer | null = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (countTime &gt; 0) {</span></span>
<span class="line"><span>      timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>        setCountTime(countTime =&gt; countTime - 1)</span></span>
<span class="line"><span>      }, 1000)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (countTime === 0) {</span></span>
<span class="line"><span>      countDownFunc &amp;&amp; countDownFunc()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      timer &amp;&amp; clearInterval(timer)</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }, [countTime])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const handleCoupon = () =&gt; {</span></span>
<span class="line"><span>    if (countTime) {</span></span>
<span class="line"><span>      alert(&#39;抢券活动还未开始&#39;)</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    alert(&#39;抢券成功&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const description: string  =  countTime ?  \`\${countTime}秒后可抢券\` : &#39;开始抢券&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;div&gt;</span></span>
<span class="line"><span>    &lt;span&gt;{description}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;button onClick={() =&gt; handleCoupon()}&gt;抢券&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default CountDown</span></span></code></pre></div>`,2),t=[l];function c(i,o,r,u,m,d){return a(),s("div",null,t)}const T=n(e,[["render",c]]);export{g as __pageData,T as default};
