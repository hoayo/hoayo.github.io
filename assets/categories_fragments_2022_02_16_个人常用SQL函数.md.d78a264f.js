import{_ as y}from"./chunks/ArticleMetadata.423e399f.js";import{_}from"./chunks/Badge.7d31f7d0.js";import{_ as m,c as A,b as o,g as p,w as u,f as r,a as h,i as C,o as t,e as B,n as D}from"./app.07baa46e.js";const I=JSON.parse('{"title":"\u4E2A\u4EBA\u5E38\u7528SQL\u51FD\u6570","description":"","frontmatter":{"title":"\u4E2A\u4EBA\u5E38\u7528SQL\u51FD\u6570","author":"\u67E5\u5C14\u65AF","date":"2022/02/16 15:43","isTop":true,"categories":["\u6742\u788E\u9006\u88AD\u53F2"],"tags":["SQL","SQL\u51FD\u6570"]},"headers":[{"level":2,"title":"\u65F6\u95F4\u51FD\u6570","slug":"\u65F6\u95F4\u51FD\u6570","link":"#\u65F6\u95F4\u51FD\u6570","children":[{"level":3,"title":"\u83B7\u53D6\u5F53\u524D\u65F6\u95F4(MySQL)","slug":"\u83B7\u53D6\u5F53\u524D\u65F6\u95F4-mysql","link":"#\u83B7\u53D6\u5F53\u524D\u65F6\u95F4-mysql","children":[]},{"level":3,"title":"\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2(MySQL)","slug":"\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2-mysql","link":"#\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2-mysql","children":[]},{"level":3,"title":"\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694(MySQL)","slug":"\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694-mysql","link":"#\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694-mysql","children":[]}]}],"relativePath":"categories/fragments/2022/02/16/\u4E2A\u4EBA\u5E38\u7528SQL\u51FD\u6570.md","lastUpdated":1663244315000}'),b={name:"categories/fragments/2022/02/16/\u4E2A\u4EBA\u5E38\u7528SQL\u51FD\u6570.md"},F={id:"\u4E2A\u4EBA\u5E38\u7528sql\u51FD\u6570",tabindex:"-1"},g=r("\u4E2A\u4EBA\u5E38\u7528SQL\u51FD\u6570 "),S=r(),v=o("a",{class:"header-anchor",href:"#\u4E2A\u4EBA\u5E38\u7528sql\u51FD\u6570","aria-hidden":"true"},"#",-1),M=h(`<h2 id="\u65F6\u95F4\u51FD\u6570" tabindex="-1">\u65F6\u95F4\u51FD\u6570 <a class="header-anchor" href="#\u65F6\u95F4\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="\u83B7\u53D6\u5F53\u524D\u65F6\u95F4-mysql" tabindex="-1">\u83B7\u53D6\u5F53\u524D\u65F6\u95F4(MySQL) <a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u65F6\u95F4-mysql" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;"># \u8F93\u51FA\u683C\u5F0F\u4E3A\uFF1Ayyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span style="color:#C678DD;">NOW</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;"># \u8F93\u51FA\u683C\u5F0F\u4E3A\uFF1Ayyyy</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">MM</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dd HH:mm:ss</span></span>
<span class="line"><span style="color:#F78C6C;">NOW</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2-mysql" tabindex="-1">\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2(MySQL) <a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u79D2-mysql" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;"># \u4ECE 1970\u5E741\u67081\u65E5 \u5F00\u59CB\u5230\u73B0\u5728\u7684\u79D2\u6570</span></span>
<span class="line"><span style="color:#ABB2BF;">UNIX_TIMESTAMP();</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;"># \u4ECE 1970\u5E741\u67081\u65E5 \u5F00\u59CB\u5230\u73B0\u5728\u7684\u79D2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">UNIX_TIMESTAMP</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694-mysql" tabindex="-1">\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694(MySQL) <a class="header-anchor" href="#\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u95F4\u9694-mysql" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;"># unit \u53EF\u9009\u4E3AFRAC_SECOND \u6BEB\u79D2\u3001SECOND \u79D2\u3001MINUTE \u5206\u949F\u3001HOUR \u5C0F\u65F6\u3001</span><span style="color:#56B6C2;">DAY</span><span style="color:#ABB2BF;"> \u5929\u3001WEEK \u661F\u671F\u3001</span><span style="color:#56B6C2;">MONTH</span><span style="color:#ABB2BF;"> \u6708\u3001QUARTER \u5B63\u5EA6\u3001</span><span style="color:#56B6C2;">YEAR</span><span style="color:#ABB2BF;"> \u5E74</span></span>
<span class="line"><span style="color:#ABB2BF;">TIMESTAMPDIFF(unit, datetime_expr1, datetime_expr2)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;"># unit \u53EF\u9009\u4E3AFRAC_SECOND \u6BEB\u79D2\u3001SECOND \u79D2\u3001MINUTE \u5206\u949F\u3001HOUR \u5C0F\u65F6\u3001</span><span style="color:#82AAFF;">DAY</span><span style="color:#A6ACCD;"> \u5929\u3001WEEK \u661F\u671F\u3001</span><span style="color:#82AAFF;">MONTH</span><span style="color:#A6ACCD;"> \u6708\u3001QUARTER \u5B63\u5EA6\u3001</span><span style="color:#82AAFF;">YEAR</span><span style="color:#A6ACCD;"> \u5E74</span></span>
<span class="line"><span style="color:#A6ACCD;">TIMESTAMPDIFF(unit, datetime_expr1, datetime_expr2)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,7);function T(s,f,q,E,N,Q){const c=_,i=y,d=C("ClientOnly");return t(),A("div",null,[o("h1",F,[g,p(c,{text:"\u6301\u7EED\u66F4\u65B0",type:"warning"}),S,v]),p(d,null,{default:u(()=>{var a,n,e,l;return[((n=(a=s.$frontmatter)==null?void 0:a.aside)!=null?n:!0)&&((l=(e=s.$frontmatter)==null?void 0:e.showArticleMetadata)!=null?l:!0)?(t(),B(i,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),M])}const k=m(b,[["render",T]]);export{I as __pageData,k as default};
