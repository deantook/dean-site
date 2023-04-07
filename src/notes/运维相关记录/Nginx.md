---
title: Nginx 的安装
tag:
    - 运维
    - Nginx
---
# Nginx 的安装

```
yum install -y git gcc pcre pcre-devel zlib zlib-devel flex bison

cd /usr/local/src
wget https://nginx.org/download/nginx-1.21.1.tar.gz
tar -zxf nginx-1.21.1.tar.gz

cd /usr/local/src/nginx-1.21.1

./configure --prefix=/usr/local/nginx

make && make install

cd /usr/local/nginx/sbin

./nginx
```

