# `shadowsocks.sh` Server Script

This section explains how the `shadowsocks.sh` server script works.

`shadowsocks.sh` is a script that is responsible for expanding the variables and generating the ShadowSocks configuration file at [`proxy/shadowsocks/config.json`](../../../proxy/shadowsocks/config-json).

## Used by

List of the files and commands this file is used by:

- [`build`](../../../build) (via [`scripts/config.sh`](../../config-sh))
- [`scripts/config.sh`](../../config-sh)

## Depends on 

List of the files this file depends on:

- [`.env`](../../../environment) (for configuration file generation)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source .env

cat > ./proxy/shadowsocks/config.json <<EOF
{ 
  "server":"0.0.0.0", 
  "server_port":443, 
  "local_port":1080, 
  "password":"$PASSWORD", 
  "method":"chacha20-ietf-poly1305" 
}
EOF
```