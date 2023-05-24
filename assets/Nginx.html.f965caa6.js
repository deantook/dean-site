import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,d as l}from"./app.cbc40f84.js";const s={},d=l(`<h1 id="nginx-的安装" tabindex="-1"><a class="header-anchor" href="#nginx-的安装" aria-hidden="true">#</a> Nginx 的安装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y git gcc pcre pcre-devel zlib zlib-devel flex bison

cd /usr/local/src
wget https://nginx.org/download/nginx-1.21.1.tar.gz
tar -zxf nginx-1.21.1.tar.gz

cd /usr/local/src/nginx-1.21.1

./configure --prefix=/usr/local/nginx

make &amp;&amp; make install

cd /usr/local/nginx/sbin

./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(c,t){return i(),e("div",null,a)}const m=n(s,[["render",r],["__file","Nginx.html.vue"]]);export{m as default};
