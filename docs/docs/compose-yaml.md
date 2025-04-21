# Docker Compose File

This section explains how the Docker Compose file `compose.yaml` works.

A `compose.yaml` (or `docker-compose.yaml`) file is a configuration file used by Docker Compose to define and run multi-container Docker applications. It specifies services, networks, and volumes needed for the app in a simple YAML format. Instead of running multiple docker run commands, you define everything in one place and use docker compose up.

## Used by

List of the files and commands this file is used by:

- [`build`](build)
- `docker compose up -d`
- `docker compose down`

## Depends on 

List of the files this file depends on:

- [`.env`](environment) (via [`scripts/config.sh`](scripts/config-sh))

## Variables

Table of variables this file utilizes:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$LOCALCERTPATH`     | Path to the `fullchain.pem` TLS certificate file on the host|
| `$LOCALPKEYPATH`  | Path to the `privkey.pem` TLS private key file on the host|
| `$CERTPATH`     | Path to the `fullchain.pem` TLS certificate file in the Docker Container|
| `$PKEYPATH`     | Path to the `privkey.pem` TLS private key file in the Docker Container|


## File Content

The file has the following content:

```yaml
networks:
  coffee:
    driver: bridge

services:
  hysteria2:
    image: tobyxdd/hysteria:v2
    container_name: hysteria2
    ports:
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./proxy/hysteria2/config.json:/root/proxy/hysteria2/config.json
      - ${LOCALCERTPATH}:${CERTPATH}
      - ${LOCALPKEYPATH}:${PKEYPATH}
    restart: unless-stopped
    command: server -c /root/proxy/hysteria2/config.json
    
  tuic:
    image: tinyserve/tuic:v1.1.2-fix1
    container_name: tuic
    ports:
      - "433:443"
      - "433:443/udp"
    volumes:
      - ./proxy/tuic/config.json:/etc/tuic/config.json
      - ${LOCALCERTPATH}:${CERTPATH}
      - ${LOCALPKEYPATH}:${PKEYPATH}
    restart: unless-stopped
    tty: true

  shadowsocks:
    image: shadowsocks/shadowsocks-libev:v3.3.5
    container_name: shadowsocks
    ports:
      - "453:443"
      - "453:443/udp"
    volumes:
      - ./proxy/shadowsocks/config.json:/etc/shadowsocks-libev/config.json
    restart: unless-stopped
    command: ss-server -c /etc/shadowsocks-libev/config.json

  trojan:
    image: trojangfw/trojan:latest
    container_name: trojan
    ports:
      - "463:443"
      - "463:443/udp"
    volumes:
      - ./proxy/trojan/config.json:/config/config.json
      - ${LOCALCERTPATH}:${CERTPATH}
      - ${LOCALPKEYPATH}:${PKEYPATH}
    restart: unless-stopped
    tty: true

  juicity:
    image: ghcr.io/juicity/juicity:v0.4.3
    container_name: juicity
    ports:
      - "473:443"
      - "473:443/udp"
    volumes:
      - ./proxy/juicity/config.json:/etc/juicity/server.json
      - ${LOCALCERTPATH}:${CERTPATH}
      - ${LOCALPKEYPATH}:${PKEYPATH}
    restart: unless-stopped
    tty: true
```