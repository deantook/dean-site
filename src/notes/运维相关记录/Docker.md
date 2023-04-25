---
title: Docker 的安装
tag: 
    - 运维
    - Docker
---
# Docker 的安装以及常用组件的部署

## Docker 的安装

### CentOS 安装 Docker

```bash
yum remove docker \
      docker-client \
      docker-client-latest \
      docker-common \
      docker-latest \
      docker-latest-logrotate \
      docker-logrotate \
      docker-engine
                  
yum install -y yum-utils

yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

systemctl start docker

mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://2j617oo7.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

## 组件的安装

### MySQL 的部署

```bash
# mysql 快速部署
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=dean123 mysql
```

### Redis 的部署

```bash
# redis 快速部署
docker run --name redis -p 6379:6379 -d --restart=always redis --appendonly yes --requirepass dean123
```

### Elastic 的部署

```bash
docker network create elastic
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.7.0
docker pull docker.elastic.co/kibana/kibana:8.7.0

# elasticsearch 快速部署
docker run --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 \
-e  "discovery.type=single-node" \
-e "xpack.security.enabled=false" \
-e ES_JAVA_OPTS="-Xms1024m -Xmx1024m" \
-it docker.elastic.co/elasticsearch/elasticsearch:8.7.0

# kibana 快速部署
docker run --name kibana --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.0

# 挂载文件
mkdir -p /data/docker/elasticsearch/config
mkdir -p /data/docker/elasticsearch/data
echo "http.host: 0.0.0.0" >/data/docker/elasticsearch/config/elasticsearch.yml
chmod -R 777 /data/docker/elasticsearch/

docker run --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 \
-e  "discovery.type=single-node" \
-e "xpack.security.enabled=false" \
-e ES_JAVA_OPTS="-Xms1024m -Xmx1024m" \
-v /data/docker/elasticsearch/data:/usr/share/elasticsearch/data \
-v /data/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-it docker.elastic.co/elasticsearch/elasticsearch:8.7.0
```

### Nacos 的部署

```bash
# nacos 快速部署
docker run -d --name nacos -p 8848:8848 -p 9848:9848 -p 9849:9849 -e PREFER_HOST_MODE=hostname -e MODE=standalone nacos/nacos-server
```

### Postgres 的部署

```bash
# postgres 快速部署
docker run -it --name postgres --restart always -e POSTGRES_PASSWORD='dean123' -p 5432:5432 -d postgres
```

