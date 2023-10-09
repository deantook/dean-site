import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-aa263ac8.js";const i={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span> gcc pcre pcre-devel zlib zlib-devel flex bison

<span class="token builtin class-name">cd</span> /usr/local/src
<span class="token function">wget</span> https://nginx.org/download/nginx-1.21.1.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxf</span> nginx-1.21.1.tar.gz

<span class="token builtin class-name">cd</span> /usr/local/src/nginx-1.21.1

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(r,o){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","Nginx.html.vue"]]);export{u as default};
