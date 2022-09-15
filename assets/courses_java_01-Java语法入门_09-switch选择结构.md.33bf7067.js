import{_ as t}from"./chunks/ArticleMetadata.423e399f.js";import{_ as y,c as D,g as i,w as F,b as o,f as C,a as A,i as d,o as e,e as B,n as b}from"./app.07baa46e.js";const u="/assets/202010071310906.b93e784e.png",E="/assets/202010071312989.9494b733.png",m="/assets/202010071315171.df6ca894.png",x=JSON.parse('{"title":"switch\u9009\u62E9\u7ED3\u6784","description":"","frontmatter":{"title":"switch\u9009\u62E9\u7ED3\u6784","author":"\u67E5\u5C14\u65AF","date":"2020/10/07 15:30","categories":["Java\u57FA\u7840\u5FEB\u901F\u5165\u95E8"],"tags":["Java","Java\u57FA\u7840"]},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"Why\uFF1F","slug":"why\uFF1F","link":"#why\uFF1F","children":[]},{"level":2,"title":"\u4F7F\u7528\u6CE8\u610F","slug":"\u4F7F\u7528\u6CE8\u610F","link":"#\u4F7F\u7528\u6CE8\u610F","children":[]},{"level":2,"title":"switch\u548Cif\u7684\u5BF9\u6BD4","slug":"switch\u548Cif\u7684\u5BF9\u6BD4","link":"#switch\u548Cif\u7684\u5BF9\u6BD4","children":[]},{"level":2,"title":"\u540E\u8BB0","slug":"\u540E\u8BB0","link":"#\u540E\u8BB0","children":[]}],"relativePath":"courses/java/01-Java\u8BED\u6CD5\u5165\u95E8/09-switch\u9009\u62E9\u7ED3\u6784.md","lastUpdated":1663244315000}'),h={name:"courses/java/01-Java\u8BED\u6CD5\u5165\u95E8/09-switch\u9009\u62E9\u7ED3\u6784.md"},v=o("h1",{id:"switch\u9009\u62E9\u7ED3\u6784",tabindex:"-1"},[C("switch\u9009\u62E9\u7ED3\u6784 "),o("a",{class:"header-anchor",href:"#switch\u9009\u62E9\u7ED3\u6784","aria-hidden":"true"},"#")],-1),f=A('<h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p><strong>C\uFF1A</strong> \u4E0A\u4E00\u7BC7\u6211\u4EEC\u4ECB\u7ECD\u4E86 if \u7CFB\u5217\u7684\u9009\u62E9\u7ED3\u6784\u8BED\u6CD5\uFF0C\u6574\u4F53\u611F\u53D7\u5E94\u8BE5\u662F\u7B80\u5355\u6613\u61C2\u4E14\u6613\u5199\u7684\u3002\u672C\u7BC7\u7B14\u8005\u518D\u4ECB\u7ECD\u4E00\u79CD\u9009\u62E9\u7ED3\u6784\u8BED\u6CD5\uFF1Aswitch\uFF0C\u4F46\u6B64 switch \u975E\u5F7C switch\u3002</p><p><img src="'+u+`" alt="202010071310906"></p><h2 id="why\uFF1F" tabindex="-1">Why\uFF1F <a class="header-anchor" href="#why\uFF1F" aria-hidden="true">#</a></h2><p>\u6709\u4E86 if \uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u5B66\u4E60\u4F7F\u7528 switch \u9009\u62E9\u7ED3\u6784\u5462\uFF1F\u4E00\u8D77\u6765\u770B\u4E2A\u6848\u4F8B\u3002</p><p><strong>\u6848\u4F8B\u9700\u6C42\uFF1A\u5C0F\u6768\u53C2\u52A0\u4E86\u521B\u9020502\u8282\u76EE\u3002</strong></p><ul><li>\u5982\u679C\u83B7\u5F97\u7B2C\u4E00\u540D\uFF0C\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2</li><li>\u5982\u679C\u83B7\u5F97\u7B2C\u4E8C\u540D\uFF0C\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2</li><li>\u5982\u679C\u83B7\u5F97\u7B2C\u4E09\u540D\uFF0C\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2</li></ul><p>\u4ECE\u9700\u6C42\u4ECB\u7ECD\u4E2D\u53EF\u77E5\uFF0C\u6848\u4F8B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\u662F\u7B80\u5355\u7684\u7B49\u503C\u5224\u65AD\uFF0C\u4F46\u662F\u6761\u4EF6\u5F88\u591A\u800C\u4E14\u5F7C\u6B64\u90FD\u662F\u4E92\u65A5\u7684\uFF0C\u53EF\u4EE5\u91C7\u7528\u591A\u91CD if \u6765\u5B9E\u73B0\u3002</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#7F848E;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> score </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u4F7F\u7528\u591A\u91CDif</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (score </span><span style="color:#56B6C2;">==</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">} </span><span style="color:#C678DD;">else</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (score </span><span style="color:#56B6C2;">==</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">} </span><span style="color:#C678DD;">else</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (score </span><span style="color:#56B6C2;">==</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#676E95;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u591A\u91CDif</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F46\u76F8\u6BD4\u4E8E\u8303\u56F4\u5224\u65AD\uFF0C\u5728\u7B49\u503C\u5224\u65AD\u65F6\u4F7F\u7528 <code>\u591A\u91CDif</code> \u6709\u70B9\u5927\u6750\u5C0F\u7528\uFF0C\u5B9E\u8BDD\u5C31\u662F if \u591A\u4E86\u9605\u8BFB\u8D77\u6765\u771F\u633A\u8D39\u52B2\u7684\uFF0C\u6240\u4EE5\u7B14\u8005\u624D\u7ED9\u5927\u5BB6\u5B89\u5229 Java \u63D0\u4F9B\u7684\u53E6\u4E00\u4E2A\u9009\u62E9\u7ED3\u6784\u8BED\u53E5\uFF1A<code>switch\u9009\u62E9\u7ED3\u6784</code>\u3002</p><p>\u6211\u4EEC\u6765\u770B\u770B\u5B83\u7684\u8BED\u6CD5\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">switch</span><span style="color:#E06C75;"> (\u8868\u8FBE\u5F0F) {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> \u5E38\u91CF1</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        \u8BED\u53E5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> \u5E38\u91CF2</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        \u8BED\u53E5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#7F848E;">// ....</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">default:</span></span>
<span class="line"><span style="color:#E06C75;">        \u8BED\u53E5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> \u5E38\u91CF1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u8BED\u53E5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> \u5E38\u91CF2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u8BED\u53E5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// ....</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u8BED\u53E5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u518D\u5957\u7528\u5B83\u7684\u8BED\u6CD5\u6765\u89E3\u51B3\u4E00\u4E0B\u521A\u624D\u7684\u95EE\u9898\uFF0C\u662F\u4E0D\u662F\u53D1\u73B0\u6E05\u6670\u591A\u4E86\uFF1F</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#7F848E;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> score </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u4F7F\u7528switch</span></span>
<span class="line"><span style="color:#C678DD;">switch</span><span style="color:#E06C75;"> (score) {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">3</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#676E95;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528switch</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4F7F\u7528\u6CE8\u610F" tabindex="-1">\u4F7F\u7528\u6CE8\u610F <a class="header-anchor" href="#\u4F7F\u7528\u6CE8\u610F" aria-hidden="true">#</a></h2><ol><li><p>\u5728\u6EE1\u8DB3\u7B49\u503C\u5224\u65AD\u7684\u524D\u63D0\u4E0B\uFF0C\u624D\u53EF\u4EE5\u4F7F\u7528 <code>switch</code> \u6765\u8FDB\u884C\u5224\u65AD\uFF0C\u4E0D\u53EF\u7528\u4E8E\u8303\u56F4\u578B\u5224\u65AD\u3002</p></li><li><p>\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u8981\u6C42\uFF0C\u5FC5\u987B\u7ED9\u6BCF\u4E00\u4E2A <code>case</code> \u540E\u8FFD\u52A0 <code>break</code>\u3002</p><p><code>break</code> \u662F\u8868\u793A\u7ED3\u675F\u67D0\u4E2A <code>case</code>\uFF0C\u5982\u679C\u6CA1\u6709 <code>break</code>\uFF0C\u4F1A\u51FA\u73B0 <code>case</code> \u7684\u7A7F\u900F\u6027\uFF0C\u5373\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u76F4\u5230\u9047\u5230\u4E0B\u4E00\u4E2A <code>break</code> \u7ED3\u675F\uFF01</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#7F848E;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> score </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// \u4F7F\u7528switch</span></span>
<span class="line"><span style="color:#C678DD;">switch</span><span style="color:#E06C75;">(score){</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">case</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">3</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#676E95;">// \u5B58\u50A8\u540D\u6B21</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528switch</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6C38\u591C\u300B\u5973\u4E3B\u89D2\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0A\u65B9\u7684\u4EE3\u7801\uFF0C\u5982\u679C <code>case 1</code> \u540E\u7F3A\u5C11\u4E00\u4E2A <code>break</code>\uFF0C\u90A3\u4E48\u8F93\u51FA\u7ED3\u679C\u662F\u5C06\u4F1A\u662F\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01</span></span>
<span class="line"><span style="color:#abb2bf;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u8BDB\u4ED9\u300B\u5973\u4E3B\u89D2\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C0F\u6768\u5C06\u4F1A\u62C5\u4EFB\u300A\u6597\u7F57\u5927\u9646\u300B\u5973\u4E3B\u89D2\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u5EFA\u8BAE\u52A0\u4E0A\u4E00\u4E2A <code>default</code> \u6765\u8FDB\u884C\u9ED8\u8BA4\u5904\u7406\u3002</p></li><li><p><code>switch</code> \u7684\u8868\u8FBE\u5F0F\u652F\u6301\u7684\u7C7B\u578B\u6709\uFF1A<code>int</code>\u3001( <code>short</code>\u3001 <code>byte</code>\u3001<code>char</code> \u53EF\u4EE5\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u4E3A <code>int</code>)\uFF0C<code>\u679A\u4E3E\u7C7B\u578B(Enum)</code> \u3001<code>String</code>\uFF08\u81EAJDK1.7\u5F00\u59CB\uFF0C<code>switch</code> \u652F\u6301\u4E86\u5B57\u7B26\u4E32\u7684\u7B49\u503C\u5224\u65AD\uFF0C\u53C2\u8003<a href="https://docs.oracle.com/javase/7/docs/technotes/guides/language/strings-switch.html" target="_blank" rel="noreferrer">Oracle Java7 RELEASE\u4ECB\u7ECD</a>\uFF09\u3002</p><p><img src="`+E+'" alt="202010071312989"></p><p><img src="'+m+'" alt="202010071315171"></p></li></ol><h2 id="switch\u548Cif\u7684\u5BF9\u6BD4" tabindex="-1">switch\u548Cif\u7684\u5BF9\u6BD4 <a class="header-anchor" href="#switch\u548Cif\u7684\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p>\u5230\u6B64\u4E3A\u6B62\uFF0CJava \u4E2D\u7684\u9009\u62E9\u7ED3\u6784\u6211\u4EEC\u5C31\u5B66\u4E60\u5B8C\u4E86\uFF0C\u522B\u770B\u8BED\u6CD5\u633A\u591A\uFF0C\u8BBA\u6D3E\u7CFB\u7684\u8BDD\u53EA\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662F <code>if</code>\uFF0C\u4E00\u4E2A\u662F<code>switch</code>\uFF0C\u800C\u4E14 <code>switch</code> \u548C <code>\u591A\u91CDif</code> \u4E5F\u5F88\u76F8\u50CF\uFF0C\u7406\u89E3\u8D77\u6765\u4E5F\u6BD4\u8F83\u5BB9\u6613\u4E86\u3002</p><p><strong>\u76F8\u540C\u70B9\uFF1A</strong> \u90FD\u662F\u7528\u6765\u5904\u7406\u591A\u5206\u652F\u6761\u4EF6\u7684\u7ED3\u6784\u3002</p><p><strong>\u4E0D\u540C\u70B9\uFF1A</strong> <code>switch</code> \u53EA\u80FD\u5904\u7406\u7B49\u503C\u6761\u4EF6\u5224\u65AD\u7684\u60C5\u51B5\uFF0C<code>\u591A\u91CDif</code> \u9009\u62E9\u7ED3\u6784\u6CA1\u6709 <code>switch</code> \u9009\u62E9\u7ED3\u6784\u7684\u9650\u5236\uFF0C\u7279\u522B\u9002\u5408\u67D0\u4E2A\u53D8\u91CF\u5904\u4E8E\u67D0\u4E2A\u8FDE\u7EED\u533A\u95F4\u65F6\u7684\u60C5\u51B5\uFF08\u8303\u56F4\u578B\u5224\u65AD\uFF09\u3002</p><p><code>switch</code> \u4ECE\u6548\u7387\u65B9\u9762\u8003\u8651\uFF0C\u662F\u8981\u6BD4 <code>if</code> \u9009\u62E9\u7ED3\u6784\u6267\u884C\u5FEB\uFF08\u6709\u5174\u8DA3\u81EA\u5DF1\u767E\u5EA6\u4E0B\u6267\u884C\u539F\u7406\uFF09\uFF0C\u4F46\u662F\u968F\u7740\u786C\u4EF6\u7684\u53D1\u5C55\uFF0C\u8FD9\u4E24\u8005\u4E4B\u95F4\u7684\u6548\u7387\u5DEE\u8DDD\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u5176\u5B9E Java \u8FD1\u51E0\u7248\u672C\u4E00\u76F4\u5728\u5BF9 <code>switch</code> \u8FDB\u884C\u4F18\u5316\uFF0Cswitch \u7684\u4F7F\u7528\u4E5F\u66F4\u52A0\u73B0\u4EE3\uFF0C\u540E\u9762\u6709\u673A\u4F1A\u4F7F\u7528\u5176\u4ED6\u7248\u672C\uFF0C\u518D\u7ED9\u5927\u5BB6\u5F00\u5F00\u773C\u3002</p></div><h2 id="\u540E\u8BB0" tabindex="-1">\u540E\u8BB0 <a class="header-anchor" href="#\u540E\u8BB0" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u7ED3\u6784\u51FA\u73B0\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u73B0\u5B9E\u751F\u6D3B\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u6A21\u62DF\u5B9E\u73B0\u4E86\u3002\u8FD9\u4E9B\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5\u5C31\u50CF\u6C49\u8BED\u62FC\u97F3\u548C\u57FA\u672C\u6C49\u5B57\u4E00\u6837\u57FA\u7840\uFF0C\u597D\u597D\u8BB0\u5FC6\u4E0B\u8BED\u6CD5\u3002</p><p>\u628A\u6587\u7AE0\u6848\u4F8B\u5B9E\u73B0\u4E00\u4E0B\uFF0C\u5343\u4E07\u8981\u52A8\u624B\u5B9E\u73B0\uFF01\u56E0\u4E3A\u7406\u89E3\u548C\u719F\u7EC3\u638C\u63E1\u662F\u4E24\u56DE\u4E8B\uFF01\u5C31\u597D\u50CF\u4F60\u5728\u6296\u97F3\u4E0A\u770B\u4E86\u90A3\u4E48\u591A\u751F\u6D3B\u4E0A\u7684\u6559\u7A0B\uFF1A\u53E0\u8863\u670D\u3001\u5F39\u5409\u4ED6.....\uFF0C\u4F46\u4F60\u4ECE\u6CA1\u7EC3\u8FC7\uFF0C\u90A3\u6C38\u8FDC\u662F\u5B66\u4E0D\u4F1A\u7684\uFF0C\u5343\u4E07\u4E0D\u8981\u773C\u9AD8\u624B\u4F4E\u3002</p><div class="info custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u5BF9\u4E8E\u6280\u672F\u7684\u5B66\u4E60\uFF0C\u7B14\u8005\u4E00\u8D2F\u9075\u5FAA\u7684\u6B65\u9AA4\u662F\uFF1A\u5148\u7528\u6700\u6700\u7B80\u5355\u7684 demo \u8BA9\u5B83\u8DD1\u8D77\u6765\uFF0C\u7136\u540E\u5B66\u5B66\u5B83\u7684\u6700\u6700\u5E38\u7528 API \u548C \u914D\u7F6E\u8BA9\u81EA\u5DF1\u80FD\u7528\u8D77\u6765\uFF0C\u6700\u540E\u719F\u7EC3\u4F7F\u7528\u7684\u57FA\u7840\u4E0A\uFF0C\u5728\u7A7A\u95F2\u65F6\u5C1D\u8BD5\u9605\u8BFB\u5B83\u7684\u6E90\u7801\u8BA9\u81EA\u5DF1\u80FD\u591F\u6D1E\u5F7B\u5B83\u7684\u8FD0\u884C\u673A\u5236\uFF0C\u90E8\u5206\u95EE\u9898\u51FA\u73B0\u7684\u539F\u56E0\uFF0C\u540C\u65F6\u501F\u9274\u8FD9\u4E9B\u6280\u672F\u5B9E\u73B0\u6765\u63D0\u5347\u81EA\u5DF1\u7684\u4EE3\u7801\u9AD8\u5EA6\u3002</p><p>\u6240\u4EE5\u5728\u7B14\u8005\u7684\u6587\u7AE0\u4E2D\uFF0C\u524D\u671F\u57FA\u672C\u90FD\u662F\u5C0F\u767D\u6587\uFF0C\u4EC5\u4EC5\u7A7F\u63D2\u5F88\u5C11\u91CF\u7684\u6E90\u7801\u7814\u7A76\u3002\u5F53\u7136\u7B49\u5C0F\u767D\u6587\u66F4\u65B0\u591A\u4E86\uFF0C\u4F60\u4EEC\u8FD8\u4F9D\u7136\u559C\u6B22\uFF0C\u540E\u671F\u4F1A\u4E0D\u5B9A\u65F6\u4E13\u95E8\u5BF9\u90E8\u5206\u6280\u672F\u7684\u6E90\u7801\u8FDB\u884C\u89E3\u6790\u3002</p></div>',26);function w(s,g,_,k,q,S){const c=t,r=d("ClientOnly");return e(),D("div",null,[v,i(r,null,{default:F(()=>{var n,a,l,p;return[((a=(n=s.$frontmatter)==null?void 0:n.aside)!=null?a:!0)&&((p=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?p:!0)?(e(),B(c,{key:0,article:s.$frontmatter},null,8,["article"])):b("",!0)]}),_:1}),f])}const N=y(h,[["render",w]]);export{x as __pageData,N as default};
