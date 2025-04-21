# `shadowsocks.sh` Client Script

This section explains how the `shadowsocks.sh` client script works.

`shadowsocks.sh` is a script that is responsible for expanding the variables and generating the Hysteria 2 client URL file at [`proxy/shadowsocks/client`](../../../proxy/shadowsocks/client).

## Used by

List of the files and commands this file is used by:

- [`build`](../../../build) (via [`scripts/client.sh`](../../client-sh))
- [`scripts/client.sh`](../../client-sh)

## Depends on 

List of the files this file depends on:

- [`.env`](../../../environment) (for configuration file generation)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source .env

cat > ./proxy/shadowsocks/client <<EOF
ss://$(echo -n chacha20-ietf-poly1305:$PASSWORD | base64 -w 0)@$DOMAIN:453?&tfo=1
EOF
```